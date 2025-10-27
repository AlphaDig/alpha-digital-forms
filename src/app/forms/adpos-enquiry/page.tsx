"use client";

import { useState, useRef, useEffect } from "react";

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    telephone: "",
    email: "",
    interested: [] as string[],
    otherInterested: "",
    file: null as File | null,
    remark: "",
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isCaptchaReady, setIsCaptchaReady] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  // Set page title
  useEffect(() => {
    document.title = "Enquiry";
  }, []);

  // Simple reCAPTCHA implementation
  useEffect(() => {
    // Add global callback functions
    (window as any).onRecaptchaSuccess = (token: string) => {
      console.log("reCAPTCHA success:", token);
      setCaptchaToken(token);
    };

    (window as any).onRecaptchaExpired = () => {
      console.log("reCAPTCHA expired");
      setCaptchaToken(null);
    };

    (window as any).onRecaptchaError = () => {
      console.log("reCAPTCHA error");
      setCaptchaToken(null);
    };

    // Load reCAPTCHA script
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      console.log("reCAPTCHA script loaded");
      setIsCaptchaReady(true);
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup
      document.head.removeChild(script);
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitError(null);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      interested: checked
        ? [...prev.interested, value]
        : prev.interested.filter((item) => item !== value),
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        alert("File size must be less than 10MB");
        return;
      }
      setFormData((prev) => ({ ...prev, file }));
    }
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  // Camera functions
  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: "environment",
        },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
        setIsCameraActive(true);
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert("Unable to access camera. Please check permissions and try again.");
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
      setIsCameraActive(false);
    }
  };

  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);

        canvasRef.current.toBlob(
          (blob) => {
            if (blob) {
              const file = new File([blob], `photo-${Date.now()}.jpg`, {
                type: "image/jpeg",
              });
              setFormData((prev) => ({ ...prev, file }));
              stopCamera();
            }
          },
          "image/jpeg",
          0.8
        );
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Basic validation
      if (!formData.name.trim() || !formData.company.trim()) {
        throw new Error("Name and Company are required fields");
      }

      // Check if reCAPTCHA is completed
      if (!captchaToken) {
        throw new Error("Please complete the reCAPTCHA verification");
      }

      // Create FormData object
      const submitData = new FormData();
      submitData.append("name", formData.name.trim());
      submitData.append("company", formData.company.trim());
      submitData.append("telephone", formData.telephone.trim());
      submitData.append("email", formData.email.trim());
      submitData.append("remark", formData.remark.trim());
      submitData.append("captchaToken", captchaToken);

      // Add interests
      formData.interested.forEach((interest) => {
        submitData.append("interested", interest);
      });

      if (formData.otherInterested) {
        submitData.append("otherInterested", formData.otherInterested.trim());
      }

      // Add file if exists
      if (formData.file) {
        submitData.append("file", formData.file);
      }

      console.log("Submitting to API...");

      const response = await fetch("/api/submit-enquiry", {
        method: "POST",
        body: submitData,
      });

      const result = await response.json();
      console.log("API Response:", result);

      if (!response.ok) {
        throw new Error(result.message || `Server error: ${response.status}`);
      }

      if (!result.success) {
        throw new Error(result.message || "Submission failed");
      }

      // Success - reset form and show popup
      setFormData({
        name: "",
        company: "",
        telephone: "",
        email: "",
        interested: [],
        otherInterested: "",
        file: null,
        remark: "",
      });
      setCaptchaToken(null);
      setShowSuccessPopup(true);

    } catch (error) {
      console.error("Submission error:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to submit enquiry. Please try again.";
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close success popup after 5 seconds automatically
  useEffect(() => {
    if (showSuccessPopup) {
      const timer = setTimeout(() => {
        setShowSuccessPopup(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessPopup]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-auto transform animate-scale-in">
            <div className="text-center">
              {/* Success Icon */}
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              {/* Success Message */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Success!
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Your enquiry has been submitted successfully. We will get back to you soon.
              </p>
              
              {/* Close Button */}
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4">
        {/* Centered Container */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Logo Header */}
          <div className="bg-white py-8 px-8 border-b border-gray-200 text-center">
            <div className="bg-gray-50 inline-flex items-center justify-center rounded-lg p-4 border border-gray-300">
              <img
                src="/placeholder-adlogo.png"
                alt="ADPOS Logo"
                style={{ width: "200px", height: "86px" }}
                className="object-contain"
              />
            </div>
          </div>

          {/* Form Content */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 px-8 py-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">
                  ADPOS Enquiry Form
                </h2>
                <p className="text-gray-600">
                  Please fill in your details and we'll get back to you shortly
                </p>
              </div>

              {/* Error Message */}
              {submitError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm">{submitError}</p>
                </div>
              )}

              {/* Name Field */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <label
                  htmlFor="name"
                  className="w-full sm:w-40 font-medium text-gray-700 text-sm pt-2"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-500"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Company Field */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <label
                  htmlFor="company"
                  className="w-full sm:w-40 font-medium text-gray-700 text-sm pt-2"
                >
                  Company <span className="text-red-500">*</span>
                </label>
                <div className="flex-1">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-500"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              {/* Telephone Field */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <label
                  htmlFor="telephone"
                  className="w-full sm:w-40 font-medium text-gray-700 text-sm pt-2"
                >
                  Telephone
                </label>
                <div className="flex-1">
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-500"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <label
                  htmlFor="email"
                  className="w-full sm:w-40 font-medium text-gray-700 text-sm pt-2"
                >
                  Email
                </label>
                <div className="flex-1">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-500"
                    placeholder="example@company.com"
                  />
                </div>
              </div>

              {/* Interested Checkboxes */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <label className="w-full sm:w-40 font-medium text-gray-700 text-sm pt-2">
                  Interested In
                </label>
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Retail POS",
                        "Food & Beverage POS",
                        "Android POS",
                        "Cloud POS",
                      ].map((option) => (
                        <div key={option} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`interested-${option}`}
                            value={option}
                            checked={formData.interested.includes(option)}
                            onChange={handleCheckboxChange}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor={`interested-${option}`}
                            className="ml-3 text-gray-900 text-sm"
                          >
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>

                    {/* Other Option */}
                    <div className="flex items-center mt-4 pt-4 border-t border-gray-200">
                      <input
                        type="checkbox"
                        id="interested-other"
                        checked={formData.interested.includes("other")}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData((prev) => ({
                              ...prev,
                              interested: [...prev.interested, "other"],
                            }));
                          } else {
                            setFormData((prev) => ({
                              ...prev,
                              interested: prev.interested.filter(
                                (item) => item !== "other"
                              ),
                              otherInterested: "",
                            }));
                          }
                        }}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="interested-other"
                        className="ml-3 text-gray-900 text-sm mr-4"
                      >
                        Other
                      </label>
                      <input
                        type="text"
                        placeholder="Specify other interest..."
                        value={formData.otherInterested}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            otherInterested: e.target.value,
                          }))
                        }
                        disabled={!formData.interested.includes("other")}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm disabled:bg-gray-100 disabled:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 text-black placeholder-gray-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* File Upload */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <label
                  htmlFor="file"
                  className="w-full sm:w-40 font-medium text-gray-700 text-sm pt-2"
                >
                  File Upload
                </label>
                <div className="flex-1">
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                    onClick={handleFileClick}
                  >
                    <input
                      type="file"
                      id="file"
                      name="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      accept="image/*,.pdf,.doc,.docx"
                    />
                    <div className="cursor-pointer block">
                      <p className="text-gray-800 mb-2">
                        {formData.file
                          ? formData.file.name
                          : "Click to upload files or drag and drop"}
                      </p>
                      <p className="text-sm text-gray-600">
                        Maximum file size: 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Remark Field */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <label
                  htmlFor="remark"
                  className="w-full sm:w-40 font-medium text-gray-700 text-sm pt-2"
                >
                  Remark
                </label>
                <div className="flex-1">
                  <textarea
                    id="remark"
                    name="remark"
                    value={formData.remark}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-black placeholder-gray-500"
                    placeholder="Any additional comments or requirements..."
                  />
                </div>
              </div>

              {/* reCAPTCHA v2 Checkbox */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <label className="w-full sm:w-40 font-medium text-gray-700 text-sm pt-2">
                  Security Check <span className="text-red-500">*</span>
                </label>
                <div className="flex-1">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    {!isCaptchaReady ? (
                      <div className="text-center py-4">
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                          <span className="text-gray-800 text-sm">Loading security check...</span>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div
                          className="g-recaptcha"
                          data-sitekey="6LdiYPgrAAAAAOdijG7UMFO-3KwFNBpOJOjw6vG1"
                          data-callback="onRecaptchaSuccess"
                          data-expired-callback="onRecaptchaExpired"
                          data-error-callback="onRecaptchaError"
                        ></div>
                        {captchaToken && (
                          <div className="mt-2 text-green-600 text-sm text-center">
                            ✓ Verification completed - Submit button is now enabled
                          </div>
                        )}
                      </>
                    )}
                    <p className="text-gray-800 text-xs mt-3 text-center">
                      This site is protected by reCAPTCHA and the Google
                      <a
                        href="https://policies.google.com/privacy"
                        className="underline mx-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Privacy Policy
                      </a>
                      and
                      <a
                        href="https://policies.google.com/terms"
                        className="underline ml-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Terms of Service
                      </a>
                      apply.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting || !captchaToken}
                  className="px-12 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                </button>
              </div>
            </form>
          </div>

          {/* Footer Branding */}
          <div className="bg-gray-800 text-white py-6 px-8 mt-8">
            <div className="max-w-800 mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center">
                <div className="bg-white px-3 py-2 rounded text-gray-800 text-sm font-bold mr-3">
                  AD
                </div>
                <span className="text-sm">Powered by Alpha Digital POS</span>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                Create Your Solution
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      setFormData((prev) => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry! We will get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        {/* Centered Container */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Logo Header */}
          <div className="bg-white py-8 px-8 border-b border-gray-200 text-center">
            <div className="bg-gray-50 inline-flex items-center justify-center rounded-lg p-4 border border-gray-300">
              <img
                src="/placeholder-adlogo.png"
                alt="ADPOS Logo"
                style={{ width: '200px', height: '86px' }}
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                            className="ml-3 text-gray-700 text-sm"
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
                        className="ml-3 text-gray-700 text-sm mr-4"
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
                        className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm disabled:bg-gray-100 disabled:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-gray-50 hover:bg-gray-100 transition-colors">
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="file"
                      className="cursor-pointer block"
                    >
                      <p className="text-gray-600 mb-2">
                        Click to upload files or drag and drop
                      </p>
                      <p className="text-sm text-gray-500">
                        Maximum file size: 10MB
                      </p>
                    </label>
                  </div>
                </div>
              </div>

              {/* Take Photo */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <label className="w-full sm:w-40 font-medium text-gray-700 text-sm pt-2">
                  Take Photo
                </label>
                <div className="flex-1">
                  <div className="border border-gray-300 rounded-lg p-6 text-center bg-gray-50">
                    <p className="text-gray-600 mb-3 text-sm">
                      Camera functionality would be implemented here
                    </p>
                    <button
                      type="button"
                      className="px-4 py-2 bg-gray-600 text-white text-sm rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                      Take Photo
                    </button>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Any additional comments or requirements..."
                  />
                </div>
              </div>

              {/* Captcha */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <label className="w-full sm:w-40 font-medium text-gray-700 text-sm pt-2">
                  Please verify that you are human{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex-1">
                  <div
                    className="bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center p-6"
                    style={{ maxWidth: "300px" }}
                  >
                    <span className="text-gray-600 text-sm">
                      CAPTCHA verification will be implemented here
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  className="px-12 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Submit Enquiry
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
                <span className="text-sm">
                  Powered by Alpha Digital POS
                </span>
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
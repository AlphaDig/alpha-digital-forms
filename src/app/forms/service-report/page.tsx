"use client";

import { useState, FormEvent } from "react";
import FileUpload from "../../components/ui/FileUpload";
import SignaturePad from "../../components/ui/SignaturePad";
import LocationCoordinates from "../../components/ui/LocationCoordinates";

export default function ServiceReport() {
  const [currentDateTime] = useState<string>(
    new Date().toLocaleString("en-GB")
  );
  const [signature, setSignature] = useState<string>("");
  const [coordinates, setCoordinates] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const serviceTypes = [
    "Per Call",
    "Signifying",
    "Installation",
    "User/Warning",
    "General/Intriguing Projects",
    "Status",
    "System Maintenance",
    "Other",
  ];

  const serviceStatuses = ["Job Completed", "Job Task Software"];

  const personsInCharge = [
    "verq@shk4tightray",
    "kerq@shk4tightray",
    "vdg@shk4tightray",
    "verq@shk4tightray",
    "Grain",
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);

      // Convert FormData to regular object
      const data: { [key: string]: any } = {};

      // Convert FormData to object, handling arrays for checkboxes
      for (const [key, value] of formData.entries()) {
        if (data[key]) {
          // If key already exists, convert to array
          if (Array.isArray(data[key])) {
            data[key].push(value);
          } else {
            data[key] = [data[key], value];
          }
        } else {
          data[key] = value;
        }
      }

      // Add signature and coordinates to the data
      if (signature) {
        data.signature = signature;
      }
      if (coordinates) {
        data.coordinates = coordinates;
      }

      // Add timestamp
      data.submissionTime = currentDateTime;

      console.log("Submitting data:", {
        ...data,
        signature: signature ? "Signature present" : "No signature",
      });

      // Append signature & coordinates manually
      if (signature) formData.append("signature", signature);
      if (coordinates) formData.append("coordinates", coordinates);
      formData.append("submissionTime", currentDateTime);

      const response = await fetch("/api/submit-service-report", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert("Service report submitted successfully!");
        // Reset form
        e.currentTarget.reset();
        setSignature("");
        setCoordinates("");
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 px-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-1">SERVICE REPORT</h1>
            <p className="text-blue-100 text-sm">Alpha Digital Company</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* DateTime */}
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
            <label className="block text-sm font-semibold text-blue-800 mb-2">
              DateTime
            </label>
            <div className="border border-blue-200 px-4 py-3 bg-white rounded-md text-gray-700 font-medium">
              {currentDateTime}
            </div>
          </div>

          {/* Customer */}
          <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Customer *
            </label>
            <input
              type="text"
              name="customer"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter customer name"
              required
            />
          </div>

          {/* Address */}
          <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Address *
            </label>
            <textarea
              name="address"
              rows={2}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter full address"
              required
            />
          </div>

          {/* Person to Contact */}
          <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Person to Contact *
            </label>
            <input
              type="text"
              name="contactPerson"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter contact person name"
              required
            />
          </div>

          {/* Email */}
          <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="example@example.com"
              required
            />
          </div>

          {/* Telephone */}
          <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Telephone *
            </label>
            <input
              type="tel"
              name="telephone"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter telephone number"
              required
            />
          </div>

          {/* Fault Complaint */}
          <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Fault Complaint *
            </label>
            <textarea
              name="faultComplaint"
              rows={3}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Describe the fault complaint in detail"
              required
            />
          </div>

          {/* Notations Section */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Notations</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
            </div>

            {/* Field Computer */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  Field Computer
                </h3>

                {/* Service/Training Report */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Service / Training Report
                  </h4>
                  <textarea
                    name="serviceTrainingReport"
                    rows={2}
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter service or training report details"
                  />
                </div>

                {/* Type of Service */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Type of Service
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {serviceTypes.map((type, index) => (
                      <label key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <input
                          type="checkbox"
                          name="serviceType"
                          value={type}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Service Status */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Service Status
                  </h4>
                  <div className="space-y-2">
                    {serviceStatuses.map((status, index) => (
                      <label key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <input
                          type="checkbox"
                          name="serviceStatus"
                          value={status}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{status}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Service Charge */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Service Charge RM
                  </h4>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-500">RM</span>
                    <input
                      type="number"
                      name="serviceCharge"
                      className="w-32 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                {/* Photos Grid */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Photos
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <div key={num} className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-300 transition-colors">
                        <label className="block text-xs font-medium text-gray-600 mb-2">
                          Photo-{num}
                        </label>
                        <input
                          type="file"
                          name={`photo-${num}`}
                          accept="image/*"
                          className="w-full text-xs"
                        />
                        <div className="text-xs text-gray-400 mt-2">
                          http://sites.ij
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* File Upload */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Upload Video / Picture / Documents
                  </h4>
                  <FileUpload />
                </div>

                {/* Remarks */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Remarks
                  </h4>
                  <textarea
                    name="remarks"
                    rows={2}
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter any additional remarks or comments"
                  />
                </div>

                {/* Customer Signature */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Customer Signature
                  </h4>
                  <div className="bg-white border border-gray-300 rounded-lg p-4">
                    <SignaturePad onSave={setSignature} />
                    {signature && (
                      <div className="mt-3 text-sm text-green-600 font-medium flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Signature captured successfully
                      </div>
                    )}
                  </div>
                </div>

                {/* Person In Charge */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Person In Charge *
                  </h4>
                  <div className="space-y-2 bg-gray-50 rounded-lg p-4">
                    {personsInCharge.map((person, index) => (
                      <label key={index} className="flex items-center space-x-3 p-2 hover:bg-white rounded-lg transition-colors">
                        <input
                          type="radio"
                          name="personInCharge"
                          value={person}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                          required
                        />
                        <span className="text-sm text-gray-700">{person}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location Coordinates */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Location Coordinates *
                  </h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <LocationCoordinates onCoordinatesChange={setCoordinates} />
                    {coordinates && (
                      <div className="mt-3 text-sm text-green-600 font-medium flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Coordinates: {coordinates}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-12 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl hover:from-blue-700 hover:to-indigo-800 font-semibold text-lg disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-lg"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </div>
              ) : (
                "Submit Service Report"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
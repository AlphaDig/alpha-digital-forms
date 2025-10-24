'use client';

import { useState, FormEvent } from 'react';

export default function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [otherRequest, setOtherRequest] = useState<string>('');

  const interestedOptions = [
    'IT Services',
    'ERP Account Stock Control',
    'Cloud Computing',
    'Mobile APP Solutions',
    'Factory Information System',
    'Work Order Tracking System',
    'Carton Tracking System',
    'E-Ticketing Solutions',
    'Turnstile Control System',
    'E-Invoicing',
    'Retail POS',
    'Food & Beverage POS',
    'Android POS',
    'Cloud POS',
    'Hardware: Posiflex, Zebra & Honeywell'
  ];

  const requestOptions = [
    'Demo',
    'Return Call',
    'WhatsApp Information',
    'Email Information'
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      
      // Add other request if provided
      if (otherRequest) {
        formData.append('requestUs[]', `Other: ${otherRequest}`);
      }

      const data: { [key: string]: any } = {};
      for (const [key, value] of formData.entries()) {
        if (data[key]) {
          if (Array.isArray(data[key])) {
            data[key].push(value);
          } else {
            data[key] = [data[key], value];
          }
        } else {
          data[key] = value;
        }
      }

      console.log('Enquiry Data:', data);

      const response = await fetch('/api/submit-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        alert('Enquiry submitted successfully!');
        e.currentTarget.reset();
        setOtherRequest('');
      } else {
        throw new Error(result.message || 'Failed to submit enquiry');
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert('Error submitting enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Logo */}
        <div className="bg-white py-6 px-8 border-b">
          <div className="text-center">
            <img 
              src="/placeholder-ad-logo.png" 
              alt="Alpha Digital - Enquiry"
              className="mx-auto max-w-full h-auto"
              style={{ height: '44px', width: '620px' }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          {/* WhatsApp Chat Section */}
          <div className="mb-8">
            <label className="block text-lg font-medium text-gray-700 mb-3">
              Chat with us
            </label>
            <div className="flex justify-center">
              <a 
                href="https://wa.me/+6062849931" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Message us on WhatsApp
              </a>
            </div>
          </div>

          {/* Form Title */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Alpha Digital - Enquiry</h2>
          </div>

          {/* Name - Required */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Company - Required */}
          <div className="mb-6">
            <label htmlFor="company" className="block text-lg font-medium text-gray-700 mb-2">
              Company *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Telephone */}
          <div className="mb-6">
            <label htmlFor="telephone" className="block text-lg font-medium text-gray-700 mb-2">
              Telephone
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="example@example.com"
            />
          </div>

          {/* Interested - Checkboxes */}
          <div className="mb-8">
            <label className="block text-lg font-medium text-gray-700 mb-4">
              Interested
            </label>
            <div className="space-y-2">
              {interestedOptions.map((option, index) => (
                <label key={index} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="interested"
                    value={option}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* File Upload */}
          <div className="mb-8">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              File Upload
            </label>
            <div className="max-w-md">
              <input
                type="file"
                name="fileUpload"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">Sample attachments</p>
            </div>
          </div>

          {/* Take Photo Section */}
          <div className="mb-8">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Take Photo
            </label>
            <div className="max-w-md">
              <input
                type="file"
                accept="image/*"
                capture="environment"
                name="photo"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">Take a photo using your camera</p>
            </div>
          </div>

          {/* Remark */}
          <div className="mb-6">
            <label htmlFor="remark" className="block text-lg font-medium text-gray-700 mb-2">
              Remark
            </label>
            <input
              type="text"
              id="remark"
              name="remark"
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Any special request"
            />
          </div>

          {/* Request Us - Checkboxes with Other */}
          <div className="mb-8">
            <label className="block text-lg font-medium text-gray-700 mb-4">
              Request Us
            </label>
            <div className="space-y-2">
              {requestOptions.map((option, index) => (
                <label key={index} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="requestUs"
                    value={option}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
              {/* Other Option */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  onChange={(e) => {
                    if (!e.target.checked) setOtherRequest('');
                  }}
                />
                <span className="text-gray-700">Other:</span>
                <input
                  type="text"
                  value={otherRequest}
                  onChange={(e) => setOtherRequest(e.target.value)}
                  placeholder="Specify other request"
                  className="flex-1 px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Captcha Section */}
          <div className="mb-8">
            <label className="block text-lg font-medium text-gray-700 mb-4">
              Please verify that you are human
            </label>
            <div className="max-w-xs">
              <div className="bg-gray-200 h-20 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">CAPTCHA Placeholder</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                This is a placeholder for CAPTCHA verification
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
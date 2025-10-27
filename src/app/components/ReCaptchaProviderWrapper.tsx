"use client";

import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ReCaptchaProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      {/* ✅ This will render the reCAPTCHA v2 widget */}
      <div className="recaptcha-container">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={(token) => {
            console.log("ReCAPTCHA token:", token);
          }}
        />
      </div>
    </>
  );
}

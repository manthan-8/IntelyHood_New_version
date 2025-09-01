"use client";
import React from 'react';
import { NextPage } from 'next';

const TermsAndConditions: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-gray-400 text-sm">
            Last Updated: June 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-8 text-gray-300 leading-relaxed">
          <p>
            Welcome to Patch Line Technologies LLP! By accessing or using our website{' '}
            <a 
              href="https://www.patchlinetech.com" 
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              www.patchlinetech.com
            </a>{' '}
            and services, you agree to comply with and be bound by the following terms and conditions. 
            If you do not agree with these terms, please do not use our website or services.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-10">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
              1. Use of Website and Services
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <div>
                  <strong className="text-white">Acceptance of Terms:</strong> By accessing this website, you acknowledge that you have read, understood, and accepted these Terms of Use.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <div>
                  <strong className="text-white">License:</strong> We grant you a non-exclusive, non-transferable, limited right to access and use this website for informational and service-related purposes only.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <div>
                  <strong className="text-white">Prohibited Use:</strong> You agree not to:
                </div>
              </li>
              <li className="ml-6 flex items-start">
                <span className="text-gray-500 mr-3">◦</span>
                <div>Copy, modify, distribute, transmit, display, perform, or create derivative works based on our website content.</div>
              </li>
              <li className="ml-6 flex items-start">
                <span className="text-gray-500 mr-3">◦</span>
                <div>Use the website for unlawful or fraudulent activities.</div>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
              2. Intellectual Property Rights
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <div>
                  All content, trademarks, and data on this website, including text, graphics, logos, images, and software, are the property of Patch Line Technologies LLP and protected by applicable intellectual property laws.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <div>
                  Any unauthorized use of our intellectual property is strictly prohibited and may result in legal action.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
              3. Payments and Billing
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <div>
                  Users must pay for services as per the agreed terms and pricing mentioned on our website or in contractual agreements.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <div>
                  Failure to make timely payments may result in suspension or termination of services.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
              4. Disclaimer of Warranties
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <div>
                  Our website and services are provided "as is" without warranties of any kind.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <div>
                  We do not guarantee error-free, uninterrupted, or fully secure services.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <div>
                  <strong className="text-white">Limitation of Liability:</strong> Patch Line Technologies LLP shall not be liable for any direct, indirect, or consequential damages resulting from the use of our services.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
              5. Termination of Services
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <div>
                  We reserve the right to terminate or suspend your access if you violate these terms.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <div>
                  Users may terminate their service by notifying us at{' '}
                  <a 
                    href="mailto:care@patchlinetech.com" 
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    care@patchlinetech.com
                  </a>.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
              6. Governing Law
            </h2>
            <div className="text-gray-300 leading-relaxed">
              <p className="mb-4">
                These terms shall be governed by the law of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
              </p>
              <p>
                For inquiries regarding these terms, contact us at{' '}
                <a 
                  href="mailto:care@patchlinetech.com" 
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  care@patchlinetech.com
                </a>.
              </p>
            </div>
          </section>
        </div>

        
      </div>
    </div>
  );
};

export default TermsAndConditions;
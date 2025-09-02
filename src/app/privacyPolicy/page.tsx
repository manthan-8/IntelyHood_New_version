"use client";
import React from 'react';
import { NextPage } from 'next';
import GalaxyBackground from '@/components/GalaxyBg';

const PrivacyPolicy: NextPage = () => {
  return (

    <section className="relative px-6 py-15 lg:py-20">
      <div className="container max-w-screen-xl mx-auto overflow-hidden">
        <GalaxyBackground />
        <div className="min-h-screen text-text-light pt-20">
          <div className="max-w-4xl mx-auto px-6 py-12">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-primary-main mb-4">
                Privacy Policy
              </h1>
              <p className="text-text-main text-sm">
                Last Updated: June 2025
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-8 text-text-main leading-relaxed">
              <p>
                At Patch Line Technologies LLP, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information.
              </p>
            </div>

            {/* Privacy Sections */}
            <div className="space-y-10">
              {/* Section 1 */}
              <section>
                <h2 className="text-2xl font-semibold text-primary-main mb-4">
                  1. Information We Collect
                </h2>
                <ul className="space-y-3 text-text-main">
                  <li className="flex items-start">
                    <span className="text-primary-main mr-3">•</span>
                    <div>
                      <strong className="text-text-light">Personal Data:</strong> Name, email, phone number, company details, and payment information when you sign up for services.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-main mr-3">•</span>
                    <div>
                      <strong className="text-text-light">Technical Data:</strong> IP address, browser type, and website interaction details for analytical purposes.
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-2xl font-semibold text-primary-main mb-4">
                  2. How We Use Your Information
                </h2>
                <div className="mb-4 text-text-main">
                  <p>We use the collected information to:</p>
                </div>
                <ul className="space-y-3 text-text-main">
                  <li className="flex items-start">
                    <span className="text-primary-main mr-3">•</span>
                    <div>Provide, operate, and improve our services.</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-main mr-3">•</span>
                    <div>Process payments and transactions securely.</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-main mr-3">•</span>
                    <div>Respond to customer inquiries and support requests.</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-main mr-3">•</span>
                    <div>Send service-related communications and promotions.</div>
                  </li>
                </ul>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-2xl font-semibold text-primary-main mb-4">
                  3. Data Protection & Security
                </h2>
                <ul className="space-y-3 text-text-main">
                  <li className="flex items-start">
                    <span className="text-primary-main mr-3">•</span>
                    <div>
                      We implement security measures to protect your data from unauthorized access.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-main mr-3">•</span>
                    <div>
                      Our website uses SSL encryption for secure data transmission.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-main mr-3">•</span>
                    <div>
                      We do not sell or rent your data to third parties.
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-2xl font-semibold text-primary-main mb-4">
                  4. Cookies and Tracking Technologies
                </h2>
                <ul className="space-y-3 text-text-main">
                  <li className="flex items-start">
                    <span className="text-primary-main mr-3">•</span>
                    <div>
                      We use cookies to enhance user experience and analyze website usage.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-main mr-3">•</span>
                    <div>
                      Users can disable cookies through their browser settings.
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-2xl font-semibold text-primary-main mb-4">
                  5. Third-Party Links
                </h2>
                <div className="text-text-main leading-relaxed">
                  <p>
                    Our website may contain third-party links. We are not responsible for their privacy practices.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-2xl font-semibold text-primary-main mb-4">
                  6. Your Rights
                </h2>
                <div className="mb-4 text-text-main">
                  <p>Depending on applicable laws, you may:</p>
                </div>
                <ul className="space-y-3 text-text-main">
                  <li className="flex items-start">
                    <span className="text-primary-main mr-3">•</span>
                    <div>Request access to your personal data.</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-main mr-3">•</span>
                    <div>Request correction or deletion of your data.</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-main mr-3">•</span>
                    <div>Opt out of marketing communications at any time.</div>
                  </li>
                </ul>
              </section>

              {/* Contact Information */}
              <section>
                <div>
                  <p className="text-text-main leading-relaxed">
                    For privacy-related inquiries, contact{' '}
                    <a
                      href="mailto:care@patchlinetech.com"
                      className="text-primary-main hover:text-primary-light underline"
                    >
                      care@patchlinetech.com
                    </a>.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default PrivacyPolicy;

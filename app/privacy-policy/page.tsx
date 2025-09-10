import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

            <div className="bg-blue-50 border-l-4 border-[#0A509E] p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                At Meridian Enterprises, we are committed to protecting your personal and financial information with the
                highest standards of care. This Privacy Policy explains how we collect, use, share, store, and secure
                your data when you use our website, mobile application, or professional consulting services in Pakistan.
                By accessing our platform or services, you agree to the practices outlined in this policy.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who We Are & How to Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Meridian Enterprises is a leading provider of financial consulting and IT solutions in Pakistan. Our
                innovative app empowers you to manage funds, investments, and profits seamlessly. For any
                privacy-related questions or concerns, please contact us at:
              </p>
              <p className="text-gray-700 font-medium">Email: info@meridianent.net</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Account Registration Process</h2>
              <p className="text-gray-700 leading-relaxed">
                To use our application, you must register by contacting the application owner at info@meridianent.net.
                Upon review and approval, you will receive your account details, including secure login credentials, via
                email. Use these credentials to access the app. Keep your credentials confidential to ensure the
                security of your account. If you encounter issues with registration or access, please contact our
                support team at the email above.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Data We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect only the data necessary to deliver our financial consulting, IT solutions, and app
                functionality. The data falls into two categories:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">a. Data Provided by you</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>
                  <strong>Identity and Contact Information:</strong> Full name, email address, phone number, CNIC
                  (Computerized National Identity Card) number (where required for verification), and mailing address.
                </li>
                <li>
                  <strong>Financial Information:</strong> Bank account details, transaction history, investment
                  portfolios, and profit records.
                </li>
                <li>
                  <strong>Business and Project Details:</strong> Information related to your business needs or
                  consulting projects.
                </li>
                <li>
                  <strong>Account Information:</strong> Login credentials, user preferences, and consent choices.
                </li>
                <li>
                  <strong>Communications:</strong> Support tickets, feedback, and correspondence with our team.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">b. Data Collected Automatically</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>
                  <strong>Technical Data:</strong> Device type, operating system, IP address, browser details, and app
                  usage patterns.
                </li>
                <li>
                  <strong>Analytics and Logs:</strong> Anonymized usage metrics, error logs, and crash reports to
                  maintain app reliability and performance.
                </li>
                <li>
                  <strong>Cookies and Tracking:</strong> Cookies, web beacons, and similar technologies to manage
                  sessions, save preferences, and enhance user experience.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Data</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your data to provide exceptional services and ensure a secure, tailored experience. Specifically,
                we use it to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>
                  Deliver financial consulting and IT solutions, including funding strategies, investment tracking, and
                  technical infrastructure setup.
                </li>
                <li>
                  Operate our app, enabling features like user authentication, transaction processing, and portfolio
                  management.
                </li>
                <li>
                  Communicate account updates, service improvements, or promotional offers (only with your explicit
                  consent).
                </li>
                <li>
                  Comply with legal and regulatory obligations, such as those under the Pakistan Data Protection Act
                  2023, State Bank of Pakistan regulations, or tax laws.
                </li>
                <li>Improve our platform through anonymized analytics, unless you consent to personalized data use.</li>
                <li>Detect and prevent fraud, security breaches, or unauthorized access.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Sharing & Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your data is never sold. We share it only in the following cases:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>
                  <strong>Trusted Service Providers:</strong> With payment processors, cloud hosting services, or IT
                  partners who adhere to strict confidentiality and data protection standards.
                </li>
                <li>
                  <strong>Affiliates and Partners:</strong> Only with your explicit consent, for example, to enable
                  joint services or offerings.
                </li>
                <li>
                  <strong>Legal and Regulatory Compliance:</strong> With authorities, such as the Federal Board of
                  Revenue (FBR) or law enforcement, when required by Pakistani law.
                </li>
                <li>
                  <strong>Analytics and Crash Reporting:</strong> Minimal, anonymized data shared with analytics or
                  crash-reporting tools to enhance app performance.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                All third parties are contractually bound to protect your data with the same rigor as Meridian
                Enterprises, in compliance with Pakistani data protection laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. In-App Payments & Fund Management</h2>
              <p className="text-gray-700 leading-relaxed">
                Our app allows you to link financial accounts, transfer funds, and monitor investments securely. These
                transactions are processed through trusted external payment systems compliant with State Bank of
                Pakistan regulations. We collect and process only the data necessary to complete your requests.
                Transaction records are retained as required by financial and tax regulations in Pakistan. All
                payment-related data is protected using encryption and tokenization.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies & Permissions</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and tracking technologies to improve your experience, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>
                  <strong>Session Management:</strong> To maintain login sessions and save preferences.
                </li>
                <li>
                  <strong>Analytics:</strong> To collect anonymized data for platform improvements.
                </li>
                <li>
                  <strong>Fraud Prevention:</strong> To monitor for suspicious activity and ensure compliance.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">The app may request permissions, such as:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>
                  <strong>Camera:</strong> For document scanning (e.g., CNIC or financial documents for KYC compliance).
                </li>
                <li>
                  <strong>Contacts:</strong> For optional referral features (with your consent).
                </li>
                <li>
                  <strong>Location:</strong> For fraud detection and compliance with regional regulations.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You can manage or revoke these permissions at any time through your device settings or by contacting us
                at info@meridianent.net.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Security & Safeguards</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We protect your data with robust measures, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>
                  <strong>Encryption:</strong> Industry-standard encryption for data in transit and at rest.
                </li>
                <li>
                  <strong>Multi-Factor Authentication (MFA):</strong> To secure account access.
                </li>
                <li>
                  <strong>Regular Security Audits:</strong> To identify and mitigate vulnerabilities.
                </li>
                <li>
                  <strong>Access Controls:</strong> Restricting employee and third-party access to only what is
                  necessary.
                </li>
                <li>
                  <strong>Compliance:</strong> Adhering to the Pakistan Data Protection Act 2023 and industry best
                  practices.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                While we implement stringent safeguards, no system is entirely risk-free. We recommend using strong
                passwords, enabling MFA, and keeping your devices updated to enhance your security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention & Deletion</h2>
              <p className="text-gray-700 leading-relaxed mb-4">We retain your data only as long as necessary to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Maintain an active account and provide services.</li>
                <li>
                  Comply with legal, tax, or regulatory requirements, such as those mandated by the State Bank of
                  Pakistan or FBR.
                </li>
                <li>Support ongoing consulting engagements.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You may request account deletion at any time by emailing info@meridianent.net. We will erase your
                personal data unless retention is required by Pakistani law (e.g., for tax or audit purposes).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under the Pakistan Data Protection Act 2023 and other applicable laws, you have the right to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>
                  <strong>Access:</strong> Request a copy of the personal and financial data we hold about you.
                </li>
                <li>
                  <strong>Correct:</strong> Update or correct inaccurate data.
                </li>
                <li>
                  <strong>Delete:</strong> Request deletion of your data, subject to legal retention requirements.
                </li>
                <li>
                  <strong>Restrict:</strong> Limit certain data processing activities where permitted.
                </li>
                <li>
                  <strong>Portability:</strong> Receive your data in a structured, machine-readable format.
                </li>
                <li>
                  <strong>Opt-Out:</strong> Withdraw consent for marketing communications or non-essential data
                  processing.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise these rights, contact us at info@meridianent.net. We will respond within the timeframes
                mandated by law, typically 30 days.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services and app are intended for users aged 18 and older. We do not knowingly collect data from
                minors. If we discover that data from a minor has been collected, we will delete it immediately. If you
                suspect we have collected data from a minor, please notify us at info@meridianent.net.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed">
                If your data is transferred outside Pakistan (e.g., to cloud servers or service providers), we ensure
                compliance with the Pakistan Data Protection Act 2023 and international standards, using mechanisms like
                contractual safeguards or adequacy agreements. We take all necessary steps to ensure your data remains
                protected during such transfers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Updates to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this policy to reflect changes in our services, legal requirements, or industry standards.
                The "Last Updated" date at the top will indicate the latest revision. For significant changes, we will
                notify you via email, in-app notifications, or a prominent notice on our website or app. We encourage
                you to review this policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Accessibility</h2>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy is available on our website and within the app via the settings menu or footer. If
                you need assistance accessing this policy due to a disability, please contact us at
                info@meridianent.net, and we will provide it in an alternative format.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Consent Management</h2>
              <p className="text-gray-700 leading-relaxed">
                By registering and using our services, you consent to the collection and use of your data as described
                in this policy. You may withdraw consent for non-essential processing (e.g., marketing) at any time by
                updating your preferences in the app or contacting us at info@meridianent.net. Consent for essential
                processing, such as fund transfers or KYC verification, is required to fulfill contractual and legal
                obligations.
              </p>
            </section>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-12">
              <p className="text-gray-700 leading-relaxed text-center">
                Thank you for trusting Meridian Enterprises. We are committed to transparency, security, and respecting
                your privacy. For any questions or concerns, please contact us at{" "}
                <a href="mailto:info@meridianent.net" className="text-[#0A509E] hover:underline font-medium">
                  info@meridianent.net
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

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
                        At Meridian Enterprises (Pvt) Ltd, we are committed to protecting your personal information with the
                        highest standards of care. This Privacy Policy explains how we collect, use, share, store, and
                        secure your data when you use our website, mobile application, or professional IT consulting
                        services in Pakistan. By accessing our platform or services, you agree to the practices outlined in
                        this policy.
                    </p>
                </div>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who We Are & How to Contact Us</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Meridian Enterprises (Pvt) Ltd is a service provider of IT consulting and digital solutions in Pakistan.
                        Our innovative platform and services empower you to manage digital infrastructure activity
                        efficiently.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Our company product brand name is <b>“Wijdaan”</b>, available on both <b>Android</b> and <b>iOS</b> platforms.
                        The app is designed to provide secure, seamless access to manage capital & monitor funds
                        activity.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        For any privacy related questions or concerns, please contact us at:
                    </p>
                    <p className="text-gray-700 font-medium text-bold">Email: info@meridianent.net</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Account Registration Process</h2>
                    <p className="text-gray-700 leading-relaxed">
                        To use our application, you must register by contacting the application owner at
                        info@meridianent.net.
                        Upon review and approval, you will receive your account details, including secure login
                        credentials, via email.
                        Keep your credentials confidential to ensure the security of your account. If you encounter issues
                        with registration or access, please contact our support team at the email above.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Data We Collect</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        We collect only the data necessary to deliver our IT consulting and application functionality.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">a. Data Provided by You</h3>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                        <li>
                            <strong>Identity and Contact Information:</strong> Full name, email address, phone number, CNIC
                            (where required for verification), and mailing address.
                        </li>
                        <li>
                            <strong>Account Information:</strong> Login credentials, user preferences, and consent choices.
                        </li>
                        <li>
                            <strong>Communications:</strong> Support requests, feedback, and correspondence with our team.
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
                            <strong>Cookies and Tracking:</strong> Cookies and similar technologies to manage sessions, save
                            preferences, and enhance user experience.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Data</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        We use your data to provide efficient and secure services. Specifically, we use it to:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                        <li>
                            Deliver IT and digital solutions, including manage ledgers without enabling direct real
                            time transactions.
                        </li>
                        <li>
                            Operate our app, enabling features like user authentication, digital data processing, and
                            portfolio management.
                        </li>
                        <li>
                            Communicate account updates, service improvements, or promotional offers (only with
                            your explicit consent).
                        </li>
                        <li>
                            Improve our platform through anonymized analytics, unless you consent to personalized
                            data use.
                        </li>
                        <li>
                            Detect and prevent unauthorized access or security breaches.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Sharing & Disclosure</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Your data is never sold. We share it only in the following cases:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                        <li>
                            <strong>Trusted Service Providers:</strong> With domain and hosting services, technology partners, or
                            subcontractors who adhere to strict confidentiality and data protection standards.
                        </li>
                        <li>
                            <strong>Affiliates and Partners:</strong> Only with your explicit consent, for example, to enable joint
                            services or offerings.
                        </li>
                        <li>
                            <strong>Legal and Regulatory Compliance:</strong> When required by applicable authorities.
                        </li>
                        <li>
                            <strong>Analytics and Crash Reporting:</strong> Limited, anonymized data may be shared with
                            analytics tools to improve performance.
                        </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                        All third parties are contractually bound to protect your data with the same rigor as Meridian
                        Enterprises, in compliance with digital data protection regulations.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. In-App Services</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our application allows you to manage ledger monitor balance history securely.
                        We collect and process only the data necessary to perform these activities.
                        All user data is protected using encryption and secure communication protocols.
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
                            <strong>Security Monitoring:</strong> To detect suspicious activity and ensure compliance.
                        </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mb-4">The app may request permissions such as:</p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                        <li>
                            <strong>Camera:</strong> For document scanning (e.g., identity verification for KYC compliance).
                        </li>
                        <li>
                            <strong>Contacts:</strong> For optional collaboration features (with your consent).
                        </li>
                        <li>
                            <strong>Location:</strong> For regional compliance and security features.
                        </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                        You can manage or revoke these permissions at any time through your device settings or by
                        contacting us at info@meridianent.net.
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
                            <strong>Regular Security Audits:</strong> To identify and mitigate vulnerabilities.
                        </li>
                        <li>
                            <strong>Access Controls:</strong> Restricting access to only authorized personnel.
                        </li>
                        <li>
                            <strong>Compliance:</strong> Adhering to digital data protection standards and best industry practices to ensure your information remains secure and confidential.
                        </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                        While we implement stringent safeguards, no system is entirely risk free. We recommend
                        using strong passwords, and keeping your devices updated to enhance security.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention & Deletion</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">We retain your data only as long as necessary to:</p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                        <li>Maintain your active account and provide services.</li>
                        <li>
                            Comply with applicable legal or regulatory requirements.
                        </li>
                        <li>Support ongoing consulting engagements.</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                        You may request account deletion at any time by emailing info@meridianent.net.
                        We will erase your personal data unless retention is required by applicable laws or legitimate
                        business needs (such as compliance or record keeping).
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Your Rights</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Under applicable data protection and privacy laws, you have the right to:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                        <li>
                            <strong>Access:</strong> Request a copy of your personal data.
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
                            <strong>Opt-Out:</strong> Withdraw consent for marketing communications or non-essential processing.
                        </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                        To exercise these rights, contact us at info@meridianent.net.
                        We will respond within the timeframes mandated by law, typically 30 days.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our services and app are intended for users aged 18 and older. We do not knowingly collect data
                        from minors.
                        If we discover that data from a minor has been collected, we will delete it immediately.
                        If you suspect we have collected such data, please notify us at info@meridianent.net.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. International Data Transfers</h2>
                    <p className="text-gray-700 leading-relaxed">
                        In cases where data is processed or stored outside your country, we implement appropriate
                        contractual, organizational, and technical measures to ensure a level of protection consistent with
                        international data protection principles.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Updates to This Policy</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We may update this policy to reflect changes in our services, legal requirements, or industry
                        standards.
                        The “Last Updated” date above indicates the latest revision.
                        For significant updates, we will notify you via email, in-app notifications, or website notices.
                        We encourage you to review this policy periodically.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Accessibility</h2>
                    <p className="text-gray-700 leading-relaxed">
                        This Privacy Policy is available on our website and within the app via the settings menu or
                        footer.
                        If you need assistance accessing this policy due to a disability, please contact us at
                        info@meridianent.net, and we will provide it in an accessible format.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Consent Management</h2>
                    <p className="text-gray-700 leading-relaxed">
                        By registering and using our services, you consent to the collection and use of your data as
                        described in this policy.
                        You may withdraw consent for non-essential processing (e.g., marketing) at any time by
                        updating your preferences in the app or contacting us at info@meridianent.net.
                        Consent for essential processing, such as account setup and verification, is required to fulfill
                        service obligations.
                    </p>
                </section>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-12">
                    <p className="text-gray-700 leading-relaxed text-center">
                        Thank you for trusting Meridian Enterprises (Pvt) Ltd. We are committed to transparency, security, and respecting
                        your privacy. For any questions or concerns, please contact us at:
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

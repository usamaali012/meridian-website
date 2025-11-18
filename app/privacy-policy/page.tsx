import { Navbar2 } from "@/components/navbar2";
import { Footer } from "@/components/footer";

export default function Privacy() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar2 />

      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#1e5a96] to-[#0d2d47] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-base mb-6">Privacy Policy</h1>
          <p className="text-xl text-white/90">
            Your privacy is important to us
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12 leading-relaxed text-gray-700">

          {/* Who We Are */}
          <div>
            <h2 className="text-3xl font-base text-[#1e5a96] mb-4">
              Who We Are & How to Contact Us
            </h2>
            <p>
              Meridian Enterprises (Pvt) Ltd is a provider of IT consulting and
              digital solutions in Pakistan. Our services and platform help
              businesses manage digital infrastructure efficiently.
            </p>
            <p className="mt-4">
              Our flagship product, <strong>“Wijdaan”</strong>, available on both
              Android and iOS, enables secure and seamless access for managing
              capital and monitoring fund activity.
            </p>
            <p className="mt-4">
              If you have any privacy-related concerns, you may contact us at:
            </p>
            <div className="p-4 bg-gray-100 rounded-lg mt-4">
              <p><strong>Email:</strong> info@meridianent.net</p>
            </div>
          </div>

          {/* Registration */}
          <div>
            <h2 className="text-3xl font-base text-[#1e5a96] mb-4">
              Account Registration Process
            </h2>
            <p>
              To use our application, you must register by contacting us at
              info@meridianent.net. Upon approval, you will receive secure login
              credentials via email. Please keep your credentials confidential.
            </p>
          </div>

          {/* Data We Collect */}
          <div>
            <h2 className="text-3xl font-base text-[#1e5a96] mb-4">
              1. Data We Collect
            </h2>

            <h3 className="text-xl font-semibold mb-2">a. Data Provided by You</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Full name, email, phone number, CNIC, mailing address</li>
              <li>Account information (credentials, preferences, consent)</li>
              <li>Support requests and communications</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">b. Data Collected Automatically</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Technical data (device, OS, IP, browser details)</li>
              <li>Usage analytics, diagnostics, and crash logs</li>
              <li>Cookies for session management and experience optimization</li>
            </ul>
          </div>

          {/* How We Use Data */}
          <div>
            <h2 className="text-3xl font-base text-[#1e5a96] mb-4">
              2. How We Use Your Data
            </h2>
            <p>We use your data to:</p>
            <ul className="list-disc ml-6 space-y-2 mt-2">
              <li>Provide and improve IT consulting services</li>
              <li>Enable app authentication, monitoring, and portfolio tools</li>
              <li>Communicate updates and service improvements (with consent)</li>
              <li>Protect against security breaches and unauthorized access</li>
            </ul>
          </div>

          {/* Data Sharing */}
          <div>
            <h2 className="text-3xl font-base text-[#1e5a96] mb-4">
              3. Data Sharing & Disclosure
            </h2>
            <p>Your data is <strong>never sold</strong>. It is shared only when necessary:</p>
            <ul className="list-disc ml-6 space-y-2 mt-2">
              <li>With trusted service providers (hosting, technology partners)</li>
              <li>With affiliates only if you provide explicit consent</li>
              <li>For legal compliance</li>
              <li>With analytics tools using anonymized data</li>
            </ul>
          </div>

          {/* In-App Services */}
          <div>
            <h2 className="text-3xl font-base text-[#1e5a96] mb-4">
              4. In-App Services
            </h2>
            <p>
              Wijdaan allows you to securely manage ledger and balance history.
              All communication is encrypted and processed using secure protocols.
            </p>
          </div>

          {/* Cookies & Permissions */}
          <div>
            <h2 className="text-3xl font-base text-[#1e5a96] mb-4">
              5. Cookies & Permissions
            </h2>
            <p>We use cookies for:</p>
            <ul className="list-disc ml-6 space-y-2 mt-2">
              <li>Session management</li>
              <li>Analytics and platform improvement</li>
              <li>Security monitoring</li>
            </ul>
            <p className="mt-4">App permissions may include:</p>
            <ul className="list-disc ml-6 space-y-2 mt-2">
              <li>Camera (for document scanning)</li>
              <li>Contacts (optional collaboration features)</li>
              <li>Location (compliance & security)</li>
            </ul>
          </div>

          {/* Security */}
          <div>
            <h2 className="text-3xl font-base text-[#1e5a96] mb-4">
              6. Security Measures
            </h2>
            <p>
              We use encryption, access controls, and regular audits to protect
              your data. While no system is perfectly secure, we follow best
              industry practices.
            </p>
          </div>

          {/* Data Retention */}
          <div>
            <h2 className="text-3xl font-base text-[#1e5a96] mb-4">
              7. Data Retention & Deletion
            </h2>
            <p>
              We retain your data only as long as required for service delivery
              and legal compliance. You may request deletion anytime by emailing
              us at info@meridianent.net.
            </p>
          </div>

          {/* User Rights */}
          <div>
            <h2 className="text-3xl font-base text-[#1e5a96] mb-4">
              8. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc ml-6 space-y-2 mt-2">
              <li>Access your data</li>
              <li>Request corrections</li>
              <li>Request deletion</li>
              <li>Restrict certain processing</li>
              <li>Data portability</li>
              <li>Withdraw marketing consent</li>
            </ul>
          </div>

          {/* Children */}
          <div>
            <h2 className="text-3xl font-base text-[#1e5a96] mb-4">
              9. Children’s Privacy
            </h2>
            <p>
              Our services are for ages 18+. We do not knowingly collect data
              from minors.
            </p>
          </div>

          {/* International Transfers */}
          <div>
            <h2 className="text-3xl font-base text-[#1e5a96] mb-4">
              10. International Data Transfers
            </h2>
            <p>
              If data is processed outside your country, we apply strict
              contractual and technical safeguards.
            </p>
          </div>

          {/* Updates */}
          <div>
            <h2 className="text-3xl font-base text-[#1e5a96] mb-4">
              11. Updates to This Policy
            </h2>
            <p>
              We may update this policy as needed. Significant updates will be
              communicated via email or in-app notifications.
            </p>
          </div>

          {/* Accessibility */}
          <div>
            <h2 className="text-3xl font-base text-[#1e5a96] mb-4">
              12. Accessibility
            </h2>
            <p>
              If you require this policy in an accessible format, contact us at
              info@meridianent.net.
            </p>
          </div>

          {/* Consent */}
          <div>
            <h2 className="text-3xl font-base text-[#1e5a96] mb-4">
              13. Consent Management
            </h2>
            <p>
              By using our services, you consent to the data practices described
              here. You may withdraw non-essential consent at any time.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

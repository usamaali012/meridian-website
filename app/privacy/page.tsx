import { Navbar2 } from "@/components/navbar2"
import { Footer } from "@/components/footer"

export default function Privacy() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar2 />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1e5a96] to-[#0d2d47] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-white/90">Your privacy is important to us</p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#1e5a96] mb-4">Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                Meridian Enterprises ("we" or "us" or "Company") operates the website. This page informs you of our
                policies regarding the collection, use, and disclosure of personal data when you use our Service and the
                choices you have associated with that data.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1e5a96] mb-3">1. Information Collection and Use</h3>
              <p className="text-gray-700 mb-4">
                We collect several different types of information for various purposes to provide and improve our
                Service to you.
              </p>
              <ul className="space-y-2 ml-4 text-gray-700">
                <li>
                  <strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain
                  personally identifiable information that can be used to contact or identify you ("Personal Data").
                </li>
                <li>
                  <strong>Usage Data:</strong> We may also collect information how the Service is accessed and used
                  ("Usage Data").
                </li>
                <li>
                  <strong>Cookies:</strong> We use cookies and similar tracking technologies to track activity on our
                  Service.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1e5a96] mb-3">2. Use of Data</h3>
              <p className="text-gray-700 mb-4">Meridian Enterprises uses the collected data for various purposes:</p>
              <ul className="space-y-2 ml-4 text-gray-700">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1e5a96] mb-3">3. Security of Data</h3>
              <p className="text-gray-700">
                The security of your data is important to us but remember that no method of transmission over the
                Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable
                means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1e5a96] mb-3">4. Changes to This Privacy Policy</h3>
              <p className="text-gray-700">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1e5a96] mb-3">5. Contact Us</h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="p-4 bg-[#f5f5f5] rounded-lg">
                <p className="text-gray-800">
                  <strong>Email:</strong> info@meridianent.net
                </p>
                <p className="text-gray-800">
                  <strong>Phone:</strong> 051-2743288
                </p>
                <p className="text-gray-800">
                  <strong>Address:</strong> Flat No. 2, 3rd Floor, Khyber-3 Apts, G-15 Markaz Islamabad
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

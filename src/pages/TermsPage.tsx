import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const TermsPage = () => {
  return (
    <PageTransition>
      <main className="bg-stone-50 min-h-screen selection:bg-stone-200 selection:text-stone-900">
        <Navbar />
        
        {/* Matched width to max-w-5xl (1024px) for consistency */}
        <div className="pt-32 px-6 lg:px-12 max-w-5xl mx-auto pb-24 font-sans">
          
          {/* Header Section */}
          <div className="mb-14 border-b border-stone-200 pb-8">
            <h1 className="text-3xl md:text-4xl font-normal text-stone-900 tracking-tight">
              Terms & Conditions
            </h1>
          </div>

          {/* Policy Content */}
          <section className="space-y-14 text-base leading-7 text-stone-600 font-light text-justify md:text-left">
            
            {/* Introduction */}
            <div>
              <p>
                These Terms govern your engagement with BodhiX and the use of our digital ecosystem. By accessing our website or utilizing our specialized technological and creative services, you agree to be bound by these legal guidelines. If you do not agree with any part of these terms, please refrain from using our platform or services.
              </p>
            </div>

            {/* Service-Specific Terms (NEW EXPANDED SECTION) */}
            <div>
              <h2 className="text-xl font-medium text-stone-900 mb-6">1. Service-Specific Terms & Limitations</h2>
              <p className="mb-6">
                BodhiX provides a diverse suite of technical and creative solutions. The following operational guidelines and liability limitations apply strictly based on the services you commission:
              </p>
              <div className="overflow-x-auto border border-stone-200 rounded-sm bg-white">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-stone-100/50 border-b border-stone-200 text-sm uppercase tracking-wider">
                      <th className="py-4 px-6 text-stone-800 font-medium w-1/4">Service Division</th>
                      <th className="py-4 px-6 text-stone-800 font-medium w-1/3">Operational Guidelines</th>
                      <th className="py-4 px-6 text-stone-800 font-medium">Liability & Limitations</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-sm">
                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">API-as-a-Service & System Integration</td>
                      <td className="py-4 px-6">Subject to strict rate limiting and fair-use policies. Clients are strictly responsible for securing their API keys.</td>
                      <td className="py-4 px-6">BodhiX is not liable for data breaches resulting from exposed client keys or unauthorized downstream system access.</td>
                    </tr>
                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Cloud Infrastructure & Custom Software</td>
                      <td className="py-4 px-6">Third-party server costs (e.g., AWS, GCP) are passed through to the client unless explicitly stated in the MSA.</td>
                      <td className="py-4 px-6">We guarantee architecture integrity, but we are not liable for outages caused by underlying third-party cloud providers.</td>
                    </tr>
                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Web, Landing Pages & Dashboards</td>
                      <td className="py-4 px-6">Delivered with standard cross-browser compatibility. Post-launch bug fixes are limited to the agreed-upon warranty period.</td>
                      <td className="py-4 px-6">Client is responsible for all user-generated content hosted on their web applications.</td>
                    </tr>
                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Digital Marketing</td>
                      <td className="py-4 px-6">Clients must fund their own ad spend accounts directly. Campaigns are executed based on approved strategic frameworks.</td>
                      <td className="py-4 px-6">While we optimize for performance, BodhiX legally cannot and does not guarantee specific ROI, conversion rates, or sales figures.</td>
                    </tr>
                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Graphic & 3D Design</td>
                      <td className="py-4 px-6">Revision cycles are strictly limited to the number outlined in the specific project Statement of Work (SOW).</td>
                      <td className="py-4 px-6">Full IP rights transfer to the client <span className="font-semibold text-stone-900">only after</span> final invoice clearance.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Commercial & Payment Terms (Table) */}
            <div>
              <h2 className="text-xl font-medium text-stone-900 mb-6">2. Commercial & Payment Protocols</h2>
              <p className="mb-6">
                BodhiX operates as a B2B enterprise and does not process direct payments, subscriptions, or credit card transactions through this public website. All commercial engagements are governed by the following offline protocols:
              </p>
              <div className="overflow-x-auto border border-stone-200 rounded-sm bg-white">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-stone-100/50 border-b border-stone-200 text-sm uppercase tracking-wider">
                      <th className="py-4 px-6 text-stone-800 font-medium w-1/3">Commercial Phase</th>
                      <th className="py-4 px-6 text-stone-800 font-medium">Execution Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-sm">
                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Agreements & Scopes</td>
                      <td className="py-4 px-6">Project parameters are defined solely through formalized, legally binding contracts (Statements of Work or Master Service Agreements).</td>
                    </tr>
                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Invoicing & Communication</td>
                      <td className="py-4 px-6">All financial requests, payment schedules, and invoices are explicitly communicated via official corporate email channels prior to kickoff.</td>
                    </tr>
                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Payment Remittance</td>
                      <td className="py-4 px-6">Processed securely off-site via mutually agreed-upon bank wire transfers, ACH, or secure corporate payment gateways.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Acceptable Use (Table) */}
            <div>
              <h2 className="text-xl font-medium text-stone-900 mb-6">3. Platform Usage Guidelines</h2>
              <div className="overflow-x-auto border border-stone-200 rounded-sm bg-white">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-stone-100/50 border-b border-stone-200 text-sm uppercase tracking-wider">
                      <th className="py-4 px-6 text-stone-800 font-medium w-1/3">Rule Category</th>
                      <th className="py-4 px-6 text-stone-800 font-medium">Description & Expectation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-sm">
                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Lawful Purpose</td>
                      <td className="py-4 px-6">Our systems, infrastructure, and custom software must not be used to host, distribute, or promote illegal content.</td>
                    </tr>
                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">System Integrity</td>
                      <td className="py-4 px-6">Users may not attempt to reverse-engineer, overload, or stress-test our infrastructure without explicit written authorization.</td>
                    </tr>
                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Data Scraping</td>
                      <td className="py-4 px-6">Automated extraction, spidering, or scraping of our website's proprietary code, designs, or data is strictly prohibited.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Intellectual Property & Liability */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-stone-200 pt-10">
              <div>
                <h2 className="text-lg font-medium text-stone-900 mb-3">4. Intellectual Property</h2>
                <p className="text-sm leading-relaxed text-stone-600">
                  All foundational codebases, structural branding, visual assets, and proprietary methodologies displayed on this site are the exclusive property of BodhiX. You may not reproduce, distribute, or create derivative works without prior formalized consent. Client-specific IP transfers occur only per contractual SOWs.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-medium text-stone-900 mb-3">5. Limitation of Liability</h2>
                <p className="text-sm leading-relaxed text-stone-600">
                  BodhiX provisions this informational website "as is." To the maximum extent permitted by law, we disclaim liability for any indirect, incidental, or consequential damages—including data loss or revenue interruption—resulting from your reliance on, or inability to access, this public platform.
                </p>
              </div>
            </div>

            {/* Modifications & Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
              <div>
                <h2 className="text-lg font-medium text-stone-900 mb-3">6. Modifications</h2>
                <p className="text-sm leading-relaxed text-stone-600">
                  We reserve the right to amend these Terms at any time to reflect changing technical capabilities or legal requirements. Continued use of our website or active engagement in our services constitutes your acceptance of the revised conditions.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-medium text-stone-900 mb-3">7. Legal Contact</h2>
                <p className="text-sm leading-relaxed text-stone-600 mb-4">
                  For contract inquiries, IP permission requests, or questions regarding these Terms, please contact our legal department:
                </p>
                <div className="border-l-2 border-stone-300 pl-4 text-sm text-stone-800 bg-stone-100/50 py-2 pr-2">
                  <p><strong className="text-stone-900 font-medium">Email:</strong> bodhi.x@yahoo.com</p>
                  <p className="mt-1"><strong className="text-stone-900 font-medium">Phone:</strong> +91 90994 27027</p>
                </div>
              </div>
            </div>

          </section>
        </div>
        
        <Footer />
      </main>
    </PageTransition>
  );
};

export default TermsPage;
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

            {/* UPDATED: Service-Specific Terms (Mapped to your 9 services) */}
            <div>
              <h2 className="text-xl font-medium text-stone-900 mb-6">1. Service-Specific Terms & Limitations</h2>
              <p className="mb-6">
                BodhiX provides a diverse suite of specialized technical solutions. The following operational guidelines and liability limitations apply strictly based on the specific services you commission:
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
                      <td className="py-4 px-6 font-medium text-stone-800">API-as-a-Service</td>
                      <td className="py-4 px-6">Subject to strict rate limiting and fair-use policies. Clients must actively secure their API keys and access tokens.</td>
                      <td className="py-4 px-6">BodhiX is not liable for data breaches or excess usage fees resulting from exposed client keys or unauthorized downstream access.</td>
                    </tr>

                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Autonomous Decision Engines (RL)</td>
                      <td className="py-4 px-6">Models learn dynamically based on historical and live data. Performance requires a continuous training lifecycle.</td>
                      <td className="py-4 px-6">We do not guarantee specific business outcomes. BodhiX is not liable for unexpected model behaviors triggered by anomalous edge-case data.</td>
                    </tr>

                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Cloud Infrastructure</td>
                      <td className="py-4 px-6">Built on third-party providers (e.g., AWS, GCP). Usage costs are passed to the client unless otherwise contracted.</td>
                      <td className="py-4 px-6">We guarantee architecture integrity but cannot be held liable for upstream outages, hardware failures, or data loss by cloud providers.</td>
                    </tr>

                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Custom Software & Dashboards</td>
                      <td className="py-4 px-6">Delivered per SOW specifications. Real-time data streams rely on the availability of integrated third-party sources.</td>
                      <td className="py-4 px-6">Post-launch bug fixes are limited to the agreed warranty period. We are not liable for data inaccuracies caused by external source APIs.</td>
                    </tr>

                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">DApps (Decentralized Apps)</td>
                      <td className="py-4 px-6">Interacts with immutable blockchain networks. Clients must ensure thorough third-party auditing of smart contracts pre-launch.</td>
                      <td className="py-4 px-6">BodhiX holds no liability for lost digital assets, gas fee fluctuations, end-user wallet mismanagement, or underlying protocol exploits.</td>
                    </tr>

                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Digital Marketing</td>
                      <td className="py-4 px-6">Clients must fund their ad spend directly to platforms. Campaigns are executed on approved, data-driven frameworks.</td>
                      <td className="py-4 px-6">BodhiX legally cannot guarantee specific ROI, sales figures, or immunity from unpredictable platform algorithm changes/bans.</td>
                    </tr>

                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Intelligent Autonomy (AI Agents)</td>
                      <td className="py-4 px-6">AI agents process natural language and execute workflows. Clients must implement human-in-the-loop safeguards for critical actions.</td>
                      <td className="py-4 px-6">BodhiX is not liable for AI "hallucinations," inaccurate automated responses, or actions taken by agents without proper human oversight.</td>
                    </tr>

                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Security Libraries</td>
                      <td className="py-4 px-6">FIPS-ready encryption and biometrics are provided as integration modules. Proper implementation is critical.</td>
                      <td className="py-4 px-6">No system is entirely impenetrable. BodhiX is not liable for breaches resulting from improper integration or client-side vulnerabilities.</td>
                    </tr>

                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Shopify Design & Dev</td>
                      <td className="py-4 px-6">Built on the Shopify ecosystem. Functionality may rely on third-party apps and specific Shopify subscription tiers.</td>
                      <td className="py-4 px-6">BodhiX is not responsible for Shopify platform downtime, third-party app conflicts, or gateway processing errors.</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>

            {/* Commercial & Payment Terms */}
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

            {/* Acceptable Use */}
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
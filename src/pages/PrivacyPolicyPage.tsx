import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const PrivacyPolicyPage = () => {
  return (
    <PageTransition>
      <main className="bg-stone-50 min-h-screen selection:bg-stone-200 selection:text-stone-900">
        <Navbar />
        
        {/* Increased width to max-w-5xl (1024px) for wider content spread */}
        <div className="pt-32 px-6 lg:px-12 max-w-5xl mx-auto pb-24 font-sans">
          
          {/* Header Section */}
          <div className="mb-14 border-b border-stone-200 pb-8">
            <h1 className="text-3xl md:text-4xl font-normal text-stone-900 tracking-tight">
              Privacy Policy
            </h1>
          </div>

          {/* Policy Content */}
          <section className="space-y-14 text-base leading-7 text-stone-600 font-light text-justify md:text-left">
            
            {/* Introduction */}
            <div>
              <p>
                BodhiX is fundamentally committed to protecting your personal, commercial, and operational data. This comprehensive policy governs our data practices across our entire ecosystem of services, ensuring strict compliance with major global data protection regulations including the GDPR (Europe), CCPA (California), DPDP Act (India), and POPIA (South Africa).
              </p>
            </div>

            {/* UPDATED: Service-Specific Data Handling (Mapped to your 9 services) */}
            <div>
              <h2 className="text-xl font-medium text-stone-900 mb-6">1. Service-Specific Data Handling</h2>
              <p className="mb-6">
                Because we provide a wide array of specialized technical solutions, the data we process depends heavily on the services you utilize. Below is a detailed breakdown of how data is handled across our service divisions:
              </p>
              <div className="overflow-x-auto border border-stone-200 rounded-sm bg-white">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-stone-100/50 border-b border-stone-200 text-sm uppercase tracking-wider">
                      <th className="py-4 px-6 text-stone-800 font-medium w-1/4">Service Division</th>
                      <th className="py-4 px-6 text-stone-800 font-medium w-1/3">Data Processed</th>
                      <th className="py-4 px-6 text-stone-800 font-medium">Purpose & Security Measure</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-sm">
                    
                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">API-as-a-Service</td>
                      <td className="py-4 px-6">API keys, authentication tokens, payload telemetry, and rate-limit logs.</td>
                      <td className="py-4 px-6">Processed solely for routing, uptime monitoring, and billing. Secured via end-to-end encryption and zero-trust verification.</td>
                    </tr>

                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Autonomous Decision Engines (RL)</td>
                      <td className="py-4 px-6">Historical client datasets, live environment feedback loops, and reward-signal data.</td>
                      <td className="py-4 px-6">Used exclusively to train and optimize client-specific models. Data is anonymized where possible and siloed strictly per client.</td>
                    </tr>

                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Cloud Infrastructure</td>
                      <td className="py-4 px-6">Server logs, resource utilization metrics, database schemas, and deployment variables.</td>
                      <td className="py-4 px-6">Used to maintain high-availability environments and auto-scaling. Protected by strict role-based access control (RBAC).</td>
                    </tr>

                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Custom Software & Dashboards</td>
                      <td className="py-4 px-6">User session states, workflow inputs, and aggregated third-party data streams.</td>
                      <td className="py-4 px-6">Processed to provide real-time operational clarity. User data is encrypted both at rest and in transit.</td>
                    </tr>

                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">DApps (Decentralized Apps)</td>
                      <td className="py-4 px-6">Public wallet addresses, transaction hashes, and smart contract interaction logs.</td>
                      <td className="py-4 px-6">Necessary for blockchain interaction. BodhiX never stores, requests, or processes private keys or seed phrases on our servers.</td>
                    </tr>

                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Digital Marketing</td>
                      <td className="py-4 px-6">Conversion pixels, campaign tracking parameters, and audience segmentation data.</td>
                      <td className="py-4 px-6">Used strictly for calculating ROI and campaign efficacy. We never sell audience profiles or remarketing lists to third parties.</td>
                    </tr>

                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Intelligent Autonomy (AI Agents)</td>
                      <td className="py-4 px-6">Natural language prompts, conversational context, and automated workflow execution logs.</td>
                      <td className="py-4 px-6">Used to execute logic and manage interactions. Personally Identifiable Information (PII) is masked before being processed by LLMs.</td>
                    </tr>

                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Security Libraries</td>
                      <td className="py-4 px-6">Biometric hashes, cryptographic keys, and authentication access logs.</td>
                      <td className="py-4 px-6">Handled client-side whenever possible to ensure FIPS compliance. Sensitive authentication data is never stored in plaintext.</td>
                    </tr>

                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Shopify Design & Dev</td>
                      <td className="py-4 px-6">E-commerce analytics, anonymized checkout flows, and customer journey maps.</td>
                      <td className="py-4 px-6">Utilized to optimize UX and maximize storefront conversions. Handled securely within Shopify's compliant ecosystem guidelines.</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>

            {/* General Information Collection */}
            <div>
              <h2 className="text-xl font-medium text-stone-900 mb-6">2. Standard Information We Collect</h2>
              <div className="overflow-x-auto border border-stone-200 rounded-sm bg-white">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-stone-100/50 border-b border-stone-200 text-sm uppercase tracking-wider">
                      <th className="py-4 px-6 text-stone-800 font-medium w-1/3">Category</th>
                      <th className="py-4 px-6 text-stone-800 font-medium">Data Points</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-sm">
                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Direct Identifiers</td>
                      <td className="py-4 px-6">Name, professional email address, corporate phone number, and billing contacts.</td>
                    </tr>
                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Automated Technical Data</td>
                      <td className="py-4 px-6">IP address, browser type, operating system, and essential security cookies.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Data Sharing & Subprocessors */}
            <div>
              <h2 className="text-xl font-medium text-stone-900 mb-4">3. Data Sharing & Subprocessors</h2>
              <p className="mb-4">
                BodhiX operates on a strict <strong className="text-stone-900 font-medium">no-sale policy</strong>. Your personal and corporate data is never sold to data brokers or third-party advertisers. 
              </p>
              <p>
                To provide enterprise-grade services, we occasionally share encrypted data with trusted sub-processors (such as AWS for cloud hosting, Vercel for frontend deployment, or Stripe for secure invoicing). These vendors are legally bound by strict Data Processing Agreements (DPAs) that prohibit them from using your data for any purpose other than providing the contracted infrastructure.
              </p>
            </div>

            {/* Regional Rights */}
            <div>
              <h2 className="text-xl font-medium text-stone-900 mb-6">4. Global Privacy Rights</h2>
              <div className="overflow-x-auto border border-stone-200 rounded-sm bg-white">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-stone-100/50 border-b border-stone-200 text-sm uppercase tracking-wider">
                      <th className="py-4 px-6 text-stone-800 font-medium w-1/3">Jurisdiction</th>
                      <th className="py-4 px-6 text-stone-800 font-medium">User Rights & Guarantees</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-sm">
                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">EU & UK (GDPR)</td>
                      <td className="py-4 px-6">Right to access, rectify, erase ("Right to be Forgotten"), restrict processing, and data portability.</td>
                    </tr>
                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">United States (CCPA/CPRA)</td>
                      <td className="py-4 px-6">Right to know exactly what data is collected, delete data, and opt-out of data sharing (BodhiX does not sell data).</td>
                    </tr>
                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">India (DPDP Act)</td>
                      <td className="py-4 px-6">Right to access a processing summary, request corrections, withdraw consent, and utilize a dedicated grievance mechanism.</td>
                    </tr>
                    <tr className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">Australia & South Africa</td>
                      <td className="py-4 px-6">Right to access/correct personal information and lodge formal complaints with relevant national regulatory bodies.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Security, Retention & Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-stone-200 pt-10">
              <div>
                <h2 className="text-lg font-medium text-stone-900 mb-3">5. Data Retention & Destruction</h2>
                <p className="text-sm leading-relaxed text-stone-600">
                  Client data, including source code, design assets, and analytics metrics, is retained only for the duration of the active contract plus a standard 90-day grace period to allow for smooth offboarding. Following this period, all operational data is subjected to cryptographic erasure unless legally required to be maintained for tax or compliance auditing.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-medium text-stone-900 mb-3">6. Grievance & Contact Info</h2>
                <p className="text-sm leading-relaxed text-stone-600 mb-4">
                  If you wish to exercise your data rights, request an audit, or file a compliance grievance, please contact our Data Protection Officer:
                </p>
                <div className="border-l-2 border-stone-300 pl-4 text-sm text-stone-800 bg-stone-100/50 py-2 pr-2">
                  <p><strong className="text-stone-900 font-medium">Email:</strong> bodhi.x@yahoo.com</p>
                  <p className="mt-1"><strong className="text-stone-900 font-medium">Phone:</strong> +91 90994 27027</p>
                  <p className="mt-1"><strong className="text-stone-900 font-medium">SLA Response Time:</strong> Within 30 days</p>
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

export default PrivacyPolicyPage;
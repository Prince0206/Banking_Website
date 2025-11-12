import { motion } from "framer-motion";
import { Card } from "../components/ui/Card";

export const CompliancePage = () => {
  const securityFeatures = [
    {
      icon: "🔐",
      title: "End-to-End Encryption",
      description:
        "All data is encrypted using AES-256 encryption, both in transit and at rest.",
    },
    {
      icon: "🛡️",
      title: "Multi-Factor Authentication",
      description:
        "Multiple layers of authentication protect your account from unauthorized access.",
    },
    {
      icon: "🔍",
      title: "Fraud Detection",
      description:
        "AI-powered systems monitor transactions 24/7 to detect and prevent fraud.",
    },
    {
      icon: "📱",
      title: "Biometric Security",
      description:
        "Fingerprint and face recognition add an extra layer of protection.",
    },
    {
      icon: "🔄",
      title: "Regular Security Audits",
      description:
        "Third-party security audits ensure our systems meet the highest standards.",
    },
    {
      icon: "⚡",
      title: "Real-Time Alerts",
      description:
        "Instant notifications for all account activities keep you informed.",
    },
  ];

  const compliance = [
    {
      standard: "FDIC Insured",
      description: "Your deposits are insured up to $250,000",
    },
    {
      standard: "PCI DSS Compliant",
      description: "Payment Card Industry Data Security Standard certified",
    },
    {
      standard: "SOC 2 Type II",
      description: "Independently audited security controls",
    },
    {
      standard: "GDPR Compliant",
      description: "Full compliance with data protection regulations",
    },
    {
      standard: "ISO 27001",
      description: "International standard for information security",
    },
    {
      standard: "Bank Secrecy Act",
      description: "Full compliance with anti-money laundering regulations",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">Compliance & Security</h1>
            <p className="text-xl text-teal-200">
              Your security is our priority. We employ industry-leading
              technology and adhere to the strictest regulatory standards to
              protect your financial data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 px-4 bg-silver-50">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-navy-800 text-center mb-12"
          >
            Security Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-navy-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-silver-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-navy-800 text-center mb-12"
          >
            Regulatory Compliance
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {compliance.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="outlined" className="h-full">
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h3 className="text-lg font-bold text-navy-800 mb-1">
                        {item.standard}
                      </h3>
                      <p className="text-silver-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-silver-50">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-navy-800 text-center mb-12"
          >
            Security FAQs
          </motion.h2>
          <div className="space-y-6">
            {[
              {
                q: "How is my data protected?",
                a: "We use military-grade AES-256 encryption for all data, both in transit and at rest. Our systems are monitored 24/7 by security experts.",
              },
              {
                q: "What happens if I suspect fraud?",
                a: "Contact us immediately at 1-800-REGTECH. We have a dedicated fraud team available 24/7 to investigate and resolve issues.",
              },
              {
                q: "Are my deposits insured?",
                a: "Yes, all deposits are FDIC insured up to $250,000 per depositor, per account ownership category.",
              },
              {
                q: "How often are security audits performed?",
                a: "We conduct internal security audits monthly and undergo third-party penetration testing quarterly.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <h3 className="text-lg font-bold text-navy-800 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-silver-600">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

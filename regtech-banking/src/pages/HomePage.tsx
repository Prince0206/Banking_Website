import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";

export const HomePage = () => {
  const features = [
    {
      icon: "🔒",
      title: "Bank-Grade Security",
      description:
        "Military-grade encryption and multi-factor authentication protect your assets 24/7.",
    },
    {
      icon: "⚡",
      title: "Instant Transactions",
      description:
        "Real-time processing powered by cutting-edge RegTech infrastructure.",
    },
    {
      icon: "📊",
      title: "Smart Insights",
      description:
        "AI-driven analytics help you make informed financial decisions.",
    },
    {
      icon: "🌐",
      title: "Global Access",
      description:
        "Manage your finances from anywhere with our secure mobile and web platforms.",
    },
    {
      icon: "✓",
      title: "Regulatory Compliance",
      description:
        "Full adherence to banking regulations and industry standards.",
    },
    {
      icon: "💼",
      title: "Business Solutions",
      description: "Tailored banking services for businesses of all sizes.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-teal-900">
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(0,175,175,0.3) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Banking You Can Trust
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-teal-200 mb-12"
          >
            Powered by Innovation
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/portal">
              <Button variant="accent" className="text-lg px-8 py-4">
                Login to Portal
              </Button>
            </Link>
            <Link to="/products">
              <Button
                variant="ghost"
                className="text-lg px-8 py-4 text-white border-white hover:bg-white/10"
              >
                Explore Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" className="text-lg px-8 py-4">
                Get Support
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-silver-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy-800 mb-4">
              Why Choose RegTech Bank?
            </h2>
            <p className="text-lg text-silver-600 max-w-2xl mx-auto">
              Experience the future of banking with our innovative platform
              designed for security, speed, and simplicity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <div className="text-4xl mb-4">{feature.icon}</div>
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-navy-700 to-teal-700">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Join thousands of customers who trust RegTech Bank with their
              financial future.
            </p>
            <Link to="/products">
              <Button variant="secondary" className="text-lg px-8 py-4">
                Open an Account Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

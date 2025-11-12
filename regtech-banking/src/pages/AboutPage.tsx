import { motion } from "framer-motion";
import { Card } from "../components/ui/Card";

export const AboutPage = () => {
  const milestones = [
    {
      year: "2015",
      title: "Founded",
      description:
        "RegTech Bank established with a vision to revolutionize banking",
    },
    {
      year: "2017",
      title: "Digital Platform Launch",
      description: "Launched our award-winning mobile and web banking platform",
    },
    {
      year: "2019",
      title: "AI Integration",
      description:
        "Introduced AI-powered financial insights and fraud detection",
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Expanded services to 50+ countries worldwide",
    },
    {
      year: "2023",
      title: "1M Customers",
      description:
        "Reached milestone of serving over 1 million satisfied customers",
    },
    {
      year: "2025",
      title: "Innovation Leader",
      description: "Recognized as industry leader in RegTech innovation",
    },
  ];

  const values = [
    {
      icon: "🛡️",
      title: "Security First",
      description: "Your data protection is our top priority",
    },
    {
      icon: "🤝",
      title: "Customer-Centric",
      description: "Every decision is made with you in mind",
    },
    {
      icon: "⚖️",
      title: "Compliance",
      description: "Full adherence to all regulatory standards",
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Constantly evolving to serve you better",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-navy-800 to-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 glass-panel opacity-10" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">About RegTech Bank</h1>
            <p className="text-xl text-teal-200 leading-relaxed">
              We're pioneering the future of banking through innovative
              technology, unwavering security, and a customer-first approach.
              Our mission is to provide secure, compliant, and accessible
              financial services that empower individuals and businesses to
              achieve their financial goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-silver-50">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-navy-800 text-center mb-12"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="text-center h-full">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-navy-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-silver-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-navy-800 text-center mb-16"
          >
            Our Journey
          </motion.h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-6"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-teal-600">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-teal-500 rounded-full" />
                <Card className="flex-1">
                  <h3 className="text-xl font-bold text-navy-800 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-silver-600">{milestone.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

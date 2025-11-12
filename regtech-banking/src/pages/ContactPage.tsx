import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const branches = [
    {
      name: "Downtown Branch",
      address: "123 Main Street, New York, NY 10001",
      phone: "(212) 555-0100",
    },
    {
      name: "Midtown Branch",
      address: "456 Park Avenue, New York, NY 10022",
      phone: "(212) 555-0200",
    },
    {
      name: "Brooklyn Branch",
      address: "789 Atlantic Ave, Brooklyn, NY 11217",
      phone: "(718) 555-0300",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-navy-800 to-teal-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">Contact & Support</h1>
            <p className="text-xl text-teal-100">
              We're here to help. Reach out through any of our channels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 bg-silver-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-navy-800 mb-2">Phone</h3>
                <p className="text-silver-600 mb-2">Available 24/7</p>
                <p className="text-teal-600 font-bold text-lg">1-800-REGTECH</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="text-center h-full">
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="text-xl font-bold text-navy-800 mb-2">Email</h3>
                <p className="text-silver-600 mb-2">Response within 24 hours</p>
                <p className="text-teal-600 font-bold">
                  support@regtechbank.com
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="text-center h-full">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-navy-800 mb-2">
                  Live Chat
                </h3>
                <p className="text-silver-600 mb-2">Instant support</p>
                <Button variant="accent" className="mt-2">
                  Start Chat
                </Button>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <h2 className="text-2xl font-bold text-navy-800 mb-6">
                  Send us a Message
                </h2>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-teal-600 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-silver-600">
                      We'll get back to you within 24 hours.
                    </p>
                    <Button
                      variant="ghost"
                      className="mt-4"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-silver-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent focus:outline-none transition-all"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="accent"
                      className="w-full"
                      isLoading={isSubmitting}
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>

            {/* Branch Locations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-navy-800 mb-6">
                Branch Locations
              </h2>
              <div className="space-y-4">
                {branches.map((branch, index) => (
                  <Card key={index}>
                    <h3 className="text-lg font-bold text-navy-800 mb-2">
                      {branch.name}
                    </h3>
                    <p className="text-silver-600 mb-1">{branch.address}</p>
                    <p className="text-teal-600 font-semibold">
                      {branch.phone}
                    </p>
                  </Card>
                ))}
              </div>

              <Card className="mt-6 bg-navy-50">
                <h3 className="text-lg font-bold text-navy-800 mb-2">
                  Business Hours
                </h3>
                <div className="space-y-1 text-silver-700">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                  <p className="text-teal-600 font-semibold mt-2">
                    24/7 Phone & Online Support
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

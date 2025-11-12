import { motion } from "framer-motion";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

export const ProductsPage = () => {
  const products = [
    {
      category: "Savings Accounts",
      items: [
        {
          name: "High-Yield Savings",
          rate: "4.5% APY",
          minBalance: "$100",
          features: [
            "No monthly fees",
            "FDIC insured",
            "Mobile banking",
            "24/7 access",
          ],
        },
        {
          name: "Premium Savings",
          rate: "5.0% APY",
          minBalance: "$10,000",
          features: [
            "Higher interest rate",
            "Priority support",
            "Free wire transfers",
            "Dedicated advisor",
          ],
        },
      ],
    },
    {
      category: "Loans",
      items: [
        {
          name: "Personal Loan",
          rate: "From 6.99% APR",
          minBalance: "N/A",
          features: [
            "Up to $50,000",
            "Flexible terms",
            "Quick approval",
            "No prepayment penalty",
          ],
        },
        {
          name: "Home Mortgage",
          rate: "From 5.5% APR",
          minBalance: "N/A",
          features: [
            "Competitive rates",
            "15-30 year terms",
            "First-time buyer programs",
            "Expert guidance",
          ],
        },
      ],
    },
    {
      category: "Investment",
      items: [
        {
          name: "Investment Account",
          rate: "Variable returns",
          minBalance: "$1,000",
          features: [
            "Diversified portfolio",
            "Professional management",
            "Tax-advantaged options",
            "Regular reporting",
          ],
        },
        {
          name: "Retirement Planning",
          rate: "Customized",
          minBalance: "$5,000",
          features: [
            "IRA options",
            "Tax benefits",
            "Retirement calculator",
            "Financial planning",
          ],
        },
      ],
    },
    {
      category: "Digital Banking",
      items: [
        {
          name: "Mobile Banking App",
          rate: "Free",
          minBalance: "N/A",
          features: [
            "Instant transfers",
            "Bill pay",
            "Mobile check deposit",
            "Biometric security",
          ],
        },
        {
          name: "Business Banking",
          rate: "Custom pricing",
          minBalance: "Varies",
          features: [
            "Merchant services",
            "Payroll integration",
            "Multi-user access",
            "API integration",
          ],
        },
      ],
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
            <h1 className="text-5xl font-bold mb-6">Products & Services</h1>
            <p className="text-xl text-teal-100">
              Comprehensive financial solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-silver-50">
        <div className="container mx-auto max-w-6xl">
          {products.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-navy-800 mb-8">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((product, productIndex) => (
                  <Card key={productIndex} hover>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-navy-800">
                        {product.name}
                      </h3>
                      <span className="text-teal-600 font-bold text-lg">
                        {product.rate}
                      </span>
                    </div>
                    {product.minBalance !== "N/A" && (
                      <p className="text-silver-600 mb-4">
                        Minimum Balance: {product.minBalance}
                      </p>
                    )}
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-silver-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="accent" className="w-full">
                      Learn More
                    </Button>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy-800 mb-6">
              Need Help Choosing?
            </h2>
            <p className="text-lg text-silver-600 mb-8">
              Our financial advisors are ready to help you find the perfect
              product for your needs.
            </p>
            <Button variant="primary" className="text-lg px-8 py-4">
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

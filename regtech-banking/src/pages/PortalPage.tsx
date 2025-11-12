import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

export const PortalPage = () => {
  const { user, isAuthenticated, login, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await login(email, password);
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isAuthenticated && user) {
    return <Dashboard user={user} onLogout={logout} />;
  }

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center px-4 bg-gradient-to-br from-navy-900 to-navy-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card variant="solid">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-navy-800 mb-2">
              Customer Portal
            </h1>
            <p className="text-silver-600">Sign in to access your account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              error={error}
            />

            <Button
              type="submit"
              variant="accent"
              className="w-full"
              isLoading={isLoading}
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-silver-600">
            <a href="#" className="text-teal-600 hover:text-teal-700">
              Forgot password?
            </a>
            <span className="mx-2">•</span>
            <a href="#" className="text-teal-600 hover:text-teal-700">
              Create account
            </a>
          </div>

          <div className="mt-6 p-4 bg-navy-50 rounded-lg">
            <p className="text-xs text-silver-600 text-center">
              🔒 Your connection is secured with 256-bit encryption
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

const Dashboard = ({ user, onLogout }: { user: any; onLogout: () => void }) => {
  const accounts = [
    {
      id: "1",
      type: "Checking",
      number: "****1234",
      balance: 5420.5,
      status: "active",
    },
    {
      id: "2",
      type: "Savings",
      number: "****5678",
      balance: 12350.75,
      status: "active",
    },
    {
      id: "3",
      type: "Investment",
      number: "****9012",
      balance: 45200.0,
      status: "active",
    },
  ];

  const recentTransactions = [
    {
      id: "1",
      description: "Grocery Store",
      amount: -85.32,
      date: "2025-11-12",
      type: "debit",
    },
    {
      id: "2",
      description: "Salary Deposit",
      amount: 3500.0,
      date: "2025-11-10",
      type: "credit",
    },
    {
      id: "3",
      description: "Electric Bill",
      amount: -120.0,
      date: "2025-11-09",
      type: "debit",
    },
    {
      id: "4",
      description: "Online Transfer",
      amount: -500.0,
      date: "2025-11-08",
      type: "debit",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-silver-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-navy-800">
              Welcome back, {user.firstName}!
            </h1>
            <p className="text-silver-600">Here's your financial overview</p>
          </div>
          <Button variant="ghost" onClick={onLogout}>
            Sign Out
          </Button>
        </div>

        {/* Account Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {accounts.map((account, index) => (
            <motion.div
              key={account.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-silver-600">{account.type}</p>
                    <p className="text-xs text-silver-500">{account.number}</p>
                  </div>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full">
                    {account.status}
                  </span>
                </div>
                <p className="text-3xl font-bold text-navy-800">
                  $
                  {account.balance.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="mb-8">
          <h2 className="text-xl font-bold text-navy-800 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button
              variant="outlined"
              className="flex flex-col items-center py-4"
            >
              <span className="text-2xl mb-2">💸</span>
              <span className="text-sm">Transfer</span>
            </Button>
            <Button
              variant="outlined"
              className="flex flex-col items-center py-4"
            >
              <span className="text-2xl mb-2">💳</span>
              <span className="text-sm">Pay Bills</span>
            </Button>
            <Button
              variant="outlined"
              className="flex flex-col items-center py-4"
            >
              <span className="text-2xl mb-2">📱</span>
              <span className="text-sm">Deposit</span>
            </Button>
            <Button
              variant="outlined"
              className="flex flex-col items-center py-4"
            >
              <span className="text-2xl mb-2">📊</span>
              <span className="text-sm">Reports</span>
            </Button>
          </div>
        </Card>

        {/* Recent Transactions */}
        <Card>
          <h2 className="text-xl font-bold text-navy-800 mb-4">
            Recent Transactions
          </h2>
          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex justify-between items-center py-3 border-b border-silver-200 last:border-0"
              >
                <div>
                  <p className="font-medium text-navy-800">
                    {transaction.description}
                  </p>
                  <p className="text-sm text-silver-600">{transaction.date}</p>
                </div>
                <p
                  className={`font-bold ${
                    transaction.type === "credit"
                      ? "text-teal-600"
                      : "text-navy-800"
                  }`}
                >
                  {transaction.type === "credit" ? "+" : "-"}$
                  {Math.abs(transaction.amount).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          <Button variant="ghost" className="w-full mt-4">
            View All Transactions
          </Button>
        </Card>
      </div>
    </div>
  );
};

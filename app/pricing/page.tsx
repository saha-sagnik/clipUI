"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for personal projects and learning",
    features: [
      "Access to basic components",
      "Copy-paste code snippets",
      "Community support",
      "Basic templates",
      "Personal use only"
    ],
    limitations: [
      "No premium components",
      "No commercial use",
      "Limited templates"
    ],
    cta: "Get Started",
    popular: false,
    color: "border-border"
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "For professionals and small teams",
    features: [
      "All Free features",
      "Premium components library",
      "Advanced templates",
      "Priority support",
      "Commercial use",
      "Figma design files",
      "Regular updates"
    ],
    limitations: [],
    cta: "Start Pro Trial",
    popular: true,
    color: "border-primary"
  },
  {
    name: "Team",
    price: "$49",
    period: "per month",
    description: "For teams and organizations",
    features: [
      "All Pro features",
      "Unlimited team members",
      "Team collaboration tools",
      "Custom component requests",
      "Dedicated support",
      "White-label options",
      "API access",
      "Custom integrations"
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false,
    color: "border-border"
  }
];

const faqs = [
  {
    question: "Can I change my plan anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll refund your payment."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a 14-day free trial for the Pro plan. No credit card required to start."
  },
  {
    question: "Can I use components commercially?",
    answer: "Yes, with Pro and Team plans, you can use all components in commercial projects without any restrictions."
  },
  {
    question: "Do you provide support?",
    answer: "Free plan includes community support. Pro and Team plans include priority email support with faster response times."
  }
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = React.useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 pt-24 pb-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent mb-4">
            Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the plan that fits your needs. All plans include our core component library.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`transition-colors ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                isYearly ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  isYearly ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`transition-colors ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            <span className="px-2 py-1 text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
              Save 20%
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`relative bg-card border-2 ${plan.color} rounded-lg p-8 ${
                plan.popular ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">
                    {plan.name === "Free" ? plan.price : isYearly ? `$${parseInt(plan.price.slice(1)) * 10}` : plan.price}
                  </span>
                  {plan.name !== "Free" && (
                    <span className="text-muted-foreground ml-2">
                      {isYearly ? "per year" : plan.period}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                {plan.limitations.map((limitation) => (
                  <div key={limitation} className="flex items-center gap-3">
                    <FaTimes className="text-red-500 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{limitation}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border border-border hover:bg-muted'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

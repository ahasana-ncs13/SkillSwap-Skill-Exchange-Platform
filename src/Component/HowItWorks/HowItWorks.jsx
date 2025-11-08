import React from "react";
import { Lightbulb, Search, Calendar, Star } from "lucide-react";

const steps = [
  {
    icon: <Lightbulb className="w-10 h-10 text-blue-600" />,
    title: "Create Your Profile",
    desc: "Sign up and showcase the skills you can teach or want to learn.",
  },
  {
    icon: <Search className="w-10 h-10 text-blue-600" />,
    title: "Browse Local Skills",
    desc: "Explore nearby listings — from music and yoga to coding and cooking.",
  },
  {
    icon: <Calendar className="w-10 h-10 text-blue-600" />,
    title: "Connect & Schedule",
    desc: "Chat with providers, set a time, and start your skill exchange journey.",
  },
  {
    icon: <Star className="w-10 h-10 text-blue-600" />,
    title: "Rate & Grow Together",
    desc: "Share feedback after your session to help others find the best matches.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">How It Works</h2>
        <p className="text-gray-600 mb-12">
          SkillSwap makes it simple to connect, learn, and grow through local skill sharing.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-sm hover:shadow-md bg-sky-100"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

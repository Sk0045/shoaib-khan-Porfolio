"use client";

import React, { useEffect, useState } from "react";
import { Code, Globe, Server, Cloud, Smartphone, Shield } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description:
      "Modern, responsive and user-friendly interfaces using React, Next.js and Tailwind CSS.",
    icon: Code,
  },
  {
    title: "Backend Development",
    description:
      "Scalable backend APIs using Node.js, Express.js, NestJS and MongoDB.",
    icon: Server,
  },
  {
    title: "Full Stack Web Apps",
    description:
      "Complete web applications from UI to backend with authentication and APIs.",
    icon: Globe,
  },
  {
    title: "Cloud Deployment",
    description:
      "Deploying and scaling applications on Vercel, AWS and cloud platforms.",
    icon: Cloud,
  },
  {
    title: "Mobile-Friendly Design",
    description:
      "Optimized layouts for mobile, tablet and desktop devices.",
    icon: Smartphone,
  },
  {
    title: "Security & Performance",
    description:
      "Secure, fast and optimized applications with best practices.",
    icon: Shield,
  },
];

const Services: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="services"
      className={`py-20 px-6 sm:px-10 transition-all duration-1000 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl text-center font-semibold text-[#14279B]">
        My Services
      </h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 rounded-xl p-6 text-center"
            >
              <div className="mb-4 flex items-center justify-center h-16 w-16 mx-auto rounded-full bg-blue-50">
                <Icon className="w-8 h-8 text-[#14279B]" />
              </div>

              <h3 className="text-lg font-semibold text-[#14279B]">
                {service.title}
              </h3>

              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;

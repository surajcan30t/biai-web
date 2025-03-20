import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const Services = () => {
  return (
    <section id="services" className="py-0">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-3xl text-xl mx-auto">
            We offer comprehensive solutions across multiple domains to help
            businesses leverage emerging technologies.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-[400px] w-[400px] rounded-full bg-gradient-to-br from-purple-200 to-blue-200 dark:from-purple-900 dark:to-blue-900">
            <div className="absolute inset-4 rounded-full bg-gray-900 flex items-center justify-center">
              <div className="relative h-[300px] w-[300px]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-16 w-16 rounded-full bg-purple-600 flex items-center justify-center text-white">
                  AI
                </div>
                <div className="absolute top-1/4 right-0 h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  IoT
                </div>
                <div className="absolute bottom-1/4 right-1/4 h-12 w-12 rounded-full bg-green-600 flex items-center justify-center text-white">
                  Bio
                </div>
                <div className="absolute bottom-0 left-1/3 h-16 w-16 rounded-full bg-amber-600 flex items-center justify-center text-white">
                  Cloud
                </div>
                <div className="absolute top-1/3 left-0 h-14 w-14 rounded-full bg-red-600 flex items-center justify-center text-white">
                  VLSI
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "AI Integration",
              description:
                "Seamlessly integrate AI into your existing systems and processes to enhance efficiency and decision-making.",
              icon: "🧠",
            },
            {
              title: "Digital Transformation",
              description:
                "Transform your business with end-to-end digital solutions that drive growth and innovation.",
              icon: "🔄",
            },
            {
              title: "Cloud Computing",
              description:
                "Leverage the power of cloud infrastructure for scalable, secure, and cost-effective operations.",
              icon: "☁️",
            },
            {
              title: "Data Analytics",
              description:
                "Extract valuable insights from your data to inform strategic decisions and identify opportunities.",
              icon: "📊",
            },
            {
              title: "Automation Solutions",
              description:
                "Streamline operations with intelligent automation that reduces costs and improves accuracy.",
              icon: "⚙️",
            },
            {
              title: "VLSI & Chip Design",
              description:
                "Custom semiconductor solutions designed for your specific application requirements.",
              icon: "🔧",
            },
          ].map((service, index) => (
            <Card
              key={index}
              className="transition-all hover:scale-105 bg-transparent text-white"
            >
              <CardHeader>
                <div className="text-4xl mb-2 hover:scale-105">
                  {service.icon}
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="gap-1">
                  Learn more <ChevronRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

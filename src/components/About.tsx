import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";


const About = () => {
  return (
    <div className="flex flex-col justify-center">
      <section
        id="about"
        className="w-ufll py-5"
      >
        <div className="container">
          <div className="grid">
            <div className="flex flex-col justify-center space-y-6">
              <div className="">
                <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl md:text-5xl">
                  About BIAI
                </h2>
                <p className="mt-4 text-gray-100">
                  We are a passionate team of innovators, engineers, and
                  visionaries committed to exploring the limitless possibilities
                  of emerging technologies. Our mission is to leverage
                  cutting-edge advancements to develop intelligent,
                  forward-thinking solutions that address complex business
                  challenges. By combining deep industry expertise with a
                  relentless drive for innovation, we strive to transform ideas
                  into impactful, scalable, and future-ready solutions that
                  empower businesses to thrive in an ever-evolving digital
                  landscape.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-purple-900 flex items-center justify-center text-purple-300">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Our Mission</h3>
                    <p className="text-gray-400">
                      To accelerate technological adoption across industries and
                      drive sustainable innovation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-900 flex items-center justify-center text-blue-300">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Our Vision</h3>
                    <p className="text-gray-400">
                      To create a future where technology enhances human
                      potential and solves global challenges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-green-900 flex items-center justify-center text-green-300">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Our Values</h3>
                    <p className="text-gray-400">
                      Innovation, integrity, collaboration, and a commitment to
                      creating positive impact.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="w-fit">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "500+", label: "Clients Worldwide" },
              { value: "150+", label: "Expert Team Members" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "200+", label: "Successful Projects" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

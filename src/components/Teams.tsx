import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Teams = () => {
  return (
    <div>
      <section id="case-studies" className="">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Our Team
            </h2>
            <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
              A team of passionate innovators, skilled engineers, and
              forward-thinking visionaries dedicated to pushing boundaries,
              solving complex challenges, and driving meaningful impact through
              collaboration, creativity, and cutting-edge technology.{" "}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Alex Smith",
                industry: "Manufacturing Head",
                description:
                  "Increased production efficiency by 35% through AI-powered automation and predictive maintenance.",
                image:
                  "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Ann Richmond",
                industry: "Automation Head",
                description:
                  "Developed a data analytics platform that improved patient outcomes and reduced operational costs by 28%.",
                image:
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=200&width=300",
              },
              {
                name: "Steven Strange",
                industry: "Healthcare Head",
                description:
                  "Implemented IoT sensors and AI analytics to increase crop yield by 40% while reducing water usage by 30%.",
                image:
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].map((study, index) => (
              <Card key={index} className="overflow-hidden bg-transparent">
                <div className="h-[30rem] overflow-hidden aspect-square w-full">
                  <img
                    src={study.image}
                    alt={study.name}
                    className="object-center rounded-xl"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-gray-400">{study.industry}</div>
                  <CardTitle className="text-white font-extrabold text-xl">
                    {study.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;

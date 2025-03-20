import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Technologies = () => {
  return (
    <div className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Emerging Technologies
          </h2>
          <p className="mt-4 max-w-3xl text-xl mx-auto">
            We specialize in a wide range of cutting-edge technologies that are
            reshaping industries worldwide.
          </p>
        </div>

        <Tabs defaultValue="digital" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
            <TabsTrigger value="ai">AI</TabsTrigger>
            <TabsTrigger value="biotech">Biotech</TabsTrigger>
            <TabsTrigger value="iot">IoT</TabsTrigger>
            <TabsTrigger value="cloud">Cloud</TabsTrigger>
            <TabsTrigger value="automation">Automation</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="vlsi">VLSI</TabsTrigger>
            <TabsTrigger value="digital">Digital</TabsTrigger>
          </TabsList>

          {[
            "ai",
            "biotech",
            "iot",
            "cloud",
            "automation",
            "analytics",
            "vlsi",
            "digital",
          ].map((tech) => (
            <TabsContent key={tech} value={tech} className="mt-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <img
                    src={tech === "ai"
                        ? "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        : tech === "biotech"
                        ? "https://images.unsplash.com/photo-1648792940059-3b782a7b8b20?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        : tech === "iot"
                        ? "https://images.unsplash.com/photo-1553341640-9397992456f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGludGVybmV0JTIwb2YlMjB0aGluZ3N8ZW58MHx8MHx8fDA%3D"
                        : tech === "vlsi"
                        ? "https://images.unsplash.com/photo-1592659762303-90081d34b277?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGNifGVufDB8fDB8fHww"
                        : tech === "digital"
                        ? "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMHRyYW5zZm9ybWF0aW9ufGVufDB8fDB8fHww"
                        : "https://plus.unsplash.com/premium_photo-1683836722608-60ab4d1b58e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWQlMjB0ZWNofGVufDB8fDB8fHww"}
                    alt={`${tech} technology visualization`}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold capitalize">
                    {tech === "ai"
                      ? "Artificial Intelligence"
                      : tech === "biotech"
                      ? "Biotechnology"
                      : tech === "iot"
                      ? "Sensor Technology"
                      : tech === "vlsi"
                      ? "VLSI & Chip Design"
                      : tech === "digital"
                      ? "Digital Transformation"
                      : tech.charAt(0).toUpperCase() + tech.slice(1)}
                  </h3>
                  <p className="">
                    {tech === "ai"
                      ? "Our AI solutions leverage machine learning, deep learning, and natural language processing to solve complex business problems."
                      : tech === "biotech"
                      ? "We integrate biotechnology with digital systems to create innovative solutions for healthcare and industrial applications."
                      : tech === "iot"
                      ? "Our sensor technology enables real-time data collection and monitoring for improved decision-making and automation."
                      : tech === "cloud"
                      ? "We provide scalable cloud computing solutions that enable businesses to innovate faster and reduce operational costs."
                      : tech === "automation"
                      ? "Our automation solutions streamline processes, reduce errors, and free up human resources for more strategic tasks."
                      : tech === "analytics"
                      ? "We transform raw data into actionable insights through advanced analytics and visualization techniques."
                      : tech === "vlsi"
                      ? "Our VLSI and chip design services create custom semiconductor solutions optimized for specific applications."
                      : "We guide businesses through digital transformation to enhance customer experiences and operational efficiency."}
                  </p>
                  <ul className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <span>
                          {tech === "ai"
                            ? [
                                "Machine Learning",
                                "Natural Language Processing",
                                "Computer Vision",
                              ][i - 1]
                            : tech === "biotech"
                            ? [
                                "Genomic Analysis",
                                "Bioinformatics",
                                "Synthetic Biology",
                              ][i - 1]
                            : tech === "iot"
                            ? [
                                "Smart Sensors",
                                "Real-time Monitoring",
                                "Edge Computing",
                              ][i - 1]
                            : tech === "cloud"
                            ? [
                                "Cloud Migration",
                                "Serverless Architecture",
                                "Multi-cloud Strategy",
                              ][i - 1]
                            : tech === "automation"
                            ? [
                                "Robotic Process Automation",
                                "Workflow Optimization",
                                "Intelligent Automation",
                              ][i - 1]
                            : tech === "analytics"
                            ? [
                                "Predictive Analytics",
                                "Big Data Processing",
                                "Business Intelligence",
                              ][i - 1]
                            : tech === "vlsi"
                            ? [
                                "Custom Chip Design",
                                "ASIC Development",
                                "System-on-Chip (SoC)",
                              ][i - 1]
                            : [
                                "Digital Strategy",
                                "Experience Design",
                                "Legacy Modernization",
                              ][i - 1]}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-fit">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Technologies;

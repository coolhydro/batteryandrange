
import MainLayout from "@/layout/MainLayout";
import Hero from "@/components/Hero";
import BatteryComparison from "@/components/BatteryComparison";
import RangeCalculator from "@/components/RangeCalculator";
import { BatteryCharging, Zap, PlugZap, Battery } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFeaturesVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }
    
    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  return (
    <MainLayout>
      <Hero />
      
      <section className="section-padding" ref={featuresRef}>
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div 
              className={`transition-all duration-700 ease-out transform ${
                isFeaturesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                Understand <span className="text-ev-blue">EV Technology</span>
              </h2>
              <p className="text-ev-gray-dark text-pretty leading-relaxed">
                Learn about the key factors that influence battery performance and range in electric vehicles.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Battery className="h-8 w-8 text-ev-blue" />,
                title: 'Battery Chemistry',
                description: 'Different battery chemistries offer varying energy density, performance, and longevity characteristics.',
                delay: 100
              },
              {
                icon: <BatteryCharging className="h-8 w-8 text-ev-blue" />,
                title: 'Charging Speed',
                description: 'Fast charging capability depends on battery design, thermal management, and charging infrastructure.',
                delay: 200
              },
              {
                icon: <Zap className="h-8 w-8 text-ev-blue" />,
                title: 'Energy Efficiency',
                description: 'How efficiently EVs convert stored energy into miles traveled impacts overall range performance.',
                delay: 300
              },
              {
                icon: <PlugZap className="h-8 w-8 text-ev-blue" />,
                title: 'Battery Management',
                description: 'Smart BMS systems optimize charging, discharging, and temperature control for maximum battery life.',
                delay: 400
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`glass-card rounded-2xl p-8 text-center transition-all duration-700 ease-out transform ${
                  isFeaturesVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${feature.delay}ms` }}
              >
                <div className="bg-ev-blue/10 rounded-full p-4 inline-block mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-ev-gray-dark">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <BatteryComparison />
      <RangeCalculator />

      <section className="section-padding">
        <div className="section-container">
          <div className="glass-card rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Stay Informed About <span className="text-ev-blue">Battery Technology</span>
            </h2>
            <p className="text-ev-gray-dark text-pretty leading-relaxed mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest updates on EV battery technology, range improvements, and charging innovations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-3 rounded-full border border-ev-gray-dark/20 focus:outline-none focus:ring-2 focus:ring-ev-blue flex-grow"
              />
              <button 
                className="px-6 py-3 rounded-full bg-ev-blue text-white font-medium button-transition"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;

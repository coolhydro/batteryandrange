
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, BatteryCharging } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center hero-background overflow-hidden" ref={heroRef}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-ev-blue/5 rounded-full filter blur-3xl animate-pulse-opacity" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-ev-blue-light/5 rounded-full filter blur-3xl animate-pulse-opacity" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-6 py-20 pt-32 md:pt-40 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 max-w-2xl">
            <div 
              className={`transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-ev-blue/10 text-ev-blue text-sm font-medium mb-6">
                <BatteryCharging className="w-4 h-4 mr-2" />
                <span>The future of electric mobility</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-balance leading-tight">
                Understanding <span className="text-ev-blue">EV Batteries</span> and Their Range
              </h1>
              
              <p className="mt-6 text-lg text-ev-gray-dark text-pretty leading-relaxed">
                Explore the technology behind electric vehicle batteries, how they determine range, and which EVs offer the best performance for your driving needs.
              </p>
            </div>
            
            <div 
              className={`transition-all duration-700 delay-300 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <a 
                href="#battery-comparison" 
                className="inline-flex items-center mt-8 px-6 py-3 rounded-full bg-ev-blue text-white font-medium button-transition"
              >
                <span>Compare Batteries</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div 
            className={`flex justify-center transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-blue opacity-10 blur-2xl transform animate-pulse-opacity" />
              <div className="relative glass-card rounded-3xl p-6 sm:p-8 w-full max-w-md">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-ev-black">Battery Status</h3>
                      <p className="text-sm text-ev-gray-dark">Standard Range</p>
                    </div>
                    <div className="bg-ev-blue/10 rounded-full p-3">
                      <BatteryCharging className="h-6 w-6 text-ev-blue" />
                    </div>
                  </div>
                  
                  <div className="battery-indicator">
                    <div className="battery-level animate-battery-charge" />
                    <div className="battery-tip" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-ev-gray-dark mb-1">Range</p>
                      <p className="text-xl font-medium">265 mi</p>
                    </div>
                    <div>
                      <p className="text-sm text-ev-gray-dark mb-1">Capacity</p>
                      <p className="text-xl font-medium">75 kWh</p>
                    </div>
                    <div>
                      <p className="text-sm text-ev-gray-dark mb-1">Charging</p>
                      <p className="text-xl font-medium">48 min</p>
                    </div>
                    <div>
                      <p className="text-sm text-ev-gray-dark mb-1">Efficiency</p>
                      <p className="text-xl font-medium">283 Wh/mi</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-ev-gray/50 p-4 rounded-xl">
                  <div className="text-sm">
                    <span className="text-ev-gray-dark">Optimal conditions can increase range by </span>
                    <span className="font-medium text-ev-black">up to 15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

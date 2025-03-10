
import { useState, useRef, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import AnimatedValue from './AnimatedValue';
import { ArrowRight, Thermometer, Wind, Zap } from 'lucide-react';

const RangeCalculator = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Default values
  const [baseRange, setBaseRange] = useState(300);
  const [temperature, setTemperature] = useState(70);
  const [speed, setSpeed] = useState(65);
  const [ac, setAc] = useState(50);
  
  // Calculate actual range based on factors
  const calculateRange = () => {
    // Temperature factor (lower in extreme temperatures)
    let tempFactor = 1;
    if (temperature < 40) {
      tempFactor = 0.7 + (temperature / 40) * 0.3;
    } else if (temperature > 90) {
      tempFactor = 1 - ((temperature - 90) / 30) * 0.15;
    }
    
    // Speed factor (efficiency drops at higher speeds)
    const speedFactor = speed <= 55 ? 1 : 1 - ((speed - 55) / 55) * 0.4;
    
    // AC/Heat usage factor
    const acFactor = 1 - (ac / 100) * 0.15;
    
    return baseRange * tempFactor * speedFactor * acFactor;
  };
  
  const actualRange = calculateRange();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="section-padding bg-ev-gray" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className={`transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Real-World <span className="text-ev-blue">Range Calculator</span>
            </h2>
            <p className="text-ev-gray-dark text-pretty leading-relaxed">
              Adjust different parameters to see how various factors affect your electric vehicle's range in real-world conditions.
            </p>
          </div>
        </div>
        
        <div 
          className={`grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="lg:col-span-3 space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 text-ev-blue mr-2" />
                      <span className="font-medium text-ev-black">Base Range</span>
                    </div>
                    <span className="font-medium"><AnimatedValue value={baseRange} suffix=" mi" /></span>
                  </div>
                  <Slider
                    defaultValue={[baseRange]}
                    min={100}
                    max={500}
                    step={10}
                    onValueChange={(value) => setBaseRange(value[0])}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-ev-gray-dark">
                    <span>100 mi</span>
                    <span>500 mi</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <Thermometer className="h-5 w-5 text-ev-blue mr-2" />
                      <span className="font-medium text-ev-black">Outside Temperature</span>
                    </div>
                    <span className="font-medium"><AnimatedValue value={temperature} suffix="°F" /></span>
                  </div>
                  <Slider
                    defaultValue={[temperature]}
                    min={0}
                    max={120}
                    step={1}
                    onValueChange={(value) => setTemperature(value[0])}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-ev-gray-dark">
                    <span>0°F</span>
                    <span>120°F</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <Wind className="h-5 w-5 text-ev-blue mr-2" />
                      <span className="font-medium text-ev-black">Avg. Driving Speed</span>
                    </div>
                    <span className="font-medium"><AnimatedValue value={speed} suffix=" mph" /></span>
                  </div>
                  <Slider
                    defaultValue={[speed]}
                    min={25}
                    max={85}
                    step={1}
                    onValueChange={(value) => setSpeed(value[0])}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-ev-gray-dark">
                    <span>25 mph</span>
                    <span>85 mph</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <Thermometer className="h-5 w-5 text-ev-blue mr-2" />
                      <span className="font-medium text-ev-black">Climate Control Usage</span>
                    </div>
                    <span className="font-medium"><AnimatedValue value={ac} suffix="%" /></span>
                  </div>
                  <Slider
                    defaultValue={[ac]}
                    min={0}
                    max={100}
                    step={5}
                    onValueChange={(value) => setAc(value[0])}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-ev-gray-dark">
                    <span>Off (0%)</span>
                    <span>Max (100%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-8 h-full flex flex-col justify-center">
              <div className="text-center">
                <p className="text-ev-gray-dark mb-3">Estimated Real-World Range</p>
                <div className="text-5xl md:text-6xl font-semibold text-ev-black mb-4">
                  <AnimatedValue value={Math.round(actualRange)} suffix=" mi" duration={800} />
                </div>
                
                <div className={cn(
                  "mt-4 py-3 px-5 rounded-xl inline-block",
                  actualRange < baseRange * 0.8 ? "bg-amber-50 text-amber-700" : "bg-green-50 text-green-700"
                )}>
                  {actualRange < baseRange * 0.8 ? (
                    <p className="text-sm font-medium">
                      Range reduced by {((baseRange - actualRange) / baseRange * 100).toFixed(1)}% due to conditions
                    </p>
                  ) : (
                    <p className="text-sm font-medium">
                      Optimal driving conditions (+{((actualRange / baseRange - 1) * 100).toFixed(1)}%)
                    </p>
                  )}
                </div>
                
                <div className="mt-8">
                  <a
                    href="#battery-comparison"
                    className="inline-flex items-center mt-4 text-ev-blue hover:text-ev-blue-dark transition-colors"
                  >
                    <span>See battery comparisons</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RangeCalculator;

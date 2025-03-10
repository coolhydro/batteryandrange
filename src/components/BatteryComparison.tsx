
import { useRef, useEffect, useState } from 'react';
import BatteryCard from './BatteryCard';

const batteryData = [
  {
    manufacturer: 'Tesla',
    model: 'Model S Long Range',
    capacity: 100,
    range: 405,
    chargingTime: 30,
    efficiency: 283.0
  },
  {
    manufacturer: 'Porsche',
    model: 'Taycan Turbo',
    capacity: 93.4,
    range: 305,
    chargingTime: 22.5,
    efficiency: 306.2
  },
  {
    manufacturer: 'Lucid',
    model: 'Air Dream Edition',
    capacity: 118,
    range: 520,
    chargingTime: 20,
    efficiency: 226.9
  },
  {
    manufacturer: 'Ford',
    model: 'Mustang Mach-E',
    capacity: 91,
    range: 314,
    chargingTime: 45,
    efficiency: 289.8
  },
  {
    manufacturer: 'Rivian',
    model: 'R1S',
    capacity: 135,
    range: 316,
    chargingTime: 35,
    efficiency: 427.2
  },
  {
    manufacturer: 'Hyundai',
    model: 'IONIQ 5',
    capacity: 77.4,
    range: 303,
    chargingTime: 18,
    efficiency: 255.1
  }
];

const BatteryComparison = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
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
    <section id="battery-comparison" className="section-padding" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className={`transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              EV Battery <span className="text-ev-blue">Comparison</span>
            </h2>
            <p className="text-ev-gray-dark text-pretty leading-relaxed">
              Compare the specifications of leading electric vehicle batteries to understand their performance differences and find the right EV for your needs.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {batteryData.map((battery, index) => (
            <BatteryCard
              key={`${battery.manufacturer}-${battery.model}`}
              {...battery}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BatteryComparison;

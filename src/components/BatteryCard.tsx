
import { useState, useEffect } from 'react';
import { Battery, BatteryMedium, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedValue from './AnimatedValue';

interface BatteryCardProps {
  manufacturer: string;
  model: string;
  capacity: number;
  range: number;
  chargingTime: number;
  efficiency: number;
  className?: string;
  index?: number;
}

export const BatteryCard = ({
  manufacturer,
  model,
  capacity,
  range,
  chargingTime,
  efficiency,
  className,
  index = 0,
}: BatteryCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Simulate staggered loading
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100 + index * 150);
    return () => clearTimeout(timer);
  }, [index]);
  
  const batteryPercentage = 75; // For display purposes
  
  return (
    <div 
      className={cn(
        "glass-card rounded-2xl p-6 transform transition-all duration-700 ease-out",
        className,
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="text-xs font-medium text-ev-blue uppercase tracking-wide mb-1">
            {manufacturer}
          </div>
          <h3 className="text-xl font-semibold text-ev-black mb-1">{model}</h3>
        </div>
        <div className="bg-ev-blue/10 rounded-full p-2">
          <BatteryMedium className="h-6 w-6 text-ev-blue" />
        </div>
      </div>
      
      <div className="space-y-4 mt-6">
        <div className="flex justify-between items-center">
          <span className="text-sm text-ev-gray-dark">Battery Capacity</span>
          <span className="font-medium">
            <AnimatedValue value={capacity} suffix=" kWh" />
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-ev-gray-dark">Range</span>
          <span className="font-medium">
            <AnimatedValue value={range} suffix=" mi" />
          </span>
        </div>
        
        <div className="battery-indicator mt-2">
          <div 
            className="battery-level animate-battery-charge" 
            style={{ 
              animationDelay: `${index * 0.2}s`,
              width: `${batteryPercentage}%` 
            }}
          />
          <div className="battery-tip" />
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-ev-gray-dark">Fast Charging</span>
          <div className="flex items-center">
            <Zap className="h-4 w-4 text-ev-blue mr-1" />
            <span className="font-medium">
              <AnimatedValue value={chargingTime} suffix=" min" decimals={0} />
            </span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-ev-gray-dark">Efficiency</span>
          <span className="font-medium">
            <AnimatedValue value={efficiency} suffix=" Wh/mi" decimals={1} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BatteryCard;

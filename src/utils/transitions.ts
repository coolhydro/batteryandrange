
type TransitionOptions = {
  duration?: number;
  delay?: number;
  easing?: string;
};

export const createTransition = (
  properties: string[] = ["all"],
  options: TransitionOptions = {}
): string => {
  const { 
    duration = 300, 
    delay = 0, 
    easing = "cubic-bezier(0.4, 0, 0.2, 1)" 
  } = options;
  
  return properties
    .map((property) => `${property} ${duration}ms ${easing} ${delay}ms`)
    .join(", ");
};

export const fade = (
  direction: "up" | "down" | "left" | "right" | "none" = "none",
  options: TransitionOptions = {}
): { [key: string]: string } => {
  const { duration = 700, delay = 0 } = options;
  
  const translateValue = "20px";
  
  const translateMap = {
    up: `translateY(${translateValue})`,
    down: `translateY(-${translateValue})`,
    left: `translateX(${translateValue})`,
    right: `translateX(-${translateValue})`,
    none: "translate(0, 0)",
  };
  
  return {
    opacity: "0",
    transform: translateMap[direction],
    transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
  };
};

export const getStaggeredDelay = (index: number, baseDelay: number = 100): number => {
  return index * baseDelay;
};

import React, { createContext, useState, useCallback } from 'react';

export interface Step {
  id: string;
  description: string;
  targetLayout?: { x: number; y: number; width: number; height: number };
}

interface OnboardingContextProps {
  steps: Step[];
  currentStepIndex: number;
  isActive: boolean;
  registerStep: (step: Step) => void;
  nextStep: () => void;
  prevStep: () => void;
  start: () => void;
  finish: () => void;
}

export const OnboardingContext = createContext<OnboardingContextProps | null>(
  null
);

export const OnboardingProvider = ({ children }: React.PropsWithChildren) => {
  const [steps, setSteps] = useState<Step[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const registerStep = useCallback((step: Step) => {
    setSteps((prev) => [...prev, step]);
  }, []);

  const nextStep = useCallback(() => {
    setCurrentStepIndex((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  }, [steps]);

  const prevStep = useCallback(() => {
    setCurrentStepIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const start = useCallback(() => {
    if (steps.length > 0) setIsActive(true);
  }, [steps]);

  const finish = useCallback(() => {
    setIsActive(false);
    setCurrentStepIndex(0);
  }, []);

  const contextValue = React.useMemo(
    () => ({
      steps,
      currentStepIndex,
      isActive,
      registerStep,
      nextStep,
      prevStep,
      start,
      finish,
    }),
    [
      steps,
      currentStepIndex,
      isActive,
      registerStep,
      nextStep,
      prevStep,
      start,
      finish,
    ]
  );

  return (
    <OnboardingContext.Provider value={contextValue}>
      {children}
    </OnboardingContext.Provider>
  );
};

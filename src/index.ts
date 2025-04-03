// src/index.ts
export {
  OnboardingProvider,
  OnboardingContext,
} from './context/OnboardingContext';
export { useOnboarding } from './hooks/useOnboarding';
export { Highlight } from './components/Highlight';

export const placeholder = 'placeholder';
export const multiply = (a: number, b: number): number => {
  return a * b;
};

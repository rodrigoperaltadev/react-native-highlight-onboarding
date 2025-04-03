export {
  OnboardingProvider,
  OnboardingContext,
} from './context/OnboardingContext';
export { useOnboarding } from './hooks/useOnboarding';
export { Highlight } from './components/Highlight';
export { Overlay } from './components/Overlay';

export const placeholder = 'placeholder';
export const multiply = (a: number, b: number): number => {
  return a * b;
};

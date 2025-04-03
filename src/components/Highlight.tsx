import React, { useRef, useEffect } from 'react';
import { View, findNodeHandle } from 'react-native';
import type { ViewProps } from 'react-native';
import { useOnboarding } from '../hooks/useOnboarding';

interface HighlightProps extends ViewProps {
  stepId: string;
  description: string;
}

export const Highlight: React.FC<HighlightProps> = ({
  stepId,
  description,
  children,
  ...props
}) => {
  const ref = useRef<View>(null);
  const { registerStep } = useOnboarding();

  useEffect(() => {
    const measure = () => {
      if (ref.current) {
        const node = findNodeHandle(ref.current);
        if (node) {
          ref.current?.measureInWindow((x, y, width, height) => {
            registerStep({
              id: stepId,
              description,
              targetLayout: { x, y, width, height },
            });
          });
        }
      }
    };

    setTimeout(measure, 500);
  }, [stepId, description, registerStep]);

  return (
    <View ref={ref} collapsable={false} {...props}>
      {children}
    </View>
  );
};

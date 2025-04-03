import React from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import Svg, { Rect, Mask } from 'react-native-svg';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface OverlayProps {
  layout: { x: number; y: number; width: number; height: number };
}

export const Overlay: React.FC<OverlayProps> = ({ layout }) => {
  return (
    <View style={styles.container} pointerEvents="none">
      <Svg height="100%" width="100%">
        <Mask id="mask">
          <Rect
            x="0"
            y="0"
            width={screenWidth}
            height={screenHeight}
            fill="white"
            opacity={0.8}
          />

          <Rect
            x={layout.x - 8}
            y={layout.y - 8}
            width={layout.width + 16}
            height={layout.height + 16}
            fill="black"
            rx={8}
          />
        </Mask>

        <Rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="black"
          mask="url(#mask)"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 9999,
  },
});

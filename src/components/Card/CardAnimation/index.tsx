import React, { useEffect } from 'react';
import { useWindowDimensions, ViewProps } from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

import { AnimationContainer } from './styles';

interface CardAnimationProps extends ViewProps {
  children: React.ReactNode;
}

export function CardAnimation({ children, ...rest }: CardAnimationProps) {
  const { width: displayWidth } = useWindowDimensions();
  const cardOpacity = useSharedValue(0);
  const cardOffset = useSharedValue(0.25 * displayWidth);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      // TODO - setup animated style
    }
  })

  useEffect(() => {
    /**
     * TODO - setup cardOpacity.value and cardOffset.value with
     * withTiming()
     */
  }, []);

  return (
    <AnimationContainer {...rest} style={animatedStyle}>
      {children}
    </AnimationContainer>
  )
}
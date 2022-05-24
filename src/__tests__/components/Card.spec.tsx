import React from 'react';
import { render } from '@testing-library/react-native';
import {
  withReanimatedTimer,
  advanceAnimationByTime
} from 'react-native-reanimated/src/reanimated2/jestUtils';

import { ProvidersWrapper } from '../../../jest-utils/wrapper';
import { Card } from '../../components/Card';

describe('Card', () => {
  it('should be able to animate at render', async () => {
    withReanimatedTimer(() => {
      const { getByTestId } = render(
        <Card onPress={() => { }} data={{
          id: 0,
          subTitle: 'repository-subtitle',
          title: 'repository-title',
          imageUrl: 'repository-img'
        }} />, {
        wrapper: ProvidersWrapper
      });

      const animatedView = getByTestId("repository-card");

      // initial animation state
      expect(
        animatedView
      ).toHaveAnimatedStyle({
        transform: [{
          translateX: 0.25 * 750
        }],
        opacity: 0
      });

      // middle animation state
      advanceAnimationByTime(500);

      expect(
        animatedView
      ).toHaveAnimatedStyle({
        transform: [{
          translateX: 90.0375
        }],
        opacity: 0.5198
      });

      // end animation state
      advanceAnimationByTime(500);

      expect(
        animatedView
      ).toHaveAnimatedStyle({
        transform: [{
          translateX: 0
        }],
        opacity: 1
      });
    });
  });
});
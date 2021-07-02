import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import {
  withReanimatedTimer,
  advanceAnimationByTime,
  getAnimatedStyle
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
        animatedView.props.style.transform[0].translateX
      ).toBe(0.25 * 750);
      expect(
        animatedView.props.style.opacity
      ).toBe(0);

      // middle animation state
      advanceAnimationByTime(500);

      expect(
        getAnimatedStyle(animatedView).transform[0].translateX
      ).toBe(112.236);
      expect(
        getAnimatedStyle(animatedView).opacity
      ).toBe(0.40140800000000004);

      // end animation state
      advanceAnimationByTime(600);

      expect(
        getAnimatedStyle(animatedView).transform[0].translateX
      ).toBe(0);
      expect(
        getAnimatedStyle(animatedView).opacity
      ).toBe(1);
    });
  });
});
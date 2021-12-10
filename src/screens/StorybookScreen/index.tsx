import React, { Suspense } from 'react';
import { View } from 'react-native';

const StorybookUIRoot = React.lazy(() => import('../../../storybook'));

export const StorybookScreen: React.FC = () => {
  return (
    <Suspense fallback={<View />}>
      <StorybookUIRoot />
    </Suspense>
  );
};

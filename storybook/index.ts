import { AppRegistry } from 'react-native';

import { withKnobs } from '@storybook/addon-knobs';
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';

import './rn-addons';

addDecorator(withKnobs);

configure(() => {
  require('../src/components/stories');
}, module);

const StorybookUIRoot = getStorybookUI({ asyncStorage: null });

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;

/**
 * react-native-navigation-hybrid
 * https://github.com/listenzz/react-native-navigation-hybrid
 * @flow
 */

import { ReactRegistry, Garden, Navigation } from 'react-native-navigation-hybrid';
import { Image, Platform } from 'react-native';
import React, { Component } from 'react';

import { Provider } from 'react-redux';

import ReactNavigation from './src/Navigation';
import Result from './src/Result';
import Options from './src/Options';
import Menu from './src/Menu';
import PassOptions from './src/PassOptions';
import ReduxCounter, { store } from './src/ReduxCounter';
import Lifecycle from './src/Lifecycle';

import TopBarMisc from './src/TopBarMisc';
import Noninteractive from './src/Noninteractive';
import TopBarShadowHidden from './src/TopBarShadowHidden';
import TopBarHidden from './src/TopBarHidden';
import TopBarColor from './src/TopBarColor';
import TopBarAlpha from './src/TopBarAlpha';
import TopBarTitleView, { CustomTitleView } from './src/TopBarTitleView';
import TopBarStyle from './src/TopBarStyle';
import StatusBarColor from './src/StatusBarColor';

Garden.setStyle({
  topBarStyle: 'dark-content',
  titleTextSize: 17,
  statusBarColor: '#F0FFFFFF',
  topBarColor: '#F0FFFFFF',

  // topBarTintColor: '#0000ff',
  // titleTextColor: '#00ff00',
  // backIcon: Image.resolveAssetSource(require('./src/images/ic_settings.png')),
  shadowImage: {
    color: '#DDDDDD',
    // image: Image.resolveAssetSource(require('./src/images/divider.png')),
  },
  hideBackTitle: true,
  elevation: 1,

  bottomBarColor: '#FFFFFF',
  //bottomBarShadowImage: {
  //color: '#ff0000',
  // 	image: Image.resolveAssetSource(require('./src/images/divider.png'))
  //},
  // bottomBarButtonItemActiveColor: '#00FF00'
  bottomBarButtonItemInactiveColor: '#CCCCCC',
});

function componentWrapper(componentProvider) {
  const InnerComponent = componentProvider();
  class Wrapper extends Component {
    render() {
      return (
        <Provider store={store}>
          <InnerComponent {...this.props} />
        </Provider>
      );
    }
  }
  return Wrapper;
}

ReactRegistry.startRegisterComponent(componentWrapper);

ReactRegistry.registerComponent('Navigation', () => ReactNavigation);
ReactRegistry.registerComponent('Result', () => Result);
ReactRegistry.registerComponent('Options', () => Options);
ReactRegistry.registerComponent('Menu', () => Menu);
ReactRegistry.registerComponent('ReduxCounter', () => ReduxCounter);
ReactRegistry.registerComponent('PassOptions', () => PassOptions);
ReactRegistry.registerComponent('Lifecycle', () => Lifecycle);

ReactRegistry.registerComponent('TopBarMisc', () => TopBarMisc);
ReactRegistry.registerComponent('Noninteractive', () => Noninteractive);
ReactRegistry.registerComponent('TopBarShadowHidden', () => TopBarShadowHidden);
ReactRegistry.registerComponent('TopBarHidden', () => TopBarHidden);
ReactRegistry.registerComponent('TopBarAlpha', () => TopBarAlpha);
ReactRegistry.registerComponent('TopBarColor', () => TopBarColor);
ReactRegistry.registerComponent('TopBarTitleView', () => TopBarTitleView);
ReactRegistry.registerComponent('CustomTitleView', () => CustomTitleView);

ReactRegistry.registerComponent('StatusBarColor', () => StatusBarColor);
ReactRegistry.registerComponent('TopBarStyle', () => TopBarStyle);

ReactRegistry.endRegisterComponent();

Navigation.setRoot({
  drawer: [
    {
      tabs: [
        {
          stack: {
            screen: { moduleName: 'Navigation' },
          },
        },
        {
          stack: {
            screen: { moduleName: 'Options' },
          },
        },
      ],
    },
    {
      screen: { moduleName: 'Menu' },
      options: {
        maxDrawerWidth: 280,
        minDrawerMargin: 64,
      },
    },
  ],
});

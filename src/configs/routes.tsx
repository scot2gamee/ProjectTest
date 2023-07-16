import type React from 'react';

import HomeScreen from '../screen/home/home';

export type IObjectPage = Record<
  string,
  {
    screen: string;
    component: React.ComponentType<any>;
  }
>;

const HomeStack = {
  screen: 'HomeScreen',
  component: HomeScreen,
  child: {
    home: {
      screen: 'HomeScreen',
      component: HomeScreen,
    },
  },
};
export const Router = {
  HomeStack,
};

import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/components/HomeScreen';

const RootStack = createStackNavigator({
  Home: HomeScreen,
});

export default class App extends React.Component {
    return (
      <RootStack />
    );
}

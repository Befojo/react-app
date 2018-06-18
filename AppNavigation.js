import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

import HomeScreen from './src/screens/HomeScreen';
import BookDetailsScreen from './src/screens/BookDetailsScreen';

const AppNavigation = createStackNavigator({
  HomeScreen: HomeScreen,
  BookDetailsScreen: BookDetailsScreen,
}, {
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#dfdfdf',
    },
  },
});

export default AppNavigation;

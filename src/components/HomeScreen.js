import React from 'react';
import { View } from 'react-native';
import Header from './header';
import BooksList from './BooksList';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: <Header headerText="ULIb" />,
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <BooksList />
      </View>
    );
  }
}

export default HomeScreen;

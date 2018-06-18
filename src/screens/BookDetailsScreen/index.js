import React, { Component } from 'react';
import { View } from 'react-native';
import SingleBook from '../../components/SingleBook';

class BookDetailsScreen extends Component {
  static navigationOptions = {
    title: 'Book Detail',
  };

  render() {
    return (
      <View>
        <SingleBook book={onPress} />
      </View>
    );
  }
}

export default BookDetailsScreen;

import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import BooksList from '../../components/BooksList';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'ULib',
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <BooksList navigation={this.props.navigation} />
      </View>
    );
  }
}

export default HomeScreen;

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

class LibrariesListItem extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.libraryTitle}>{this.props.libraryTitle}</Text>
      </View>
    );
  }

}

export default LibrariesListItem;

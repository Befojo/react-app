import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

class SingleBook extends Component {
  
  render() {
    return (
      <View style={styles.headerContentStyle}>
        <Text style={styles.headerTextStyle}>{this.props.book.title}</Text>
        <Text>{this.props.book.author}</Text>
        <Image style={styles.imageStyle} source={{ uri: this.props.book.image }} />
      </View>
    );
  }
}
export default SingleBook;

import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Book from '../Book';
import BookSection from '../BookSection';
import Button from '../Button';
import { createStackNavigator } from 'react-navigation';

import styles from './styles';

class BookDetail extends Component {

  render() {
    return (
      <Book>
        <BookSection>
          <View style={styles.headerContentStyle}>
            <Text style={styles.headerTextStyle}>{this.props.book.title}</Text>
            <Text>{this.props.book.author}</Text>
          </View>
        </BookSection>
        <BookSection>
          <Image style={styles.imageStyle} source={{ uri: this.props.book.image }} />
        </BookSection>
        <BookSection>
          <Button onPress={
            () => this.props.navigation.navigate('BookDetailsScreen', { book: this.props.book })  } />
        </BookSection>
      </Book>
    );
  }

}

export default BookDetail;

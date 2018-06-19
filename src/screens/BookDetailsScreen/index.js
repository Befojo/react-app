import React, { Component } from 'react';
import { View, ScrollView, Image, Text, ListView } from 'react-native';
import LibrariesList from '../../components/LibrariesList';

import styles from './styles';

class BookDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.book.title,
  });

  render() {
    const { book } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Image source={{ uri: book.image }} style={styles.bookCoverImage}/>
        <View style={styles.bookContainer}>
          <Text style={styles.bookTitle}>{book.title}</Text>
          <Text style={styles.bookAuthor}>{book.author}</Text>
          <Text style={styles.bookYear}>{book.year}</Text>
          <Text style={styles.bookDescription}>{book.description}</Text>
          <Text style={styles.librariesTitle}>Библиотеки</Text>
          <LibrariesList/>
        </View>
      </ScrollView>
    );
  }
}

export default BookDetailsScreen;

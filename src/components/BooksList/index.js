import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import BookDetail from '../BookDetail';
import books from '../../resources/books.json';

class BookList extends Component {
  state = { books: [] };

  componentDidMount() {
    this.setState({ books });
  }

  renderBooks() {
    return this.state.books.map(book =>
      <BookDetail navigation={this.props.navigation} key={book.title} book={book} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderBooks()}
      </ScrollView>
    );
  }
}

export default BookList;

import React from 'react';
import { Text, View, Image } from 'react-native';
import Book from './Book';
import BookSection from './BookSection';
import Button from './Button';

const BookDetail = ({ book }) => {
  const { headerContentStyle, headerTextStyle, imageStyle } = style;
  const { title, author, image } = book;
  return (
    <Book>
      <BookSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{author}</Text>
        </View>
      </BookSection>
      <BookSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </BookSection>
      <BookSection>
        <Button onPress={() => console.log(title)} />
      </BookSection>
    </Book>
  );
};

const style = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: '600'
  },
  imageStyle: {
    height: 300,
    flex: 1,
  }
};

export default BookDetail;

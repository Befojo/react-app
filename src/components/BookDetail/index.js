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
          <Button
            onPress={ () => this.props.navigation.navigate('BookDetailsScreen') } />
        </BookSection>
      </Book>
    );
  }

}

// const BookDetail = ({ book }) => {
//   const { headerContentStyle, headerTextStyle, imageStyle } = style;
//   const { title, author, image } = book;
//   return (
//     <Book>
//       <BookSection>
//         <View style={headerContentStyle}>
//           <Text style={headerTextStyle}>{title}</Text>
//           <Text>{author}</Text>
//         </View>
//       </BookSection>
//       <BookSection>
//         <Image style={imageStyle} source={{ uri: image }} />
//       </BookSection>
//       <BookSection>
//         <Button onPress={this.props.navigation.navigate('BookDetailsScreen')} />
//       </BookSection>
//     </Book>
//   );
// };
//
// const style = {
//   headerContentStyle: {
//     flexDirection: 'column',
//     justifyContent: 'space-around'
//   },
//   headerTextStyle: {
//     fontSize: 18,
//     fontWeight: '600'
//   },
//   imageStyle: {
//     height: 300,
//     flex: 1,
//   }
// };

export default BookDetail;

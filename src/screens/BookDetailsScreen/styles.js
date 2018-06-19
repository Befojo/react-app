import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  bookCoverImage: {
    height: 250,
    flex: 1,
    resizeMode: 'cover',
  },
  bookContainer: {
    padding: 20,
    flex: 1,
  },
  bookTitle: {
    fontFamily: 'Arial',
    fontWeight:  'bold',
    fontSize: 24,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  bookAuthor: {
    fontFamily: 'Arial',
    fontSize: 16,
    fontWeight: '100',
    letterSpacing: 0.6,
    marginBottom: 4
  },
  bookYear: {
    fontFamily: 'Arial',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.8,
    marginBottom: 8,
  },
  bookDescription: {
    textAlign: 'justify',
    marginBottom: 10,
  },
  librariesTitle: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 22,
    letterSpacing: 0.6,
    marginBottom: 5,
  },
});

EStyleSheet.build();

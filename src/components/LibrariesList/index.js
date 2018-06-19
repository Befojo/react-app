import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';

import LibrariesListItem from '../../components/LibrariesListItem';
import styles from './styles';

class LibrariesList extends Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const librariesList = ['Национальная библиотека Беларуси', 'Минская областная библиотека имени А.С. Пушкина', 'Библиотека №4 им. Н.В. Гоголя'];
    this.state = {
      dataSource: ds.cloneWithRows(librariesList),
    };
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(title) => <LibrariesListItem libraryTitle={title}/> }
      />
    )
  }

}

export default LibrariesList;

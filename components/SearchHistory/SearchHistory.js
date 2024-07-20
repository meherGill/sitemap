import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const SearchHistory = ({searchHistory}) => {
  return (
    <View style={styles.history}>
      <Text style={[styles.historyText, {fontWeight: 'bold'}]}>Search History: </Text>
      {searchHistory.map((item, index) => 
        <Text key={index} style={styles.historyText}>{item}</Text>)}
    </View>
  )
}

export default SearchHistory
import React, {useCallback, useState} from 'react'
import { TextInput, View, Text, Pressable } from 'react-native'
import styles from './styles'
import { url } from '../../constants/constants'
import axios from 'axios'

const Search = ({searchDataHandler, setErrorHandler, setSearchHistory}) => {
  const [text, setText] = useState('')
  const onChangeTextHandler = useCallback((val) => setText(val), [])
  const [loading, setLoading] = useState(false)

  const onSearchHandler = useCallback(() => {
    setLoading(true)
    setSearchHistory(prevVal => [...prevVal, text])
    axios.get(`${url}${text.toLowerCase()}`).then(res => {
      searchDataHandler(res.data)
      setErrorHandler(false)
      setLoading(false)
    }).catch(err => { 
      setLoading(false)
      setErrorHandler(err)
    })
  }, [text, url]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Search' 
        value={text}
        onChangeText={onChangeTextHandler}
      />
      <Pressable style={styles.button} onPress={onSearchHandler}>
        {loading ? <Text>Loading...</Text> : <Text>Search for pokemon</Text>}
      </Pressable>
    </View>
  )
}

export default Search
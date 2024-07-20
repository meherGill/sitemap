import { KeyboardAvoidingView, StyleSheet, Text, View, Platform, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Search from './components/Search/Search';
import { useState } from 'react';
import Stats from './components/PokemonData/Stats';
import { pokemonNotFoundErrorMessage } from './constants/constants';
import Abilities from './components/PokemonData/Abilities';
import SearchHistory from './components/SearchHistory/SearchHistory';

export default function App() {
  const [searchedData, setSearchedData] = useState()
  const [error, setError] = useState(false)
  const [searchHistory, setSearchHistory] = useState([])
  const [loading, setLoading] = useState(false)

  const onSearchHandler = (text) => {
    if (!text) return;
    setSearchedData(text);
  }
  const viewToShow = () => {
    if (error) {
      if (error.message === pokemonNotFoundErrorMessage)
        return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>No pokemon found for this search value</Text>
          </View>
      else
        return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Something went wrong, the api might be down, try again later</Text>
          </View>
    }
    
    else if (loading) {
      return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading...</Text>
        </View>
    }

    else {
      if (!searchedData) return;

      return (
        <ScrollView>
          <Stats statsArray={searchedData.stats}/>
          <Abilities abilitiesArray={searchedData.abilities}/>
        </ScrollView>
      )
    }
  }
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <Search searchDataHandler={onSearchHandler} setErrorHandler={setError} setSearchHistory={setSearchHistory} loading={loading} setLoading={setLoading}/>
          <View style={{flex: 1, alignSelf: 'stretch'}}>
            {viewToShow()}
          </View>
          <SearchHistory searchHistory={searchHistory}/>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

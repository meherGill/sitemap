import React from 'react'
import { View, Text } from 'react-native'
import styles from "./abiltiesStyles"

const Abilities = ({abilitiesArray}) => {

  const sanitizedAbilities = abilitiesArray.map(ability => {
    return {name: ability.ability.name}
  })

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Abilities</Text>
      </View>
      <View style={styles.flexRow}>
        {sanitizedAbilities.map(ability => {
          return (
              <View key={ability.name} style={{padding: 5}}>
                <Text>{ability.name}</Text>
              </View>
          )
        })}
      </View>
      </View>
    </View>
  )
}

export default Abilities
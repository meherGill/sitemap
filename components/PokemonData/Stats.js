import React from 'react'
import { View, Text } from 'react-native'
import styles from "./statsStyles"

const Stats = ({statsArray}) => {

  const sanitizedStats = statsArray.map(stat => {
    return {name: stat.stat.name, value: stat.base_stat}
  })

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Stats</Text>
      </View>
      {sanitizedStats.map(stat => {
        return (
          <View key={stat.name}>
            <Text>{stat.name} : {stat.value}</Text>
          </View>
        )
      })}
      </View>
    </View>
  )
}

export default Stats
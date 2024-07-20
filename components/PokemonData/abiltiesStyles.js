import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaf0c9',
    padding: 10,
    flexDirection: 'row',
    marginTop: 10,
    borderRadius: 10,
    margin: 5,
  },

  innerContainer: {
    flex: 1,
  },

  header: {
    justifyContent: "center",
    alignItems: "center",
  },

  headerText: {
    fontWeight: "bold",
  },

  flexRow: {
    flexDirection: 'row',

  }
})
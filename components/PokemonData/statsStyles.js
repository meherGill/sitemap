import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffcccb',
    padding: 10,
    flexDirection: 'row',
    marginTop: 10,
    borderRadius: 10,
    margin: 5,
    flex: 1,
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
  }
})
import { StyleSheet } from "react-native";
import colours from "./colours";

const globalStyles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: colours.primaryText,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 15,
    color: colours.secondaryText,
  },
  paragraphText: {
    fontSize: 10,
    color: colours.secondaryText,
  },
});

export default globalStyles;

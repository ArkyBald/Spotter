import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colours from "../../config/colours";
import globalStyles from "../../config/styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

function WorkoutCard(props) {
  return (
    <View style={styles.card}>
      <Text
        adjustsFontSizeToFit={true}
        numberOfLines={1}
        style={globalStyles.title}
      >
        {props.title}
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={globalStyles.subTitle}>
          {String(props.equipment).charAt(0).toUpperCase() +
            String(props.equipment).substring(1)}
        </Text>
      </View>
    </View>
  );
}

export default WorkoutCard;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 50,
    borderColor: colours.primaryText,
  },
});

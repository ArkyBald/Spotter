import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import colours from "../../config/colours.js";
import globalStyles from "../../config/styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { DraxView } from "react-native-drax";

function ExcerciseCard(props) {
  // Set Colour for difficulty badge
  var diffColour = colours.bronze;
  switch (props.level) {
    case "beginner":
      diffColour = colours.bronze;
      break;
    case "intermediate":
      diffColour = colours.silver;
      break;
    case "expert":
      diffColour = colours.gold;
      break;

    default:
      break;
  }

  return (
    <Pressable
      delayLongPress={25}
      onLongPress={() => props.onSelect(props.title)}
    >
      {({ pressed }) => (
        <View
          style={[
            styles.card,
            { backgroundColor: pressed ? colours.secondary : colours.primary },
          ]}
        >
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

            <FontAwesomeIcon
              icon="medal"
              color={diffColour}
              style={{ position: "absolute", right: 5 }}
            />
          </View>
          {/* <Text numberOfLines={4} style={globalStyles.paragraphText}>
        {props.instructions}
      </Text> */}
        </View>
      )}
    </Pressable>
  );
}

export default ExcerciseCard;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    minWidth: "100%",
    minHeight: 50,
    //backgroundColor: colours.primary,
    borderRadius: 8,
    padding: 10,
    marginBottom: 2,
  },
});

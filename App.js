//#region imports
//#region React imports
import React, { useEffect, useRef, useState } from "react";

import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  Alert,
  Dimensions,
  Pressable,
  FlatList,
  Animated,
  Easing,
} from "react-native";
//#endregion

//#region npm imports
import Modal from "./node_modules/react-native-modal";
import { DraxList, DraxProvider, DraxView } from "react-native-drax";

//#endregion

import { database } from "./firebase-config.js";
import { ref, onValue, push, update, remove } from "firebase/database";

//#region component imports
import ExcerciseModal from "./app/components/organisms/ExcerciseModal.js";
//#endregion

//#region config imports
import colours from "./app/config/colours.js";
import globalStyles from "./app/config/styles.js";

//#endregion

//#region FA imports
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faMedal } from "@fortawesome/free-solid-svg-icons/faMedal";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import WorkoutCard from "./app/components/molecules/workoutCard";

library.add(faSearch, faMedal, faSquarePlus);
//#endregion
//#endregion

const workJSON = require("./app/exercises.json");

export default function App(props) {
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [workoutData, setWorkoutData] = useState([]);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colours.black }]}
    >
      <DraxProvider
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <DraxList
          data={workoutData}
          renderItemContent={({ item }) => (
            <WorkoutCard
              style={{ color: colours.gold, fontSize: 10 }}
              title={item.name}
              equipment={props.equipment}
            />
          )}
          onItemReorder={({ fromIndex, toIndex }) => {
            const newData = workoutData.slice();
            newData.splice(toIndex, 0, newData.splice(fromIndex, 1)[0]);
            setWorkoutData(newData);
          }}
        />
        <Button
          onPress={() => console.log(workoutData)}
          style={globalStyles.title}
          title="Apples!"
        ></Button>
      </DraxProvider>
      <View>
        <Pressable onPress={() => setModalVisible(true)}>
          <FontAwesomeIcon
            icon={faSquarePlus}
            size={50}
            color={colours.primaryText}
          />
        </Pressable>
        {modalVisible ? (
          <ExcerciseModal
            onHide={() => setModalVisible(false)}
            onSelect={(output) => {
              var newData = workoutData.slice();
              newData.push(
                workJSON.exercises.find((workout) => workout.name === output)
              );
              setWorkoutData(newData);
            }}
          ></ExcerciseModal>
        ) : (
          <></>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  emptyCard: {
    height: 100,
    backgroundColor: colours.gold,

    borderColor: colours.primaryText,
    borderLeftWidth: 3,
    borderRadius: 20,
    borderRightWidth: 3,
  },
});

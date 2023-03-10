//#region React imports
import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  Alert,
  ScrollView,
  FlatList,
  Text,
} from "react-native";
//#endregion

//#region npm imports
import Modal from "../../../node_modules/react-native-modal";
import { DraxList, DraxProvider, DraxView } from "react-native-drax";
//#endregion

//#region config imports
import globalStyles from "../../config/styles";
import colours from "../../config/colours";
//#endregion

import ExcerciseCard from "../molecules/excerciseCard";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const workData = require("../../exercises.json");

function ExcerciseModal(props) {
  const [search, setSearch] = useState("");
  const [searchOutput, setSearchOutput] = useState([]);
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    if (search.length > 0) {
      setSearchOutput(() =>
        workData.exercises.filter((workout) =>
          workout.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search]);

  const itemSelected = (item) => {
    props.onSelect(item);
    setModalVisible(false);
  };

  return (
    <Modal
      backdropColor="lightgray"
      isVisible={modalVisible}
      swipeDirection="down"
      swipeThreshold={Dimensions.get("window").height * 0.25}
      deviceHeight={Dimensions.get("window").height}
      avoidKeyboard={true}
      propagateSwipe={true}
      onSwipeComplete={() => setModalVisible(false)}
      onModalHide={props.onHide}
      animationOutTiming={1000}
    >
      <View style={styles.containerBottom}>
        <View style={styles.modalView}>
          <View style={styles.searchBar}>
            <FontAwesomeIcon icon="search" color={colours.primaryText} />
            <TextInput
              style={styles.searchInput}
              onChangeText={setSearch}
              value={search}
            />
          </View>

          {(searchOutput.length > 0) & (search.length > 0) ? (
            <FlatList
              data={searchOutput}
              renderItem={({ item }) => (
                <ExcerciseCard
                  title={item.name}
                  equipment={item.equipment}
                  instructions={item.instructions}
                  level={item.level}
                  onSelect={itemSelected}
                />
              )}
            />
          ) : (
            <Text style={globalStyles.subTitle}>Search for a Workout!</Text>
          )}
        </View>
      </View>
    </Modal>
  );
}

export default ExcerciseModal;

const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  container: {
    backgroundColor: colours.black,
    height: "30%",
    width: "100%",
  },
  containerBottom: {
    flex: 1,

    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    alignItems: "center",
    margin: 0,
    backgroundColor: colours.black,
    borderRadius: 20,
    width: "100%",
    height: "60%",
    padding: 15,
    alignItems: "center",
    shadowColor: colours.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    color: colours.secondaryText,
    fontWeight: "500",
    marginLeft: 5,
    marginRight: 5,
  },
  searchBar: {
    zIndex: 3,

    width: "100%",
    height: 40,

    borderColor: colours.primaryText,
    borderRadius: 10,
    backgroundColor: colours.primary,

    borderWidth: 2,
    padding: 5,
    paddingLeft: 10,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 5,
  },
});

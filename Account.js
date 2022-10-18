import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Account = (props) => {
  return (
    <View style={styles.ViewMain}>
      <MaterialCommunityIcons
        name={props.iconName}
        size={24}
        color="white"
        style={{ marginRight: 20 }}
      />
      <Text style={styles.Text}>{props.type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewMain: {
    flexDirection: "row",
    backgroundColor: "#0F307D",
    //     borderColor: "black",
    //     borderWidth: 1,
    alignItems: "center",
    height: 50,
    width: 350,
    borderRadius: 20,
    justifyContent: "center",
    margin: 20,
  },
  Text: {
    fontSize: 20,
    color: "white",
  },
});

export default Account;

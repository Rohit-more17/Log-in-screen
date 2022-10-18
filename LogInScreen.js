import React from "react";
import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react/cjs/react.development";

const LogInScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    email: "1",
    passWord: "1",
    userName: "Rohit",
    accountNumber: "0000001",
  };

  const onPressLogInHandle = () => {
    if (email == user.email && password == user.passWord) {
      props.navigation.navigate("Dash", {
        name: user.userName,
        accNo: user.accountNumber,
      });
    } else {
      alert("User Name or Password Incorrect");
    }
  };

  return (
    <View style={styles.ViewMain}>
      <View style={styles.HelloView}>
        <Text style={styles.Hello}>Hello,</Text>
        <Text style={styles.Hello}>Welcome To XYZ Bank.</Text>
      </View>

      <View style={styles.ViewTextInput}>
        <TextInput
          style={styles.TextInput}
          autoComplete="email"
          placeholder="Email"
          value={email}
          onChangeText={(newValue) => setEmail(newValue)}
        />

        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          value={password}
          onChangeText={(newValue) => setPassword(newValue)}
        />
      </View>

      <TouchableOpacity style={styles.ButtonLogIn} onPress={onPressLogInHandle}>
        <Text style={styles.TextLogIn}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  HelloView: {
    borderEndWidth: 1,
    marginBottom: 90,
    marginLeft: 40,
  },
  Hello: {
    fontSize: 28,
    color: "#0F307D",
    fontFamily: "sans-serif-condensed",
  },
  TextLogIn: {
    color: "white",
    fontSize: 25,
    paddingHorizontal: 70,
  },
  ButtonLogIn: {
    alignItems: "center",
    marginVertical: 15,
    marginHorizontal: 40,
    height: 50,
    borderRadius: 30,
    paddingHorizontal: 30,
    fontSize: 30,
    backgroundColor: "#0F307D",
    justifyContent: "center",
  },
  TextInput: {
    backgroundColor: "#D9D9D9",
    marginVertical: 15,
    marginHorizontal: 40,
    height: 50,
    borderRadius: 30,
    paddingHorizontal: 30,
    fontSize: 20,
    borderColor: "white",
  },
  ViewTextInput: {
    flexDirection: "column",
  },
  ViewMain: {
    // alignItems: "center",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default LogInScreen;

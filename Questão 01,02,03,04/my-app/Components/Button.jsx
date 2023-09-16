import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ title, onPress, cor }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.btnText(cor === "red" ? "green" : "red")}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnText: (cor) => ({
    color: cor,
    fontSize: 18,
    textAlign: "center",
    margin: 5,
    borderColor: cor,
    borderWidth: 1,
  }),
  btnStyle: (backgroundColor) => ({
    height: 50,
    width: "100%",
    marginVertical: 20,
    backgroundColor: backgroundColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  }),
});

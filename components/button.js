import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Button as NativeBaseButton } from "native-base";

// Functional Component with props
const Button = (props) => {
  return (
    <NativeBaseButton style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </NativeBaseButton>
  );
};

// Styles
const styles = {
  container: {
    backgroundColor: "#dddddd",
    padding: 15,
    alignItems: "center",
    borderRadius: 30,
  },
  text: {
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
};

export default Button;
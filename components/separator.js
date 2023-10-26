import React from "react";
import { View } from "native-base";

const Separator = (props) => {
  return <View style={{ height: props.height, backgroundColor: "#ddd" }} />;
};

export default Separator;
import React from "react";
import { Image } from "react-native";
import { Header, Left, Right, Button } from "native-base";

// Functional Component with props
const CustomHeader = (props) => {
  return (
    <Header style={styles.header}>
      <Left>
        <Button transparent onPress={() => props.drawer._root.open()}>
          <Image source={require("../assets/menu.png")} style={styles.icon} />
        </Button>
      </Left>
      <Right>
        <Button transparent>
          <Image source={require("../assets/facebook.png")} style={styles.icon} />
        </Button>
        <Button transparent>
          <Image source={require("../assets/youtube.png")} style={styles.icon} />
        </Button>
        <Button transparent>
          <Image source={require("../assets/twitter.png")} style={styles.icon} />
        </Button>
        <Button transparent>
          <Image source={require("../assets/search.png")} style={styles.icon} />
        </Button>
      </Right>
    </Header>
  );
};

// Styles
const styles = {
  header: {
    backgroundColor: "#AA0002",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  icon: {
    width: 36,
    height: 16,
    resizeMode: "contain",
  },
};

export default CustomHeader;
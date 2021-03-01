import React from "react";
import { View, Text } from "react-native";

const Header = (props) => {
  return (
    <View
      style={{
        backgroundColor: "rgba(20,119,248,0.8)",
        width: "100%",
        height: "11.5%",
        justifyContent: "center",
        paddingLeft: "8%",
      }}
    >
      <Text style={{ textTransform: "uppercase", fontSize: 16, color: "#fff" }}>
        {props.title}
      </Text>
    </View>
  );
};

export default Header;

import React from "react";
import { View, Text } from "react-native";

const Header = (props) => {
  return (
    <View
      style={{
        backgroundColor: "rgba(20,119,248,0.8)",
        width: "100%",
        height: "10%",
        justifyContent: "center",
        paddingLeft: "8%",
      }}
    >
      <Text style={{ textTransform: "uppercase", color: "#fff", fontFamily: 'Montserrat_600SemiBold' }}>
        {props.title}
      </Text>
    </View>
  );
};

export default Header;

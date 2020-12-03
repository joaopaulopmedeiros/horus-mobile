import React from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Home = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>SUSI</Text>
      <Text>Everything starts small</Text>
    </View>
  );
};

export default Home;

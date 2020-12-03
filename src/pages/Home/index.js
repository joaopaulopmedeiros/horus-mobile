import React from "react";
import { View, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import { customMapStyle } from "../../styles/maps/index";
import crossHair from "../../../assets/crosshair.png";
import marker from "../../../assets/marker.png";

const Home = () => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <MapView
        tooltip={true}
        initialRegion={{
          latitude: -5.8453006,
          longitude: -35.2697694,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,

          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        customMapStyle={customMapStyle}
      >
        <Marker
          coordinate={{
            latitude: -5.8453006,
            longitude: -35.2697694,
          }}
        >
          <Image source={marker} />
        </Marker>
      </MapView>
      <View
        style={{
          position: "absolute",
          top: insets.top + 40,
          right: 40,
          width: 40,
          height: 40,
          borderRadius: 16,
          backgroundColor: "#FFFFFF",
          zIndex: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={crossHair} />
      </View>
    </>
  );
};

export default Home;

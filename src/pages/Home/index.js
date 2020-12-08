import React from "react";

import { Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";

import { GPS } from "./styles";
import { customMapStyle } from "../../styles/maps/index";

import marker from "../../../assets/marker.png";
import crossHair from "../../../assets/crosshair.png";

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
        customMapStyle={customMapStyle}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
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
      <GPS marginTop={insets.top + 8}>
        <Image source={crossHair} />
      </GPS>
    </>
  );
};

export default Home;

import React, { useState, useEffect } from "react";

import { Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

import defaultMapLocation from "../../utils/defaultMapLocation";

import { GPS } from "./styles";
import { customMapStyle } from "../../styles/maps/index";

import marker from "../../../assets/marker.png";
import crossHair from "../../../assets/crosshair.png";

const Home = () => {
  const insets = useSafeAreaInsets();

  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    loadInitialPosition();
  }, []);

  async function loadInitialPosition() {
    try {
      const { granted } = await requestPermissionsAsync();
      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        });
      }
    } catch (error) {
      console.log(error);

      setCurrentRegion(defaultMapLocation);
    }
  }

  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  if (!currentRegion) {
    return null;
  }

  return (
    <>
      <MapView
        tooltip={true}
        initialRegion={currentRegion}
        onRegionChangeComplete={handleRegionChanged}
        customMapStyle={customMapStyle}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/*<Marker
          coordinate={{
            latitude: -5.8453006,
            longitude: -35.2697694,
          }}
        >
          <Image source={marker} />
        </Marker>*/}
      </MapView>
      {/* <GPS marginTop={insets.top + 8} onClick={() => loadInitialPosition()}>
        <Image source={crossHair} />
        </GPS>*/}
    </>
  );
};

export default Home;

import React, { useState, useEffect, useRef } from "react";

import { Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

import api from "../../services/api";
import defaultMapLocation from "../../services/defaultMapLocation";

import { TurnOnGPSContainer } from "./styles";
import { customMapStyle } from "../../styles/maps/index";

import marker from "../../../assets/marker.png";
import crossHair from "../../../assets/crosshair.png";

const Home = () => {
  const insets = useSafeAreaInsets();

  const [currentRegion, setCurrentRegion] = useState(null);
  const [GPSIsGranted, setGPSIsGranted] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    loadPosition();
    loadCvlis();
  }, []);

  async function loadPosition() {
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

        setGPSIsGranted(true);

        mapRef.current.animateCamera({
          center: {
            latitude,
            longitude,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04,
            zoom: 2,
          },
        });
      }
    } catch (error) {
      console.log(error);

      setCurrentRegion(defaultMapLocation);

      setGPSIsGranted(false);
    }
  }

  async function loadCvlis() {
    try {
      const response = await api.get("/cvlis");
      console.log("loading...");
      console.log(response.data);
    } catch (error) {
      console.log("noooot");
      console.log(error);
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
        ref={mapRef}
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
      {GPSIsGranted === false && (
        <TurnOnGPSContainer
          marginTop={insets.top + 64}
          onPress={() => {
            loadPosition();
            loadCvlis();
          }}
        >
          <Image source={crossHair} />
        </TurnOnGPSContainer>
      )}
    </>
  );
};

export default Home;

import React, { useState, useEffect, useRef } from "react";

import { Image, View, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MapView, { Marker, Callout } from "react-native-maps";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

import api from "../../services/api";
import defaultMapLocation from "../../services/defaultMapLocation";

import { TurnOnGPSContainer } from "./styles";
import { customMapStyle } from "../../styles/maps/index";

import marker from "../../../assets/marker.png";
//import verified from "";
import VerifiedIcon from "../../styles/icons/index";
import crossHair from "../../../assets/crosshair.png";

const Home = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const [currentRegion, setCurrentRegion] = useState(null);
  const [GPSIsGranted, setGPSIsGranted] = useState(null);
  const [cvlis, setCvlis] = useState(null);

  const mapRef = useRef(null);

  useEffect(() => {
    loadPosition()
      .then(position => loadCvlis(position))
      .catch(error => console.error(error));
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
        return {
          latitude,
          longitude,
        }
      }
    } catch (error) {
      console.log(error);

      setCurrentRegion(defaultMapLocation);

      setGPSIsGranted(false);
    }
  }

  async function loadCvlis(position) {
    try {
      const { latitude, longitude } = position;

      const response = await api.get('/cvlis', {
        params: {
          latitude, longitude
        }
      });
      console.log('loading');
      setCvlis(response.data);
    } catch (error) {
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
        marginTop={insets.top}
      >
        {cvlis != null && cvlis.map(cvli => (
          <Marker
            key={cvli.id}
            coordinate={{
              latitude: cvli.latitude,
              longitude: cvli.longitude,
            }}
          >
            <Image source={marker} />

            <Callout
              style={{
                width: 260,
                backgroundColor: "#fff",
                borderWidth: 2,
                borderColor: "#eee",
                borderRadius: 8
              }}
              onPress={() => {
                navigation.navigate('Crimes', { screen: 'Details',initial: false, params: { cvli: cvli } })
              }}
            >
              <View
              >
                <Text
                  style={{
                    fontFamily: "Montserrat_600SemiBold",
                    fontSize: 16,
                    color: "rgba(20,119,248,0.8)",
                  }}
                >
                  {cvli.title}
                </Text>
                <View>
                  <Text
                    style={{
                      fontFamily: "Montserrat_500Medium",
                      fontSize: 10,
                      color: "#77838F",
                    }}
                  >
                    {cvli.description}
                  </Text>
                  {cvli.verified == 1 &&
                    <View style={{
                      marginTop: 3,
                      display: 'flex',
                      flexDirection: 'row'
                    }}>
                      <Text>
                        <VerifiedIcon />
                      </Text>
                      <Text style={{
                        fontFamily: "Montserrat_500Medium",
                        fontSize: 10,
                        marginLeft: 2,
                        color: '#77838F'
                      }}>Verificado</Text>
                    </View>
                  }
                </View>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      {GPSIsGranted === false && (
        <TurnOnGPSContainer
          marginTop={insets.top + 64}
          onPress={() => {
            loadPosition()
              .then(position => loadCvlis(position))
              .catch(error => console.error(error));
          }}
        >
          <Image source={crossHair} />
        </TurnOnGPSContainer>
      )}
    </>
  );
};

export default Home;

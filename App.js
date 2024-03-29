import React from "react";

import { StatusBar } from "react-native";
import { AppLoading } from "expo";
import Routes from "./src/routes";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  Montserrat_600SemiBold
} from "@expo-google-fonts/montserrat";
import { AuthProvider } from "./src/contexts/auth";

export default () => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="rgba(20,119,248,0.8)"
          translucent
        />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </>
    );
  }
};

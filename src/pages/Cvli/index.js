import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import CvliMain from "./Main";
import CvliDetails from "./Details";
import CvliListByType from "./ListByType";

const Stack = createStackNavigator();


const Cvli = () => {
    return (
        <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
                headerShown: false,
                animationEnabled: false,
            }}
        >
            <Stack.Screen name="Main" component={CvliMain} />
            <Stack.Screen name="ListaPorTipo" component={CvliListByType} />
            <Stack.Screen name="Detalhes" component={CvliDetails} />
        </Stack.Navigator>
    );
}

export default Cvli;
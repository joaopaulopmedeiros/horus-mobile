import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import CvliList from "./List";
import CvliDetails from "./Details";

const Stack = createStackNavigator();


const Cvli = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animationEnabled: false,
            }}
        >
            <Stack.Screen name="List" component={CvliList} />
            <Stack.Screen name="Details" component={CvliDetails} />
        </Stack.Navigator>
    );
}

export default Cvli;
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import CvliList from "./List";
import CvliDetails from "./Details";
import CvliListByCategory from "./ListByCategory";

const Stack = createStackNavigator();


const Cvli = () => {
    return (
        <Stack.Navigator
            initialRouteName="Lista"
            screenOptions={{
                headerShown: false,
                animationEnabled: false,
            }}
        >
            <Stack.Screen name="Lista" component={CvliList} />
            <Stack.Screen name="ListaPorCategoria" component={CvliListByCategory} />
            <Stack.Screen name="Detalhes" component={CvliDetails} />
        </Stack.Navigator>
    );
}

export default Cvli;
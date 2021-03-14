import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const Cvli = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Details" component={Profile} />
        </Stack.Navigator>
    );
}

export default Cvli;
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Cities from "../screens/Cities";


const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="cities"
        component={Cities}
        options={{ title: "Ciudades" }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
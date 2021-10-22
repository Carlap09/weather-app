import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AboutUs from "../screens/AboutUs";


const Stack = createStackNavigator();

const AboutUsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="about-us"
        component={AboutUs}
        options={{ title: "Sobre nosotros" }}
      />
    </Stack.Navigator>
  );
};

export default AboutUsStack;
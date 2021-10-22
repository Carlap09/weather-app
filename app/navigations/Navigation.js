import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import Home from "../screens/Home";
import Cities from "../screens/Cities";
import AboutUs from "../screens/AboutUs";

const Tab = createBottomTabNavigator();


const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
        initialRouteName="home"
       // tabBarOptions={{
       //   inactiveTintColor: "#646464",
       //   activeTintColor: "#00a680",
       // }}
        screenOptions={({ route }) => ({
         tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
       <Tab.Screen
          name="home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Tab.Screen
          name="cities"
          component={Cities}
          options={{ title: "Ciudades" }}
        />
         <Tab.Screen
          name="about-us"
          component={AboutUs}
          options={{ title: "Sobre nosotros" }}
        />
       </Tab.Navigator>
        </NavigationContainer>
    )
}



const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
      case "home":
        iconName = "home-outline";
        break;
        case "cities":
        iconName = "city-variant-outline";
        break;
        case "about-us":
            iconName = "information-outline";
            break;
    }
    return (
      <Icon type="material-community" name={iconName} size={30} color={color} />
    );
  };

  export default Navigation;
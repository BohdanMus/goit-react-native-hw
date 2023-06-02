import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RegistrationScreen } from "./screens/Registration";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Реєстрація" component={RegistrationScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

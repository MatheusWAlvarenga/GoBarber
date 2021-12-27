// vendors
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// components
import SignIn from "../pages/Signin";
import SignUp from "../pages/SignUp";

const Auth = createNativeStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator>
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);
export default AuthRoutes;

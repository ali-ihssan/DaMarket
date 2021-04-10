import React from 'react';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';
import colors from './app/config/colors';
import ListingScreen from './app/screens/ListingScreen';

// import { MaterialCommunityIcons } from "@expo/vector-icons"



export default function App() {
  return (
    <Screen>
      <AppTextInput placeholder={"its me pazz"} icon="email" />
    </Screen>
  );
}


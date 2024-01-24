import { Provider } from "react-redux";
import store from "../redux/store";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function HomeLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "Nunito-Regular": require("../assets/Nunito-Regular.ttf"),
    "Nunito-ExtraLight": require("../assets/Nunito-ExtraLight.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Provider store={store}>
      <View onLayout={onLayoutRootView}></View>
      <Slot />
      <StatusBar style="auto" />
    </Provider>
  );
}

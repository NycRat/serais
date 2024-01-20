import { Provider } from "react-redux";
import store from "../redux/store";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function HomeLayout() {
  return (
    <Provider store={store}>
      <Slot />
      <StatusBar style="auto" />
    </Provider>
  );
}

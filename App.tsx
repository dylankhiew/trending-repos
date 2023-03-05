import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { FONTS } from "./assets/FONTS";
import TrendingScreen from "./src/screens/TrendingScreen/TrendingScreen";
import { persistor, store } from "./src/state/store";

export type NavigationStackParamList = {
  Trending: undefined;
};

const Stack = createNativeStackNavigator<NavigationStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": FONTS.ROBOTO.BOLD,
    "Roboto-Medium": FONTS.ROBOTO.MEDIUM,
    "Roboto-Regular": FONTS.ROBOTO.REGULAR,
    "PingFanSC-Regular": FONTS.PINGFANGSC.REGULAR,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Trending" component={TrendingScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

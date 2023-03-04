import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import { FONTS } from "./assets/FONTS";
import TrendingScreen from "./src/screens/TrendingScreen/TrendingScreen";

export type NavigationStackParamList = {
  Trending: undefined;
};

const Stack = createNativeStackNavigator<NavigationStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": FONTS.ROBOTO.BOLD,
    "Roboto-Medium": FONTS.ROBOTO.MEDIUM,
    "Roboto-Regular": FONTS.ROBOTO.REGULAR,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Trending" component={TrendingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

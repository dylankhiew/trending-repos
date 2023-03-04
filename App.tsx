import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TrendingScreen from "./src/screens/TrendingScreen/TrendingScreen";

export type NavigationStackParamList = {
  Trending: undefined;
};

const Stack = createNativeStackNavigator<NavigationStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Trending" component={TrendingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

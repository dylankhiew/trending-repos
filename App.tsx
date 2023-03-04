import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TrendingScreen from './screens/TrendingScreen/TrendingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Trending"
          component={TrendingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from "./src/screens/Feed";
import Publish from "./src/screens/Publish";
import { PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator initialRouteName="Feed" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Feed" component={Feed}/>
          <Stack.Screen name="Publish" component={Publish}/>
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}


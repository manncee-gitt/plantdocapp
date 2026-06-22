import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Make sure these imports match your actual file names
import LoginScreen from "./screens/LoginScreen";
import MainTabs from "./screens/MainTabs";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* 1. This name must match the navigation.navigate('MainTabs') in your Login button */}
        <Stack.Screen name="MainTabs" component={MainTabs} />

        {/* 2. Login screen definition */}
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import NewGameScreen from "./Screens/NewGameScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./Screens/WelcomeScreen";
import { RootStackParamList } from "./config/types";
import JoinGameScreen from "./Screens/JoinGameScreen";
import InLobbyScreen from "./Screens/InLobbyScreen";
import { enableScreens } from 'react-native-screens';
import InGameScreen from "./Screens/InGameScreen";
console.log("app loading..");
enableScreens();

const App = () => {
  console.log("We got to APP");
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e", // Customize the background color
        },
        statusBarTranslucent: true,
        headerShown: false,
        statusBarColor: "#000",

        headerTintColor: "#fff", // Customize the back button and title color
        headerTitleStyle: {
          fontWeight: "bold", // Customize the font style
          color: "#fff",
        },
      }}
    >
      <Stack.Screen name="Home" component={WelcomeScreen} />
      <Stack.Screen name="NewGame" component={NewGameScreen} />
      <Stack.Screen name="JoinGame" component={JoinGameScreen} />
      <Stack.Screen name="Lobby" component={InLobbyScreen} />
      <Stack.Screen name="InGame" component={InGameScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

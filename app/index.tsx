import NewGameScreen from "./Screens/NewGameScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./Screens/WelcomeScreen";
import { RootStackParamList } from "./config/types";
import JoinGameScreen from "./Screens/JoinGameScreen";
import InLobbyScreen from "./Screens/InLobbyScreen";
console.log("app loading..");
const App = () => {
  console.log("We got to APP");
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
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
    </Stack.Navigator>
  );
};

export default App;

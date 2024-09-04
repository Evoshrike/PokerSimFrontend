import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
  Alert,
  StyleSheet,
  StatusBar,
  Platform,
  Dimensions,
  useWindowDimensions,
  DimensionValue,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDeviceOrientation } from "@react-native-community/hooks";

import WelcomeScreen from "./app/Screens/WelcomeScreen";
import ScreenTwo from "./app/Screens/ScreenTwo";
import GameSettings from "./app/Screens/NewGameScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./app/config/types";
import 'react-native-gesture-handler';
import { AppRegistry } from "react-native";
import App from "./app";
import { expo } from "./app.json";

/* AppRegistry.registerComponent(expo.name, () => App); */

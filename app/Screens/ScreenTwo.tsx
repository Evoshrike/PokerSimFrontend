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



import colors from '../config/colors.js'

console.log("Screen ld")
export default function ScreenTwo() {
  return (
    <>
      <StatusBar backgroundColor={"black"} hidden={false} />
      <View
        style={{
          backgroundColor: "#000",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          flexGrow: 1,
          // height: 900
        }}
      >
        <Image
          source={require("../assets/images/bg4.png")}
          resizeMode="contain"
        />
        <View style={styles.yesIcon} />
        <View style={styles.noIcon} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  yesIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    alignSelf: "flex-start",
    left: 30,
    top: 40,
    backgroundColor: colors.primary,
  },
  noIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    alignSelf: "flex-start",
    right: 30,
    top: 40,
    backgroundColor: colors.secondary,
  },
});

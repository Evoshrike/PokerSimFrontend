import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  
  Alert,
  StyleSheet,
  StatusBar,
  Platform,
  Dimensions,
  useWindowDimensions,
  DimensionValue,
  ImageBackground,
  Settings,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDeviceOrientation } from "@react-native-community/hooks";


import colors from "../config/colors";
import { Button } from '@rneui/base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "../config/types";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const WelcomeScreen: React.FC<Props> = ({ navigation, route }) =>  {
  
  console.log("We got to welcome!!")
  return (
    <ImageBackground
      source={require("../assets/images/casino.png")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source = {require("../assets/images/poker2.png")} style={styles.logo}/>
        
        </View>
      
      <View style={styles.loginButton} >
      <Button 
              title="NEW GAME"
              buttonStyle={styles.buttonStyle}
              containerStyle={styles.buttonContainer}
              titleStyle={{ fontWeight: 'bold' }}
              onPress={() => navigation.navigate("NewGame")}
            />
      </View>
      <View style={styles.registerButton} >
      <Button
              title="JOIN GAME"
              buttonStyle={styles.buttonStyle}
              containerStyle={styles.buttonContainer}
              titleStyle={{ fontWeight: 'bold' }}
              onPress={() => navigation.navigate("JoinGame")}
            />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: 'center',
    top: 0
  },
  loginButton: {
    width: "40%",
    height: 100,
    backgroundColor: colors.transparent,
  },
  registerButton: {
    width: "40%",
    height: 200,
    backgroundColor: colors.transparent,
  },
  logo: {
    width: 250,
    height: 250,
    
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: '#004D40',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
  },
  buttonContainer: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
    alignSelf: 'center'
  }

  

});

export default WelcomeScreen;

import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
  StyleSheet,
  StatusBar,
  Platform,
  Dimensions,
  useWindowDimensions,
  DimensionValue,
  TextInput,
} from "react-native";
import { Button } from "@rneui/base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { rgbaColor } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { registerSensor } from "react-native-reanimated/lib/typescript/reanimated2/core";

import colors from "../config/colors.js";
import { FlatList } from "react-native";
import funcs from "../API things/funcs.js";
import { useEffect, useRef, useState } from "react";
import { types } from "@babel/core";
import { Player, RootStackParamList } from "../config/types.js";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "JoinGame">;

const JoinGameScreen: React.FC<Props> = ({ navigation }) => {
  const [code, setCode] = useState(new Array(6).fill(""));
  const refs = useRef<Array<TextInput | null>>(new Array(6).fill(null));

  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Auto-focus to the next input field when entering a character
    if (text && index < 5) {
      refs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: { nativeEvent: { key: any; }; }, index: number) => {
    const key = e.nativeEvent.key;

    // If backspace is pressed and the current input is empty, focus the previous input field
    if (key === 'Backspace' && index > 0 && !code[index]) {
      refs.current[index - 1]?.focus();
      const newCode = [...code];
      newCode[index - 1] = ''; // Clear the previous input field
      setCode(newCode);
    }
  };

  
  function handleJoinGame(code: any[]): void {
    const codeString = code.join('');
    const codeInt = parseInt(codeString, 10)
    navigation.navigate("Lobby", {code: codeInt})
    
  }

  return (
    <ImageBackground
      source={require("../assets/images/casino.png")}
      style={styles.background}
    >
      <View style={styles.settingsWindow}>
        <View>
          <View style={styles.container}>
            <Text style={styles.promptText}>Enter the 6-digit code</Text>
            {/* First Row of Inputs */}
            <View style={styles.inputContainer}>
        {code.slice(0, 3).map((value, index) => (
          <TextInput
            key={index}
            ref={ref => (refs.current[index] = ref)}
            style={styles.input}
            value={value}
            keyboardType="number-pad"
            maxLength={1} // Allow only 1 character per slot
            onChangeText={text => handleChange(text, index)}
            onKeyPress={e => handleKeyPress(e, index)}
            textAlign="center"
          />
        ))}
      </View>

      {/* Dash Separator */}
      <Text style={styles.dash}>-</Text>

      {/* Second Row of Inputs */}
      <View style={styles.inputContainer}>
        {code.slice(3).map((value, index) => (
          <TextInput
            key={index + 3}
            ref={ref => (refs.current[index + 3] = ref)}
            style={styles.input}
            value={value}
            keyboardType="number-pad"
            maxLength={1} // Allow only 1 character per slot
            onChangeText={text => handleChange(text, index + 3)}
            onKeyPress={e => handleKeyPress(e, index + 3)}
            textAlign="center"
          />
        ))}
      </View>
          <View style={styles.registerButton}>
            <Button
              title="JOIN GAME"
              buttonStyle={styles.buttonStyle}
              containerStyle={styles.buttonContainer}
              titleStyle={{ fontWeight: "bold" }}
              onPress={() => handleJoinGame(code)}
            />
          </View>
        </View>
      </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  dash: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#888', // Grey background for each slot
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    width: 50,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 5,
    textAlign: 'center',
  },
  promptText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  background: {
    flex: 1,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
  },
  buttonStyle: {
    backgroundColor: "#004D40",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
  },
  buttonContainer: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
    alignSelf: "center",
  },
  registerButton: {
    width: "40%",
    height: 200,
    backgroundColor: colors.transparent,
  },
  settingsWindow: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 30,
    height: "90%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: colors.transparent,
  },
  codeText: {
    fontSize: 40, // Large font size for the code
    fontWeight: "bold",
    marginBottom: 30,
    color: "#fff",
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  playersTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  playerItem: {
    fontSize: 18,
    color: "#fff",
    marginVertical: 5,
  },
});

export default JoinGameScreen;

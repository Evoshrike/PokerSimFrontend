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
} from "react-native";
import { Button } from '@rneui/base';
import { SafeAreaView } from "react-native-safe-area-context";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { rgbaColor } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { registerSensor } from "react-native-reanimated/lib/typescript/reanimated2/core";

import colors from "../config/colors.js";
import { FlatList } from "react-native";
import funcs from "../API things/funcs.js";
import { useEffect, useState } from "react";
import { types } from "@babel/core";
import { Player } from "../config/types.js";



const NewGameScreen = () => {
  const [code, setCode] = useState(undefined);
  const [players, setPlayers] = useState(null);

  const fetchCode = async () => {
    const code = await funcs.onNewGamePress();
    setCode(code);
  }
  const fetchStatus = async () => {
    const game = await funcs.onGameStatusRefresh(code);
    const players = game.players.map((p: Player) => p.name)
    setPlayers(players);
  }
  useEffect(() => {
    fetchCode(); // Fetch code when the component mounts
  }, []);
  if (code != undefined){
    fetchStatus();
  }


  
  return (
    <ImageBackground
      source={require("../assets/images/casino.png")}
      style={styles.background}
    >
      <View style={styles.settingsWindow}>
        <View>
          <Text style={styles.playersTitle}>Your code is</Text>
          <Text style={styles.codeText}>{code}</Text>
          <Text style={styles.playersTitle}>Players:</Text>
          <FlatList
            data={players}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Text style={styles.playerItem}>{item}</Text>
            )}
          />
          <Button
              title="NEW GAME"
              buttonStyle={styles.buttonStyle}
              containerStyle={styles.buttonContainer}
              titleStyle={{ fontWeight: 'bold' }}
              onPress={() => console.log("join game")}
            />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
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
    backgroundColor: "#f8f8f8",
  },
  codeText: {
    fontSize: 40, // Large font size for the code
    fontWeight: "bold",
    marginBottom: 30,
    color: "#fff",
    textAlign: "center",
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
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

export default NewGameScreen;

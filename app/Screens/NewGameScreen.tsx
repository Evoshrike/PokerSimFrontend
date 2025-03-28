import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { Button } from "@rneui/base";

import colors from "../config/colors.js";
import { FlatList } from "react-native";
import funcs from "../API things/funcs";
import { useEffect, useState } from "react";

import { Player, RootStackParamList } from "../config/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
  
type Props = NativeStackScreenProps<RootStackParamList, "NewGame">;
  
  
  const NewGameScreen: React.FC<Props> = ({ navigation, route }) =>  {

    const [code, setCode] = useState(undefined);
  
  const [players, setPlayers] = useState(null);

  const fetchCode = async () => {
    const code = await funcs.onNewGamePress();
    console.log("we got a code");
    setCode(code);
  };
  const fetchStatus = async () => {
    if (code) {
      const game = await funcs.onGameStatusRefresh(code);
      const players = game.players.map((p: Player) => p.name);
      setPlayers(players);
    }
  };
  useEffect(() => {
    fetchCode(); // Fetch code when the component mounts
  }, []);

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;
    if (code) {
      // Set up polling every 10 ms
      intervalId = setInterval(() => {
        fetchStatus(); 
      }, 10); 
    }

    // Cleanup: clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [code]);
  return (
    <ImageBackground
      source={require("../assets/images/casino.png")}
      style={styles.background}
    >
      <View style={styles.settingsWindow}>
        <View>
          <View style={styles.container}>
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
          </View>
          <View style={styles.registerButton}>
            <Button
              title="START GAME"
              buttonStyle={styles.buttonStyle}
              containerStyle={styles.buttonContainer}
              titleStyle={{ fontWeight: "bold" }}
              onPress={() => navigation.navigate("InGame")}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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

export default NewGameScreen;

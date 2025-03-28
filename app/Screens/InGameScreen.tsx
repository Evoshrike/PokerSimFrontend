import React, { useState } from 'react';
import { Text, View, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';

const InGameScreen = () => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  // Simulated player names for 7 players
  const players = [
    { name: 'Player1', bet: 0, balance: 1000 },
    { name: 'Player2', bet: 0, balance: 1000 },
    { name: 'Player3', bet: 0, balance: 1000 },
    { name: 'Player4', bet: 0, balance: 1000 },
    { name: 'Player5', bet: 0, balance: 1000 },
    { name: 'Player6', bet: 0, balance: 1000 },
    { name: 'Player7', bet: 0, balance: 1000 },
  ];

  // Simulating flop cards (empty initially)
  const flopCards = new Array(5).fill(null);

  return (
    <ImageBackground
      source={require('../assets/images/casino.png')}
      style={styles.background}
    >
      <View style={styles.overlayContainer}>
        <View style={styles.gameArea}>
          <View style={styles.playersContainer}>
            {/* Display the player slots */}
            {players.map((player, index) => (
              <View key={index} style={styles.playerSlot}>
                <Text style={styles.playerName}>{player.name}</Text>
                <Text style={styles.playerInfo}>Bet: {player.bet}</Text>
                <Text style={styles.playerInfo}>Balance: {player.balance}</Text>
              </View>
            ))}
          </View>

          <View style={styles.flopCardsContainer}>
            {/* Display flop cards */}
            {flopCards.map((card, index) => (
              <View key={index} style={styles.cardSlot}>
                {card ? (
                  <Image
                    source={card}
                    style={styles.card}
                  />
                ) : (
                  <Text style={styles.cardPlaceholder}>?</Text>
                )}
              </View>
            ))}
          </View>

          <View style={styles.cardsArea}>
            {/* Cards will appear here when the button is held */}
            {isButtonPressed && (
              <>
                <Image
                  source={require('../assets/images/3_of_hearts.png')}
                  style={styles.card}
                />
                <Image
                  source={require('../assets/images/4_of_clubs.png')}
                  style={styles.card}
                />
              </>
            )}
          </View>

          <TouchableOpacity
            style={styles.button}
            onPressIn={() => setIsButtonPressed(true)}
            onPressOut={() => setIsButtonPressed(false)}
          >
            <Text style={styles.buttonText}>Show Cards</Text>
          </TouchableOpacity>

          {/* Bet and Balance section */}
          <View style={styles.bettingSection}>
            <Text style={styles.bettingText}>Bet: 0</Text>
            <Text style={styles.bettingText}>Balance: 1000</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameArea: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Transparent black
    padding: 20,
    borderRadius: 30,
    width: '80%',
    height: '80%', // Takes up 80% of the screen
    justifyContent: 'space-between',
  },
  playersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  playerSlot: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    width: '30%',
    alignItems: 'center',
  },
  playerName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  playerInfo: {
    color: '#fff',
    fontSize: 14,
  },
  flopCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cardSlot: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    width: '18%',
    alignItems: 'center',
  },
  card: {
    width: 60,
    height: 90,
  },
  cardPlaceholder: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardsArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#004D40',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  bettingSection: {
    marginTop: 10,
    alignItems: 'center',
  },
  bettingText: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 5,
  },
});

export default InGameScreen;

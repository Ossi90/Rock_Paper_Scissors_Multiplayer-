import React, { Component, useEffect, useState } from 'react';
import MQTTService from './modules/MQTT.ts';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Client, Message } from 'react-native-paho-mqtt';


const game = {
  weapons: ['rock', 'scissors', 'paper'],
  winner: function (player) {
    var win = new Map();
    win[0] = 1;
    win[1] = 2;
    win[2] = 0;
    return win[player];
  },
  loser: function (player) {
    var lose = new Map();
    lose[0] = 2;
    lose[1] = 0;
    lose[2] = 1;
    return lose[player];
  },
};

export default function App() {
  const [state, setState] = useState({
    winOrLose: 'No Info',
    cpuScore: 0,
    playerScore: 0,
  });

  const setWeaponText = (wp) => {
    setState({
      winOrLose: chooseWeapon(wp),
    });
  };
  return (
    <View style={styles.container}>
      <Text>{state.winOrLose}</Text>
      <Button style={styles.buttons} onPress={() => setWeaponText(0)} title="Rock" />
      <Button style={styles.buttons} onPress={() => setWeaponText(1)} title="Scissors" />
      <Button style={styles.buttons} onPress={() => setWeaponText(2)} title="Paper" />
    </View>
  );
}

function battle(player, cpu) {
  const mqtt = new MQTTService();
  mqtt.getSend(game.weapons[player]);
  console.log(game.weapons[player]);
  console.log(game.weapons[cpu]);
  if (game.winner(player) == cpu) {
    console.log('win');
    return 'Win';

    } else if (game.loser(player) == cpu) {
     console.log('lost');
     return 'Lost';

    }else {
     console.log('draw');
    return 'Draw';
  }
}

function chooseWeapon(player) {
  let cpu = Math.floor(Math.random() * 3);
  return battle(player, cpu);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    padding: 30,
  },
});

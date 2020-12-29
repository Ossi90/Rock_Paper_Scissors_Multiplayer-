import React, { useState, Fragment } from 'react';
import { Client, Message } from 'react-native-paho-mqtt';

//Set up an in-memory alternative to global localStorage
const myStorage = {
  setItem: (key, item) => {
    myStorage[key] = item;
  },
  getItem: (key) => myStorage[key],
  removeItem: (key) => {
    delete myStorage[key];
  },
};

// connect the client
const connect = () =>{
}

const sendAndGetMessage = (m) => {
const client = new Client({ uri: 'ws://raspberrypi:8081/ws', clientId: 'c', storage: myStorage });

client.on('connectionLost', (responseObject) => {
  if (responseObject.errorCode !== 0) {
    console.log(responseObject.errorMessage);
  }
});
client.on('messageReceived', (message) => {
  console.log(message.payloadString);
});

   client.connect()
  .then(() => {
    // Once a connection has been made, make a subscription and send a message.
    console.log('onConnect');
    return client.subscribe('lock/msg');
  })
  .then(() => {
    const message = new Message(m);
    message.destinationName = 'lock/msg';
    client.send(message);
  })
  .catch((responseObject) => {
    if (responseObject.errorCode !== 0) {
      console.log('onConnectionLost:' + responseObject.errorMessage);
    }
  });
}

export default class MQTTService extends React.Component{
   
constructor(){
   
super()
}

getSend = (message) => {
sendAndGetMessage(message);
   }
}
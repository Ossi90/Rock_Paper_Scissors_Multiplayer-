import React , { Component }from 'react';
import { StyleSheet, Text, View, Button,TextInput,ImageBackground,Image } from 'react-native';

const IDScreen = () => {
    const [text, setText] = React.useState('');

    return (
       <View style={styles.container}>
     
        <ImageBackground 
       source={require('../../assets/ID_BackGround/background-gif.gif')}
         style={styles.backgroundImage}>
        <View style={styles.container2}>
            <Text style={styles.text}>Enter Game Tag!</Text>
               <TextInput
                 style={styles.input}
                 value={text}
                 onChangeText={text => setText(text)}
       
       />
        </View>
         </ImageBackground>
       </View>
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  container2:{
    position: 'absolute',
    top: 0, 
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "pink"
  },
  input:{
    fontSize: 20,
    fontWeight: "bold",
    color: "pink",
    borderWidth: 0
  },
 backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1 
  
  },
  
});

export default IDScreen;

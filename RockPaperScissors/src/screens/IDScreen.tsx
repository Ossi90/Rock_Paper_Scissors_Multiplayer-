import React , { Component }from 'react';
import { StyleSheet, Text, View, Button,TextInput,ImageBackground,Image,TouchableOpacity } from 'react-native';

const IDScreen = () => {
    const [text, setText] = React.useState('');

    return (
    <View style={styles.container}>
    
        <ImageBackground 
       source={require('../../assets/ID_BackGround/background-gif.gif')}
         style={styles.backgroundImage}>
        <View style={styles.container2}>
                <Image
                source={require('../../assets/rps.gif')}
                style={styles.rps}/>
                   <View />
        <Text>{emptySpace(3)}</Text>
            <Text style={styles.text2}></Text>
               <TextInput
                 style={styles.input}
                 value={text}
                 onChangeText={text => setText(text)}/>
                  <Text>{emptySpace(2)}</Text>
                     <TouchableOpacity style = {styles.button} activeOpacity={0.5}>
                        <Image
                        source={require('../../assets/ID_BackGround/IDbutton2.png')}
                        style={styles.button}/>
                   <View />

            </TouchableOpacity>
        </View>
         </ImageBackground>
       </View>
    )

}

function emptySpace(numberOfSpaces){
  let space = "";
  for(let i = 0; i<numberOfSpaces; i++){
    space += " \n"
  }
 return space;
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
  text1:{
    fontSize: 30,
    fontWeight: "bold",
    color: "pink"
  },
  text2: {
    fontSize: 40,
    fontWeight: "bold",
    color: "pink"
  },
  input:{
    fontSize: 20,
    fontWeight: "bold",
    color: "pink",
    borderBottomColor:'pink',
   // borderColor: "pink",
   // borderWidth: 0.5,
    //padding: 30
  },
 backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1 
  
  },
button:{
  flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.0,
    height: 100,
    borderRadius: 5,
    margin: 5,
     width: 300
  
},
rps:{
  flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.0,
    height: 200,
    borderRadius: 5,
    margin: 5,
     width: 200
  
}
  
});

export default IDScreen;

import { AsyncStorage } from "react-native";
import React, { Component, useEffect, useState } from 'react';






export default class userInfo extends React.Component{
    userInfo={
       gameTag: "",
   }
constructor(){
super()
}

/*setGameTag = async (gameTag) => {
        try {
            await AsyncStorage.setItem('tag', gameTag);
        } catch (error) {
            console.log(error);
        }
    }*/



/*getGameTag = async () => {
        try {
            const value = await AsyncStorage.getItem('tag');
            if (value !== null) {
                return value;
            }
        } catch (error) {
             console.log("no user");
        }
    }*/

 setGameTag = (tag) => {
    userInfo.gameTag = tag;
}
 getGameTag = () => {
     if(userInfo.gameTag !==""){
        return userInfo.gameTag; 
     }else{
         return "no user";
     }
    
}

}


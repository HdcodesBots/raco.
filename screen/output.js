import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import AppHeader from '../header.js'

export default  class Output extends React.Component {
    render(){
        return (
            <View>
        <AppHeader/>
        
        
            <View >
              <Text style = {{fontSize : 30 , alignSelf : 'center' , marginTop : 10 , marginBottom : 10 , fontWeight : "bold" , fontFamily : "Roboto"}}>Here is your color! 🤗</Text>
              <StatusBar style="auto" />
            </View>
            <View>
            <Text style = {styles.OutputColor}></Text>
            </View>
            </View>

          );
        }

    }

    const styles = StyleSheet.create({
    
     OutputColor: {
       elevation : 10,
        backgroundColor: 'lightgrey',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop : 100 , 
        width : 300,
        height : 300,
       borderRadius : 10, 
       
       
    
    
      },

    
    
    });
    
import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import {createAppContainer , createSwitchNavigator} from 'react-navigation'
import Generate from './screen/generate';
import Output from './screen/output';

export default class App extends React.Component {
  render(){
 return (
   // <View>
       <AppContainer/>
   //</View>
  )
}
  }
 
var AppNavigator = createSwitchNavigator ({
  Output : Output ,
Generate : Generate 


})
const AppContainer = createAppContainer (AppNavigator)
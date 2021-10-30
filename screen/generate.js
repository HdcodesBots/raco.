
import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import AppHeader from '../header.js'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Output from './output.js';
export default class Generate extends React.Component{
    render(){
        return (
            <View>
        <AppHeader/>
        <View style={styles.container}>
          <Text>generate</Text>
          </View>
          <View>

<TouchableOpacity >
<Text style = {styles.buttontxt} onPress={()=>{this.props.navigation.navigate('Output')}}>Random Color</Text>
</TouchableOpacity >




            </View>
            </View>
          );
        }


    }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 button: {
   elevation : 10,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : 100 , 
    width : 200,
    height : 50,
   borderRadius : 10, 
   
   


  },
  buttontxt :  {
    fontSize : 27,
  }


});

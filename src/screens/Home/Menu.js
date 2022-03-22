import React from 'react';
import { View, Text, Button, StatusBar, Image, StyleSheet  } from 'react-native';

export default function Home({navigation}) {
 
  return (
   <View style={{flexDirection: "column", backgroundColor:"#fff" }}>
      <StatusBar barStyle="dar-content" hidden = {false} backgroundColor="black"/>
      <View style={{flexDirection:"row", backgroundColor: "black"}}>
      <Button
        
        title =  "  Shapes  "
        color="black"
        onPress = { () =>
          navigation.navigate('Shape')}
          />
        <Button
        
        title = " Trucks  "
        color="black"
        onPress = { () =>
          navigation.navigate('Trucks')}
        />
      <Button
        title = "  Rodas  "
        color="black"
        onPress = { () =>
          navigation.navigate('Rodas')}
         />
         <Button
        title = "  Login  "
        color="black"
        onPress = { () =>
          navigation.navigate('Login')}
         />
         
      </View>
      
      <View style={{paddingTop:40, paddingLeft:2}}>
      <Image source={require('../../media/assets/images/m57.png')} style={{ width: 350, height: 100,}}/>

      <Text style={{color:"black", fontSize:20, paddingLeft:110,}}>SKATE SHOP</Text>
      </View>
      
      <View style={{paddingTop:211, paddingLeft:2, }}>
      <Image source={require('../../media/assets/images/ramp.webp')} style={{ width: 350, height: 100,}}/>

      
      </View>
      <View style={{flexDirection:"column", backgroundColor:"black", paddingTop:15}}>
        <Text style={{color:"#fff", paddingLeft:110, }}>Maze skate shop</Text>
      </View>
   </View>  
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
import React from 'react';
import { View, Text, Button, StatusBar, Image, StyleSheet } from 'react-native';

export default function Home({ navigation }) {

  return (
    <View style={{ flexDirection: "column", backgroundColor: '#fff' }}>
      <StatusBar barStyle="dark-content" hidden={true} backgroundColor="black" />
      <View style={{ flexDirection: "row", backgroundColor: "black", justifyContent: 'space-around' }}>

        <Button
          title="Shapes"
          color="black"
          onPress={() =>
            navigation.navigate('Shape')}
        />

        <Button
          title="Trucks"
          color="black"
          onPress={() =>
            navigation.navigate('Trucks')}
        />

        <Button
          title="Rodas"
          color="black"
          onPress={() =>
            navigation.navigate('Rodas')}
        />

        <Button
          title="Login"
          color="black"
          onPress={() =>
            navigation.navigate('Login')}
        />

      </View>

      <View style={{ paddingTop: '35%' }}>
        <Image source={require('../../media/assets/images/m57.png')} style={{ width: '100%', height: 150, }} />
        <Text style={{ color: "black", fontSize: 20, textAlign: 'center', fontWeight: '600' }}>SKATE SHOP</Text>
      </View>

      <View style={{ paddingTop: '10%' }}>
        <Image source={require('../../media/assets/images/ramp.webp')} style={{ width: '100%', height: 150, }} />
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
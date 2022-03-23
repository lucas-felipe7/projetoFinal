import React from 'react';
import { View, Text, Button, StatusBar, Image, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native';



export default function Trucks({navigation}) {
    const Separator = () => (
        <View style={styles.separator} />
      );
  return(
    <View style={{flexDirection: "column", backgroundColor:"#fff" }}>
      <StatusBar barStyle="dar-content" hidden = {false} backgroundColor="black"/>
      
      <SafeAreaView>
      <ScrollView style={[styles.scrollView,]}>
        <View style={{flexDirection:"column", backgroundColor:'#fff'}}>
          <Text style={{fontSize:29, color:"#000000", paddingLeft:100}}>TRUCKS</Text>
          <Separator/>
          <Text style={{fontSize:19, color:"#000000", paddingLeft:100}}>Tamanhos</Text>
          <View style={{flexDirection:"column", backgroundColor:'#fff'}}>
          <Text style={{fontSize:13, color:"#000000", }}>Trucks de 129mm – Para shapes com a de largura de 7.5” a 8.0” polegadas.</Text>
          <Text style={{fontSize:13, color:"#000000", }}>Trucks de 139mm – Para shapes com largura de 8.0” a 8.2” polegadas.</Text>
          <Text style={{fontSize:13, color:"#000000", }}>Trucks de 149mm – Para shapes com largura de 8.2” a 8.5” polegadas.</Text>
          <Text style={{fontSize:13, color:"#000000", }}>Trucks de 159mm – Para shapes com largura de 8.5” a 9.0” polegadas.</Text>

          </View>
          <View style={{flexDirection:'row', paddingTop:42, paddingLeft:0, paddingRight:2 }}>
            <Image source={require('../../media/assets/images/in.jpeg')} style={{ width: 65, height: 70, }}/>
            <Image source={require('.../../media/assets/images/ve.png')} style={{ width: 65, height: 70, }}/>
            <Image source={require('../../media/assets/images/ro.png')} style={{ width: 65, height: 70, }}/>
            <Image source={require('../../media/assets/images/thu.jpg')} style={{ width: 65, height: 70, }}/>
            <Image source={require('../../media/assets/images/si.jpg')} style={{ width: 65, height: 70, }}/>

          </View>
          <Separator/>
          <View style={{flexDirection: "column", backgroundColor:"#fff" }} >
            <Image source={require('../../media/assets/images/indi.jpg')} style={{ width: 300, height: 150, }}/>
            <Text style={{paddingLeft:15, fontSize:12, color:'black'}}>Truck Independent 149 Stage 11 STD Pro Mason Silva</Text>
            <Text style={{paddingLeft:5, fontSize:15, color:'black',paddingTop:13,padding:7}}>R$ 700,00</Text>
            <Button title="Comprar" color="black"
             onPress={() => Alert.alert('Fora do estoque')}
            />
          </View>
          <Separator/>
          <View style={{flexDirection: "column", backgroundColor:"#fff", paddingTop:22 }} >
            <Image source={require('../../media/assets/images/ind.jpeg')} style={{ width: 310, height: 280, }}/>
            <Text style={{paddingLeft:15, fontSize:12, color:'black'}}>TTruck Independent 144mm Polished Prata</Text>
            <Text style={{paddingLeft:5, fontSize:15, color:'black',paddingTop:13,padding:7}}>R$ 700,00</Text>
            <Button title="Comprar" color="black"
             onPress={() => Alert.alert('Fora do estoque')}
            />
          </View>
          <Separator/>
          <View style={{flexDirection: "column", backgroundColor:"#fff", paddingTop:22 }} >
            <Image source={require('../../media/assets/images/thunder.jpg')} style={{ width: 310, height: 280, }}/>
            <Text style={{paddingLeft:15, fontSize:12, color:'black'}}>Truck Thunder 139mm black </Text>
            <Text style={{paddingLeft:5, fontSize:15, color:'black',paddingTop:13,padding:7}}>R$ 620,00</Text>
            <Button title="Comprar" color="black"
             onPress={() => Alert.alert('Fora do estoque')}
            />
          </View>
          <Separator/>
          <View style={{flexDirection: "column", backgroundColor:"#fff", paddingTop:22 }} >
            <Image source={require('../../media/assets/images/silver.jpg')} style={{ width: 310, height: 280, }}/>
            <Text style={{paddingLeft:15, fontSize:12, color:'black'}}>Truck Silver 129mm black </Text>
            <Text style={{paddingLeft:5, fontSize:15, color:'black',paddingTop:13,padding:7}}>R$ 399,00</Text>
            <Button title="Comprar" color="black"
             onPress={() => Alert.alert('Fora do estoque')}
            />
          </View>
          <Separator/>
          <View style={{flexDirection: "column", backgroundColor:"#fff", paddingTop:22 }} >
          <Image source={require('../../media/assets/images/royal.jpg')} style={{ width: 310, height: 280, }}/>
            <Text style={{paddingLeft:15, fontSize:12, color:'black'}}>Truck Royal 129mm collab girl </Text>
            <Text style={{paddingLeft:5, fontSize:15, color:'black',paddingTop:13,padding:7}}>R$ 329,00</Text>
            <Button title="Comprar" color="black"
             onPress={() => Alert.alert('Fora do estoque')}
            />
          </View>
          <Separator/>
          <View style={{flexDirection: "column", backgroundColor:"#fff", paddingTop:22 }} >
          <Image source={require('../../media/assets/images/venture.png')} style={{ width: 310, height: 280, }}/>
            <Text style={{paddingLeft:15, fontSize:12, color:'black'}}>Truck venture 129mm High weed </Text>
            <Text style={{paddingLeft:5, fontSize:15, color:'black',paddingTop:13,padding:7}}>R$ 589,00</Text>
            <Button title="Comprar" color="black"
             onPress={() => Alert.alert('Fora do estoque')}
            />
          </View>
        </View>
      </ScrollView>
      </SafeAreaView>
      
   </View>
  );
}

const styles = StyleSheet.create({
  
  

    scrollView: {
      backgroundColor: '#fff',
      marginHorizontal: 15,
    },
    separator: {
      padding:8,
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });


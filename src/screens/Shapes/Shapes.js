import React from 'react';
import { View, Text, Button, StatusBar, Image, StyleSheet, SafeAreaView, ScrollView, Alert  } from 'react-native';

export default function Shape({navigation}) {
    const Separator = () => (
        <View style={styles.separator} />
      );
    return(
        <View style={{flexDirection: "column", backgroundColor:"#fff" }}>
        <StatusBar barStyle="dar-content" hidden = {false} backgroundColor="black"/>
        
        <SafeAreaView>
        <ScrollView style={[styles.scrollView,]}>
          
          <View style={{flexDirection:"column", backgroundColor:'#fff'}}>
            <Image source={require('../../media/assets/images/shap.png')} style={{ width: 330, height: 100,}}/>
  
            <Text style={{paddingLeft:30, fontSize:25, color:'black'}}>Modelos disponiveis</Text>
            <Separator />
  
            <View style={{flexDirection:'column', paddingTop:42, paddingLeft:32, paddingRight:52 }}>
            <Image source={require('../../media/assets/images/dgk.jpg')} style={{ width: 250, height: 300, paddingTop:22}}/>
            <Text style={{paddingLeft:30, fontSize:12, color:'black'}}>shape dgk tamanho 8.0</Text>
            <Text style={{paddingLeft:10, fontSize:12, color:'black',paddingTop:13,padding:7}}>R$ 350,00</Text>
            <Button title="Comprar" color="black"
             onPress={() => Alert.alert('Fora do estoque')}
            />  
            </View>
  
            <Separator />
  
            <View style={{flexDirection:'column', paddingTop:42, paddingLeft:32, paddingRight:52 }}>
            <Image source={require('../../media/assets/images/creature.webp')} style={{ width: 250, height: 300,}}/>
            <Text style={{paddingLeft:10, fontSize:12, color:'black', paddingTop:15}}>shape creature tamanho 8.5 </Text>  
            <Text style={{paddingLeft:10, fontSize:12, color:'black',paddingTop:13,padding:7}}>R$ 390,00</Text>
            <Button title="Comprar" color="black"
             onPress={() => Alert.alert('Fora do estoque')}
            />      
            </View>
  
            <Separator />
  
            <View style={{flexDirection:'column', paddingTop:42, paddingLeft:32, paddingRight:52}}>
            <Image source={require('../../media/assets/images/flip.jpg')} style={{ width: 250, height: 300,}}/>
            <Text style={{paddingLeft:30, fontSize:12, color:'black'}}>shape flip tamanho 8.1</Text>  
            <Text style={{paddingLeft:10, fontSize:12, color:'black',}}>R$ 490,00</Text>
            <Button title="Comprar" color="black"
             onPress={() => Alert.alert('Fora do estoque')}
            />          
            </View>
            <Separator />
  
            <View style={{flexDirection:'column', paddingTop:42, paddingLeft:32, paddingRight:52 }}>
            <Image source={require('../../media/assets/images/plan.jpg')} style={{ width: 150, height: 300,}}/>
            <Text style={{paddingLeft:30, fontSize:12, color:'black'}}>shape  planb tamanho 7.8</Text> 
            <Text style={{paddingLeft:10, fontSize:12, color:'black',paddingTop:13,padding:7}}>R$ 550,00</Text>
            <Button title="Comprar" color="black"
             onPress={() => Alert.alert('Fora do estoque')}
            />            
            </View>
            <Separator />
  
  
            <View style={{flexDirection:'column', paddingTop:42, paddingLeft:32 }}>
            <Image source={require('../../media/assets/images/girl.jpg')} style={{ width: 240, height: 320,}}/>
            <Text style={{paddingLeft:30, fontSize:12, color:'black'}}>shape toy machine tamanho 8.2</Text>
            <Text style={{paddingLeft:10, fontSize:12, color:'black',paddingTop:13,padding:7}}>R$ 400,00</Text>
            <Button title="Comprar" color="black"
             onPress={() => Alert.alert('Fora do estoque')}
            />  
            </View>
            <Separator />
  
            <View style={{flexDirection:'column', paddingTop:42, paddingLeft:32, paddingRight:52 }}>
            <Image source={require('../../media/assets/images/pri.jpg')} style={{ width: 200, height: 350,}}/>
            <Text style={{ fontSize:12, color:'black'}}>shape primitive tamanho 8.25</Text>
            <Text style={{paddingLeft:10, fontSize:12, color:'black',paddingTop:13,padding:7}}>R$ 550,00</Text>
            <Button title="Comprar" color="black"
             onPress={() => Alert.alert('Fora do estoque')}
            />  
            </View>
            <Separator />
  
            
  
            <View style={{lexDirection: "column", backgroundColor:"#fff"}}>
                <Text style={{fontSize:13, color:'black', padding:4}}>7.5 a 8, para stret, 8.0 a 8.25 é para “Vert ou mini ramp”, "8.25” a "8.5"é para Bowls e rampas verticais (Half-pipes e mini-ramps) </Text>
                <Text style={{fontSize:13, color:'black', padding:4}}>Vai de acordo com o gosto e tamanho do pé</Text>
                <Text style={{fontSize:13, color:'black', padding:4}}>"8.25” a "8.5"é para Bowls e rampas verticais (Half-pipes e mini-ramps) 
                </Text>
            </View>
            <View style={{flexDirection:"column", backgroundColor:"black", }}>
               <Text style={{color:"#fff", paddingLeft:110, }}>Maze skate shop</Text>
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
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
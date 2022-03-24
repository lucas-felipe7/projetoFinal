import React from 'react';
import { StyleSheet, 
    Button, 
    StatusBar, 
    View, 
    Text, 
    Image,
    TextInput,
    SafeAreaView,ScrollView, onPress, Alert, } from 'react-native';



export default function Login({navigation}) {
  return(
    <View style={[styles.container, {flexDirection: "column", }]}>
     
      <StatusBar barStyle="dar-content" hidden = {false} backgroundColor="#000000"/>
      
      <SafeAreaView style={styles.container1}>
      <ScrollView style={styles.scrollView}>
      <View style={[styles.inicio,{ flex:1,}]}>
        <Image
        source={require('../../media/assets/images/mazelog.png')}
        style={{  width: 280, height: 100,}}
        />  
      </View>
      <View style={[styles.formConteiner,{ flex:1, } ]}>
        <Text style={{paddingLeft:103, fontSize: 33, }}>Login</Text>
      <SafeAreaView>
      <Text style={{paddingLeft:13, fontSize:12, color:"#fff" }}>Informe seu email</Text> 
        <TextInput
        title="ola"
        style={styles.input}
        onChangeText={"Seu email"}
        placeholder="Email:"
      />
      <Text style={{paddingLeft:185, fontSize:10, color:"#fff" }}>Esse é seu email?</Text>
      <Text style={{paddingLeft:13, fontSize:12, color:"#fff", paddingTop:22,}}>Informe sua senha</Text> 
      <TextInput
        style={styles.input}
        placeholder="Senha:"
        keyboardType="string"
      />
      <Text style={{paddingLeft:185, fontSize:10, color:"#fff" }}>Essa é sua senha?</Text>
      <View style={[{flexDirection: "row", justifyContent: "space-around", paddingTop:41, padding:19, color:"#fff"}]}>
      <Button style={[styles.Button]}
          title = "     Login    "
          borderRadios = "1"
          color = "#586875"
          onPress={()=>Alert.alert("Você esta logado")}
        />


        <Button style={[styles.Button]}
          title = "Cadastrar"
          color = "#586875"
          onPress={()=>Alert.alert("Você foi cadastrado")}
        />

      </View>
       

    </SafeAreaView>
    
      </View> 
      
      
        
      </ScrollView>
    </SafeAreaView>
    
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 0,
      display:"flex"
    },
    
    
  
    inicio:{
     
      padding: 24,
      display:"flex"
    },
  
    formConteiner:{
      padding: 11 & 11,
      display:"flex",
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      color:"#000000",
      backgroundColor:"#fff"
  
    },
  
    container1: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      borderStyle:"solid",
      paddingBottom:22
    },
    scrollView: {
      backgroundColor: "#000000",
      marginHorizontal: 20,
      paddingTop:5,
      
    },
    
  });
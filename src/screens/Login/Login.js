import React from 'react';
import { StyleSheet, Button, StatusBar, View, Text, Image, TextInput, SafeAreaView, ScrollView, onPress, Alert, } from 'react-native';



export default function Login({ navigation }) {
  return (
    <View style={[styles.container, { flexDirection: "column", }]}>

      <StatusBar barStyle="dark-content" hidden={true} backgroundColor="#000000" />

      <SafeAreaView style={styles.container1}>
        <ScrollView style={styles.scrollView}>
          <View style={[styles.inicio, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
            <Image
              source={require('../../media/assets/images/mazelog.png')}
              style={{ width: 350, height: 100, }}
            />
          </View>
          <View style={[styles.formConteiner, { flex: 1, }]}>
            <SafeAreaView>
              <Text style={{ paddingLeft: "5%", fontSize: 16, color: "#fff", marginTop: '10%' }}>Informe seu email</Text>
              <TextInput
                title="ola"
                style={styles.input}
                onChangeText={"Seu email"}
                placeholder="Email:"
              />
              <Text style={{ paddingLeft: "65%", fontSize: 14, color: "#fff" }}>Esse é seu email?</Text>
              <Text style={{ paddingLeft: "5%", fontSize: 16, color: "#fff", marginTop: "15%", }}>Informe sua senha</Text>
              <TextInput
                style={styles.input}
                placeholder="Senha:"
                keyboardType="string"
              />
              <Text style={{ paddingLeft: "65%", fontSize: 14, color: "#fff" }}>Essa é sua senha?</Text>
              <View style={[{ flexDirection: "row", justifyContent: "space-around", paddingTop: 41, padding: 19, color: "#fff" }]}>

                <Button style={[styles.Button]}
                  title=" Login "
                  color="grey"
                  onPress={() => Alert.alert("Você esta logado")}
                />


                <Button style={[styles.Button]}
                  title=" Cadastrar "
                  color="grey"
                  onPress={() => Alert.alert("Você foi cadastrado")}
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
    display: "flex"
  },



  inicio: {

    padding: 24,
    display: "flex"
  },

  formConteiner: {
    padding: 11 & 11,
    display: "flex",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "#000000",
    backgroundColor: "#fff"

  },

  container1: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    borderStyle: "solid",
    paddingBottom: 6
  },
  scrollView: {
    backgroundColor: "#000000",
    marginHorizontal: 6,
    paddingTop: 6,

  },

});
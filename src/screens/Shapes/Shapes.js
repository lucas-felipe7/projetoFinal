import React from 'react';
import { View, Text, Button, StatusBar, Image, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native';

export default function Shape({ navigation }) {
  const Separator = () => (
    <View style={styles.separator} />
  );
  return (
    <View style={{ flexDirection: "column", backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" hidden={true} backgroundColor="black" />

      <SafeAreaView>
        <ScrollView style={[styles.scrollView,]}>

          <View style={{ flexDirection: "column", backgroundColor: '#fff' }}>

            <Image source={require('../../media/assets/images/shap.png')} style={{ width: '100%', height: 100, }} />
            <Separator />

            <View style={{ flexDirection: 'column', paddingTop: "10%", justifyContent: "center", alignItems: "center" }}>
              <Image source={require('../../media/assets/images/dgk.jpg')} style={{ width: 300, height: 300, paddingTop: 22 }} />
              <Text style={{ fontSize: 16, color: 'black', fontWeight: "600" }}>SHAPE DGK TAMANHO 8.0</Text>
              <Text style={{ fontSize: 16, color: 'black', paddingTop: 10, fontWeight: 'bold' }}>R$ 350,00</Text>
              <Button title="Comprar" color="black"
                onPress={() => Alert.alert('OUT OF STOCK')}
              />
            </View>

            <Separator />

            <View style={{ flexDirection: 'column', paddingTop: "10%", justifyContent: "center", alignItems: "center" }}>
              <Image source={require('../../media/assets/images/creature.webp')} style={{ width: 250, height: 300, }} />
              <Text style={{ fontSize: 16, color: 'black', fontWeight: "600" }}>SHAPE CREATURE TAMANHO 8.5 </Text>
              <Text style={{ fontSize: 16, color: 'black', paddingTop: 10, fontWeight: 'bold' }}>R$ 390,00</Text>
              <Button title="Comprar" color="black"
                onPress={() => Alert.alert('OUT OF STOCK')}
              />
            </View>

            <Separator />

            <View style={{ flexDirection: 'column', paddingTop: "10%", justifyContent: "center", alignItems: "center" }}>
              <Image source={require('../../media/assets/images/flip.jpg')} style={{ width: 250, height: 300, }} />
              <Text style={{ fontSize: 16, color: 'black', fontWeight: "600" }}>SHAPE FLIP TAMANHO 8.1</Text>
              <Text style={{ fontSize: 16, color: 'black', paddingTop: 10, fontWeight: 'bold' }}>R$ 490,00</Text>
              <Button title="Comprar" color="black"
                onPress={() => Alert.alert('OUT OF STOCK')}
              />
            </View>
            <Separator />

            <View style={{ flexDirection: 'column', paddingTop: "10%", justifyContent: "center", alignItems: "center" }}>
              <Image source={require('../../media/assets/images/plan.jpg')} style={{ width: 150, height: 300, }} />
              <Text style={{ fontSize: 16, color: 'black', fontWeight: "600" }}>SHAPE PLANB TAMANHO 7.8</Text>
              <Text style={{ fontSize: 16, color: 'black', paddingTop: 10, fontWeight: 'bold' }}>R$ 550,00</Text>
              <Button title="Comprar" color="black"
                onPress={() => Alert.alert('OUT OF STOCK')}
              />
            </View>
            <Separator />


            <View style={{ flexDirection: 'column', paddingTop: "10%", justifyContent: "center", alignItems: "center" }}>
              <Image source={require('../../media/assets/images/girl.jpg')} style={{ width: 240, height: 320 }} />
              <Text style={{ fontSize: 16, color: 'black', fontWeight: "600" }}>SHAPE TOY MACHINE TAMANHO 8.2</Text>
              <Text style={{ fontSize: 16, color: 'black', paddingTop: 10, fontWeight: 'bold' }}>R$ 400,00</Text>
              <Button title="Comprar" color="black"
                onPress={() => Alert.alert('OUT OF STOCK')}
              />
            </View>
            <Separator />

            <View style={{ flexDirection: 'column', paddingTop: "10%", justifyContent: "center", alignItems: "center" }}>
              <Image source={require('../../media/assets/images/pri.jpg')} style={{ width: 175, height: 320, }} />
              <Text style={{ fontSize: 16, color: 'black', fontWeight: "600" }}>SHAPE PRIMITIVE TAMANHO 8.25</Text>
              <Text style={{ fontSize: 16, color: 'black', paddingTop: 10, fontWeight: 'bold' }}>R$ 550,00</Text>
              <Button title="Comprar" color="black"
                onPress={() => Alert.alert('OUT OF STOCK')}
              />
            </View>
            <Separator />



            <View style={{ lexDirection: "column", backgroundColor: "#fff", marginTop: "2%", marginBottom: "5%" }}>
              <Text style={{ textAlign: "center", color: "black", fontSize: 16, fontWeight: 'bold' }}>Sobre os tamanhos dos shapes</Text>
              <Text style={{ fontSize: 16, color: 'black', padding: 8, textAlign: "center" }}>Do tamanho 7.5 ao 8 para a modalidade Street, do tamanho 8.0 ao 8.25 é para a modalidade “Vert" ou "Mini Ramp”, e do tamanho 8.25 ao 8.5 é para Bowls e rampas verticais (Half-pipes) </Text>
              <Text style={{ fontSize: 16, color: 'black', padding: 8, textAlign: "center" }}>Também muito importante, o tamanho do shape varia de acordo com o gosto pessoal e o tamanho do seu pé</Text>
            </View>
            <View style={{ flexDirection: "column", backgroundColor: "black", }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>POR LUCAS FELIPE E YAN OLIVEIRA</Text>
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
  },
  separator: {
    marginVertical: 15,
    borderBottomColor: '#737373',
    borderBottomWidth: 2.5
  },
});
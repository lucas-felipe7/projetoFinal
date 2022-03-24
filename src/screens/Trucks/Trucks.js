import React from 'react';
import { View, Text, Button, StatusBar, Image, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native';



export default function Trucks({ navigation }) {
  const Separator = () => (
    <View style={styles.separator} />
  );
  return (
    <View style={{ flexDirection: "column", backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" hidden={true} />

      <SafeAreaView>
        <ScrollView style={[styles.scrollView,]}>
          <View style={{ flexDirection: "column", backgroundColor: '#fff' }}>
            <Text style={{ fontSize: 32, color: "#000000", textAlign: "center", marginTop: 10, fontWeight: '600' }}>TRUCKS</Text>
            <Separator />
            <Text style={{ fontSize: 22, color: "#000000", textAlign: 'center' }}>Tamanhos</Text>

            <View style={{ flexDirection: "column", backgroundColor: '#fff', paddingTop: '5%' }}>
              <Text style={{ fontSize: 16, color: "#000000", textAlign: 'center', padding: 4 }}>Trucks de 129mm – Para shapes com a de largura de 7.5” a 8.0” polegadas.</Text>
              <Text style={{ fontSize: 16, color: "#000000", textAlign: 'center', padding: 4 }}>Trucks de 139mm – Para shapes com largura de 8.0” a 8.2” polegadas.</Text>
              <Text style={{ fontSize: 16, color: "#000000", textAlign: 'center', padding: 4 }}>Trucks de 149mm – Para shapes com largura de 8.2” a 8.5” polegadas.</Text>
              <Text style={{ fontSize: 16, color: "#000000", textAlign: 'center', padding: 4 }}>Trucks de 159mm – Para shapes com largura de 8.5” a 9.0” polegadas.</Text>
            </View>

            <View style={{ flexDirection: 'row', paddingTop: "15%", justifyContent: 'space-around' }}>
              <Image source={require('../../media/assets/images/in.jpeg')} style={{ width: 70, height: 70, }} />
              <Image source={require('../../media/assets/images/ve.png')} style={{ width: 70, height: 70, }} />
              <Image source={require('../../media/assets/images/ro.png')} style={{ width: 70, height: 70, }} />
              <Image source={require('../../media/assets/images/thu.jpg')} style={{ width: 70, height: 70, }} />
              <Image source={require('../../media/assets/images/si.jpg')} style={{ width: 70, height: 70, }} />

            </View>
            <Separator />

            <View style={{ flexDirection: "column", backgroundColor: "#fff", justifyContent: "center", alignItems: "center", paddingTop: 20 }} >
              <Image source={require('../../media/assets/images/indi.jpg')} style={{ width: 300, height: 150, }} />
              <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', fontWeight: '600' }}>Truck Independent 149 Stage 11 STD Pro Mason Silva</Text>
              <Text style={{ fontSize: 16, color: 'black', paddingTop: '5%', padding: 5, fontWeight: "bold", textAlign: 'center' }}>R$ 700,00</Text>
              <Button title="Comprar" color="black"
                onPress={() => Alert.alert('Fora do estoque')}
              />
            </View>
            <Separator />
            <View style={{ flexDirection: "column", backgroundColor: "#fff", paddingTop: 20, justifyContent: "center", alignItems: "center" }} >
              <Image source={require('../../media/assets/images/ind.jpeg')} style={{ width: 310, height: 280, }} />
              <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', fontWeight: '600' }}>Truck Independent 144mm Polished Prata</Text>
              <Text style={{ fontSize: 16, color: 'black', paddingTop: '5%', padding: 5, fontWeight: "bold", textAlign: 'center' }}>R$ 700,00</Text>
              <Button title="Comprar" color="black"
                onPress={() => Alert.alert('Fora do estoque')}
              />
            </View>
            <Separator />
            <View style={{ flexDirection: "column", backgroundColor: "#fff", paddingTop: 20, justifyContent: "center", alignItems: "center" }} >
              <Image source={require('../../media/assets/images/thunder.jpg')} style={{ width: 285, height: 280, }} />
              <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', fontWeight: '600' }}>Truck Thunder 139mm black </Text>
              <Text style={{ fontSize: 16, color: 'black', paddingTop: '5%', padding: 5, fontWeight: "bold", textAlign: 'center' }}>R$ 620,00</Text>
              <Button title="Comprar" color="black"
                onPress={() => Alert.alert('Fora do estoque')}
              />
            </View>
            <Separator />
            <View style={{ flexDirection: "column", backgroundColor: "#fff", paddingTop: 20, justifyContent: "center", alignItems: "center" }} >
              <Image source={require('../../media/assets/images/silver.jpg')} style={{ width: 310, height: 280, }} />
              <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', fontWeight: '600' }}>Truck Silver 129mm black </Text>
              <Text style={{ fontSize: 16, color: 'black', paddingTop: '5%', padding: 5, fontWeight: "bold", textAlign: 'center' }}>R$ 399,00</Text>
              <Button title="Comprar" color="black"
                onPress={() => Alert.alert('Fora do estoque')}
              />
            </View>
            <Separator />
            <View style={{ flexDirection: "column", backgroundColor: "#fff", paddingTop: 20, justifyContent: "center", alignItems: "center" }} >
              <Image source={require('../../media/assets/images/royal.jpg')} style={{ width: 310, height: 280, }} />
              <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', fontWeight: '600' }}>Truck Royal 129mm collab girl </Text>
              <Text style={{ fontSize: 16, color: 'black', paddingTop: '5%', padding: 5, fontWeight: "bold", textAlign: 'center' }}>R$ 329,00</Text>
              <Button title="Comprar" color="black"
                onPress={() => Alert.alert('Fora do estoque')}
              />
            </View>
            <Separator />
            <View style={{ flexDirection: "column", backgroundColor: "#fff", paddingTop: 20, justifyContent: "center", alignItems: "center" }} >
              <Image source={require('../../media/assets/images/venture.png')} style={{ width: 310, height: 280, }} />
              <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', fontWeight: '600' }}>Truck venture 129mm High weed </Text>
              <Text style={{ fontSize: 16, color: 'black', paddingTop: '5%', padding: 5, fontWeight: "bold", textAlign: 'center' }}>R$ 589,00</Text>
              <Button title="Comprar" color="black"
                onPress={() => Alert.alert('Fora do estoque')}
              />
            </View>


            <View style={{ flexDirection: "column", backgroundColor: "black", marginTop: 20 }}>
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
    padding: 8,
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: 2,
  },
});


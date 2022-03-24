import React from 'react';
import { View, Text, Button, SafeAreaView, ScrollView, StyleSheet, Image, StatusBar } from 'react-native';



export default function Rodas({ navigation }) {
  const Separator = () => (
    <View style={styles.separator} />
  );
  return (
    <View style={{ flexDirection: "column", backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" hidden={true} backgroundColor="black" />

      <SafeAreaView>
        <ScrollView style={[styles.scrollView,]}>
          <View style={{ flexDirection: "column", backgroundColor: '#fff' }}>
            <Text style={{ fontSize: 30, color: "#000000", textAlign: 'center' }}>Rodas </Text>

            <View style={{ flexDirection: 'row', paddingTop: '10%', justifyContent: 'space-around' }}>
              <Image source={require('../../media/assets/images/boneslogo.png')} style={{ width: 75, height: 75 }} />
              <Image source={require('../../media/assets/images/spitlogo.png')} style={{ width: 55, height: 75, }} />
              <Image source={require('../../media/assets/images/rictalogo.png')} style={{ width: 85, height: 65, }} />
              <Image source={require('../../media/assets/images/ojslogo.jpg')} style={{ width: 75, height: 75, }} />

            </View>
            <Separator />
            <View style={{ flexDirection: "column", backgroundColor: "#fff", justifyContent: 'center', alignItems: 'center' }} >
              <Image source={require('../../media/assets/images/bone.jpg')} style={{ width: 300, height: 250, }} />
              <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', fontWeight: '600' }}>Rodas Bones STF Raybourn Choose 55mm 4PK V5</Text>
              <Text style={{ fontSize: 16, color: 'black', paddingTop: 10, fontWeight: 'bold', padding: 4 }}>R$ 500,00</Text>
              <Button title="Comprar" color="black"
                onPress={() => Alert.alert('Fora do estoque')}
              />
            </View>
            <Separator />
            <View style={{ flexDirection: "column", backgroundColor: "#fff", paddingTop: 22, justifyContent: 'center', alignItems: 'center' }} >
              <Image source={require('../../media/assets/images/ro.jpg')} style={{ width: 310, height: 280, }} />
              <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', fontWeight: '600' }}>Roda Bones Easy Streets 54mm V5 Branca </Text>
              <Text style={{ fontSize: 16, color: 'black', paddingTop: 10, fontWeight: 'bold', padding: 4 }}>R$ 520,00</Text>
              <Button title="Comprar" color="black"
                onPress={() => Alert.alert('Fora do estoque')}
              />
            </View>
            <Separator />
            <View style={{ flexDirection: "column", backgroundColor: "#fff", paddingTop: 22, justifyContent: 'center', alignItems: 'center' }} >
              <Image source={require('../../media/assets/images/oj.jpg')} style={{ width: 250, height: 250, }} />
              <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', fontWeight: '600' }}>Rodas OJ Elite Wheels Elite Hard line White – 53mm 99a </Text>
              <Text style={{ fontSize: 16, color: 'black', paddingTop: 10, fontWeight: 'bold', padding: 4 }}>R$ 380,00</Text>
              <Button title="Comprar" color="black"
                onPress={() => Alert.alert('Fora do estoque')}
              />
            </View>
            <Separator />
            <View style={{ flexDirection: "column", backgroundColor: "#fff", paddingTop: 22, justifyContent: 'center', alignItems: 'center' }} >
              <Image source={require('../../media/assets/images/ri.jpg')} style={{ width: 250, height: 250, }} />
              <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', fontWeight: '600' }}>Rodas Ricta Elite - 52mm </Text>
              <Text style={{ fontSize: 16, color: 'black', paddingTop: 10, fontWeight: 'bold', padding: 4 }}>R$ 399,00</Text>
              <Button title="Comprar" color="black"
                onPress={() => Alert.alert('Fora do estoque')}
              />
            </View>
            <Separator />
            <View style={{ flexDirection: "column", backgroundColor: "#fff", paddingTop: 22, justifyContent: 'center', alignItems: 'center' }} >
              <Image source={require('../../media/assets/images/rod.jpg')} style={{ width: 310, height: 280, }} />
              <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', fontWeight: '600' }}>Rodas Bones 56mm </Text>
              <Text style={{ fontSize: 16, color: 'black', paddingTop: 10, fontWeight: 'bold', padding: 4 }}>R$ 549,00</Text>
              <Button title="Comprar" color="black"
                onPress={() => Alert.alert('Fora do estoque')}
              />
            </View>
            <Separator />
            <View style={{ flexDirection: "column", backgroundColor: "#fff", paddingTop: 22, justifyContent: 'center', alignItems: 'center' }} >
              <Image source={require('../../media/assets/images/nes.jpg')} style={{ width: 240, height: 240, }} />
              <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', fontWeight: '600' }}>Roda Bones STF Blazers V1</Text>
              <Text style={{ fontSize: 16, color: 'black', paddingTop: 10, fontWeight: 'bold', padding: 4 }}>R$ 499,00</Text>
              <Button title="Comprar" color="black"
                onPress={() => Alert.alert('Fora do estoque')}
              />
            </View>
            <Separator />
            <View style={{ flexDirection: "column", backgroundColor: "#fff", paddingTop: 22, justifyContent: 'center', alignItems: 'center' }} >
              <Image source={require('../../media/assets/images/spi.jpg')} style={{ width: 310, height: 300, }} />
              <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', fontWeight: '600' }}>Roda Spitfire 53mm</Text>
              <Text style={{ fontSize: 16, color: 'black', paddingTop: 10, fontWeight: 'bold', padding: 4 }}>R$ 379,00</Text>
              <Button title="Comprar" color="black"
                onPress={() => Alert.alert('Fora do estoque')}
              />
            </View>

            <View style={{ flexDirection: "column", backgroundColor: "black", marginTop: 25 }}>
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

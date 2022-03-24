import React from 'react';
import { View, Text, Button, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native';



export default function Rodas({ navigation }) {
  return (
    <View style={{ flexDirection: "column", backgroundColor: "#fff" }}>
      <StatusBar barStyle="dar-content" hidden={false} backgroundColor="black" />

      <SafeAreaView>
        <ScrollView style={[styles.scrollView,]}>
          <View style={{ flexDirection: "column", backgroundColor: '#fff' }}>
            <Text style={{ fontSize: 29, color: "#000000", paddingLeft: 100 }}>Rodas </Text>

            <View style={{ flexDirection: 'row', paddingTop: 42, paddingLeft: 9, paddingRight: 2, }}>
              <Image source={require('../../media/assets/images/boneslogo.png')} style={{ width: 75, height: 75 }} />
              <Image source={require('../../media/assets/images/spitlogo.png')} style={{ width: 55, height: 75, }} />
              <Image source={require('../../media/assets/images/rictalogo.png')} style={{ width: 95, height: 65, }} />
              <Image source={require('../../media/assets/images/ojslogo.jpg')} style={{ width: 75, height: 75, }} />

            </View>
            <Separator />
            <View style={{ flexDirection: "column", backgroundColor: "#fff", }} >
              <Image source={require('../../media/assets/images/bone.jpg')} style={{ width: 300, height: 250, }} />
              <Text style={{ paddingLeft: 15, fontSize: 12, color: 'black' }}>Rodas Bones STF Raybourn Choose 55mm 4PK V5</Text>
              <Text style={{ paddingLeft: 5, fontSize: 15, color: 'black', paddingTop: 13, padding: 7 }}>R$ 500,00</Text>
              <Button title="Comprar" color="black"
                onPress={() => Alert.alert('Fora do estoque')}
              />
            </View>
            <Separator />
            <View style={{ flexDirection: "column", backgroundColor: "#fff", paddingTop: 22 }} >
              <Image source={require('../../media/assets/images/ro.jpg')} style={{ width: 310, height: 280, }} />
              <Text style={{ paddingLeft: 15, fontSize: 12, color: 'black' }}>Roda Bones Easy Streets 54mm V5 Branca </Text>
              <Text style={{ paddingLeft: 5, fontSize: 15, color: 'black', paddingTop: 13, padding: 7 }}>R$ 520,00</Text>
              <Button title="Comprar" color="black"
                onPress={() => Alert.alert('Fora do estoque')}
              />
            </View>
            <Separator />
            <View style={{ flexDirection: "column", backgroundColor: "#fff", paddingTop: 22 }} >
              <Image source={require('../../media/assets/images/oj.jpg')} style={{ width: 310, height: 280, }} />
              <Text style={{ paddingLeft: 15, fontSize: 12, color: 'black' }}>Rodas OJ Elite Wheels Elite Hard line White – 53mm 99a </Text>
              <Text style={{ paddingLeft: 30, fontSize: 15, color: 'black', paddingTop: 13, padding: 7 }}>R$ 380,00</Text>
              <Button title="Comprar" color="black"
                onPress={() => Alert.alert('Fora do estoque')}
              />
            </View>
            <Separator />
            <View style={{ flexDirection: "column", backgroundColor: "#fff", paddingTop: 22 }} >
              <Image source={require('../../media/assets/images/ri.jpg')} style={{ width: 310, height: 280, }} />
              <Text style={{ paddingLeft: 15, fontSize: 12, color: 'black' }}>rodas ricta </Text>
              <Text style={{ paddingLeft: 30, fontSize: 15, color: 'black', paddingTop: 13, padding: 7 }}>R$ 399,00</Text>
              <Button title="Comprar" color="black"
                onPress={() => Alert.alert('Fora do estoque')}
              />
            </View>
            <Separator />
            <View style={{ flexDirection: "column", backgroundColor: "#fff", paddingTop: 22 }} >
              <Image source={require('../../media/assets/images/rod.jpg')} style={{ width: 310, height: 280, }} />
              <Text style={{ paddingLeft: 15, fontSize: 12, color: 'black' }}>rodas bones 56mm </Text>
              <Text style={{ paddingLeft: 30, fontSize: 15, color: 'black', paddingTop: 13, padding: 7 }}>R$ 549,00</Text>
              <Button title="Comprar" color="black"
                onPress={() => Alert.alert('Fora do estoque')}
              />
            </View>
            <Separator />
            <View style={{ flexDirection: "column", backgroundColor: "#fff", paddingTop: 22 }} >
              <Image source={require('../../media/assets/images/nes.jpg')} style={{ width: 310, height: 280, }} />
              <Text style={{ paddingLeft: 15, fontSize: 12, color: 'black' }}>Roda Bones STF Blazers V1</Text>
              <Text style={{ paddingLeft: 30, fontSize: 15, color: 'black', paddingTop: 13, padding: 7 }}>R$ 499,00</Text>
              <Button title="Comprar" color="black"
                onPress={() => Alert.alert('Fora do estoque')}
              />
            </View>
            <Separator />
            <View style={{ flexDirection: "column", backgroundColor: "#fff", paddingTop: 22 }} >
              <Image source={require('../../media/assets/images/spi.jpg')} style={{ width: 310, height: 280, }} />
              <Text style={{ paddingLeft: 15, fontSize: 12, color: 'black' }}>Roda spitfire 53mm</Text>
              <Text style={{ paddingLeft: 30, fontSize: 15, color: 'black', paddingTop: 13, padding: 7 }}>R$ 379,00</Text>
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
    padding: 8,
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

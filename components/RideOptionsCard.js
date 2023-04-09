import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from "twrnc";
import { TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';



const data = [
  {
    id: "Uber-X-123",
    title: "Uber X",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-123",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-123",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const SURGE_CHARGE_RATE = 5;






const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation)
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 p-3 z-50 rounded-full`}>
          <Icon name="chevron-left" type="font-awesome" />

        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select your ride - {travelTimeInformation?.distance.text}</Text>
      </View>

      <FlatList data={data} keyExtractor={(item) => item.id}

        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
          onPress={() => setSelected(item)}
          style={tw`flex-row items-center justify-between px-10 ${
            id === selected?.id && "bg-gray-200"
          }`}
        >
            <Image
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              source={{ uri: image }}
            />

            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration.text}</Text>
            </View>
            <Text style={tw`text-xl`}>

{new Intl.NumberFormat('en-gb', {
style: 'currency',
currency:'CRC'

}).format(
(travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) 

)}

            </Text>
          </TouchableOpacity>

        )}

      />
      <View style ={tw`mt-auto border-t border-gray-200`}>
      <TouchableOpacity
          style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
          disabled={!selected}
        >
          <Text  style={tw`text-center text-white text-xl `}
          >Chose{selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
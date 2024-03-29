import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { FlatList } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import { Icon } from '@rneui/base';


const data = [
    {
      id: "123",
      icon: "home",
      location: "Home",
      destination: "15th Drive, Whitestone, NY, USA",
    },
    {
      id: "456",
      icon: "briefcase",
      location: "Work",
      destination: "1st Avenue, New York, NY, USA",
    },
  ];



const NavFavorites = () => {
  return (
  <FlatList 
  data={data} 
  keyExtractor={(item) => item.id} 
  ItemSeparatorComponent={() => (
    <View style={[tw`bg-gray-500`, { height: 0.5 }]} />
  )}
  renderItem={({item : {location ,destination,icon}}) =>(
<TouchableOpacity  style={tw`flex-row items-center p-5`}>
    
<Icon
              type="ionicon"
              name={icon}
              color="black"
              style={tw`mr-4 rounded-full bg-gray-300 p-3 `}
            />
            <View>
                <Text style={tw`font-semibold text-lg`}>{location}</Text>
                <Text style={tw`text-gray-500`}>{destination}</Text>
            </View>

</TouchableOpacity>
  )}
  
  
  
  
  />
  ); 
}

export default NavFavorites

const styles = StyleSheet.create({})
import { StyleSheet, Text, View , Platform, StatusBar, Image } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env';
import { useDispatch } from "react-redux";
import { setDestination, reducer, setOrigin } from "../slices/navSlice";
import NavFavorites from '../components/NavFavorites';

const HomeScreen = ( ) => {
  const inputRef = useRef(null);
	const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.AndroidSafeArea  }
    >

			<View style={tw`p-5`}>
				<Image
					style={{
						width: 100,
						height: 100,
						resizeMode: "contain",
					}}
					source={{
						uri: "https://links.papareact.com/gzs",
					}}
				/>
			   <View style={{ flex: 0 }}>
         <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={200}
          placeholder="Where From ?"
          styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
          query={{ key: GOOGLE_MAPS_APIKEY, language: "en" }}
          minLength={2}
         
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
        />
                </View>
				<NavOptions />
        <NavFavorites/>
			
			</View>

  
      
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 30,
    },
    AndroidSafeArea: {
        flex: 1,
        height:'100%',
        
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
  });
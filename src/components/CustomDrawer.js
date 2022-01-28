import React, { useState, useRef,useCallback } from 'react';
import {View, Text, ImageBackground, StyleSheet,Image} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { AntDesign, Entypo,Ionicons,FontAwesome } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const CustomDrawer = (props) => {
    const [loaded] = useFonts({
        MontserratBold: require('../../assets/fonts/Montserrat-Bold.ttf'),
        MontserratMedium: require('../../assets/fonts/Montserrat-Medium.ttf'),
        MontserratLight: require('../../assets/fonts/Montserrat-Light.ttf'),
        MontserratLightItalic: require('../../assets/fonts/Montserrat-LightItalic.ttf'),
    });

    if (!loaded) {
        return (
            <AppLoading />
        )
    }

    return(
        <View style={{flex:1}}>
        <DrawerContentScrollView 
        {...props} 
        contentContainerStyle={{backgroundColor:'#006396'}}>
        <ImageBackground source={{uri:'https://i.imgur.com/wCG2csZ.png'}} style={styles.topDrawer}>
            <Image source={require('../../assets/logo.png')} style={styles.logo}/>
            <Text style={{color:'#fff', textAlign:"center", marginTop:10, fontFamily:"MontserratLight"}}>Manon Abel-Coindoz</Text>
        </ImageBackground>
        <View style={{flex:1, backgroundColor:'#fff', paddingTop:10}}>
            <DrawerItemList {...props} />
        </View>
        </DrawerContentScrollView>
            <View style={styles.icons}>
                <AntDesign name="github" size={26} color="#006396" />
                <Entypo name="linkedin" size={26} color="#006396" />
                <Ionicons name="mail" size={26} color="#006396" />
                <FontAwesome name="phone" size={26} color="#006396" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topDrawer:{
        padding: 60,
        width:300,
        height: 250,
        marginTop:-47,
        alignSelf:'center',
    },
    logo:{
        width: 120,
        height:120,
        marginTop:10,
        alignSelf:'center',
        zIndex:-1
    },
    icons:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'space-evenly',
        marginBottom:20,
    },
    groupFlags:{
        flexDirection:"row",
        justifyContent:'flex-end',
        alignItems:'center',
    },
    flagsIcons:{},
})
export default CustomDrawer;
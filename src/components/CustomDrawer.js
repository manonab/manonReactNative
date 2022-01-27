import * as React from 'react';
import {View, Text, ImageBackground, StyleSheet,Image} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { AntDesign, Entypo,Ionicons,FontAwesome } from '@expo/vector-icons'; 

const CustomDrawer = (props) => {
    return(
        <View style={{flex:1}}>
        <DrawerContentScrollView 
        {...props} 
        contentContainerStyle={{backgroundColor:'#013a63'}}>
        <ImageBackground source={{uri:'https://i.imgur.com/wCG2csZ.png'}} style={styles.topDrawer}>
            <Image source={require('../../assets/logo.png')} style={styles.logo}/>
            <Text style={{color:'#fff', textAlign:"center", marginTop:10}}>Manon Abel-Coindoz</Text>
        </ImageBackground>
        <View style={{flex:1, backgroundColor:'#fff', paddingTop:10}}>
            <DrawerItemList {...props} />
        </View>
        </DrawerContentScrollView>
            <View style={styles.icons}>
                <AntDesign name="github" size={26} color="#013a63" />
                <Entypo name="linkedin" size={26} color="#013a63" />
                <Ionicons name="mail" size={26} color="#013a63" />
                <FontAwesome name="phone" size={26} color="#013a63" />
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
    }
})
export default CustomDrawer;
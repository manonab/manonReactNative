import * as React from 'react';
import {View, Text, ImageBackground, StyleSheet,Image} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { AntDesign, Entypo,Ionicons,FontAwesome } from '@expo/vector-icons'; 
import {useFonts,
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';

const CustomDrawer = (props) => {
    let [fontsLoaded] = useFonts({
        Montserrat_100Thin,
        Montserrat_100Thin_Italic,
        Montserrat_200ExtraLight,
        Montserrat_200ExtraLight_Italic,
        Montserrat_300Light,
        Montserrat_300Light_Italic,
        Montserrat_400Regular,
        Montserrat_400Regular_Italic,
        Montserrat_500Medium,
        Montserrat_500Medium_Italic,
        Montserrat_600SemiBold,
        Montserrat_600SemiBold_Italic,
        Montserrat_700Bold,
        Montserrat_700Bold_Italic,
        Montserrat_800ExtraBold,
        Montserrat_800ExtraBold_Italic,
        Montserrat_900Black,
        Montserrat_900Black_Italic,
    });
    let fontSize = 24;
    let paddingVertical = 6;

    return(
        <View style={{flex:1}}>
        <DrawerContentScrollView 
        {...props} 
        contentContainerStyle={{backgroundColor:'#006396'}}>
        <ImageBackground source={{uri:'https://i.imgur.com/wCG2csZ.png'}} style={styles.topDrawer}>
            <View style={styles.groupFlags}>
                <Text>Fr</Text>
                <Text>Eng</Text>
            </View>
            <Image source={require('../../assets/logo.png')} style={styles.logo}/>
            <Text style={{color:'#fff', textAlign:"center", marginTop:10, fontFamily:"Montserrat_200ExtraLight"}}>Manon Abel-Coindoz</Text>
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
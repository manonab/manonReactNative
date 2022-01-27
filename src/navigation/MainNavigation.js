import * as React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LinearGradient } from "expo-linear-gradient";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../screens/Home";
import Projects from "../screens/Projects";
import Contact from "../screens/Contact";
import Resume from "../screens/Resume";
import Geneaka from "../screens/Geneaka";
import Lanvest from "../screens/Lanvest";
import MySeen from "../screens/MySeen";
import BunnyFinder from "../screens/BunnyFinder";
import CustomDrawer from '../components/CustomDrawer';
//home screen

//icons
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
    return (
        <>
            <Home />
        </>
    );
};

function ContactScreen({ navigation }) {
    return (
        <LinearGradient colors={['#0cc898', '#1797d2']} style={styles.container}>
            <Contact />
        </LinearGradient>
    );
};

function ProjetScreen({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Projets" component={Projects} />
            <Stack.Screen name="Lanvest" component={Lanvest} />
            <Stack.Screen name="MySeen" component={MySeen} />
            <Stack.Screen name="BunnyFinder" component={BunnyFinder} />
            <Stack.Screen name="Geneaka" component={Geneaka} />
        </Stack.Navigator>
    );
};

function ResumeScreen({ navigation }) {
    return (
        <LinearGradient colors={['#0cc898', '#1797d2']} style={styles.container}>
            <Resume />
        </LinearGradient>
    );
};

export default function MainNavigation() {
    return (
        <Drawer.Navigator initialRouteName="Home"
        screenOptions={{
            headerStyle: {
                backgroundColor: '#013a63',
            },
            headerTintColor: '#fff',
            drawerLabelStyle:{
                marginLeft:-25,
                fontSize:15
            },
            drawerActiveTintColor:'#fff',
            drawerInactiveTintColor:'#013a63',
            drawerActiveBackgroundColor:"#013a63"
        }}
            drawerContent={props => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name="Accueil" component={HomeScreen} options={{
                drawerIcon: () => (
                    <AntDesign name="home" size={22} color={"#1797d2"} />
                )
            }} />
            <Drawer.Screen name="Projets" component={ProjetScreen} options={{
                drawerIcon: () => (
                    <Entypo name="code" size={22} color={"#1797d2"} />)
            }} />
            <Drawer.Screen name="Contact" component={ContactScreen} options={{
                drawerIcon: () => (
                    <AntDesign name="form" size={22} color={"#1797d2"} />
                )
            }} />
            <Drawer.Screen name="CV" component={ResumeScreen} options={{
                drawerIcon: () => (
                    <MaterialCommunityIcons name="face-woman" size={22} color={"#1797d2"} />
                )
            }} />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
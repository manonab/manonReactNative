import * as React from 'react';
import { Button, View,Text , StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LinearGradient } from "expo-linear-gradient";
import { createStackNavigator } from '@react-navigation/stack';

import Projects from '../screens/Projects';
import Home from '../screens/Home';
import Resume from '../screens/Resume';
import Contact from '../screens/Contact';
import Lanvest from '../screens/Lanvest';
import Geneaka from '../screens/Geneaka';
import MySeen from '../screens/MySeen';
import BunnyFinder from '../screens/BunnyFinder';
//home screen

function HomeScreen({navigation}){
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Lanvest" component={Lanvest} />
            <Stack.Screen name="MySeen" component={MySeen} />
            <Stack.Screen name="BunnyFinder" component={BunnyFinder} />
            <Stack.Screen name="Geneaka" component={Geneaka} />
        </Stack.Navigator>
    );
}
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


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
            headerShown:false
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
            <Drawer.Navigator initialRouteName="Home" >
                <Drawer.Screen name="Accueil" component={HomeScreen} />
                <Drawer.Screen name="Projets" component={ProjetScreen} />
                <Drawer.Screen name="Contact" component={ContactScreen} />
                <Drawer.Screen name="CV" component={ResumeScreen} />
            </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
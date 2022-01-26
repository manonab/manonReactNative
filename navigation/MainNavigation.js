import * as React from 'react';
import { Button, View,Text , StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LinearGradient } from "expo-linear-gradient";
import Projects from '../screens/Projects';
function HomeScreen({ navigation }) {
    return (
        <LinearGradient colors={['#0cc898', '#1797d2', '#864fe1']} style={styles.container}>
            <Text>Manon</Text>
        </LinearGradient>
    );
}

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

function Contact({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Contact</Text>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}
function Projets({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
            <Projects />
        </View>
    );
}
function Resume({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
            <Text>Resume</Text>
        </View>
    );
}
const Drawer = createDrawerNavigator();

export default function MainNavigation() {
    return (
            <Drawer.Navigator initialRouteName="Home" >
                <Drawer.Screen name="Accueil" component={HomeScreen} />
                <Drawer.Screen name="Projets" component={Projets} />
                <Drawer.Screen name="Contact" component={Contact} />
                <Drawer.Screen name="CV" component={Resume} />
            </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
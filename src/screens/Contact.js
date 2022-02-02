import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Linking, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { AntDesign, Entypo, Ionicons, FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import Amplify, { API } from 'aws-amplify';
const linkedIn = "https://www.linkedin.com/authwall?trk=gf&trkInfo=AQFuIJmfLkAABQAAAX6hpKzYrqzEWw13Olp4ThhCHwVpsdTVlBlYsMMTqo4L1nFD-BGgtCRO-kc4pv5YaLeysR9h1CSQiKqO4AzmO-Fpj-7zClcLjARCiBcV6nDJ8D5-nGp2psk=&originalReferer=http://localhost:3000/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmanon-abel-coindoz-b6449211a%2F";
const number = "+33 620235734";
const email = "abelcoindozm@gmail.com";

const Contact = () => {

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [content, setContent] = useState('');
    const [email, setEmail] = useState('');

    const openUrl = async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported) {
            await Linking.openURL(url);
        } else {
            Alert('Do not know this url')
        }
    };
    const [loaded] = useFonts({
        MontserratBold: require('../../assets/fonts/Montserrat-Bold.ttf'),
        MontserratMedium: require('../../assets/fonts/Montserrat-Medium.ttf'),
        MontserratLight: require('../../assets/fonts/Montserrat-Light.ttf'),
    })
    const sendForm = async () => {
        API
        .get("myApp",'/manonApp', )
        .then(() => console.log("response"))
        .catch((err) => console.log(err))
        };
    if (!loaded) {
        return (
            <AppLoading />
        )
    }


    return (
        <SafeAreaView>
            <KeyboardAvoidingView behavior="">
                <ScrollView>
                    <View style={styles.intro}>
                        <Text style={styles.introText}>Pour me contacter: </Text>
                        <View style={styles.icons}>
                            <TouchableOpacity onPress={() => openUrl(linkedIn)}>
                                <Entypo name="linkedin" size={26} color="#006396" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                Linking.openURL(`mailto:abelcoindozm@gmail.com`)
                            }}>
                                <Ionicons name="mail" size={26} color="#006396" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                Linking.openURL(`tel:${number}`)
                            }}>
                            <FontAwesome name="phone" size={26} color="#006396" />
                            </TouchableOpacity>                       
                            </View>
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.title}>Votre nom</Text>
                        <TextInput
                            onChangeText={(text) => setName(text)}
                            value={name}
                            label={"Votre nom"}
                            mode="outlined"
                            theme={{ colors: { primary: "#168aad" } }}
                            style={styles.input}
                        />
                        <Text style={styles.title}>Nom de l'entreprise</Text>
                        <TextInput
                            onChangeText={(text) => setCompany(text)}
                            value={company}
                            mode="outlined"
                            theme={{ colors: { primary: "#168aad" } }}
                            style={styles.input}
                            label={"Votre entreprise"}
                        />
                        <Text style={styles.title}>Votre message</Text>
                        <TextInput
                            value={content} onChangeText={(text) => setName(text)}
                            onChangeText={(text) => setContent(text)}
                            mode="outlined"
                            multiline
                            theme={{ colors: { primary: "#168aad" } }}
                            style={styles.input}
                            label={"Votre message"}
                        />
                        <Text style={styles.title}>Où puis-je vous contacter ?</Text>
                        <TextInput
                            value={email} onChangeText={(text) => setName(text)}
                            onChangeText={(text) => setEmail(text)}
                            mode="outlined"
                            theme={{ colors: { primary: "#168aad" } }}
                            style={styles.input}
                            label="Votre adresse mail"
                        />
                        <TouchableOpacity style={styles.button} onPress={() => sendForm()}>
                            <Text style={[styles.project, { textTransform: 'uppercase' }]}>ENVOYER</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    form: {
        flexDirection: "column",
    },
    title: {
        fontFamily: "MontserratBold",
        letterSpacing: 0.2,
        padding: 15,
        textAlign: "left",
        fontSize: 18,
        marginLeft: 15,
        color: "#fff"
    },
    introText: {
        fontFamily: "MontserratMedium",
        fontSize: 15,
        color: "#fff",
        margin: 10
    },
    icons: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 10,
        padding: 10
    },
    input: {
        alignSelf: 'center',
        marginTop: 0,
        width: 300,
        borderRadius: 15,
    },
    intro: {
        flexDirection: "column",
        justifyContent: "center"
    },
    text: {
        fontFamily: "MontserratMedium",
        fontSize: 15,
        textAlign: "center"
    },
    button: {
        backgroundColor: '#168aad',
        padding: 10,
        marginVertical: 35,
        borderRadius: 50,
        alignSelf: "center",
        elevation: 24
    },
    project: {
        fontSize: 17,
        margin: 5,
        color: '#fff',
        fontFamily: 'MontserratLight'
    },
});

export default Contact
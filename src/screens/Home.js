import * as React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from "expo-linear-gradient";
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


export default function Home({ navigation }) {
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

        return (
            <SafeAreaView>
                <LinearGradient colors={['#34a0a4', '#168aad', '#184e77']}>
                    <ScrollView>
                        <View style={styles.bigWrap}>
                            <View style={styles.titles}>
                                <Text style={styles.bigTitle}>Manon Abel-coindoz</Text>
                                <View style={{marginTop:10}}>
                                <Text style={styles.smallTitle}>Développeuse Full-Stack JavaScript</Text>
                                <Text style={styles.smallTitle}>React / React-Native / M.E.R.N</Text>
                                </View>
                            </View>
                            <View style={styles.wrapSmallText}>
                                <Text style={styles.insideText}>
                                    J'ai commencé une reconversion professionnelle en 2019 avec une formation courte à la wild code school.
                                    Ensuite j'ai débuté mon expérience au sein de Focus Games (Glasgow) afin de créer un outil marketing en interne avec PHP/MySQL et JS.
                                </Text>
                                <Text style={styles.insideText}>
                                    Après Focus Games j'ai créée une application de management en interne avec React-Native, Node.js, MongoDB, Express.js pour Lanvest.
                                </Text>
                                <Text style={styles.insideText}>
                                    Aujourd'hui je suis à la recherche d'un contrat à durée indéterminé pour un projet qui allie professionnalisme et engagement. J'ai toujours été attirée par l'économie sociale et solidaire, je veux apporter mes compétences dans un projet qui a du sens.
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.title}>Sites web</Text>
                        <View style={styles.allCircle}>
                            <View style={styles.circle}>
                                <Image source={require('../../assets/lanvestCapture.png')} style={styles.img} />
                            </View>
                            <View style={styles.circle}>
                                <Image source={require('../../assets/geneakaCapture.png')} style={styles.img} />
                            </View>
                        </View>
                        <View style={styles.appTitles}>
                            <Text style={styles.smallText}>Lanvest</Text>
                            <Text style={styles.smallText}>Geneaka</Text>
                        </View>
                        <Text style={styles.title}>Applications</Text>
                        <View style={styles.allCircle}>
                            <View style={styles.circle}>
                                <Image source={require('../../assets/mySeenCapture.jpg')} style={styles.img} />
                            </View>
                            <View style={styles.circle}>
                                <Image source={{ uri: `https://www.gastronomiac.com/wp/wp-content/uploads/2019/02/lapin.jpg` }} style={styles.img} />
                            </View>
                        </View>
                        <View style={styles.appTitles}>
                            <Text style={styles.smallText}>My S.E.E.N</Text>
                            <Text style={styles.smallText}>Bunny Finder</Text>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Projets')}>
                            <Text style={[styles.project,{textTransform:'uppercase'}]}>Découvrir les projets</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </LinearGradient>
            </SafeAreaView>
        );
}

const styles = StyleSheet.create({
    bigWrap: {
        height: "auto",
        margin: 10,
    },
    titles: {
        padding: 20,
    },
    wrapSmallText: {
        marginVertical: 10,
        marginHorizontal: 5
    },
    bigTitle: {
        fontSize: 30,
        textTransform: "uppercase",
        fontWeight: '100',
        color: "#fff",
        fontFamily:'Montserrat_800ExtraBold'
    },
    smallTitle: {
        color: "#fff",
        padding: 1,
        fontSize:15,
        fontFamily:'Montserrat_300Light'
    },
    title: {
        textAlign: "center",
        fontSize: 35,
        color: "#fff",
        fontFamily: 'Montserrat_500Medium',
        marginVertical: 20
    },
    insideText: {
        color: "#fff",
        padding: 8,
        letterSpacing: 0.2,
        fontSize: 16,
        fontFamily:'Montserrat_300Light'
    },
    allCircle: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    },
    circle: {
        margin: 10,
    },
    appTitles: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 15,
    },
    smallText: {
        color: "#fff",
        fontSize: 18,
        fontFamily:'Montserrat_200ExtraLight',
    },
    img: {
        width: 130,
        height: 130,
        borderRadius: 10,
    },
    project:{
        fontSize:17,
        margin: 5,
        color: '#fff',
        fontFamily:'Montserrat_300Light'
    },
    button:{
        backgroundColor:'#168aad',
        padding: 10,
        marginVertical:35,
        borderRadius:50,
        alignSelf:"center",
        elevation:24
        
    }
});

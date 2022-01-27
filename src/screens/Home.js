import * as React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from "expo-linear-gradient";


export default function Home ({ navigation }){

    return (
        <SafeAreaView>
            <LinearGradient colors={['#34a0a4','#168aad','#184e77']}>
                <ScrollView>
                    <View style={styles.bigWrap}>
                        <View style={styles.titles}>
                            <Text style={styles.bigTitle}>Manon Abel-coindoz</Text>
                            <Text style={styles.smallTitle}>Développeuse Full-Stack JavaScript</Text>
                            <Text style={styles.smallTitle}>React / React-Native / M.E.R.N</Text>
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
                    <Text style={styles.title}>Websites</Text>
                    <View style={styles.allCircle}>
                        <View style={styles.circle}>
                            <Image source={{ uri: `https://lemagdesanimaux.ouest-france.fr/images/dossiers/2021-10/determiner-age-lapin-173456.jpg` }} style={styles.img} />
                        </View>
                        <View style={styles.circle}>
                            <Image source={{ uri: `https://www.wanimo.com/veterinaire/wp-content/uploads/2015/07/images_articles_lapin_lapin-regarde.jpg` }} style={styles.img} />
                        </View>
                    </View>
                    <View style={styles.appTitles}>
                        <Text style={styles.smallText}>Lanvest</Text>
                        <Text style={styles.smallText}>Geneaka</Text>
                    </View>
                    <Text style={styles.title}>Apps</Text>
                    <View style={styles.allCircle}>
                        <View style={styles.circle}>
                            <Image 
                            source={{ uri: `https://www.okivet.com/wp-content/uploads/2020/09/petit-lapin-mignon-dans-lherbe-e1599574218303.jpg` }} style={styles.img} />
                        </View>
                        <View style={styles.circle}>
                            <Image source={{ uri: `https://static.wamiz.com/images/news/facebook/article/petit-lapin-nain-fb-5d248ec90f4bd.jpg` }} style={styles.img} />
                        </View>
                    </View>
                    <View style={styles.appTitles}>
                        <Text style={styles.smallText}>My S.E.E.N</Text>
                        <Text style={styles.smallText}>Bunny Finder</Text>
                    </View>
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
        fontSize: 25,
        textTransform: "uppercase",
        fontWeight: '100',
        color: "#fff",
    },
    smallTitle: {
        color: "#fff",
        padding: 2,
        fontWeight: "800"
    },
    title:{
        textAlign:"center",
        fontSize:35,
        color: "#fff",
        fontFamily: 'Montserrat',
        marginVertical:20
    },
    insideText: {
        color: "#fff",
        padding: 8,
        letterSpacing: 0.2,
        fontSize: 16,
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
        fontWeight: "600"
    },
    img:{
        width: 100,
        height: 100,
        borderRadius:10,
        shadowColor:'#000',
        shadowOpacity:16,
        shadowRadius:16
    },
});

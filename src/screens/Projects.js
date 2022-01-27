import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function Project({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['#0cc898', '#1797d2']}>
            <Text>WEBSITES</Text>
            <View style={styles.allCircle}>
                <TouchableOpacity style={styles.circle} onPress={() => navigation.push('Lanvest')}>
                    <Image source={{ uri: `https://lemagdesanimaux.ouest-france.fr/images/dossiers/2021-10/determiner-age-lapin-173456.jpg` }} style={{ width: 100, height: 100, borderRadius: 100 }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.circle} onPress={() => navigation.push('Geneaka')}>
                    <Image source={{ uri: `https://www.wanimo.com/veterinaire/wp-content/uploads/2015/07/images_articles_lapin_lapin-regarde.jpg` }} style={{ width: 100, height: 100, borderRadius: 100 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.appTitles}>
                <Text style={styles.smallText}>Lanvest</Text>
                <Text style={styles.smallText}>Geneaka</Text>
            </View>
            <Text>APPS</Text>
            <View style={styles.allCircle}>
                <TouchableOpacity style={styles.circle} onPress={() => navigation.push('MySeen')}>
                    <Image source={{ uri: `https://www.okivet.com/wp-content/uploads/2020/09/petit-lapin-mignon-dans-lherbe-e1599574218303.jpg` }} style={{ width: 100, height: 100, borderRadius: 100 }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.circle} onPress={() => navigation.push('BunnyFinder')}>
                    <Image source={{ uri: `https://static.wamiz.com/images/news/facebook/article/petit-lapin-nain-fb-5d248ec90f4bd.jpg` }} style={{ width: 100, height: 100, borderRadius: 100 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.appTitles}>
                <Text style={styles.smallText}>My S.E.E.N</Text>
                <Text style={styles.smallText}>Bunny Finder</Text>
            </View>
            </LinearGradient>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
});
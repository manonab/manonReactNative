import * as React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from "expo-linear-gradient";


const Lanvest = ({navigation}) => {

    return (
        <SafeAreaView>
            <LinearGradient colors={['#0cc898', '#1797d2']}>
            <ScrollView>
                <View style={styles.container}>
                    <Text>Welcom from Lanvest</Text>
                </View>
            </ScrollView>
            </LinearGradient>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
});
export default Lanvest;
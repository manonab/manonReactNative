import * as React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from "expo-linear-gradient";


const BunnyFinder = ({navigation}) => {

    return (
        <SafeAreaView>
            <LinearGradient colors={['#0cc898', '#1797d2', '#864fe1']}>
            <ScrollView>
                <View>
                    <Text>Welcom from BunnyFinder</Text>
                </View>
            </ScrollView>
            </LinearGradient>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
});
export default BunnyFinder;
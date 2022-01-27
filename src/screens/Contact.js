import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { AntDesign, Entypo, Ionicons, FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';

export default function Contact() {
    return (
        <SafeAreaView>
            <View>
                <Text>Vous pouvez me contacter: </Text>
                <Entypo name="linkedin" size={26} color="#006396" />
                <Ionicons name="mail" size={26} color="#006396" />
                <FontAwesome name="phone" size={26} color="#006396" />
                <Text>OU:</Text>
            </View>
            <View style={styles.form}>
                <Text>Votre nom</Text>
                <TextInput
                    label={"Votre nom"}
                />                
                <Text>Nom de l'entreprise</Text>
                <TextInput
                    label={"Votre entreprise"}
                />
                <Text>Votre message</Text>
                <TextInput
                    label={"Votre message"}
                />            
                <Text>Où puis-je vous contacter ?</Text>
                <TextInput
                    label={"Votre adresse mail"}
                />            
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    form:{
        flexDirection:"column",
    }
});
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global'


export default function ReviewDetails({ navigation }) {

    const pressHandler = () => {
        // navigation.pop()
        navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>
            <Text>{ navigation.getParam('title') }</Text>
            <Text>{ navigation.getParam('body') }</Text>
            <Text>RATING: { navigation.getParam('rating') }</Text>
        </View>
    )
}
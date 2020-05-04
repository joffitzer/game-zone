import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global'
import Card from '../shared/card'


export default function ReviewDetails({ navigation }) {

    const pressHandler = () => {
        // navigation.pop()
        navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{ navigation.getParam('title') }</Text>
                <Text>{ navigation.getParam('body') }</Text>
                <Text>RATING: { navigation.getParam('rating') }</Text>
            </Card>
        </View>
    )
}
// PaymentScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const PaymentScreen = () => {
    const route = useRoute();
    const { eventName, selectedCategory, price } = route.params;

    const handlePayment = () => {
        alert('Payment successful! Enjoy the event.');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Confirm Payment</Text>
            <Text style={styles.text}>Event: {eventName}</Text>
            <Text style={styles.text}>Seat Category: {selectedCategory}</Text>
            <Text style={styles.text}>Price: ${price}</Text>
            <Button title="Confirm Payment" onPress={handlePayment} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 15,
    },
});

export default PaymentScreen;

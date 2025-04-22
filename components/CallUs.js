import React from 'react';
import { View, Button, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CallUs = () => {
    const handleCall = () => {
        Linking.openURL('tel:+1234567890');
    };

    const handleWhatsApp = () => {
        Linking.openURL('whatsapp://send?phone=+1234567890');
    };

    return (
        <View>
            <Button title="Call Us" onPress={handleCall} />
            <Button title="WhatsApp Us" onPress={handleWhatsApp} />
        </View>
    );
};

export default CallUs;

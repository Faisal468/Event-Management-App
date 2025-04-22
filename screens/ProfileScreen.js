// ProfileScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const navigation = useNavigation();
    const userProfile = {
        username: 'user123',
        email: 'user@example.com',
        pastBookings: ['Music Concert', 'Art Exhibition'],
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Profile</Text>
            <Text style={styles.info}>Username: {userProfile.username}</Text>
            <Text style={styles.info}>Email: {userProfile.email}</Text>
            <Text style={styles.bookingsTitle}>Past Bookings:</Text>
            {userProfile.pastBookings.map((booking, index) => (
                <Text key={index} style={styles.bookingItem}>{booking}</Text>
            ))}
            <Button title="Edit Profile" onPress={() => alert('Profile Edit Feature Coming Soon!')} />
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
    info: {
        fontSize: 18,
        marginBottom: 10,
    },
    bookingsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    bookingItem: {
        fontSize: 16,
        marginTop: 5,
    },
});

export default ProfileScreen;

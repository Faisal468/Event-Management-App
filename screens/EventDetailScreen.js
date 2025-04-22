// EventDetailScreen.js (Updated)
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const EventDetailScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { eventId } = route.params;

    // Example event details (this can be fetched from an API)
    const eventDetails = {
        '1': { name: 'Music Concert', date: '2025-06-15', description: 'A live music event with top artists.', seatsAvailable: 50, categories: { VVIP: 100, VIP: 75, Regular: 50 }},
        '2': { name: 'Tech Conference', date: '2025-07-20', description: 'A conference showcasing the latest in tech.', seatsAvailable: 30, categories: { VVIP: 120, VIP: 90, Regular: 60 }},
        '3': { name: 'Art Exhibition', date: '2025-08-05', description: 'An art exhibition featuring local artists.', seatsAvailable: 40, categories: { VVIP: 80, VIP: 60, Regular: 40 }},
    };

    const event = eventDetails[eventId];
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [seatsAvailable, setSeatsAvailable] = useState(event.seatsAvailable);

    const handleSeatSelect = (category) => {
        setSelectedCategory(category);
    };

    const handleRegister = () => {
        if (seatsAvailable > 0 && selectedCategory) {
            // Navigate to Payment Screen with event details and selected category
            navigation.navigate('Payment', {
                eventName: event.name,
                selectedCategory,
                price: event.categories[selectedCategory], // Passing the price for the selected category
            });
            setSeatsAvailable(seatsAvailable - 1); // Decrease available seats
        } else {
            alert('No seats available or category not selected');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>{event.name}</Text>
            <Text style={styles.eventDate}>{event.date}</Text>
            <Text style={styles.eventDescription}>{event.description}</Text>
            <Text style={styles.eventSeats}>Seats Available: {seatsAvailable}</Text>

            {/* Seat Category Selection */}
            <Text style={styles.selectCategory}>Select a Category:</Text>
            {Object.keys(event.categories).map((category) => (
                <TouchableOpacity
                    key={category}
                    style={[
                        styles.categoryButton,
                        selectedCategory === category && styles.selectedCategory,
                    ]}
                    onPress={() => handleSeatSelect(category)}
                >
                    <Text style={styles.categoryText}>{category} - ${event.categories[category]}</Text>
                </TouchableOpacity>
            ))}

            <Button title="Register" onPress={handleRegister} />
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
    eventName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    eventDate: {
        fontSize: 18,
        color: '#555',
        marginBottom: 10,
    },
    eventDescription: {
        fontSize: 16,
        color: '#777',
        marginBottom: 20,
    },
    eventSeats: {
        fontSize: 18,
        color: '#333',
        marginBottom: 20,
    },
    selectCategory: {
        fontSize: 18,
        color: '#333',
        marginBottom: 15,
    },
    categoryButton: {
        width: '100%',
        padding: 15,
        backgroundColor: '#ddd',
        borderRadius: 8,
        marginBottom: 10,
        alignItems: 'center',
    },
    selectedCategory: {
        backgroundColor: '#4CAF50',
    },
    categoryText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default EventDetailScreen;

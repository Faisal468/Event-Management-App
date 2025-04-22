// EventListScreen.js
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EventListScreen = () => {
  const navigation = useNavigation();

  // Example event data (this can later be fetched from an API or a backend)
  const events = [
    { id: '1', name: 'Music Concert', date: '2025-06-15', description: 'A live music event with top artists.' },
    { id: '2', name: 'Tech Conference', date: '2025-07-20', description: 'A conference showcasing the latest in tech.' },
    { id: '3', name: 'Art Exhibition', date: '2025-08-05', description: 'An art exhibition featuring local artists.' },
  ];

  const handleEventClick = (eventId) => {
    // This function can navigate to EventDetailScreen (you would pass eventId here)
    navigation.navigate('EventDetail', { eventId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event List</Text>

      {/* FlatList to display events */}
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventItem}>
            <Text style={styles.eventName}>{item.name}</Text>
            <Text style={styles.eventDate}>{item.date}</Text>
            <Text style={styles.eventDescription}>{item.description}</Text>

            {/* Button to navigate to Event Detail */}
            <Button
              title="View Details"
              onPress={() => handleEventClick(item.id)}
            />
          </View>
        )}
      />

      {/* Button to go to Profile screen */}
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')} // Navigate to ProfileScreen
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // justifyContent: 'center',
  //  alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  eventItem: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    width: '100%',
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventDate: {
    fontSize: 14,
    color: '#555',
  },
  eventDescription: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
});

export default EventListScreen;

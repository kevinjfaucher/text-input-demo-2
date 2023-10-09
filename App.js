// Import required libraries and components from React and React Native
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

// Define the main App component
export default function App() {
  // Initialize state variables using the `useState` hook from React

  // `name` state holds the value for the user's name input
  const [name, setName] = useState('');

  // `favoriteColor` state holds the value for the user's favorite color input
  const [favoriteColor, setFavoriteColor] = useState('');

  // `submitted` state tracks if the user has submitted the form
  const [submitted, setSubmitted] = useState(false);

  // Define the `handleSubmit` function to be called when the user submits the form
  const handleSubmit = () => {
    // Update the `submitted` state to true, indicating the form has been submitted
    setSubmitted(true);
  };

  // Initialize content variable to later decide what to render based on the `submitted` state
  let content;

  // Check if the form has not been submitted yet
  if (!submitted) {
    // Render the form with inputs for name and favorite color
    content = (
        <>
          <Text style={styles.label}>What's your name?</Text>
          <TextInput
              style={styles.input}
              placeholder="Enter your name"
              // Update the `name` state whenever the user types into the TextInput
              onChangeText={text => setName(text)}
          />

          <Text style={styles.label}>What's your favorite color?</Text>
          <TextInput
              style={styles.input}
              placeholder="Enter your favorite color"
              // Update the `favoriteColor` state whenever the user types into the TextInput
              onChangeText={text => setFavoriteColor(text)}
          />

          // Render a button that calls the `handleSubmit` function when pressed
          <Button title="Submit" onPress={handleSubmit} />
        </>
    );
  } else {
    // If the form has been submitted, render a summary of the user's inputs
    content = (
        <View style={styles.summaryContainer}>
          <Text>Thank you for answering the questions!</Text>
          <Text>Your name is: {name}</Text>
          <Text>Your favorite color is: {favoriteColor}</Text>
        </View>
    );
  }

  // Render the main container with the appropriate content (either the form or the summary)
  return <View style={styles.container}>{content}</View>;
}

// Define styles for the components using React Native's StyleSheet API
const styles = StyleSheet.create({
  // Main container style
  container: {
    flex: 1,               // Take up the full height of its parent container
    padding: 20,           // Add a padding of 20 units on all sides
    backgroundColor: '#fff', // Set a white background color
  },
  // Style for form labels
  label: {
    marginTop: 15,         // Add a top margin of 15 units
    marginBottom: 5,       // Add a bottom margin of 5 units
    fontWeight: 'bold',    // Set font weight to bold
  },
  // Style for input fields
  input: {
    height: 40,            // Set a fixed height of 40 units
    borderColor: 'gray',   // Set border color to gray
    borderWidth: 1,        // Set border width to 1 unit
    paddingLeft: 10,       // Add a left padding of 10 units
    marginBottom: 20,      // Add a bottom margin of 20 units
  },
  // Style for the summary container displayed after form submission
  summaryContainer: {
    justifyContent: 'center', // Center children vertically
    alignItems: 'center',     // Center children horizontally
  },
});

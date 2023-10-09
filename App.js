import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        // Initialize the state in the constructor
        this.state = {
            name: '',
            favoriteColor: '',
            submitted: false
        };
    }

    // Define the handleSubmit method
    handleSubmit = () => {
        this.setState({ submitted: true });
    };

    render() {
        let content;

        if (!this.state.submitted) {
            content = (
                <>
                    <Text style={styles.label}>What's your name?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your name"
                        onChangeText={text => this.setState({ name: text })}
                    />

                    <Text style={styles.label}>What's your favorite color?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your favorite color"
                        onChangeText={text => this.setState({ favoriteColor: text })}
                    />

                    <Button title="Submit" onPress={this.handleSubmit} />
                </>
            );
        } else {
            content = (
                <View style={styles.summaryContainer}>
                    <Text>Thank you for answering the questions!</Text>
                    <Text>Your name is: {this.state.name}</Text>
                    <Text>Your favorite color is: {this.state.favoriteColor}</Text>
                </View>
            );
        }

        return <View style={styles.container}>{content}</View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    label: {
        marginTop: 15,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom: 20,
    },
    summaryContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

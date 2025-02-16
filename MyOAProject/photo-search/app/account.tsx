import { Text, View, StyleSheet, TextInput, Switch } from "react-native";
import Checkbox from 'expo-checkbox';
import React, { Component } from "react";

export class AccountScreen extends Component {
    state = { // Set the initial state of the component
        username: "",
        password: "",
        rememberMe: true,
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Sign In</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    value={this.state.username} // Set the value of the input to the state value
                    onChangeText={(text) => this.setState({ username: text })} // Update the state with the new value
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={(text) => this.setState({ password: text })}
                    secureTextEntry
                />
                <View style={styles.extraOptions}> 
                    <Text>Forgot Password?</Text>
                    <View style={{ flexDirection: "row"}}>
                        <Text>Remember me</Text>
                        <Switch
                        style={styles.switch} // Scale down the switch
                        value={this.state.rememberMe}
                        onValueChange={(newValue) => this.setState({ rememberMe: newValue })}
                        trackColor={{ false: "#dddddd", true: "#f96302" }} // Toggle color based on the state
                        thumbColor={this.state.rememberMe ? "#ffffff" : "#aaaaaa"} // Set the color of the thumb based on the state
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: "bold",
    },
    input: {
        height: 40,
        borderColor: "lightgray",
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
    },
    extraOptions: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    switch: {
        height: 20, 
    },
});

export default AccountScreen;

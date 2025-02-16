import { Text, View, StyleSheet, TextInput, Switch } from "react-native";
import Checkbox from "expo-checkbox";
import React, { Component } from "react";

export class AccountScreen extends Component {
    state = {
        // Set the initial state of the component
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
                    <View style={{ flexDirection: "row" }}>
                        <Text>Remember me</Text>
                        <Switch
                            style={styles.switch} // Scale down the switch
                            value={this.state.rememberMe}
                            onValueChange={(newValue) =>
                                this.setState({ rememberMe: newValue })
                            }
                            trackColor={{ false: "#dddddd", true: "#f96302" }} // Toggle color based on the state
                            thumbColor={
                                this.state.rememberMe ? "#ffffff" : "#aaaaaa"
                            } // Set the color of the thumb based on the state
                        />
                    </View>
                </View>
                <View>
                    <Text
                        style={styles.button}
                        // onPress={() => } 
                    >
                        Sign In
                    </Text>
                </View>
                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                    <Text style={styles.dividerText}>OR</Text>
                    <View style={styles.divider} />
                </View>
                <View>
                    <Text style={styles.titleTwo}>New to The Matt Depot?</Text>
                    <Text
                        style={styles.buttonTwo}
                        // onPress={() => }
                    >
                        Create an Account
                    </Text>
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
    titleTwo: {
        fontSize: 16,
        marginLeft: 10,
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
    button: {
        backgroundColor: "#f96302", // Set the background color of the button
        color: "#fff", // Set the text color of the button
        paddingVertical: 10, // Add padding of 10 to the button
        borderRadius: 5, // Add border radius of 5 to the button
        textAlign: "center", // Center the text in the button
        marginHorizontal: 10, // Add margin of 10 to the left and right of the button
        marginTop: 20, // Add margin of 10 at the bottom of the button
        fontWeight: "bold",
    },
    buttonTwo: {
        backgroundColor: "#ffffff", // Set the background color of the button
        color: "#f96302", // Set the text color of the button
        borderColor: "#f96302",
        borderWidth: 2,
        paddingVertical: 10, // Add padding of 10 to the button
        borderRadius: 5, // Add border radius of 5 to the button
        textAlign: "center", // Center the text in the button
        marginHorizontal: 10, // Add margin of 10 to the left and right of the button
        marginTop: 10, // Add margin of 10 at the bottom of the button
        fontWeight: "bold",
    },
    dividerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: "lightgray",
    },
    dividerText: {
        marginHorizontal: 10,
        fontSize: 16,
        color: "gray",
    },
});

export default AccountScreen;

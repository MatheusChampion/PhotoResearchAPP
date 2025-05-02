import UserPage from "@/components/UserPage";
import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Switch, Alert } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default function AccountScreen() {
    // Set the initial state of the component
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Hardcoded for demonstration purposes
    const demoUsername = "Matt";
    const demoPassword = "123";

    // Login / Logout functions
    const handleLogin = () => {
        if (username === demoUsername && password === demoPassword) {
            setIsLoggedIn(true);
        } else {
            Alert.alert("Login Failed", "Invalid username or password");
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername("");
        setPassword("");
    };

    // If the user is logged in, show the UserPage component
    if (isLoggedIn) {
        return (
            <UserPage user={username} onLogout={handleLogout} />
        );
    } else {
        // Otherwise, show the login form
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Sign In</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email Address or username"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <View style={styles.extraOptions}>
                    <Text onPress={() => Alert.alert(`No worries`,`Login: ${demoUsername}\nPassword: ${demoPassword}`)}>
                        Forgot Password?
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text>Remember me</Text>
                        <Switch
                            style={styles.switch}
                            value={rememberMe}
                            onValueChange={setRememberMe}
                            trackColor={{ false: "#dddddd", true: "#f96302" }}
                            thumbColor={rememberMe ? "#ffffff" : "#aaaaaa"}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.button} onPress={handleLogin}>
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
                        onPress={() => Alert.alert("Attention", "Functionality is not implemented, please wait for future updates!")}
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
        padding: RFValue(10),
    },
    title: {
        fontSize: RFValue(20),
        marginBottom: RFValue(20),
        fontWeight: "bold",
    },
    titleTwo: {
        fontSize: RFValue(14),
        marginLeft: RFValue(10),
        fontWeight: "bold",
    },
    input: {
        height: RFValue(40),
        borderColor: "lightgray",
        borderWidth: 1,
        fontSize: RFValue(12),
        marginBottom: RFValue(12),
        paddingLeft: RFValue(8),
    },
    extraOptions: {
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: RFValue(12),
    },
    switch: {
        height: RFValue(20),
    },
    button: {
        backgroundColor: "#f96302",
        color: "#fff",
        paddingVertical: RFValue(10),
        fontSize: RFValue(12),
        borderRadius: RFValue(5),
        textAlign: "center",
        marginHorizontal: RFValue(10),
        marginTop: RFValue(20),
        fontWeight: "bold",
    },
    buttonTwo: {
        backgroundColor: "#ffffff",
        color: "#f96302",
        borderColor: "#f96302",
        borderWidth: 2,
        paddingVertical: RFValue(10),
        borderRadius: RFValue(5),
        textAlign: "center",
        marginHorizontal: RFValue(10),
        fontSize: RFValue(12),
        marginTop: RFValue(10),
        fontWeight: "bold",
    },
    dividerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: RFValue(20),
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: "lightgray",
    },
    dividerText: {
        marginHorizontal: RFValue(10),
        fontSize: RFValue(16),
        color: "gray",
    },
});

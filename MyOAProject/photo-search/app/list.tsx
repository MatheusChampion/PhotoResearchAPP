import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons"; // Import icon library
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/components/RootParamList";

export default function ListScreen() {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Use the useNavigation hook to access the navigation prop * Helped by Copilot
    return (
        <View>
            <View>
                <Text style={styles.title}>My List</Text>
            </View>
            <View style={styles.container}>
                <MaterialIcons name="search-off" size={80} color="black" />
                <Text>You have not saved any items yet</Text>
                <Text
                    style={styles.button}
                    onPress={() => navigation.navigate("Shop")} // Navigate to the shop screen on click
                >
                    Start Shopping
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        padding: 20,
        fontSize: 20,
        fontWeight: "bold",
    },
    container: {
        flexDirection: "column",
        marginVertical: "50%", // Add margin to the top and bottom of the container
        alignItems: "center",
        justifyContent: "space-between", // Add space between items
        height: 200, // Adjust height as needed to ensure spacing
    },
    button: {
        backgroundColor: "#ffffff", // Set the background color of the button
        color: "#f96302", // Set the text color of the button
        borderColor: "#f96302", // Set the border color of the button
        borderWidth: 2, // Set the border width of the button
        borderRadius: 5, // Set the border radius of the button
        textAlign: "center", // Center the text in the button
        fontWeight: "bold", // Set the font weight of the text
        paddingVertical: 5, // Add padding to the button
        width: 150, // Set the width of the button
    },
});

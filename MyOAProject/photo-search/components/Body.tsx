import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Body() {
    return (
        <View style={styles.bodyContainer}>
            <View style={styles.block}>
                <Image
                    source={require("@/assets/images/placeholder.png")}
                    style={styles.home_template}
                />
                <Text style={styles.bodyTitle}>
                    Shop for the latest products
                </Text>
                <Text style={styles.bodyText}>
                    Enjoy limit time savings on top brands during the Refresh
                    for Les event. Shop with us.
                </Text>
                <Text style={styles.button}>Go to Shop</Text>
            </View>
            <View style={styles.block}>
                <View style={styles.block}>
                    <Image
                        source={require("@/assets/images/placeholder.png")}
                        style={styles.home_template}
                    />
                    <Text style={styles.bodyTitle}>
                        Check the prodictrs on your list
                    </Text>
                    <Text style={styles.bodyText}>
                        Have save products saved for later.
                    </Text>
                    <Text style={styles.button}>Go to List</Text>
                </View>
            </View>
            <View style={styles.block}>
                <View style={styles.block}>
                    <Image
                        source={require("@/assets/images/placeholder.png")}
                        style={styles.home_template}
                    />
                    <Text style={styles.bodyTitle}>
                        Login to check updates{" "}
                    </Text>
                    <Text style={styles.bodyText}>
                        Create an account with us and keep track of your order
                        and exclusive deals.
                    </Text>
                    <Text style={styles.button}>Create account/Login</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
    },
    block: {
        backgroundColor: "rgb(255, 255, 255)", // Set a background color for the blocks
        marginBottom: 20, // Add space of 10 at the bottom of each block
    },
    home_template: {
        height: 200,
        width: "100%",
        resizeMode: "cover",
        marginBottom: 10,
    },
    bodyTitle: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "left",
        color: "#000", // Set the text color to black
        paddingHorizontal: 20, // Add padding of 20 to the text
    },
    bodyText: {
        fontSize: 14,
        fontStyle: "normal",
        marginTop: 0,
        marginBottom: 20,
        paddingHorizontal: 20, // Add padding of 10 to the text
        color: "#000", // Set the text color to black
    },
    button: {
        backgroundColor: "rgb(250, 121, 1)", // Set the background color of the button
        color: "#fff", // Set the text color of the button
        paddingVertical: 5, // Add padding of 10 to the button
        textAlign: "center", // Center the text in the button
        marginHorizontal: 20, // Add margin of 10 to the left and right of the button
        marginBottom: 20, // Add margin of 10 at the bottom of the button
    },
});

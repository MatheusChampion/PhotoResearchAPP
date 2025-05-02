import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/components/RootParamList";
import { RFValue } from "react-native-responsive-fontsize";

export default function Body() {
    // Use the useNavigation hook to access the navigation prop -> Helped by Copilot
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.bodyContainer}>
            <View style={styles.block}>
                <Image source={require("@/assets/images/image_reference_4.png")} style={styles.home_template}/>
                <Text style={styles.bodyTitle}>Shop for the latest products</Text>
                <Text style={styles.bodyText}>Enjoy limit time savings on top brands during the Refresh for Les event. Shop with us.</Text>
                <Text style={styles.button} onPress={() => navigation.navigate("Shop")}>Go to Shop</Text>
            </View>
            <View style={styles.block}>
                <View style={styles.block}>
                    <Image source={require("@/assets/images/image_reference_5.png")} style={styles.home_template}/>
                    <Text style={styles.bodyTitle}>Login to check updates</Text>
                    <Text style={styles.bodyText}>Create an account with us and keep track of your order and exclusive deals.</Text>
                    <Text style={styles.button} onPress={() => navigation.navigate("Account")}>Create account/Login</Text>
                </View>
            </View>
            <View style={styles.block}>
                <View style={styles.block}>
                    <Image source={require("@/assets/images/image_reference_1.png")} style={styles.home_template} />
                    <Text style={styles.bodyTitle}>Check the products on your list</Text>
                    <Text style={styles.bodyText}>Save some products to your list and check them out later.</Text>
                    <Text style={styles.button} onPress={() => navigation.navigate("List")}>Go to your List</Text>
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
        backgroundColor: "#fff",
        marginBottom: RFValue(20),
    },
    home_template: {
        height: RFValue(200),
        width: "100%",
        resizeMode: "cover",
        marginBottom: RFValue(10),
    },
    bodyTitle: {
        marginTop: RFValue(10),
        marginBottom: RFValue(10),
        fontSize: RFValue(14),
        fontWeight: "bold",
        textAlign: "left",
        color: "#000",
        paddingHorizontal: RFValue(10),
    },
    bodyText: {
        fontSize: RFValue(12),
        fontStyle: "normal",
        marginTop: 0,
        marginBottom: RFValue(20),
        paddingHorizontal: RFValue(10),
        color: "#000",
    },
    button: {
        fontSize: RFValue(12),
        backgroundColor: "rgb(250, 121, 1)",
        color: "#fff",
        paddingVertical: RFValue(5),
        textAlign: "center",
        marginHorizontal: RFValue(10),
        marginBottom: RFValue(20),
        borderRadius: RFValue(5),
    },
});

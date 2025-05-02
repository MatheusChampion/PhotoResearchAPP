import { Text, View, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/components/RootParamList";
import React from "react";

export default function MenuScreen() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Image
                    source={require("@/assets/images/icon.png")}
                    style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text style={{ fontSize: RFValue(10) }}>My Store: </Text>
                    <Text style={{ fontSize: RFValue(14), fontWeight: "bold" }}>OAKVILLE BURLOAK </Text>
                    <Text style={{ fontSize: RFValue(12) }}>Open 6:00am - 9:00pm </Text>
                </View>
            </View>
            {/* Main */}
            <View style={styles.main}>
                <Text style={styles.title}>Shop</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.category}>Weekly Deals </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Shop")}>
                    <Text style={styles.category}>Shop now</Text>
                </TouchableOpacity>
                <View style={styles.separator} />
                <Text style={styles.title}>Account</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Account")}>
                    <Text style={styles.category}>Sign In / Create Account</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("List")}>
                    <Text style={styles.category}>My List</Text>
                </TouchableOpacity>
                <View style={styles.separator} />
                <Text style={styles.title}>Contact Us</Text>
                <TouchableOpacity onPress={() => Alert.alert("Attention", "Functionality is not implemented, please wait for future updates!")}>
                    <Text style={styles.category}>Customer Service</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert("Attention", "Functionality is not implemented, please wait for future updates!")}>
                    <Text style={styles.category}>Sign Up for Emails</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert("Attention", "Functionality is not implemented, please wait for future updates!")}>
                    <Text style={styles.category}>Feedback</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        marginBottom: RFValue(10),
        backgroundColor: "rgba(90, 90, 90, 0.34)",
        padding: RFValue(10),
    },
    image: {
        width: RFValue(60),
        height: RFValue(60),
        alignSelf: "center",
    },
    textContainer: {
        flex: 1,
        alignItems: "flex-start",
        marginLeft: RFValue(10),
    },
    main: {
        paddingHorizontal: RFValue(10),
    },
    title: {
        fontSize: RFValue(18),
        fontWeight: "bold",
        marginBottom: RFValue(10),
    },
    separator: {
        height: 1,
        backgroundColor: "#ddd",
        marginVertical: RFValue(10),
    },
    category: {
        fontSize: RFValue(16),
        marginVertical: RFValue(5),
    },
});

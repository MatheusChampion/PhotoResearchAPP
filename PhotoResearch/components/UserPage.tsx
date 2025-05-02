import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Text, View, StyleSheet, Image } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/components/RootParamList";

interface UserPageProps {
    user: string;
    onLogout: () => void;
}

export default function UserPage({ user, onLogout }: UserPageProps) {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.bodyContainer}>
            <View style={styles.block}>
                <Image
                    source={require("@/assets/images/image_reference_2.png")}
                    style={styles.home_template}
                />
                <Text style={styles.bodyTitle}>
                    Welcome to your account page {user}!
                </Text>
                <Text style={styles.bodyText}>
                    Here you will be able to manage your account settings and view your order history.
                </Text>
                <View style={styles.buttonContainer}>
                    <Text
                        style={styles.button}
                        onPress={() => navigation.navigate("Shop")}
                    >
                        Shop
                    </Text>
                    <Text
                        style={styles.button}
                        onPress={() => navigation.navigate("List")}
                    >
                        List
                    </Text>
                    <Text
                        style={styles.button}
                        onPress={onLogout}
                    >
                        Log Out
                    </Text>
                </View>
            </View>
            <View style={styles.block}>
                <Text style={styles.bodyTitle}>
                    Account Settings
                </Text>
                <Text style={styles.bodyText}>
                    Here you will be able to manage your account settings and update your profile information.
                </Text>
            </View>
            <View style={styles.block}>
                <Text style={styles.bodyTitle}>
                    Order History
                </Text>
                <Text style={styles.bodyText}>
                    Here you will be able to view your order history and track your orders.
                </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        padding: RFValue(10),
        backgroundColor: "#f5f5f5",
    },
    block: {
        marginBottom: RFValue(10),
        backgroundColor: "#fff",
        borderRadius: RFValue(10),
        padding: RFValue(10),
        alignItems: "center",
    },
    home_template: {
        width: RFValue(300),
        height: RFValue(200),
    },
    bodyTitle: {
        fontSize: RFValue(16),
        fontWeight: "bold",
        marginVertical: RFValue(10),
    },
    bodyText: {
        fontSize: RFValue(12),
        textAlign: "center",
        marginBottom: RFValue(10),
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: 0,
        marginVertical: RFValue(10),
    },
    button: {
        backgroundColor: "#f96302",
        color: "#fff",
        paddingVertical: RFValue(10),
        fontSize: RFValue(12),
        borderRadius: RFValue(5),
        textAlign: "center",
        marginHorizontal: RFValue(10),
        width: RFValue(80),
        fontWeight: "bold",
    },
});
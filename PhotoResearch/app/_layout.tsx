import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import HomeScreen from "@/app/index";
import ShopScreen from "@/app/shop";
import MenuScreen from "@/app/menu";
import AccountScreen from "@/app/account";
import ListScreen from "@/app/list";
import SavedItems from "@/context/SavedItemsContext";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "@/components/RootParamList";
import { RFValue } from "react-native-responsive-fontsize";

// Creation of a bottom tab navigator
const Tab = createBottomTabNavigator<RootStackParamList>();

export default function TabsLayout() {
    return (
        // Navigation container for the bottom tab navigator
        <SavedItems>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: "#f96302",
                    tabBarInactiveTintColor: "gray",
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarStyle: styles.tabBarStyle,
                    headerShown: false,
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: "Home",
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={focused ? require("@/assets/images/icon.png") : require("@/assets/images/icon-bnw.png")}
                                style={styles.icon}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Shop"
                    component={ShopScreen}
                    options={{
                        title: "Shop",
                        tabBarIcon: ({ color }) => (
                            <Entypo name="bucket" size={RFValue(23)} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Account"
                    component={AccountScreen}
                    options={{
                        title: "My Account",
                        tabBarIcon: ({ color }) => (
                            <FontAwesome
                                name="user-circle-o"
                                size={RFValue(21)}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="List"
                    component={ListScreen}
                    options={{
                        title: "My List",
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name="heart" size={RFValue(23)} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Menu"
                    component={MenuScreen}
                    options={{
                        title: "Menu",
                        tabBarIcon: ({ color }) => (
                            <Entypo
                                name="dots-three-horizontal"
                                size={RFValue(22)}
                                color={color}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </SavedItems>
    );
}

const styles = StyleSheet.create({
    tabBarLabelStyle: {
        fontFamily: "Helvetica Neue",
        fontSize: RFValue(9),
        fontWeight: "400",
        fontStyle: "normal",
        padding: RFValue(3),
    },
    tabBarStyle: {
        height: RFValue(60),
        paddingTop: RFValue(5),
    },
    icon: {
        width: RFValue(24),
        height: RFValue(24),
        resizeMode: "contain",
    }
});

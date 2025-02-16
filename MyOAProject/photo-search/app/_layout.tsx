import React from "react";
// Reference for icons https://icons.expo.fyi/Index
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@/app/index";
import ShopScreen from "@/app/shop";
import MenuScreen from "@/app/menu";
import AccountScreen from "@/app/account";
import ListScreen from "@/app/list";
import { RootStackParamList } from "@/components/RootParamList";

// Creation of a bottom tab navigator
const Tab = createBottomTabNavigator<RootStackParamList>();

export default function TabsLayout() {
    return (
        // Navigation container for the bottom tab navigator
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#f96302", // Set the active tab color
                tabBarInactiveTintColor: "#666", // Set the inactive tab color
                tabBarLabelStyle: {
                    fontFamily: "Helvetica Neue",
                    fontSize: 10,
                    fontWeight: "400",
                    fontStyle: "normal",
                }, // Set the default font for tab labels
                tabBarStyle: {
                    height: 50, // Increase the height of the navigation bar
                    paddingBottom: 5, // Adjust padding to center the icons and labels
                },
                headerShown: false, // Hide the header
            }}
        >
            <Tab.Screen //Set tabs for the bottom tab navigator
                name="Home"
                component={HomeScreen}
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={
                                focused ? require("@/assets/images/icon.png") : require("@/assets/images/icon-bnw.png") // Set the icon for the Home tab based on the focus state of the tab 
                            }
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: "contain",
                            }}
                        />
                    ), // Set my own icon for the Home tab
                }}
            />
            <Tab.Screen
                name="Shop"
                component={ShopScreen}
                options={{
                    title: "Shop",
                    tabBarIcon: ({ color }) => (
                        <Entypo name="bucket" size={30} color={color} />
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
                            size={26}
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
                        <FontAwesome name="heart" size={28} color={color} />
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
                            size={22}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

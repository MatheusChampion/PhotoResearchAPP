import { StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import Header from "@/components/Header";
import Body from "@/components/Body";


export default function HomeScreen() {
    const [searchText, setSearchText] = useState(""); 

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header searchText={searchText} setSearchText={setSearchText} />
            <Body />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "rgb(228, 228, 228)",
    },
});
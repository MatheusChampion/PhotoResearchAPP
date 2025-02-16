import React, { useState } from "react";
import { View, Text } from "react-native";
import ShopHeader from "@/components/ShopHeader";
import ShopBody from "@/components/ShopBody";

export default function ShopScreen () {
    const [searchText, setSearchText] = useState(""); // Set the initial state of the search text to an empty string

    return (
        <View>
            <ShopHeader searchText={searchText} setSearchText={setSearchText} />
            <ShopBody />
        </View>
    );
};

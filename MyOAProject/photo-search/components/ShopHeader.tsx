import { TextInput, View, StyleSheet, ScrollView } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Define the props for the Header component
interface HeaderProps {
    searchText: string; // String that represents the search text
    setSearchText: (text: string) => void; // Function that takes a string as an argument and returns void
}

export default function ShopHeader({ searchText, setSearchText }: HeaderProps) {
    return (
        <View style={styles.searchContainer}>
            {/* Add Search icon */}
            <FontAwesome
                style={styles.searchIcon}
                name="search"
                size={16}
                color="gray"
            />
            {/* Add Search input */}
            <TextInput
                style={styles.searchBox}
                placeholder="Search"
                value={searchText}
                onChangeText={setSearchText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 10,
        height: 30,
        borderWidth: 1,
        borderColor: "#ddd",
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 5,
    },
    searchIcon: {
        marginRight: 15,
    },
    searchBox: {
        flex: 1,
        height: 40,
        fontSize: 14,
    },
});
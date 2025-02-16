import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Image,
    ImageBackground,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Define the props for the Header component
interface HeaderProps {
    searchText: string; // String that represents the search text
    setSearchText: (text: string) => void; // Function that takes a string as an argument and returns void
}

// Header component that takes searchText and setSearchText as props
export default function Header({ searchText, setSearchText }: HeaderProps) {
    return (
        <ImageBackground
            source={require("@/assets/images/background.png")} // Set the background image
            style={styles.background}
        >
            <View style={styles.headContainer}>
                {/* Add Title */}
                <Text style={styles.title}>Welcome to The Matt Depot</Text>
                {/* Add Image */}
                <Image
                    source={require("@/assets/images/logo.png")} // Set the logo image
                    style={styles.logo}
                />
                <View style={styles.flexSpacer} />
                {/* Add Search Box */}
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
                        placeholder="What can we help you find?"
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        height: 300,
        resizeMode: 'cover', // Adjust the image to cover the entire background
    },
    headContainer: {
        height: 300,
        paddingTop: 10,
        backgroundColor: 'rgba(182, 88, 0, 0.3)', // Add a light cover
    },
    flexSpacer: {
        flex: 1, // Push the search box to the bottom
    },
    title: {
        fontSize: 16,
        fontWeight: "normal",
        textAlign: "center",
        marginTop: 0,
        marginBottom: 20,
        color: "#fff",
    },
    logo: {
        width: 60,
        height: 60,
        resizeMode: "contain", // Adjust the image to fit within the specified dimensions
        alignSelf: "center",
        marginVertical: 50,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 10,
        height: 40,
        borderWidth: 1,
        borderColor: "#ddd",
        marginHorizontal: 10,
        marginBottom: 10,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchBox: {
        flex: 1,
        height: 40,
        fontSize: 14,
    },
});

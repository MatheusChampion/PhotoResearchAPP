import { Text, View, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity } from "react-native";
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "@/components/RootParamList";
import { RFValue } from "react-native-responsive-fontsize";
import ShopCart from "@/components/ShopCart";
import FontAwesome from "@expo/vector-icons/FontAwesome";


// Define the props for the Header component
interface HeaderProps {
    searchText: string;
    setSearchText: (text: string) => void;
}
export default function Header({ searchText, setSearchText }: HeaderProps) {
    // Use the useNavigation hook to access the navigation prop -> Helped by Copilot
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();


    return (
        // Add a background image
        <ImageBackground
            source={require("@/assets/images/background.png")}
            style={styles.background}
        >
            <View style={styles.headContainer}>
                <Text style={styles.title}>Welcome to The Matt Depot</Text>
                {/*  Shopping Cart icon */}
                <ShopCart color={"white"} />
                {/* Logo  */}
                <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
                {/* Spacer */}
                <View style={styles.flexSpacer} />
                {/* Search Box */}
                <View style={styles.searchContainer}>
                    {/* Search icon */}
                    <FontAwesome
                        style={styles.searchIcon}
                        name="search"
                        size={RFValue(16)}
                        color="gray"
                    />
                    {/* Search input */}
                    <TextInput
                        style={styles.searchBox}
                        placeholder="What can we help you find?"
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                    {/* Camera icon */}
                    {/* Redirect to the Shop screen when the camera icon is clicked */}
                    <TouchableOpacity onPress={() => navigation.navigate('Shop')}>
                        <FontAwesome
                            style={styles.cameraIcon}
                            name="camera"
                            size={RFValue(16)}
                            color="gray"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        height: RFValue(270),
        resizeMode: 'cover',

    },
    headContainer: {
        height: RFValue(270),
        paddingTop: RFValue(10),
        backgroundColor: 'rgba(129, 87, 59, 0.2)',
    },
    flexSpacer: {
        flex: 1,
    },
    title: {
        fontSize: RFValue(12),
        fontWeight: "normal",
        textAlign: "center",
        marginTop: RFValue(0),
        marginBottom: RFValue(20),
        color: "#fff",
    },
    logo: {
        width: RFValue(70),
        height: RFValue(70),
        resizeMode: "contain",
        alignSelf: "center",
        marginVertical: RFValue(50),
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        paddingHorizontal: RFValue(10),
        height: RFValue(35),
        borderWidth: 1,
        borderColor: "#ddd",
        marginHorizontal: RFValue(10),
        marginBottom: RFValue(10),
        borderRadius: RFValue(5),
    },
    searchIcon: {
        marginRight: RFValue(8),
    },
    searchBox: {
        flex: 1,
        height: RFValue(40),
        fontSize: RFValue(12),
    },
    cameraIcon: {
        marginLeft: RFValue(15),
    },
});

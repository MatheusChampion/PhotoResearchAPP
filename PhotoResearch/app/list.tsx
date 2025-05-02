import { Text, View, StyleSheet, FlatList, Alert, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/components/RootParamList";
import { RFValue } from "react-native-responsive-fontsize";
import { useSavedItems } from "@/context/SavedItemsContext";
import React from "react";
import ShopCart from "@/components/ShopCart";
import products from "@/products.json";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function ListScreen() {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    // Use the useSavedItems hook to access the savedItems and toggleSave function from the parent context
    const { savedItems, toggleSave } = useSavedItems();

    // Filter the products to get the saved products
    const savedProducts = products.filter(product => savedItems[product.product_id]);

    // Function to handle the removal of an item from the saved items
    const handleRemoveItem = (productId: string) => {
        toggleSave(productId);
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>My List</Text>
                <ShopCart color={"black"} />
            </View>
           {/* If there are no saved products, display a message to the user */}
            {savedProducts.length === 0 ? (
                <View style={styles.textContainer}>
                    <MaterialIcons name="search-off" size={RFValue(80)} color="black" />
                    <Text style={{ marginVertical: RFValue(10), fontSize: RFValue(12) }}>You have not saved any items yet</Text>
                    <Text style={styles.button} onPress={() => navigation.navigate("Shop")} >
                        Start Shopping
                    </Text>
                </View>
            ) : (
                <FlatList
                    data={savedProducts}
                    keyExtractor={item => item.product_id}
                    renderItem={({ item }) => (
                        <View style={styles.productContainer}>
                            <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => handleRemoveItem(item.product_id)}>
                                <FontAwesome name="times" size={RFValue(20)} color="gray" />
                            </TouchableOpacity>
                            <View style={styles.productSmallContainer}>
                                <View>
                                    <Text style={styles.productName}>{item.name}</Text>
                                    <Text style={styles.productPrice}>${item.price}</Text>
                                </View>
                                <View>
                                    <Text style={styles.buttonSmall} onPress={() => Alert.alert('Cart', 'Your item was added to  your cart!')} >
                                        Add to Cart
                                    </Text>
                                </View>
                            </View>
                        </View>
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        padding: RFValue(10),
        fontSize: RFValue(20),
        fontWeight: "bold",
    },
    container: {
        flex: 1,
        justifyContent: "flex-start",
    },
    textContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#ffffff",
        color: "#f96302",
        borderColor: "#f96302",
        borderWidth: RFValue(2),
        borderRadius: RFValue(5),
        textAlign: "center",
        fontWeight: "bold",
        paddingVertical: RFValue(5),
        width: RFValue(150),
        fontSize: RFValue(12),
    },
    buttonSmall: {
        backgroundColor: "#f96302",
        color: "#ffffff",
        borderRadius: RFValue(5),
        textAlign: "center",
        paddingVertical: RFValue(5),
        width: RFValue(100),
        fontSize: RFValue(12),
        marginTop: RFValue(10),
    },
    productContainer: {
        padding: RFValue(10),
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        flexDirection: "row",
    },
    productSmallContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        paddingLeft: RFValue(10)
    },
    productName: {
        fontSize: RFValue(16),
        fontWeight: "bold",
    },
    productPrice: {
        fontSize: RFValue(14),
        color: "gray",
    },
});
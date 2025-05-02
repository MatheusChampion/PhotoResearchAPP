import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { RFValue } from "react-native-responsive-fontsize";
import { useSavedItems } from "@/context/SavedItemsContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Define the ShopBodyProps interface
interface ShopBodyProps {
    products: any[];
    departments: string[];
    selectedDepartment: string;
    setSelectedDepartment: (department: string) => void;
}

export default function ShopBody({ products, departments, selectedDepartment, setSelectedDepartment }: ShopBodyProps) {
    
    const { savedItems, toggleSave } = useSavedItems();

    // Star Review component
    const StarReview = ({ rating }: { rating: number }) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FontAwesome
                    key={i}
                    name={i <= rating ? "star" : "star-o"}
                    size={RFValue(16)}
                    color={i <= rating ? "#f96302" : "gray"}
                />
            );
        }
        return <View style={styles.starReview}>{stars}</View>;
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                {/* Picker component to select the department */}
                <View style={styles.dropdownContainer}>
                    <Picker
                        selectedValue={selectedDepartment}
                        onValueChange={(itemValue) => setSelectedDepartment(itemValue)}
                        style={styles.dropdown}
                    >
                        {departments.map(department => (
                            <Picker.Item key={department} label={department} value={department} style={styles.dropdownItem} />
                        ))}
                    </Picker>
                </View>
                <View style={{ justifyContent: "center" }}>
                    <Text style={{ fontSize: RFValue(11) }}>{products.length} Results</Text>
                </View>

            </View>
            {/* Conditional to display "No match was found" */}
            {products.length === 0 ? (
                <View style={styles.noMaychContainer}>
                    <Text style={styles.noMatchText}>No match was found</Text>
                    <FontAwesome name="times" size={RFValue(24)} color="gray" />
                </View>
            ) : (
                products.map(product => (
                    <View key={product.product_id} style={styles.productContainer}>
                        {/* Left side of product */}
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <Image source={require("@/assets/images/icon.png")} style={styles.productImage} />
                            <TouchableOpacity onPress={() => toggleSave(product.product_id)}>
                                <FontAwesome name={savedItems[product.product_id] ? "heart" : "heart-o"} size={RFValue(20)} color="#f96302" />
                                <Text style={{ fontSize: RFValue(10), color: "#f96302" }}>Save</Text>
                            </TouchableOpacity>
                        </View>
                        {/* Right product  */}
                        <View style={styles.productDetails}>
                            <Text style={styles.productModel}>Model # {product.model}</Text>
                            <Text style={styles.productSku}>Store SKU # {product.sku}</Text>
                            <Text style={styles.productBrand}>{product.brand}</Text>
                            <Text style={styles.productName}>{product.name}</Text>
                            <View style={styles.starReview}>
                                <StarReview rating={Math.round(product.rating)} />
                                <Text style={styles.star}>({product.reviews})</Text>
                            </View>
                            <Text style={styles.productPrice}>${product.price}</Text>
                            <Text style={styles.productLocation}>{product.location}</Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <FontAwesome name="check" size={RFValue(12)} color="#f96302" />
                                <Text style={styles.productQuantity}>{product.quantity} at Oakville Burloak</Text>
                            </View>
                            <Text style={styles.button} onPress={() => Alert.alert('Cart', 'Item added to Cart')}>
                                Add to Cart 
                            </Text>
                        </View>
                    </View>
                ))
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: RFValue(10),
        backgroundColor: "#f5f5f5",
    },
    dropdownContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        borderColor: "#f96302",
        borderWidth: 1,
        borderRadius: RFValue(10),
        overflow: "hidden",
        marginVertical: RFValue(5),
        width: RFValue(90),
        height: RFValue(40),
    },
    dropdown: {
        flex: 1,
        backgroundColor: "#fff",
        height: RFValue(40),
        paddingVertical: 0,
        justifyContent: "center",
    },
    dropdownItem: {
        fontSize: RFValue(12),
        textAlign: "center",
    },
    noMaychContainer: {
        marginTop: RFValue(20),
        alignItems: 'center'
    },
    noMatchText: {
        textAlign: "center",
        marginTop: RFValue(20),
        fontSize: RFValue(16),
        color: "gray",
    },
    productContainer: {
        flexDirection: "row",
        marginVertical: RFValue(4),
        borderWidth: 1,
        borderRadius: RFValue(5),
        borderColor: "rgba(90, 90, 90, 0.34)",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingBottom: RFValue(10),
        height: RFValue(200),
        backgroundColor: "#fff",
    },
    productImage: {
        width: RFValue(100),
        height: RFValue(120),
        margin: RFValue(10),
        alignSelf: "center",
    },
    productDetails: {
        flex: 1,
        marginTop: RFValue(10),
        justifyContent: "flex-start",
        alignItems: "flex-start",

    },
    productSku: {
        marginBottom: RFValue(2),
        fontSize: RFValue(10),
    },
    productModel: {
        fontSize: RFValue(10),
    },
    starReview: {
        flexDirection: 'row',
        marginVertical: RFValue(2),
    },
    star: {
        marginHorizontal: RFValue(10),
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: RFValue(12),
    },
    productBrand: {
        fontSize: RFValue(14),
        fontWeight: "bold",
    },
    productName: {
        fontSize: RFValue(12),
        fontWeight: "normal",

    },
    productPrice: {
        fontSize: RFValue(19),
        color: "black",
        fontWeight: "bold",
        fontFamily: "Open Sans",
    },
    productLocation: {
        color: "gray",
    },
    productQuantity: {
        color: "gray",
        fontSize: RFValue(10),
        marginLeft: RFValue(5),
    },
    button: {
        fontSize: RFValue(12),
        fontWeight: "bold",
        backgroundColor: "rgb(250, 121, 1)",
        color: "#fff",
        paddingVertical: RFValue(5),
        textAlign: "center",
        borderRadius: RFValue(5),
        paddingHorizontal: RFValue(50),
        marginTop: RFValue(10),
        alignSelf: "flex-start",
    },
});

import { StyleSheet, TouchableOpacity, Alert, } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function ShoppingCart({ color }: { color: string }) {
    return (
        <TouchableOpacity
            onPress={() => Alert.alert('Shopping Cart', 'This feature is not implemented yet.')}
            style={styles.cartIcon}
        >
            <FontAwesome name="shopping-cart" size={RFValue(20)} color={color} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cartIcon: {
        position: 'absolute',
        top: RFValue(10),
        right: RFValue(10),
    },
});
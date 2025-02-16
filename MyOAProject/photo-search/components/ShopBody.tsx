import { Text, View, StyleSheet, Image } from "react-native";

export default function ShopBody() {
    return (
        <View style={styles.container}>
            <Text>Shop Body</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
});
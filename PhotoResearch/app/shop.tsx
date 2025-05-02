import { StyleSheet, ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import React, { useState, useEffect } from "react";
import ShopHeader from "@/components/ShopHeader";
import ShopBody from "@/components/ShopBody";
import products from "@/products.json";

export default function ShopScreen() {
    // Set the initial state of the search text, the selected department, the filtered products, and the image response
    const [searchText, setSearchText] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [response, setResponse] = useState<any[]>([]);

    useEffect(() => {
        // Filter products based on search text, selected department, and image response
        const filtered = products.filter(product => {
            const matchesDepartment = selectedDepartment === "All" || selectedDepartment === "" ? true : product.department === selectedDepartment;
            const matchesSearchText = 
                product.name.toLowerCase().includes(searchText.toLowerCase()) || 
                product.description.toLowerCase().includes(searchText.toLowerCase()) || 
                product.model.toLowerCase().includes(searchText.toLowerCase()) || 
                product.brand.toString().includes(searchText.toLocaleLowerCase()) || 
                product.sku.toString().includes(searchText.toLocaleLowerCase()); 
            const matchesResponse = 
                response.length === 0 || 
                response.some((label: any) => product.description.toLowerCase().includes(label.description.toLowerCase()));
            return matchesDepartment && matchesSearchText && matchesResponse;
        });
        setFilteredProducts(filtered);
    }, [searchText, selectedDepartment, response]);

    // Create a list of unique departments from the products data and add "All" as the first option
    const departments = ["All", ...new Set(products.map(product => product.department))];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ShopHeader
                searchText={searchText}
                setSearchText={setSearchText}
                setResponse={setResponse}
            />
            <ShopBody
                products={filteredProducts}
                departments={departments}
                selectedDepartment={selectedDepartment}
                setSelectedDepartment={setSelectedDepartment}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingBottom: RFValue(20),
        backgroundColor: "#fff",
    },
});

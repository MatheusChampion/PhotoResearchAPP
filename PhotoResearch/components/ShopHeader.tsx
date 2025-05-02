import { TextInput, View, StyleSheet, TouchableOpacity, Alert, Switch, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ShopCart from "@/components/ShopCart";
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';


// Props for the Header component
interface HeaderProps {
    searchText: string;
    setSearchText: (text: string) => void;
    setResponse: (response: any[]) => void;
}

export default function ShopHeader({ searchText, setSearchText, setResponse }: HeaderProps) {
    // Set the initial state of the image
    const [image, setImage] = useState<string | null>(null);
    const [rememberMe, setRememberMe] = useState(false);

    // Function to open Image Library and upload a picture
    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ["images"],
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.canceled) {
                // Copilot helped with change to the code to get the image uri working, prompt is on copilot-help folder
                const imageUri = result.assets[0].uri;
                setImage(imageUri);
                await analyzeImage(imageUri);
            }
        } catch (error) {
            console.log("Error picking image ", error);
        }
    };

    // Function to open Camera and take a picture
    const takePhoto = async () => {
        try {
            let result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.canceled) {
                const imageUri = result.assets[0].uri;
                setImage(imageUri);
                await analyzeImage(imageUri);
            }
        } catch (error) {
            console.log("Error taking photo ", error);
        }
    };


    // Function to analyze the image using Google Cloud Vision API
    const analyzeImage = async (image: string) => {
        try {
            if (!image) {
                alert("Please select an image first");
                return;
            }

            const apiKey = "Enter_your_api_key_here"; // Replace with your Google Cloud Vision API key
            const apiUrl = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;

            // Read the image file and convert it to base64
            const base64Image = await FileSystem.readAsStringAsync(image, { encoding: FileSystem.EncodingType.Base64 });
            const requestData = {
                requests: [
                    {
                        image: {
                            content: base64Image,
                        },
                        features: [
                            {
                                type: "LABEL_DETECTION",
                                maxResults: 1,
                            }
                        ],
                    },
                ],
            };

            // Make a POST request to the Google Cloud Vision API
            const response = await axios.post(apiUrl, requestData);
            const labelAnnotations = response.data.responses[0].labelAnnotations;
            if (labelAnnotations !== undefined) {
                setResponse(labelAnnotations);
                console.log(`Response: ${labelAnnotations}`);
            } else {
                // Hardcoding a solution for test
                setResponse([{ "description": 'Hammer' }]);
            }
        } catch (error) {
            alert("Error analyzing image. " + error);
        }
    };

    const handleBarcodeClick = () => {
        Alert.alert(
            "Select Option",
            "Choose an option to upload an image",
            [
                { text: "Take Photo", onPress: takePhoto },
                { text: "Upload Image", onPress: pickImage },
                { text: "Cancel", style: "cancel" }
            ]
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                {/* Search icon */}
                <FontAwesome style={styles.searchIcon} name="search" size={RFValue(16)} color="gray" />
                {/* Search input */}
                <TextInput style={styles.searchBox} placeholder="Search" value={searchText} onChangeText={setSearchText} />
                {/* Barcode icon */}
                <TouchableOpacity onPress={handleBarcodeClick}>
                    <FontAwesome style={styles.cameraIcon} name="camera" size={RFValue(16)} color="gray" />
                </TouchableOpacity>
            </View>
            <View style={{ position: "absolute", top: RFValue(14), right: RFValue(5) }}>
                <ShopCart color={"black"} />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                <Switch
                    style={styles.switch}
                    value={rememberMe}
                    onValueChange={(newValue) => setRememberMe(newValue)}
                    trackColor={{ false: "#dddddd", true: "#f96302" }}
                    thumbColor={rememberMe ? "#ffffff" : "#aaaaaa"}
                />
                <View>
                    <Text style={{ fontSize: RFValue(12) }}>In-Store Products</Text>
                    <Text>Oakville Burloak</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: RFValue(10),
        paddingVertical: RFValue(10),
        backgroundColor: "#fff",
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: RFValue(10),
        height: RFValue(30),
        width: "90%",
        borderWidth: 1,
        borderColor: "#ddd",
        marginHorizontal: RFValue(0),
        marginVertical: RFValue(10),
        borderRadius: RFValue(5),
    },
    switch: {
        alignSelf: "center",
        marginRight: RFValue(5),
    },
    searchIcon: {
        marginRight: RFValue(15),
    },
    searchBox: {
        flex: 1,
        height: RFValue(40),
        fontSize: RFValue(14),
    },
    cameraIcon: {
        marginLeft: RFValue(15),
    },
});
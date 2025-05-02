import React, { createContext, useState, useContext } from "react";

interface SavedItemsContextProps {
    savedItems: { [key: string]: boolean };
    toggleSave: (productId: string) => void;
}

// Initialize the context with an empty object and a function that does nothing
const SavedItemsContext = createContext<SavedItemsContextProps | undefined>(undefined);

export default function SavedItems({ children }: { children: React.ReactNode }) {
    // Initialize the state with an empty object
    const [savedItems, setSavedItems] = useState<{ [key: string]: boolean }>({});

    // Track if the product is saved or not by editing the product_id in the savedItems state
    const toggleSave = (productId: string) => {
        setSavedItems(prevState => ({
            ...prevState,
            [productId]: !prevState[productId],
        }));
    };

    return (
        // Provide the savedItems state and the toggleSave function to the children
        <SavedItemsContext.Provider value={{ savedItems, toggleSave }}>
            {children}
        </SavedItemsContext.Provider>
    );
};

// Custom hook to use the savedItems state and the toggleSave function
export const useSavedItems = () => {
    const context = useContext(SavedItemsContext);
    // If the context is undefined, throw an error
    if (!context) {
        throw new Error("useSavedItems must be used within a SavedItems");
    }
    return context;
};
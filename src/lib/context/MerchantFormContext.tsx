"use client";

import { createContext, ReactNode, useContext, useState } from "react";

const MerchantFormContext = createContext<{
    showMerchantForm: boolean;
    handleShowMerchantForm: (show: boolean) => void;
} | undefined>(undefined);

function MerchantFormProvider({ children }: { children: ReactNode }) {
    const [showMerchantForm, setShowMerchantForm] = useState(false);

    function handleShowMerchantForm(show: boolean) {
        setShowMerchantForm(show);
    }
    return (
        <MerchantFormContext.Provider
            value={{
                showMerchantForm,
                handleShowMerchantForm,
            }}
        >
            {children}
        </MerchantFormContext.Provider>
    )
}

function useMerchantForm() {
    const context = useContext(MerchantFormContext);
    if (context === undefined) throw new Error("MerchantContext was used outside the MerchantFormContextProvider")
    return context;
}

export { MerchantFormProvider, useMerchantForm }
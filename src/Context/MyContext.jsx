import { createContext, useState } from 'react';

// 1. Creamos el contexto
export const ContextCreate = createContext();

// 2. Creamos el "Provider" (el que reparte la energía/datos)
export const ContextProvider = ({ children }) => {
    
    const [selectCategory, setSelectCategory] = useState('')
    const [selected, setSelected] = useState(1);



    return (
        <ContextCreate.Provider value={{ selectCategory,setSelectCategory,selected,setSelected }}>
            {children}
        </ContextCreate.Provider>
    );
};
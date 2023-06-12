import { createContext, useState } from "react"

export const InputContext = createContext({} as InputContextProps);

interface InputContextProps{
    searchValue: string,
    setSearchValue: (searchValue: string) => void
}

interface InputStoreProps{
    children: React.ReactElement
}

export const InputStore = ({ children }: InputStoreProps) => {
    const [searchValue, setSearchValue] = useState('Naruto')

    return(
        <InputContext.Provider value={{ searchValue, setSearchValue }}>
                {children}
        </InputContext.Provider>
    )
}

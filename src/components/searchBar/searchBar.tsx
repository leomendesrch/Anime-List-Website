import { SearchContainer, SearchInput, IconContainer, SearchIcon  } from "./searchBar.style"
import SearchImage from '../../assets/search-interface-symbol.png'
import { useState } from 'react'
import useInputContext from "../../hooks/useInputContext"


function SearchBar(){
    const [inputValue, setInputValue] = useState('')
    const {setSearchValue} = useInputContext()
    console.log(inputValue)
    return(
        <>
            <SearchContainer>
                <SearchInput 
                onChange={(e) => (setInputValue(e.target.value))}
                onKeyDown={(e) => {if(e.key === 'Enter'){setSearchValue(inputValue)}}}
                placeholder="Naruto..."
                />
                <IconContainer>
                    <SearchIcon
                    src={SearchImage}
                    onClick={() => (setSearchValue(inputValue))}
                    /> 
                </IconContainer>
            </SearchContainer>
        </>
    )
}

export default SearchBar
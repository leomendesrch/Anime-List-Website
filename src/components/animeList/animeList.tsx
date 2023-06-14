import { AnimeCard, AnimeListContainer, AnimeTitle, Card} from "./animeList.style"
import {useEffect, useState} from 'react'
import useInputContext from "../../hooks/useInputContext"

interface Iprops {
    data: [{
        id: number
        attributes: {
            canonicalTitle: string,
            posterImage: {
                small: string
            }
        }
    }]
}

function AnimeList(){
    const api = 'https://kitsu.io/api/edge/'
    const [info, setInfo] = useState<Iprops>({data: [{id: 0, attributes: { canonicalTitle: '', posterImage: {small: ''} }}]})
    const {searchValue} = useInputContext()

    useEffect(() => {
        if(searchValue !== ''){
        fetch(`${api}anime?filter[text]=${searchValue}&page[limit]=16`)
        .then(response => response.json())
        .then((response) => (setInfo(response), console.log()))
        .catch((error) => console.log(error))
        }
    },[searchValue])

    return(
        <>
            <AnimeListContainer>
                {info? 
                (<>
                    {info.data.map((anime) => (
                    <Card>
                        <AnimeCard key={anime.id} src={anime.attributes.posterImage.small}></AnimeCard>
                        <AnimeTitle>{anime.attributes.canonicalTitle}</AnimeTitle>
                    </Card>
                    ))}
                </>)
                : 
                ''}
            </AnimeListContainer>
        </>
    )
}

export default AnimeList
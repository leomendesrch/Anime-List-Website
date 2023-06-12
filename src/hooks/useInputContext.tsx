import { InputContext } from '../context/inputContext'
import { useContext } from 'react'

export default function useInputContext(){
    const context = useContext(InputContext)
    if(InputContext === undefined){
        throw new Error('Não foi possivel utilizar esse contexto global')
    }
    return context
}
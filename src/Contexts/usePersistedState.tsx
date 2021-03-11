import Cookies from 'js-cookie'
import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>,
]

function usePersistedState<T>(key: string, initialState: T): Response<T> {
    const [stateTheme, setStateTheme] = useState(() => {
        const storageValue = Cookies.stateTheme

        if(storageValue){
            return JSON.parse(storageValue)
        } else {
            return initialState
        }
    })

    useEffect(() => {
        Cookies.set('stateTheme', JSON.stringify(stateTheme));
    }, [stateTheme])

    return [stateTheme, setStateTheme]
}

export default usePersistedState
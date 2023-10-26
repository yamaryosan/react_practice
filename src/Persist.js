import { useState } from 'react'

function usePersist(ky, initValue) {
    const key = "hooks:" + ky

    const value = () => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initValue
        } catch (err) {
            console.log(err)
            return initValue
        }
    }

    const setValue = (val) => {
        try {
            setSavedValue(val)
            window.localStorage.setItem(key, JSON.stringify(val))
        } catch (err) {
            console.log(err)
        }
    }
    const [savedValue, setSavedValue] = useState(value)
    return [savedValue, setValue]
}
export default usePersist
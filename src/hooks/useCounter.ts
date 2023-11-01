import { useState } from 'react'

interface UseCounter {
    count: number
    increment: () => void
    decrement: () => void
}

export const useCounter = (): UseCounter => {
    const [count, setCount] = useState<number>(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return { count, increment, decrement }
}

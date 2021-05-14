import {useState} from 'react'

export function useIndex(array, start = 0) {
    const [index, setIndex] = useState(start)
    let step

    function next() {
        step = index === array.length - 1? 0 : index + 1
        return setIndex(step)
    }

    function back() {
        step = index === 0? array.length - 1 : index - 1
        return setIndex(step)
    }

    return [array[index], next, back, index]
}
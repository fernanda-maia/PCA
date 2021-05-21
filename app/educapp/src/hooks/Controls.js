import {useState} from 'react'

/*Get the next/previous element in an array*/
export function useIndex(array, start = 0) {
    const [index, setIndex] = useState(start)
    let step

    function next() {
        step = index === array.length - 1? index : index + 1
        return setIndex(step)
    }

    function back() {
        step = index === 0? 0 : index - 1
        return setIndex(step)
    }

    return [array[index], next, back, index]
}

/*Change style/content of a component according to the state*/
export function useStyle(stylesheet, init) {
    const [state, setState] = useState(init)
    let style = stylesheet[state]

    function setStyle(newState) {
        setState(newState)
    }

    return [style, setStyle]
}
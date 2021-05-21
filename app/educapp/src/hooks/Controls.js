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

/*Change style of an element according to the state*/
export function useStyle(stylesheet, init = true) {
    const [state, setState] = useState(init)
    let obj = {...stylesheet}
    
    Object.keys(stylesheet).map((key) => obj[key]= stylesheet[key][state])

    function setStyle(newState) {
        setState(newState)
    }

    return [obj, setStyle]
}
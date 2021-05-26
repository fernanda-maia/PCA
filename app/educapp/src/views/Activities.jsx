// FIXME
import '../assets/css/Lessons.css'

import Image from '../assets/img/done.png'
import Main from '../components/layout/Main'
import Option from '../components/Option'
import Modal from '../components/Modal'

import {useRef} from 'react'
import {useParams} from 'react-router-dom'
import {useIndex, useStyle} from '../hooks/Controls'

import {lessons} from '../data/questions'

export default function Classroom(props) {
    const {id} = useParams()
    const score = useRef(0)
    const count = useRef(lessons[id].length)
    const [content, next] = useIndex(lessons[id])

    const [result, setResult] = useStyle(
        ["path", "result", "visibility"],

        {
            true: ['https://img.icons8.com/bubbles/100/fa314a/happy.png', 'Congratulations!', 'flex'],
            false: ['https://img.icons8.com/bubbles/100/fa314a/sad.png', 'Wrong Answer!', 'flex'],
            "hidden": [null, null, 'none']
        },

        "hidden"    
    )

    function checkAnswer(index) {
        let check = index === content.answer

        setResult(check)
        score.current += check
        count.current--
        next()
    }
    
    return (
         <Main>
            <Modal {...result} callback = {() => setResult('hidden')} />
            <div className="question-box">
                { count.current > 0?
                        <>
                            <Option content={content.question}   />

                            { content.options.map((opt, i) => 
                                    <Option content ={opt} callback={() => checkAnswer(i)} key={i}/>)
                            } 
                        </> :

                        <div className="wrapper">
                          <img src={Image} alt="Done" width="60%" />
                          <span className = "score">SCORE: {score.current}</span>
                        </div>
                }

            </div>
         </Main>
    );
}
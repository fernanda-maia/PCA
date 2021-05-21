// FIXME
import '../assets/css/Activities.css'

import Image from '../assets/img/done.png'
import Main from '../components/layout/Main'
import Option from '../components/Option'
import Modal from '../components/Modal'

import {useState, useRef} from 'react'
import {useIndex, useStyle} from '../hooks/Controls'

import {lessons} from '../data/questions'
import {useParams} from 'react-router-dom'

export default function Classroom(props) {
    const {id} = useParams()
    const [modal, setModal] = useState({})
    const count = useRef(lessons[id].length)
    const [content, next] = useIndex(lessons[id])

    const [result, setResult] = useStyle({
        path: {
            true: 'https://img.icons8.com/bubbles/100/fa314a/happy.png',
            false: 'https://img.icons8.com/bubbles/100/fa314a/sad.png'
        },

        result: {
            true: 'Congratulations!',
            false: 'Wrong Answer!'
        }
    })

    function checkAnswer(index) {
        setResult(index === content.answer)
        count.current--

        setModal({
            visibility: 'flex',
            callback: () => {
                next()
                setModal({visibility: 'none'})
            }  
        })
    }
    
    return (
         <Main>
            <Modal {...modal} {...result} />

            <div className="question-box">
                {
                    count.current > 0?
                        <>
                        <Option content={content.question}   />

                        { content.options.map((opt, i) => 
                                <Option content ={opt} callback={() => checkAnswer(i)} key={i}/>)
                        } 
                        </> :

                        <div className="wrapper">
                          <img src={Image} alt="Done" width="60%" />
                          <h3>No more questions</h3>
                        </div>
                }

            </div>
         </Main>
    );
}
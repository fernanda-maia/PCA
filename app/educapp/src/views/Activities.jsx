// FIXME
import '../assets/css/Activities.css'
import Main from '../components/layout/Main';
import Option from '../components/Option';
import Modal from '../components/Modal';

import {useState} from 'react'
import {useIndex} from '../hooks/Controls'

import {lessons} from '../data/questions'
import {useParams} from 'react-router-dom'

export default function Classroom(props) {
    const { id } = useParams()
    const [content, next] = useIndex(lessons[id])

    const [modal, setModal] = useState({
        visibility: 'none',
        path: '',
        result: '',
        callback: null
    })

    function checkAnswer(index) {
        const check = index === content.answer
        setModal({
            ...modal,
            visibility: 'flex',
            path: check? 'https://img.icons8.com/bubbles/100/fa314a/happy.png' :
                'https://img.icons8.com/bubbles/100/fa314a/sad.png',
            result: check? 'Congratulations!' : 'Wrong answer!',
            callback: () => {
                next()
                setModal({...modal, visibility: 'none'})
            }  
        })
    }
    
    return (
         <Main>
            <Modal {...modal} />

            <div className="question-box">
                <Option content={content.question}   />
                <Option content={content.options[0]} callback={() => checkAnswer(0)}/>
                <Option content={content.options[1]} callback={() => checkAnswer(1)}/>
                <Option content={content.options[2]} callback={() => checkAnswer(2)}/>
                <Option content={content.options[3]} callback={() => checkAnswer(3)}/>
                <Option content={content.options[4]} callback={() => checkAnswer(4)}/>
            </div>
         </Main>
    );
}
// FIXME
import '../assets/css/Activities.css'
import Main from '../components/layout/Main';
import Option from '../components/Option';
import Button from '../components/buttons/Controls';

import {lessons} from '../data/questions'
import {useIndex} from '../hooks/Controls'
import {useParams} from 'react-router-dom'

export default function Classroom(props) {
    const { id } = useParams()
    const [content, next, back] = useIndex(lessons[id])

    function checkAnswer(index) {
        if(index === content.answer) {
            alert('Acertou')
        } else {
            alert('Errou')
        }
    }
    
    return (
         <Main>
            <div className="question-box">
                <Option content={content.question}   />
                <Option content={content.options[0]} callback={() => checkAnswer(0)}/>
                <Option content={content.options[1]} callback={() => checkAnswer(1)}/>
                <Option content={content.options[2]} callback={() => checkAnswer(2)}/>
                <Option content={content.options[3]} callback={() => checkAnswer(3)}/>
                <Option content={content.options[4]} callback={() => checkAnswer(4)}/>
            </div>

            <div className="wrapper">
                <Button callback={back} path="https://img.icons8.com/flat-round/64/fa314a/left--v1.png"
                    alt="Back"/>

                <Button callback={next} path="https://img.icons8.com/flat-round/64/fa314a/right--v1.png"
                    alt="Next"/>
            </div>
         </Main>
    );
}
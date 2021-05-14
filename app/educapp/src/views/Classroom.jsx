import Main from '../components/layout/Main';
import '../assets/css/Classroom.css';

import {useIndex} from '../hooks/Controls'
import {content} from '../data/articles'

import {useParams} from 'react-router-dom'

export default function Classroom(props) {
    const { id } = useParams()
    const [article, next, back] = useIndex(content[id])

    return (
         <Main section={id} sectionColor="#B23551" 
               path="https://img.icons8.com/dusk/64/000000/bookmark.png">

            <div className="controls-box">
                <button onClick={back} className="controls-btn">
                    <img src="https://img.icons8.com/plasticine/100/000000/arrow-pointing-left.png" alt="Back"/>
                </button>

                <button onClick={next} className="controls-btn">
                    <img src="https://img.icons8.com/plasticine/100/000000/arrow.png" alt="Next"/>
                </button>
            </div>
            
            <div className="classroom-box">
                <div className="article">
                    <h1>{article.title}</h1>
                    {article.content}
                </div>
            </div>


         </Main>
    );
}
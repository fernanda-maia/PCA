import '../assets/css/Course.css';

import Main from '../components/layout/Main';
import Button from '../components/Button';

export default function Course(props) {
    const classroom = `/course/`

    return (
        <Main section="Course" sectionColor="#6C4360"
              path="https://img.icons8.com/dusk/64/000000/classroom.png" >

            <div className="classes-btn"> 
                <Button classroom="Math" color="#F5CBA7" border="#D35400"
                    url={classroom + 'math'}
                    img="https://img.icons8.com/dusk/64/000000/math-folder.png"/>

                <Button classroom="History" color="#AED6F1" border="#1F618D"
                    url={classroom + 'history'}
                    img="https://img.icons8.com/dusk/64/000000/folder-invoices.png"/>

                <Button classroom="Programming" color="#D2B4DE" border="#9B59B6"
                    url={classroom + 'programming'}
                    img="https://img.icons8.com/dusk/64/000000/documents-folder.png"/>
            </div>  
        </Main>
    );
}
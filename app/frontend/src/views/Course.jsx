import '../assets/css/Course.css';

import Main from '../components/layout/Main';
import Button from '../components/buttons/Button';

export default function Course(props) {
    const classroom = `/course/`
    const img = "https://img.icons8.com/plasticine/100/000000/google-classroom.png"
    
    return (
        <Main section="Course" sectionColor="#6C4360"
              path="https://img.icons8.com/dusk/64/000000/classroom.png" >

            <div className="classes-btn"> 
                <Button classroom="Math" color="#F5CBA7" border="#D35400"
                    url={classroom + 'math'} path = {img}
                    img="https://img.icons8.com/dusk/64/000000/calculator.png"/>

                <Button classroom="History" color="#AED6F1" border="#1F618D"
                    url={classroom + 'history'} path = {img}
                    img="https://img.icons8.com/dusk/64/000000/book-shelf.png"/>

                <Button classroom="Programming" color="#D2B4DE" border="#9B59B6"
                    url={classroom + 'programming'} path = {img}
                    img="https://img.icons8.com/dusk/64/000000/code.png"/>
            </div>  
        </Main>
    );
}
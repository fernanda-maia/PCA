// TODO
import Main from '../components/layout/Main';

import {useParams} from 'react-router-dom'

export default function Classroom(props) {
    const { id } = useParams()

    return (
         <Main section={id} sectionColor="#CD5C5C" 
               path="https://img.icons8.com/dusk/64/000000/bookmark.png">
         </Main>
    );
}
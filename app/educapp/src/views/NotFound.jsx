import '../assets/css/NotFound.css'
import Main from '../components/layout/Main';

import Image from '../assets/img/error.png';

export default function NotFound(props) {

    return (
         <Main section="Not Found" sectionColor="#F15C5C" 
               path="https://img.icons8.com/dusk/64/000000/error.png">

            <div className="image-error">
                <img src={Image} alt="Page not found" />
                <h2>Ooops... Page Not Found!</h2>
            </div>
         </Main>
    );
}
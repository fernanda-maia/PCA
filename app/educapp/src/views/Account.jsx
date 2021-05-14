import '../assets/css/Account.css';

import Main from '../components/layout/Main';
import Form from '../components/Form';

export default function Account(props) {

    return (
        <Main section="Account" sectionColor="#834070"
              path="https://img.icons8.com/dusk/64/000000/check-book.png">

           <Form />
        </Main>
    );
}
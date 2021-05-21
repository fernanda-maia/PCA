// FIXME
import '../assets/css/Home.css'

import Main from '../components/layout/Main';
import Chart from '../components/cards/Chart';

import React, {useContext} from 'react'
import {UserContext} from '../data/UserData'

export default function Home(props) {
    const {name} = useContext(UserContext)

    return (
        <Main section={`Welcome, ${name}!`} sectionColor="#46335E" 
               path="https://img.icons8.com/dusk/64/000000/work-from-home.png">

            <div className="wrapper">
                <Chart progress = {50} subject = {'Math'} color="#D35400" bgColor ="#E17E00" />
                <Chart progress = {92} subject = {'History'} color="#1F618D" bgColor = "#3B6890 "/>
                <Chart progress = {64} subject = {'Programming'} color="#9B59B6" bgColor="#4B3476"/>
            </div>
         </Main>
    );
}
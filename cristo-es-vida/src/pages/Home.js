import React, {useEffect} from 'react'
import MainBanner from '../components/Home/Body/MainBanner/MainBanner'
import MessageNavidad from '../components/Home/Body/MessageNavidad/MessageNavidad'

//redux
import {useSelector} from 'react-redux'

import './Home.css'

export default function Home() {
    const selector = useSelector(state => state.menu);

    return (
        <div className='main-banner' style={{display:selector? 'none':'flex',transition:'1s'}}>
            <MainBanner/>
            <MessageNavidad/>
        </div>
    )
}

import React from 'react';
import {useState,useEffect} from 'react';
import dividerDesktop from './images/pattern-divider-desktop.svg';
import dividerMobile from './images/pattern-divider-mobile.svg'
import dice from './images/icon-dice.svg';
import axios from 'axios';

const AdviceCard = () => {
    const [advice, setAdvice] = useState('')

    const getAdvice = async () => {
        const response = await axios.get('https://api.adviceslip.com/advice')
        const advice = await response.data.slip;
        setAdvice(advice)
    }

    useEffect(() => {
        getAdvice();
    }, []);

    return (
        <div className='card flex flex-col items-center justify-center relative rounded-2xl w-[540px] bg-bgr1 mobile:w-[90%]'>
            <p class="font-bold text-xs mb-4">ADVICE #{advice.id}</p>
            <h2>“{advice.advice}”</h2>
            <img src={dividerDesktop} className='mobile:hidden' alt='divider' />
            <img src={dividerMobile} className='desktop:hidden' alt='divider' />
            <div className='dice flex flex-col items-center justify-center absolute w-[64px] h-[64px] bg-dice rounded-full' onClick={getAdvice}>
                <img src={dice} alt='dice' />
            </div>
        </div>
    )
}

export default AdviceCard;

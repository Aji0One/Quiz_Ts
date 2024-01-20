import React, { useContext, useEffect, useState } from 'react';
import { questionProps } from './ddq';
import stateContest from '../../../Context/MyContext';
import { Radio } from '@mui/material';
const Mcq = ({ id, num, setrender }: questionProps) => {

    const { currentQuestion, quizSet, setQuizSet }: any = useContext(stateContest);
    const [myans, setMyAns] = useState<any>({});
    const [active, setActive] = useState<boolean>();




    useEffect(() => {
        const res: any = sessionStorage.getItem(id.toString());

        const resobj: any = JSON.parse(res);
        if (resobj && resobj.anser.length !== 0) { setMyAns(resobj); setActive(true) }
        // setQuizSet((arr: any) => [...arr, quizSet])
    }, [])



    const handleAnswer = (value: string) => {
        setActive(true);
        setMyAns({ id: id, anser: [value] });


        sessionStorage.setItem(id.toString(), JSON.stringify({ id: id, anser: [value] }))
    }

    useEffect(() => {

        quizSet[num - 1].active = active

        setrender(active)
    }, [active])
    return (
        <div className='quiz-cont'>
            <p className='quiz-question' data-testid="question"><span className='serial-number'>{id}.</span>{currentQuestion?.question}</p>

            {currentQuestion?.opt.map((ele: any, i: any) => (
                <div key={i} className='options'>
                    <input type="radio" name='mcq' value={ele?.op} onChange={() => handleAnswer(ele.op)} checked={myans?.anser && myans?.anser[0] === ele?.op} className='input' data-testid={`o-${i}`} />
                    <span className='option'>{ele.op}</span>
                </div>
            ))}
        </div>
    )
}

export default Mcq

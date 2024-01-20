import React, { useContext, useEffect, useState } from 'react';
import stateContest from '../../../Context/MyContext';
import { questionProps } from './ddq'
import { TextField } from '@mui/material';
const Fibq = ({ id, num, setrender }: questionProps) => {

    const { currentQuestion, quizSet, setAnswersSet, answersSet, setQuizSet }: any = useContext(stateContest);
    const [myans, setMyAns] = useState<any>({});
    const [inputField, setInputField] = useState<string>("");
    const [active, setActive] = useState<boolean>();





    useEffect(() => {
        const res: any = sessionStorage.getItem(id.toString());

        const resobj: any = JSON.parse(res);
        console.log(resobj);
        if (resobj && resobj.anser.length !== 0) { setInputField(resobj.anser[0]); setActive(true) }
        // setQuizSet((arr: any) => [...arr, quizSet])
    }, [])

    useEffect(() => {

        if (inputField.length === 0) {
            console.log("null value")
            setActive(false);

        } else { setActive(true); }

        console.log("changing")

        sessionStorage.setItem(id.toString(), JSON.stringify({ id: id, anser: [inputField] }))
    }, [inputField])

    useEffect(() => {
        quizSet[num - 1].active = active

        setrender(active)
    }, [active])
    return (
        <div className='quiz-cont'>
            <p className='quiz-question' data-testid="question"><span className='serial-number'>{id}.</span>{currentQuestion?.question}</p>

            <div className='options'>
                <TextField type='text' variant='standard' value={inputField} onChange={(e) => setInputField(e.target.value)} placeholder='Enter answer here' className='text-input' />

            </div>

        </div>
    )
}

export default Fibq

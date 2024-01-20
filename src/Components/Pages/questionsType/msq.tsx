import React, { useState, useEffect, useContext } from 'react';
import { questionProps } from './ddq';
import stateContest from '../../../Context/MyContext';
const Msq = ({ id, num, setrender }: questionProps) => {

    const { currentQuestion, quizSet, setQuizSet }: any = useContext(stateContest);


    const [active, setActive] = useState<boolean>();

    const [allchecked, setAllChecked] = useState<any>([]);






    useEffect(() => {

        const res: any = sessionStorage.getItem(id.toString());

        const resobj: any = JSON.parse(res);
        if (resobj && resobj.anser.length !== 0) { setAllChecked(resobj.anser); setActive(true) }
        // setQuizSet((arr: any) => [...arr, quizSet])
    }, [])



    function handleChange(e: any) {
        if (e.target.checked) {
            setActive(active)
            setAllChecked((arr: any) => [...arr, e.target.value]);


        } else {
            setAllChecked(allchecked.filter((item: any) => item !== e.target.value));
        }
    }


    useEffect(() => {
        if (allchecked.length === 0) {
            setActive(false)
        } else {
            setActive(true)
        }
        sessionStorage.setItem(id.toString(), JSON.stringify({ id: id, anser: allchecked }))
    }, [allchecked])
    useEffect(() => {
        quizSet[num - 1].active = active
        setrender(active)
    }, [active])
    return (
        <div className=' quiz-cont'>
            <p className='quiz-question' data-testid="question"><span className='serial-number'>{id}.</span>{currentQuestion?.question}</p>
            {currentQuestion?.opt.map((ele: any, i: any) => (
                <div key={i} className='options'>
                    <input type="checkbox" name={ele.id} value={ele.op} onChange={(e) => handleChange(e)} checked={allchecked.length > 0 && allchecked?.includes(ele.op)} className='input' data-testid={`o-${i}`} />
                    <span className='option'>{ele.op}</span>
                </div>
            ))}
        </div>
    )
}

export default Msq

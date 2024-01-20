import React, { useContext, useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import stateContest from '../../Context/MyContext';

interface ques_btnProps {

    id: number,

    setRCheck: (active: boolean) => void,
    setNCheck: (active: boolean) => void,

}


const Ques_btn = ({ id, setNCheck, setRCheck }: ques_btnProps) => {


    // const [activeColor, setActiveColor] = useState<boolean>();
    const { quizSet, setCurrentQuestion, setQuizSet, setQIndex }: any = useContext(stateContest);
    const handleQuestion = () => {
        // quizSet.map((ele: any) => {
        //     if (ele.id === id) {
        //         setCurrentQuestion(ele);
        //     }
        // })
        console.log(id);
        setCurrentQuestion(quizSet[id - 1])


        if (id - 1 === 0) {
            setRCheck(true)
        } else { setRCheck(false) }
        if (id - 1 === quizSet.length - 1) {
            setNCheck(true)
        } else {
            setNCheck(false)
        }
        setQIndex(id - 1)

    }

    // useEffect(() => {
    //     // // quizSet.map((ele: any) => {
    //     // //     if (ele.id === id) {
    //     // //         setMyCol(ele.active)
    //     // //     }
    //     // // })
    //     // setMyCol(currentQuestion?.active)
    //     // setrender((render: boolean) => !render)
    //     // setQuizSet((arr: any) => [...arr, quizSet])
    //     setActiveColor(quizSet[num].active);
    // }, [num])

    // console.log(quizSet[num - 1]?.active)

    return (
        <Avatar sx={{ bgcolor: (quizSet && quizSet[id - 1]?.active ? "red" : "grey") }} onClick={handleQuestion} className='btn-icon' data-testid={`btn-${id}`}>
            {id}

        </Avatar>
    )
}

export default Ques_btn

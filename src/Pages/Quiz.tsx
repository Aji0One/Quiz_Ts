import React, { useContext, useState, useEffect } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import stateContest from '../Context/MyContext';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Stack, Button } from "@mui/material";
import Ques_btn from '../Components/Pages/ques_btn';
import Mcq from '../Components/Pages/questionsType/mcq';
import Fibq from '../Components/Pages/questionsType/fibq';
import Msq from '../Components/Pages/questionsType/msq';
import Ddq from '../Components/Pages/questionsType/ddq';
import Tfq from '../Components/Pages/questionsType/tfq';
import { obj } from '../ques_ans';
import "../Styles/Quiz.css"


const Quiz = () => {
    const { quizSet, currentQuestion, setCurrentQuestion, setQuizSet, setAnswersSet, qIndex, setQIndex }: any = useContext(stateContest);
    const [rcheck, setRCheck] = useState<boolean>(true);
    const [ncheck, setNCheck] = useState<boolean>(false);
    const [render, setrender] = useState<boolean>(false);

    const [checking, setChecking] = useState<any>([]);
    const navigate = useNavigate();
    const [arrI, setArrI] = useState<number>(0);
    // console.log(quizSet);

    // const retrieveUser: any = localStorage.getItem("user");
    // const retrieveUserData = JSON.parse(retrieveUser);
    // useEffect(() => {
    //     if (!retrieveUserData) {
    //         // navigate("/");
    //     }
    //     setAnswersSet(0)
    // }, [])



    // function shuffle(array: any) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         let j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    // }

    const initialRendering = () => {
        const userData: any = localStorage.getItem("user");
        const userDataObj: any = JSON.parse(userData);

        obj.map((ele) => {

            if (ele.lang === userDataObj?.lang) {
                setQuizSet(ele.ques_ans)
            }
            //   else {
            //     navigate("/");
            // }


        })
        // console.log(setQuizSet((arr: any) => [...arr, arr.map((ele: any) => {return {...ele,ele.active = false}})]))
        // console.log(quizSet)

    }


    useEffect(() => {

        initialRendering()
        // shuffle(quizSet);

        setCurrentQuestion(quizSet[qIndex]);



    }, [quizSet])


    const previousBtn = () => {
        // console.log(currentQuestion.id - 2);
        setQIndex(qIndex - 1)

    }

    const forward = () => {

        setQIndex(qIndex + 1);

    }
    useEffect(() => {


        setCurrentQuestion(quizSet[qIndex])

        if (qIndex === 0) {
            setRCheck(true);

        } else {
            setRCheck(false);
        }
        if (qIndex === quizSet.length - 1) {
            setNCheck(true);
        } else {
            setNCheck(false);
        }


    }, [qIndex])

    useEffect(() => {
        setChecking(quizSet.filter((item: any) => item.active !== true));
        setrender(render);
    }, [render])

    const handleSubmit = () => {

        let MyCorrectAnswer = 0;
        quizSet.map((item: any) => {
            console.log(item)
            const retrieve: any = sessionStorage.getItem(item.id.toString());
            console.log(retrieve);
            const retrieveData: any = JSON.parse(retrieve);
            console.log(retrieveData)
            if (Array.isArray(retrieveData?.anser)) {
                let count = 0;
                for (let i = 0; i < retrieveData.anser.length; i++) {

                    if (retrieveData?.anser[i] === item.answer.anser[i]) {

                        count += 1;
                    }
                    else if (retrieveData?.anser[i].id) {
                        if (retrieveData.anser[i].id === item.answer.anser[i].id) {
                            count += 1;
                        } else {
                            break;
                        }

                    } else {
                        break
                    }
                }
                if (count === item.answer.anser.length) {
                    MyCorrectAnswer += 1
                    setAnswersSet(MyCorrectAnswer);
                }

            }

        })

        navigate("/report")

    }


    return (
        <div className='main-cont'>
            <Box sx={{ flexGrow: 1 }} className="box-cont">

                <div className='mani-question-cont'>


                    {currentQuestion?.types === "mcq" && <Mcq id={currentQuestion.id} key={currentQuestion.id} num={qIndex + 1} setrender={setrender} />}

                    {currentQuestion?.types === "msq" && <Msq id={currentQuestion.id} key={currentQuestion.id} num={qIndex + 1} setrender={setrender} />}
                    {currentQuestion?.types === "fibq" && <Fibq id={currentQuestion.id} key={currentQuestion.id} num={qIndex + 1} setrender={setrender} />}
                    {currentQuestion?.types === "ddq" && <Ddq id={currentQuestion.id} key={currentQuestion.id} num={qIndex + 1} setrender={setrender} />}
                    {currentQuestion?.types === "tfq" && <Tfq id={currentQuestion.id} key={currentQuestion.id} num={qIndex + 1} setrender={setrender} />}


                    <div className='all-btn'><Button onClick={() => previousBtn()} disabled={rcheck}>Previous</Button> {!ncheck ? <Button onClick={forward} disabled={ncheck}>Next</Button> : <Button onClick={handleSubmit} variant='contained'>Submit</Button>}</div>
                </div>
                <AppBar position="static" className='stack-cont' >
                    <Stack direction="row" spacing={2} className='question-stack'>
                        {quizSet?.map((ele: any, i: any) => (
                            <Ques_btn key={i} id={ele.id} setRCheck={setRCheck} setNCheck={setNCheck} />
                        ))}
                    </Stack>

                </AppBar>





            </Box>
        </div>
    )
}

export default Quiz



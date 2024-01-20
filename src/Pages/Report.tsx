import React, { useContext, useEffect, useState } from 'react'
import stateContest from '../Context/MyContext'
import { PieChart } from 'react-minimal-pie-chart';
import { useNavigate } from 'react-router-dom';
import "../Styles/Report.css";
import { Button } from '@mui/material';
import { obj } from '../ques_ans';

type NavigateFunction = (to: string, options?: any) => void;

const Report = () => {
    const navigate: any = useNavigate();
    const { answersSet, quizSet, setQIndex }: any = useContext(stateContest);
    const [userData, setUserData] = useState<any>({});


    const wronganswer: number = quizSet.length - answersSet;
    console.log(answersSet);
    const data: any = [
        { title: 'Correct Answer', value: answersSet, color: "hsl(132, 70%, 50%)", label: "Correct Answer" },
        { title: 'Wrong Answer', value: wronganswer, color: "hsl(43, 70%, 50%)", label: "Wrong Answer" },

    ]

    const retrieve: any = localStorage.getItem("user");
    const retriveData = JSON.parse(retrieve);

    const marks: number = answersSet / quizSet.length.toFixed(2);
    const percentage: number = 100 * marks

    useEffect(() => {
        setUserData(retriveData);

    }, [])



    function handelRemarks() {


        setQIndex(0);
        quizSet.map((item: any) => {
            item.active = false;
            sessionStorage.removeItem(item.id.toString());
            localStorage.removeItem("user");

        })
        navigate("/");
    }




    return (
        <div className='outer-report'>
            <div className='inttermediate'>
                <h1 className='report-heading'>Report</h1>
                <div className='inner-cont'>
                    <div className='report-details'>
                        <p className='info'><span>Name:</span> <span className='Details'>{userData.name}</span></p>
                        <p className='info'><span>Phone Number:</span><span className='Details'>{userData.phoneNo}</span></p>
                        <p className='info'><span>Language:</span> <span className='Details'>{userData.lang}</span></p>
                        <p className='info'><span>Percentage:</span><span className='Details perc'>{percentage}%</span></p>
                        <Button variant='outlined' onClick={() => handelRemarks()}>Close Remarks</Button>
                    </div>
                    <div style={{ width: " 25%", height: "25%" }} className='report-pie'>
                        <PieChart
                            data={data}
                        />
                        <ul className='report-list'>
                            {data.map((element: any) => (
                                <li key={element.title} className='list'> <p className='box' style={{ backgroundColor: element.color }}></p><span>{element.title}</span></li>

                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Report





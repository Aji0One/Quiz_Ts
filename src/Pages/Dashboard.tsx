import React, { useContext, useEffect, useState } from 'react';
import { Box, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import stateContest from '../Context/MyContext';
import "../Styles/Dashboard.css";
import { useNavigate } from "react-router-dom";
import quiz from "../assets/quiz.jpg";

const Dashboard = () => {
    const { formData, setFormData, setQuizSet }: any = useContext(stateContest);
    const navigate = useNavigate();

    const handleChange = (e: any) => {
        let error = { ...formData.error };
        if (e.target.value === "") {
            error[e.target.name] = `${e.target.name} is Required`;

        }
        else {
            error[e.target.name] = ""
        }

        setFormData({ ...formData, [e.target.name]: e.target.value, error })
    }


    const handleSubmit = async (e: any) => {

        e.preventDefault();


        const errorKeys = Object.keys(formData).filter((key) => {
            if (formData[key] === "" && key !== 'error' && key !== 'id')
                return key;

        })
        console.log(errorKeys)
        if (errorKeys.length >= 1) {
            alert("Please fill all Details");
        }
        else {


            localStorage.setItem("user", JSON.stringify(formData))

            navigate("/quiz");
            setFormData({ name: "", email: "", phoneNo: "", lang: "" })
        }
    }

    return (
        <div className='myout-cont'>
            <h2 className='quiz-title'>Quiz App</h2>
            <div className='myin-cont'>
                <div className='img-cont'>
                    <img src={quiz} alt="pic" />
                </div>
                <div className='user-info'>
                    <Box
                        component="form"


                        autoComplete="off"
                        style={{ padding: "20px" }}
                        onSubmit={(e) => handleSubmit(e)}
                        className="mybox-cont"
                        data-testid="regform"
                    >
                        <h3 className='register'>Register</h3>
                        <TextField id="name"
                            label="Name"
                            name="name"
                            variant="standard"
                            value={formData?.name}
                            onChange={handleChange}

                        /><br />
                        <span style={{ color: "red" }}>{formData?.error?.name} </span>
                        <br />

                        <TextField id="email"
                            label="Email"
                            name="email"
                            variant="standard"
                            type="text"
                            value={formData?.email}
                            onChange={handleChange}

                        /><br />
                        <span style={{ color: "red" }}>{formData?.error?.email} </span>
                        <br />

                        <TextField id="phoneNo"
                            label="Phone Number"
                            name="phoneNo"
                            type="number"
                            variant="standard"
                            value={formData?.phoneNo}
                            onChange={handleChange}


                        /><br />
                        <span style={{ color: "red" }}>{formData?.error?.phoneNo} </span>
                        <br />
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Language</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={formData?.lang}
                                onChange={handleChange}
                                label="Age"
                                name="lang"
                                data-testid="mylang"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"javascript"}>javascript</MenuItem>
                                <MenuItem value={"TypeScript"}>TypeScript</MenuItem>
                                <MenuItem value={"reactjs"}>React</MenuItem>
                            </Select>
                        </FormControl>
                        <br />
                        <span style={{ color: "red" }}>{formData?.error?.lang} </span>
                        <br />
                        <Button variant="contained" type="submit" className="sub-cont">Start Test</Button>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

import { createContext } from "react";
// import { formProps } from "../App";

// type formProps = {
//     name?: string,
//     email?: string,
//     phoneNo?: string,
//     lang?: string,
//     err?: {
//         name?: string,
//         phoneNo?: string,
//         email?: string,
//         lang?: string
//     }
// }
interface contextProps {
    formData: any,
    setFormData: any,
    quizSet: any,
    setQuizSet: any,
    currentQuestion: any,
    setCurrentQuestion: any,
    answersSet: any,
    setAnswersSet: any,
    qIndex: any,
    setQIndex: any
}

const stateContest = createContext<contextProps | undefined>({ formData: {}, setFormData: () => { }, quizSet: [], setQuizSet: () => { }, currentQuestion: [], setCurrentQuestion: () => { }, answersSet: [], setAnswersSet: () => { }, qIndex: 0, setQIndex: () => { } });

export default stateContest;
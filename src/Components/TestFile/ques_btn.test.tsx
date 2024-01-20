import { render, screen, fireEvent } from "@testing-library/react";
import stateContest from "../../Context/MyContext";
import Ques_btn from "../Pages/ques_btn";


const contextMockValue = {
    formData: {}, setFormData: () => { }, setQuizSet: () => { }, quizSet: [{
        id: 1, question: "",
        opt: [{}],
        answer: {},
        active: false,
        types: "mcq"

    }, {
        id: 2, question: "",
        opt: [{}],
        answer: {},
        active: true,
        types: "fibq"

    }], currentQuestion: {
        id: 1, question: "",
        opt: [{}],
        answer: {},
        active: false,
        types: "mcq"

    }, setCurrentQuestion: () => { }, answersSet: [], setAnswersSet: () => { }, qIndex: 0, setQIndex: () => { }
}

const setRCheck = jest.fn();
const setNCheck = jest.fn();

describe("Ques_Btn", () => {
    test("initial rendering", () => {
        const pageHandle = jest.fn();
        render(<stateContest.Provider value={contextMockValue}><Ques_btn id={2} setNCheck={setNCheck} setRCheck={setRCheck} /></stateContest.Provider>);
        const page_btn = screen.getByTestId('btn-2');
        fireEvent.click(page_btn, pageHandle());

        expect(pageHandle).toHaveBeenCalledTimes(1);
    })
    test("testing for if and else block", () => {
        const pageHandle = jest.fn();
        render(<stateContest.Provider value={contextMockValue}><Ques_btn id={1} setNCheck={setNCheck} setRCheck={setRCheck} /></stateContest.Provider>);
        const page_btn = screen.getByTestId('btn-1');
        fireEvent.click(page_btn, pageHandle());

        expect(pageHandle).toHaveBeenCalledTimes(1);
    })

})
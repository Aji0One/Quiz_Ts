import { render, screen, fireEvent } from "@testing-library/react";
import Tfq from "../questionsType/tfq";
import stateContest from "../../../Context/MyContext";



const id = 1
const key = 1

const num = 1
const renders = true

const contextMockValue = {
    formData: {}, setFormData: () => { }, setQuizSet: () => { }, quizSet: [{
        id: 1, question: "",
        opt: [{}],
        answer: { id: 1, anser: ["hi"] },
        active: false,
        types: "mcq"

    }, {
        id: 2, question: "",
        opt: [{ id: 1, op: "hi" }, { id: 2, op: "hello" }],
        answer: { id: 2, anser: ["hello"] },
        active: false,
        types: "fibq"

    }, { id: 3, question: [{}, {}], opt: [{ id: 1, op: "" }], answer: { id: 3, anser: [{}] }, active: false, types: "ddq" }],
    currentQuestion: {
        id: 1, question: "",
        opt: [{}, {}],
        answer: { id: 3, anser: [""] },
        active: false,
        types: "tfq"

    }, setCurrentQuestion: () => { }, answersSet: [], setAnswersSet: () => { }, qIndex: 1, setQIndex: () => { }
}

describe("Msq", () => {

    test("Initial rendering", () => {
        const sessionStorageMock: any = {
            getItem: jest.fn(),
            setItem: jest.fn(),
        };

        // Spy on sessionStorage methods and mock their implementations
        jest.spyOn(global, 'sessionStorage', 'get').mockReturnValue(sessionStorageMock);

        // Set a mock response for sessionStorage.getItem
        sessionStorageMock.getItem.mockReturnValue(JSON.stringify({ id: 1, anser: ["hi"] }));
        const setrender = jest.fn()
        render(<stateContest.Provider value={contextMockValue}><Tfq id={id} key={key} num={num} setrender={setrender} /></stateContest.Provider>)

        expect(setrender).toBeCalled()
    })
    test("else block rendering", () => {
        const sessionStorageMock: any = {
            getItem: jest.fn(),
            setItem: jest.fn(),
        };

        // Spy on sessionStorage methods and mock their implementations
        jest.spyOn(global, 'sessionStorage', 'get').mockReturnValue(sessionStorageMock);

        // Set a mock response for sessionStorage.getItem
        sessionStorageMock.getItem.mockReturnValue(JSON.stringify({ id: 1, anser: [] }));
        const setrender = jest.fn()
        const answerHandle = jest.fn();
        render(<stateContest.Provider value={contextMockValue}><Tfq id={id} key={key} num={num} setrender={setrender} /></stateContest.Provider>)

        const option = screen.getByTestId("o-0");
        fireEvent.click(option, { target: { value: "" } });

        expect(screen.getByTestId("question")).toBeInTheDocument()


    })

})
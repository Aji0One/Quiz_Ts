import { render, screen, fireEvent } from "@testing-library/react";
import Fibq from "../questionsType/fibq";
import stateContest from "../../../Context/MyContext";



const id = 1
const key = 1

const num = 1


const contextMockValue = {
    formData: {}, setFormData: () => { }, setQuizSet: () => { }, quizSet: [{
        id: 1, question: "",
        opt: [{}],
        answer: { id: 1, anser: ["hi"] },
        active: false,
        types: "mcq"

    }, {
        id: 2, question: "",
        opt: [{}],
        answer: { id: 2, anser: ["hello"] },
        active: false,
        types: "fibq"

    }, { id: 3, question: [{}, {}], opt: [{ id: 1, op: "" }], answer: { id: 3, anser: [{}] }, active: false, types: "ddq" }],
    currentQuestion: {
        id: 2, question: "",
        opt: [{}],
        answer: { id: 2, anser: ["hello"] },
        active: false,
        types: "fibq"

    }, setCurrentQuestion: () => { }, answersSet: [], setAnswersSet: () => { }, qIndex: 1, setQIndex: () => { }
}

describe("Fibq", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test("Initial rendering", () => {
        const sessionStorageMock: any = {
            getItem: jest.fn(),
            setItem: jest.fn(),
        };

        // Spy on sessionStorage methods and mock their implementations
        jest.spyOn(global, 'sessionStorage', 'get').mockReturnValue(sessionStorageMock);
        // jest.spyOn(global, 'sessionStorage', 'set').mockReturnValue(sessionStorageMock);
        // Set a mock response for sessionStorage.getItem

        sessionStorageMock.getItem.mockReturnValue(JSON.stringify({ id: 2, anser: ["hi"] }));
        const setrender = jest.fn()
        render(<stateContest.Provider value={contextMockValue}><Fibq id={id} key={key} num={num} setrender={setrender} /></stateContest.Provider>)

        const question = screen.getByTestId("question");
        expect(question).toBeInTheDocument();
    })
    test("else block rendering", () => {
        const sessionStorageMock: any = {
            getItem: jest.fn(),
            setItem: jest.fn(),
        };

        // Spy on sessionStorage methods and mock their implementations
        jest.spyOn(global, 'sessionStorage', 'get').mockReturnValue(sessionStorageMock);


        // Set a mock response for sessionStorage.getItem
        sessionStorageMock.getItem.mockReturnValue(JSON.stringify({ id: 2, anser: ["hi"] }));
        sessionStorageMock.setItem.mockReturnValue(JSON.stringify({ id: 2, anser: ["hi"] }));

        const setrender = jest.fn()
        render(<stateContest.Provider value={contextMockValue}><Fibq id={id} key={key} num={num} setrender={setrender} /></stateContest.Provider>)

        const input = screen.getByRole("textbox");
        fireEvent.change(input, { target: { value: "hi" } });
        expect(input).toHaveValue("hi");
        expect(setrender).toBeCalled();
    })

})
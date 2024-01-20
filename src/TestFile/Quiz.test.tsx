import { render, screen, fireEvent } from "@testing-library/react";
import Quiz from "../Pages/Quiz";
import stateContest from "../Context/MyContext";
import { useNavigate } from "react-router-dom";
import Fibq from "../Components/Pages/questionsType/fibq";
import Mcq from "../Components/Pages/questionsType/mcq";


const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}))
const formData = {
    name: "xxx", email: "xxx@gmail.com", phoneNo: "4567888982", lang: "reactjs"
}



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
        active: false,
        types: "fibq"

    }], currentQuestion: {
        id: 1, question: "",
        opt: [{}],
        answer: {},
        active: false,
        types: "mcq"

    }, setCurrentQuestion: () => { }, answersSet: [], setAnswersSet: () => { }, qIndex: 0, setQIndex: () => { }
}


// const localStorageMock = (() => {
//     let store: any = {};

//     return {
//         getItem: (key: any) => store[key] || null,
//         setItem: (key: any, value: any) => { store[key] = value.toString(); },
//         removeItem: (key: any) => delete store[key],
//         clear: () => { store = {} }

//     }
// })();

// Object.defineProperty(window, 'sessionStorage', { value: localStorageMock });

describe("Quiz", () => {

    beforeEach(() => {
        jest.restoreAllMocks();

    });

    test("Initial Rendering", () => {
        const mockLocalStorage: any = {
            user: JSON.stringify({
                lang: 'javascript', // Replace with the appropriate language value
                // ...other properties...
            }),
        };

        const originalJsonParse = JSON.parse;
        JSON.parse = jest.fn((data) => originalJsonParse(data));
        const getItemMock = jest.spyOn(Storage.prototype, 'getItem');
        getItemMock.mockImplementation((key) => mockLocalStorage[key] || null);

        const previousHandle = jest.fn();
        const nextHandle = jest.fn();

        render(<stateContest.Provider value={contextMockValue}><Quiz /></stateContest.Provider>);
        // expect(localStorageMock.getItem("user")).toHaveBeenCalledWith(formData)

        const previous_btn = screen.getByRole("button", { name: /previous/i })
        const next_btn = screen.getByRole("button", { name: /next/i })

        fireEvent.click(previous_btn, previousHandle());
        fireEvent.click(next_btn, nextHandle());

        expect(previousHandle).toHaveBeenCalledTimes(1);
        expect(nextHandle).toHaveBeenCalledTimes(1);

    })

    test("Rendering on onclick Previous button", () => {


        const contextMockValue = {
            formData: {}, setFormData: () => { }, setQuizSet: () => { }, quizSet: [{
                id: 1, question: "",
                opt: [{}],
                answer: { id: 1, anser: ["hi"] },
                active: true,
                types: "mcq"

            }, {
                id: 2, question: "",
                opt: [{}],
                answer: { id: 2, anser: ["hello"] },
                active: false,
                types: "fibq"

            }], currentQuestion: {
                id: 2, question: "",
                opt: [{}],
                answer: { id: 2, anser: ["hello"] },
                active: false,
                types: "fibq"

            }, setCurrentQuestion: () => { }, answersSet: [], setAnswersSet: () => { }, qIndex: 1, setQIndex: () => { }
        }

        const mockLocalStorage: any = {
            2: JSON.stringify({
                id: 2,
                anser: ["hello"] // Replace with the appropriate language value
                // ...other properties...
            }),
        };


        const getItemMock = jest.spyOn(Storage.prototype, 'getItem');
        getItemMock.mockImplementation((key) => mockLocalStorage[key]);
        // const originalJsonParse = JSON.parse;
        // JSON.parse = jest.fn((data) => originalJsonParse(data));

        const parseMock = jest.spyOn(JSON, 'parse');
        parseMock.mockReturnValue({ id: 2, anser: ["hello"] });


        // const mockSessionStorage = () => {
        //     let storage: any = {};
        //     return {
        //         getItem: (key: string) => storage[key] || null,
        //         setItem: (key: string, value: any) => (storage[key] = value),
        //         removeItem: (key: string) => delete storage[key],
        //         clear: () => (storage = {}),
        //     };
        // };
        // (global as any).sessionStorage = mockSessionStorage();

        // sessionStorage.setItem("2", JSON.stringify({ id: 2, anser: [""] }));
        // sessionStorage.getItem("2");



        // const sessionStorageMock: any = {
        //     getItem: jest.fn(),
        //     setItem: jest.fn(),
        // };

        // // Spy on sessionStorage methods and mock their implementations
        // jest.spyOn(global, 'sessionStorage', 'get').mockReturnValueOnce(sessionStorageMock);

        // // // Set a mock response for sessionStorage.getItem
        // sessionStorageMock.getItem.mockReturnValueOnce(JSON.stringify({ anser: ["hi"] }));
        // const getItemMock = jest.spyOn(sessionStorage, 'getItem');
        // getItemMock
        //     .mockReturnValueOnce(JSON.stringify({ anser: ['answer1', 'answer2'] }))
        //     .mockReturnValueOnce(JSON.stringify({ anser: ['answer2', 'answer1'] }));



        const previousHandle = jest.fn();
        const submitHandle = jest.fn();




        render(<stateContest.Provider value={contextMockValue}><Quiz /></stateContest.Provider>);

        screen.debug();

        const previous_btn = screen.getByRole("button", { name: /previous/i })
        const submit_btn = screen.getByRole("button", { name: /submit/i })
        const input_btn = screen.getByRole("textbox");
        fireEvent.change(input_btn, { target: { value: "hi" } });
        fireEvent.click(previous_btn, previousHandle());
        fireEvent.click(submit_btn, submitHandle());
        screen.debug();

        expect(previousHandle).toHaveBeenCalledTimes(1);
        expect(submitHandle).toHaveBeenCalledTimes(1);

        getItemMock.mockRestore();
        parseMock.mockRestore()
    })
    test(" Rendering ddq", () => {

        const sessionStorageMock: any = {
            getItem: jest.fn(),
            setItem: jest.fn(),
        };

        // Spy on sessionStorage methods and mock their implementations
        jest.spyOn(global, 'sessionStorage', 'get').mockReturnValue(sessionStorageMock);

        // Set a mock response for sessionStorage.getItem
        sessionStorageMock.getItem.mockReturnValue(JSON.stringify({ id: 1, anser: ["hi"] }));

        const previousHandle = jest.fn();
        const nextHandle = jest.fn();

        const contextMockValue = {
            formData: {}, setFormData: () => { }, setQuizSet: () => { }, quizSet: [{
                id: 1, question: "",
                opt: [{}],
                answer: { id: 1, anser: ["hi"] },
                active: false,
                types: "ddq"

            }, {
                id: 2, question: "",
                opt: [{}],
                answer: { id: 2, anser: ["hello"] },
                active: false,
                types: "fibq"

            }], currentQuestion: {
                id: 2, question: [{}],
                opt: [{}],
                answer: {},
                active: false,
                types: "ddq"

            }, setCurrentQuestion: () => { }, answersSet: [], setAnswersSet: () => { }, qIndex: 0, setQIndex: () => { }
        }
        render(<stateContest.Provider value={contextMockValue}><Quiz /></stateContest.Provider>);
        // expect(localStorageMock.getItem("user")).toHaveBeenCalledWith(formData)

        const previous_btn = screen.getByRole("button", { name: /previous/i })
        const next_btn = screen.getByRole("button", { name: /next/i })

        fireEvent.click(previous_btn, previousHandle());
        fireEvent.click(next_btn, nextHandle());

        expect(previousHandle).toHaveBeenCalledTimes(1);
        expect(nextHandle).toHaveBeenCalledTimes(1);

    })
    test("rendering msq", () => {


        const contextMockValue = {
            formData: {}, setFormData: () => { }, setQuizSet: () => { }, quizSet: [{
                id: 1, question: "",
                opt: [{}],
                answer: { id: 1, anser: ["hi"] },
                active: false,
                types: "msq"

            }, {
                id: 2, question: "",
                opt: [{}],
                answer: { id: 2, anser: ["hello"] },
                active: false,
                types: "fibq"

            }], currentQuestion: {
                id: 1, question: "",
                opt: [{}],
                answer: {},
                active: false,
                types: "msq"

            }, setCurrentQuestion: () => { }, answersSet: [], setAnswersSet: () => { }, qIndex: 0, setQIndex: () => { }
        }

        const sessionStorageMock: any = {
            getItem: jest.fn(),
            setItem: jest.fn(),
        };

        // Spy on sessionStorage methods and mock their implementations
        jest.spyOn(global, 'sessionStorage', 'get').mockReturnValue(sessionStorageMock);

        // Set a mock response for sessionStorage.getItem
        sessionStorageMock.getItem.mockReturnValue(JSON.stringify({ id: 1, anser: ["hi"] }));

        const previousHandle = jest.fn();
        const nextHandle = jest.fn();

        render(<stateContest.Provider value={contextMockValue}><Quiz /></stateContest.Provider>);
        // expect(localStorageMock.getItem("user")).toHaveBeenCalledWith(formData)

        const previous_btn = screen.getByRole("button", { name: /previous/i })
        const next_btn = screen.getByRole("button", { name: /next/i })

        fireEvent.click(previous_btn, previousHandle());
        fireEvent.click(next_btn, nextHandle());

        expect(previousHandle).toHaveBeenCalledTimes(1);
        expect(nextHandle).toHaveBeenCalledTimes(1);

    })
    test("render tfq", () => {

        const contextMockValue = {
            formData: {}, setFormData: () => { }, setQuizSet: () => { }, quizSet: [{
                id: 1, question: "",
                opt: [{}],
                answer: { id: 1, anser: ["hi"] },
                active: false,
                types: "tfq"

            }, {
                id: 2, question: "",
                opt: [{}],
                answer: { id: 2, anser: ["hello"] },
                active: false,
                types: "fibq"

            }], currentQuestion: {
                id: 1, question: "",
                opt: [{}],
                answer: {},
                active: false,
                types: "tfq"

            }, setCurrentQuestion: () => { }, answersSet: [], setAnswersSet: () => { }, qIndex: 0, setQIndex: () => { }
        }

        const sessionStorageMock: any = {
            getItem: jest.fn(),
            setItem: jest.fn(),
        };

        // Spy on sessionStorage methods and mock their implementations
        jest.spyOn(global, 'sessionStorage', 'get').mockReturnValue(sessionStorageMock);

        // Set a mock response for sessionStorage.getItem
        sessionStorageMock.getItem.mockReturnValue(JSON.stringify({ id: 1, anser: ["hi"] }));

        const previousHandle = jest.fn();
        const nextHandle = jest.fn();

        render(<stateContest.Provider value={contextMockValue}><Quiz /></stateContest.Provider>);
        // expect(localStorageMock.getItem("user")).toHaveBeenCalledWith(formData)

        const previous_btn = screen.getByRole("button", { name: /previous/i })
        const next_btn = screen.getByRole("button", { name: /next/i })

        fireEvent.click(previous_btn, previousHandle());
        fireEvent.click(next_btn, nextHandle());

        expect(previousHandle).toHaveBeenCalledTimes(1);
        expect(nextHandle).toHaveBeenCalledTimes(1);

    })


})
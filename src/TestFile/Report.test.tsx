import { render, fireEvent, screen } from "@testing-library/react";
import Report from "../Pages/Report";
import { useNavigate } from "react-router-dom";
import stateContest from "../Context/MyContext";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),

}))

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

    }, setCurrentQuestion: () => { }, answersSet: 1, setAnswersSet: () => { }, qIndex: 0, setQIndex: () => { }
}



describe("Report", () => {
    test("Handling Remarks button", () => {
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
        const handleSubmit = jest.fn();


        render(<stateContest.Provider value={contextMockValue}><Report /></stateContest.Provider>);
        const remark_btn = screen.getByRole("button", { name: /close/i });
        fireEvent.click(remark_btn, handleSubmit());
        expect(handleSubmit).toHaveBeenCalledTimes(1);
    })
})
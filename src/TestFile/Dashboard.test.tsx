import { render, screen, fireEvent } from "@testing-library/react";
import stateContest from "../Context/MyContext";
import Dashboard from "../Pages/Dashboard";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import userEvent from "@testing-library/user-event";


const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    useNavigate: () => mockedNavigate
}))

global.alert = jest.fn();

const contextMockValue = {
    formData: { name: "xxx", email: "xxx@gmail.com", phoneNo: "4567888982", lang: "reactjs", error: { name: "", email: "", phoneNo: "", lang: "" } }, setFormData: () => { }, setQuizSet: () => { }, quizSet: [{}], currentQuestion: [], setCurrentQuestion: () => { }, answersSet: [], setAnswersSet: () => { }, qIndex: 0, setQIndex: () => { }
}

describe("Dashboard", () => {
    test("Rendering inital elements", () => {
        render(<stateContest.Provider value={contextMockValue}><Dashboard /></stateContest.Provider>)
        const title = screen.getByRole("heading", { level: 2 });
        expect(title).toBeInTheDocument();
    })

    test("calling all the input fields", async () => {

        const submitHandle = jest.fn();
        render(<stateContest.Provider value={contextMockValue}><Dashboard /></stateContest.Provider>);

        const nameI = screen.getByRole("textbox", { name: /Name/i })
        fireEvent.change(nameI, { target: { value: "xxx" } });

        const emailI = screen.getByRole("textbox", { name: /Email/i });
        fireEvent.change(emailI, { target: { value: "xxx@gmail.com" } });

        const phoneNoI = screen.getByRole("spinbutton", { name: /Phone Number/i });
        fireEvent.change(phoneNoI, { target: { value: 2134132432 } });

        const langI = screen.getByRole("button", { name: /Language/i });





        const submit_btn = screen.getByTestId("regform");
        fireEvent.submit(submit_btn, submitHandle());
        expect(submitHandle).toHaveBeenCalledTimes(1);

        expect(mockedNavigate).toHaveBeenCalledWith("/quiz");

    })

    test("calling  empty input fields", async () => {


        render(<stateContest.Provider value={contextMockValue}><Dashboard /></stateContest.Provider>);

        const nameI = screen.getByRole("textbox", { name: /Name/i })
        fireEvent.change(nameI, { target: { value: "" } });

        const emailI = screen.getByRole("textbox", { name: /Email/i });
        fireEvent.change(emailI, { target: { value: "xxx@gmail.com" } });

        const phoneNoI = screen.getByRole("spinbutton", { name: /Phone Number/i });
        fireEvent.change(phoneNoI, { target: { value: 2134132432 } });

        screen.getByRole("button", { name: /Language/i });


    })
    test("accessing the submit button without entring input fields", async () => {
        const contextMockValue = {
            formData: { name: "", email: "xxx@gmail.com", phoneNo: "4567888982", lang: "reactjs", error: { name: "name is required", email: "", phoneNo: "", lang: "" } }, setFormData: () => { }, setQuizSet: () => { }, quizSet: [{}], currentQuestion: [], setCurrentQuestion: () => { }, answersSet: [], setAnswersSet: () => { }, qIndex: 0, setQIndex: () => { }
        }

        const submitHandle = jest.fn();
        render(<stateContest.Provider value={contextMockValue}><Dashboard /></stateContest.Provider>);



        const submit_btn = screen.getByTestId("regform");
        fireEvent.submit(submit_btn, submitHandle());
        expect(submitHandle).toHaveBeenCalledTimes(1);


    })
})
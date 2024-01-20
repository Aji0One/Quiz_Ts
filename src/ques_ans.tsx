export const obj = [{
    lang: "javascript",
    ques_ans: [
        {
            id: 1, question: "Which type of JavaScript language is ___", types: "mcq", active: false,
            opt: [{ op: "Object-Oriented", id: 1 }, { id: 2, op: "Object-Based" }, { id: 3, op: "Assembly-language" }, { id: 4, op: "High-level" }],
            answer: { id: 1, anser: ["Object-Based"] },
            ans: [2]
        },

        {
            id: 2, question: "JavaScript is a ________ Side Scripting Language. ", types: "fibq",
            answer: { id: 2, anser: ["browser"] },
            ans: ["browser"], active: false
        }, {
            id: 3, question: "The external JavaScript file must contain the <script> tag.", types: "tfq",
            opt: [{ id: 1, op: "True" }, { id: 2, op: "False" }],
            answer: { id: 3, anser: ["False"] },
            ans: [2], active: false
        }, {
            id: 4, question: "Which of the following are valid ways to define a function in JavaScript?", types: "msq",
            opt: [{
                op: "Named Function Declaration", id: 1
            }, { op: "Anonymous Function Expression", id: 2 }, { id: 3, op: " Arrow Function Expression" },
            { id: 4, op: "Function Constructor" }, {
                id: 5, op: "None of the Above"

            }], answer: {
                id: 4, anser: [
                    "Named Function Declaration"
                    , "Anonymous Function Expression", " Arrow Function Expression",

                    "Function Constructor"
                ]
            }
            , ans: [1, 2, 3, 4], active: false
        }, {
            id: 5, question: [{ id: 1, op: "String" }, { id: 2, op: "BigInt" }, { id: 3, op: "Symbol" }, { id: 4, op: "Undefined" }], types: "ddq",
            opt: [{ id: 2, op: "Represents arbitrary-precision integers, useful for working with large numbers." }, { id: 4, op: "A value automatically assigned to variables that are declared but not initialized." }, { id: 1, op: "A sequence of characters enclosed in single or double quotes." }, { id: 3, op: "A unique and immutable value often used as an object property key." }],
            answer: { id: 5, anser: [{ id: 1, op: "A sequence of characters enclosed in single or double quotes." }, { id: 2, op: "Represents arbitrary-precision integers, useful for working with large numbers." }, { id: 3, op: "A unique and immutable value often used as an object property key." }, { id: 4, op: "A value automatically assigned to variables that are declared but not initialized." }] },
            ans: [{ 1: 1 }, { 2: 2 }, { 3: 3 }, { 4: 4 }], active: false
        }
    ]
}, {
    lang: "TypeScript",
    ques_ans: [
        {
            id: 1, question: "You can enable 'undefined' and 'null' types to be accounted for by enabling the compiler property:", types: "mcq",
            opt: [{ id: 1, op: "strictChecksRequired" }, { id: 2, op: "noFalseyInits" }, { id: 3, op: "noAutoType" }, { id: 4, op: "strictNullChecks" }],
            answer: { id: 1, anser: ["strictNullChecks"] },
            ans: [4], active: false
        },

        {
            id: 2, question: "______ is similar to 'any', but a safer alternative when uncertain about the type.", types: "fibq",
            answer: { id: 2, anser: ["unknown"] },
            ans: ["unknown"], active: false
        }, {
            id: 3, question: "True or False: TypeScript can always correctly infer a variables type.", types: "tfq",
            opt: [{ id: 1, op: "True" }, { id: 2, op: "False" }],
            answer: { id: 3, anser: ["False"] },
            ans: [2], active: false
        }, {
            id: 4, question: "Which of the following are valid ways to declare a variable with a specific type in TypeScript? ", types: "msq",
            opt: [{
                id: 1, op: `let name = "Alice" as string;`
            }, { id: 2, op: `const colors: string[] = ["red", "green", "blue"];` }, { id: 3, op: `interface { name: string; age: number; }` },
            { id: 4, op: `enum Days { Monday, Tuesday, Wednesday };` }, {
                id: 5, op: "None of the Above"

            }], answer: {
                id: 4, anser: [
                    `let name = "Alice" as string;`
                    , `const colors: string[] = ["red", "green", "blue"];`, `enum Days { Monday, Tuesday, Wednesday };`
                ]
            }, ans: [1, 2, 4], active: false
        }, {
            id: 5, question: [{ id: 1, op: "enum" }, { id: 2, op: "type" }, { id: 3, op: "interface" }, { id: 4, op: "class" }], types: "ddq",
            opt: [{ id: 2, op: " Creating a custom name for a union or intersection of types." }, { id: 1, op: "Representing a set of named constant values." }, { id: 4, op: "Creating blueprint for creating objects with methods and properties." }, {
                id: 3, op: "Defining a contract for object structure."
            }],
            answer: {
                id: 5, anser: [{ id: 1, op: "Representing a set of named constant values." }, { id: 2, op: " Creating a custom name for a union or intersection of types." }, {
                    id: 3, op: "Defining a contract for object structure."
                }, { id: 4, op: "Creating blueprint for creating objects with methods and properties." }]
            }, ans: [{ 1: 1 }, { 2: 2 }, { 3: 3 }, { 4: 4 }], active: false
        }
    ]
}, {
    lang: "reactjs",
    ques_ans: [
        {
            id: 1, question: "Which operator can be used to conditionally render a React component?", types: "mcq",
            opt: [{ id: 1, op: "||" }, { id: 2, op: "::" }, { id: 3, op: "??" }, { id: 4, op: "&&" }],
            answer: { id: 1, anser: ["&&"] },
            ans: [4], active: false
        },

        {
            id: 2, question: "___ tool is used in React to compile JSX.", types: "fibq",
            answer: { id: 2, anser: ["babel"] }, ans: ["babel"], active: false
        }, {
            id: 3, question: "To develop and run React code, Node.js is required.", types: "tfq",
            opt: [{ id: 1, op: "True" }, { id: 2, op: "False" }],
            answer: { id: 3, anser: ["True"] }, ans: [1], active: false
        }, {
            id: 4, question: "Which of the following are valid ways to pass data from a parent component to a child component in React?", types: "msq",
            opt: [{
                id: 1, op: " Using Redux"
            }, { id: 2, op: "Using cookies" }, { id: 3, op: "Using event listeners" },
            { id: 4, op: "None of the Above" }],
            answer: {
                id: 4, anser: [
                    " Using Redux"
                    , "Using cookies", "Using event listeners"
                ]
            }, ans: [1, 2, 3], active: false
        }, {
            id: 5, question: [{ id: 1, op: "componentDidUpdate()" }, { id: 2, op: "componentDidMount()" }, { id: 3, op: "componentWillUnmount()" }, { id: 4, op: "render()" }], types: "ddq",
            opt: [, { id: 2, op: "Executed after the component is inserted into the DOM." }, { id: 4, op: " Returns the JSX that represents the component's UI." }, { id: 1, op: "Called after the component's update is flushed to the DOM." }, { id: 3, op: " Invoked before a component is removed from the DOM." }],
            answer: { id: 5, anser: [{ id: 1, op: "Called after the component's update is flushed to the DOM." }, { id: 2, op: "Executed after the component is inserted into the DOM." }, { id: 3, op: " Invoked before a component is removed from the DOM." }, { id: 4, op: " Returns the JSX that represents the component's UI." }] },
            ans: [{ 1: 1 }, { 2: 2 }, { 3: 3 }, { 4: 4 }], active: false
        }
    ]
}]

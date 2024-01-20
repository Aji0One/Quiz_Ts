import React, { useContext, useEffect, useState, useCallback } from 'react';
import stateContest from '../../../Context/MyContext';
import { SortableList, SortableItemProps, ItemRenderProps } from '@thaddeusjiang/react-sortable-list';
import '@thaddeusjiang/react-sortable-list/dist/index.css';

export interface questionProps {
    id: string | number;
    num: number;
    setrender: any;

}

const Ddq = ({ id, num, setrender }: questionProps) => {
    const { quizSet, currentQuestion, setQuizSet }: any = useContext(stateContest);
    const [active, setActive] = useState<boolean | undefined>();

    const [items, setItems] = useState<SortableItemProps[]>(currentQuestion.opt);


    useEffect(() => {
        const res: any = sessionStorage.getItem(id.toString());
        const resobj: any = JSON.parse(res);
        console.log(resobj);
        if (resobj && resobj.anser.length !== 0) {
            setItems(resobj?.anser);
            setActive(true);
        } else {
            setActive(false);
            setrender(active)
        }
        // setQuizSet((arr: any) => [...arr, quizSet])
    }, [])

    useEffect(() => {

        setActive(true)
        console.log("ordered");
        if (active === true) {
            sessionStorage.setItem(id.toString(), JSON.stringify({ id: id, anser: items }));
        }
    }, [items])

    useEffect(() => {


        quizSet[num - 1].active = active
        setrender(active)
    }, [active])

    return (
        <div className='quiz-cont'>
            <p className='quiz-question' data-testid="question"><span className='serial-number'>{id}.</span> Match the Following by dragging the right answer </p>
            <div className='drag-cont'>
                <ul className='questions-cont'>
                    {currentQuestion.question.map((item: any) => (
                        <li key={item.id} className='question'>{item.op} </li>
                    ))}
                </ul>
                <div className='answer-cont'>


                    <SortableList
                        items={items}
                        setItems={setItems}
                        itemRender={({ item }: ItemRenderProps) => (
                            <div className="w-1/2 h-10 m-8 bg-blue-400 text-center answer">
                                {item.op}
                            </div>
                        )}
                    />
                </div>
            </div>

        </div>
    )
}

export default Ddq

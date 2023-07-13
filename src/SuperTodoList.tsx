import React from 'react';

type TaskProps = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    tasks: TaskProps[]
    children: React.ReactNode
}

const SuperTodoList: React.FC<PropsType> = (props) => {
    const {tasks, children} = props
    return (
        <ul>
            {tasks.map(el => {
                return (
                    <li>
                        <span>{el.id}</span>
                        <span>{el.title}</span>
                        <input type = 'checkbox' checked = {el.isDone} />
                    </li>
                )
            })}
            {children}
            <div>______________________________________________________</div>
        </ul>
    );
};

export default SuperTodoList;

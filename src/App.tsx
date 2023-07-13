import React, {useState} from 'react';
import './App.css';
import {SuperButton} from "./SuperButton";
import SuperTodoList from "./SuperTodoList";


function App() {
    const tasks = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]
    return (
        <div>
            <SuperButton callBack={()=> {}} color={'red'}>First SuperButton</SuperButton>
            <SuperButton callBack={()=> {}} color='secondary'>Second SuperButton</SuperButton>
            <SuperButton callBack={()=> {}} disabled >Third SuperButton</SuperButton>
            <SuperButton callBack={()=> {}} disabled >Third SuperButton</SuperButton>

            <div>-------------------------------------------------</div>

            <SuperTodoList tasks={tasks}>
                <SuperButton callBack={()=> {}} color='secondary'>Second SuperButton</SuperButton>
                <SuperButton callBack={()=> {}} disabled >Third SuperButton</SuperButton>
                <input type = 'text' />
                <input type = 'text' />
                <input type = 'text' />
                <input type = 'text' />
                <div>o-oo-oo!!!!</div>
                <div>o-oo-oo!!!!</div>
                <div>o-oo-oo!!!!</div>
                <div>o-oo-oo!!!!</div>
                <div>o-oo-oo!!!!</div>
                <div>o-oo-oo!!!!</div>
            </SuperTodoList>

            <SuperTodoList tasks={tasks}>
                <SuperButton callBack={()=> {}} color={'red'}>First SuperButton</SuperButton>
                <SuperButton callBack={()=> {}} color='secondary'>Second SuperButton</SuperButton>
                <SuperButton callBack={()=> {}} disabled >Third SuperButton</SuperButton>
                <SuperButton callBack={()=> {}} disabled >Third SuperButton</SuperButton>
            </SuperTodoList>

            <SuperTodoList tasks={tasks}>
                <div>o-oo-oo!!!!</div>
                <div>o-oo-oo!!!!</div>
                <div>o-oo-oo!!!!</div>
                <div>o-oo-oo!!!!</div>
                <div>o-oo-oo!!!!</div>
            </SuperTodoList>

            <SuperTodoList tasks={tasks}>
                <input type = 'text' />
                <input type = 'text' />
                <input type = 'text' />
                <input type = 'text' />
                <SuperButton callBack={()=> {}} color={'red'}>First SuperButton</SuperButton>
                <SuperButton callBack={()=> {}} color='secondary'>Second SuperButton</SuperButton>
                <SuperButton callBack={()=> {}} disabled >Third SuperButton</SuperButton>
                <SuperButton callBack={()=> {}} disabled >Third SuperButton</SuperButton>
            </SuperTodoList>
        </div>
    );
}


export default App;

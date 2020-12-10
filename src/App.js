import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Header, Main, Footer, ToDo } from './components';

function App() {
    const [toDoList, setToDoList] = useState([
        {
            id: 1,
            task: '리액트 열심히 공부하기',
            complete: true
        },
        {
            id: 2,
            task: '훅 이해하기',
            complete: true
        }
    ]);

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task };
        });
        setToDoList(mapped);
    }

    const handleFilter = () => {
        let filtered = toDoList.filter(task => {
            return !task.complete;
        });
        setToDoList(filtered);
    }

    const addTask = (userInput) => {
        let copy = [...toDoList];
        copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
        setToDoList(copy);
    }

    return (
        <div className="App">
            <div className="Card_Container">
                <Header className="Header" addTask={addTask} />
                <Main className="Main" toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
                <Footer className="Footer" />
            </div>
        </div>
    );
}

export default App;

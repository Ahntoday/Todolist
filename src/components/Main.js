import React from 'react';
import styles from '../styles/Main.module.css';
import ToDo from './ToDo';
// import { MdRadioButtonUnchecked } from 'react-icons/md';

function Main({ toDoList, handleToggle, handleFilter }) {

    return (
        <div className={styles.Main_Container}>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />
                )
            })}
            <button className={styles.DeleteBtn} onClick={handleFilter}>Clear</button>
        </div>

        // <div className={styles.Main_Container}>
        //     {todos.map((todo) => (
        //         <div className={styles.Main_Item}>
        //             {todo.content}
        //         </div>
        //     ))}
        // </div>
    );
};

export default Main;
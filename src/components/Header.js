import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import addIcon from '../assets/btn_add.png';

function Header({ addTask }) {
    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }

    return (
        <div className={styles.Header_Container}>
            <h1>오늘 할일</h1>
            <div className={styles.Input_Container}>
                <form onSubmit={handleSubmit}>
                    <input className={styles.Input_Content} name="content" type="text" value={userInput} placeholder="여기에 입력해주세요" onChange={handleChange} />
                    <button className={styles.Input_Btn}><img src={addIcon} height="100%" width="100%" /></button>
                    {/* 여기서 버튼을 누르면 input의 content을 보내야함 */}
                </form>
            </div>
        </div>
    )
}

export default Header;
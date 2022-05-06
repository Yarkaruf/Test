import React from "react";
import styles from "../Search/Search.module.css";
import {useState, useContext} from 'react';
import {DataContext} from "../../App";

export default function Search ({}) {
    const data = useContext(DataContext);
    const [value, setValue] = React.useState('');
    const regExp = new RegExp(value, 'i');
    const search = data.filter(data => regExp.test(data.id) || regExp.test(data.title) ||regExp.test(data.body));
    return (
        <input placeholder="Поиск" id="search" value={value} onChange={(e)=>{setValue(e.target.value)}} className={styles.search} />
    );
}
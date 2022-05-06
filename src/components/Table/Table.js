import Arrow from "./Arrow"
import styles from "../Table/Table.module.css";
import React, {useContext} from "react";
import {DataContext} from "../../App";

export default function Table () {
    const value = useContext(DataContext);
    return (
        <table id="table" className={styles.table}>
            <thead>
                <tr className={styles.thead}>
                    <th className={styles.item}>
                        <h3>ID</h3>
                        <Arrow />
                    </th>
                    <th className={styles.item}>
                        <h3>Заголовок</h3>
                        <Arrow />
                    </th>
                    <th className={styles.item}>
                        <h3>Описание</h3>
                        <Arrow />
                    </th>
                </tr>
            </thead>
            <tbody>
                {value.map((row)=>{
                    return(
                    <tr className={styles.tbody}>
                        <td className={styles.item}>{row.id}</td>
                        <td className={styles.item}>{row.title}</td>
                        <td className={styles.item}>{row.body}</td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

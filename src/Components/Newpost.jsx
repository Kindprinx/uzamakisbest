import styles from "./Newpost.module.css";
import React from "react";

const Newpost = () => {
    function changeBodyHandler (event) {
        console.log(event.target.value)

    }
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3}  onChange={changeBodyHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
};

export default Newpost;

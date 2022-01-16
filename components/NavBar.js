import React from "react";
import styles from "../styles/Home.module.css";
import Log from "./log";
import Link from "next/link";
const NavBar = () => {
  return (
    <div>
      <ul className={styles.NavBar}>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <li>
          <Link href="/">
            <a>ROTTEN POTATOES</a>
          </Link>
        </li>
        <li>
          <Link href="/Admin">Admin</Link>
        </li>
        <li>
          <Link href="/Filter">Filter</Link>
        </li>
      </ul>
      <div className={styles.NavBar2}>
        <Log />
      </div>
    </div>
  );
};

export default NavBar;

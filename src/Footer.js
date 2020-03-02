import React from 'react';
import { css } from 'emotion';
import {FooterHeight} from "./module";

const styles = {
    root: css`
        background-color: black;
        color: white;
        font-family: spartan;
        font-size: 12px;
        height: ${FooterHeight}px;
        min-height: ${FooterHeight}px;
        flex-grow: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `,
    copyright: css`
        margin: 0 8px;
    `,
    link: css`
        color: white;
        margin: 0 8px;
        
        &:hover {
            color: grey;
        }
    `,
};

const Footer = () => (
    <div className={styles.root}>
        <span className={styles.copyright}>© 2020 Rob Spears</span>
        <div>
            <a className={styles.link} href="https://www.facebook.com/robspearstrio">facebook</a>
            <a className={styles.link} href="https://www.instagram.com/robspearsmusic/">instagram</a>
        </div>
    </div>
);

export default Footer;
import React from 'react';
import { css } from 'emotion';
import {bp, HeaderHeight} from "./module";
import HeaderMenu from "./HeaderMenu";
import './logo.css';

const styles = {
    root: css`
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: ${HeaderHeight}px;
        min-height: ${HeaderHeight}px;
        padding: 20px;
        flex-grow: 0;
        border-bottom: solid;
        border-style: 2px black;
        
        @media (max-width: ${bp}px) {
            flex-direction: column;
            justify-content: center;

        }
    `,
    logo: css`
        font-size: 66px;
        font-family: IM Fell DW Pica SC;
        letter-spacing: 0;
        color: #61130F;
        
        @media (max-width: ${bp}px) {
            font-size: 54px;
        }
    `,
};

const Header = (props) => (
    <div className={styles.root}>
        <div className='puff-in-center'>
            <div className={styles.logo}>Rob Spears</div>
        </div>
        <HeaderMenu setScreen={props.setScreen}/>
    </div>
);

export default Header;
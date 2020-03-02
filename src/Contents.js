import React from 'react';
import { css } from 'emotion';
import rob1 from './rob1.jpg';
import RobsEvents from "./RobsEvents";

const styles = {
    root: css`
        flex-grow: 2;
        display: flex;
        flex-direction: column;
        background-color: white;
        overflow: auto;
        font-family: im fell dw pica sc;
        
        ::-webkit-scrollbar {
            display: none;
        }
    `,
    hero: css`
        max-width: 100%;
        height: auto;
    `,
};

const Contents = (props) => {

    return (
        <div className={styles.root} id='contents'>
            {
                props.screen === 'home'
                    ? <img className={styles.hero} src={rob1} alt='rob1'/>
                    : null
            }
            <RobsEvents/>
        </div>
    );
};

export default Contents;
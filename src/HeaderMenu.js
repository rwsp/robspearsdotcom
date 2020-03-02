import React from 'react';
import { css } from 'emotion';
import { ReactComponent as CalendarIcon } from './calendar.svg';
import { ReactComponent as PedalIcon } from './guitar-pedal.svg';
import {bp} from "./module";
import Toggle from "./Toggle";
import './icon.css';

const styles = {
    root: css`
        display: flex;
        align-items: center;
        
        @media (max-width: ${bp}px) {
            margin-top: 15px;
        }
    `,
    link: css`

    `,
    icon: css`
        height: 65px;
        width: 65px;
        cursor: pointer;
        fill: black;
        margin: 0 10px;
        
  // animation-name: color;
  // animation-duration: 2s;
  // animation-iteration-count: infinite;
        
        :hover {
            fill: #61130F;
        }
        
        @media (max-width: ${bp}px) {
            height: 40px;
            width: 40px;
        }
        
    // @keyframes color {
    //   0% {
    //     fill: #222;
    //   }
    //   50% {
    //     fill: #4285f4;
    //   }
    //   100 {
    //     fill: #222;
    //   }
    // }
}
    `,
};

const HeaderMenu = (props) => (
    <div className={styles.root}>

        {/*<div className={styles.link} onClick={() => props.setScreen('home')}>*/}
        {/*    <PedalIcon className={styles.icon}/>*/}
        {/*</div>*/}

        {/*<div style={{width: '25px', height: '25px'}} />*/}

        {/*<div className={styles.link} onClick={() => props.setScreen('calendar')}>*/}
        {/*    <CalendarIcon className={styles.icon}/>*/}
        {/*</div>*/}

        {/*<div className='jello-horizontal'>*/}
            <Toggle toScreen='home' currentScreen={props.screen} onClick={() => {
                props.setScreen('home');
                const div = document.getElementById('contents');
                div.scrollTo(0, 0);
            }}>
                <PedalIcon className={styles.icon}/>
            </Toggle>
        {/*</div>*/}

        {/*<div className='jello-horizontal'>*/}
            <Toggle toScreen='calendar' currentScreen={props.screen} onClick={() => {
                props.setScreen('calendar');
                const div = document.getElementById('contents');
                div.scrollTo(0, 0);
            }}>
                <CalendarIcon className={styles.icon}/>
            </Toggle>
        {/*</div>*/}

    </div>
);

export default HeaderMenu
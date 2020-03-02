import React from 'react';
import { css } from 'emotion';
import {bp} from "./module";

const styles = {
    root: css`
        width: 90vw;
        max-width: 525px;
        display: flex;
        align-items: center;
        height: 120px;
        min-height: 120px;

        border-bottom: solid;
        border-color: black;
        

    `,
    dateTime: (old) =>  css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: black;
        color: white;
        height: 80px;
        width: 80px;
        min-width: 80px;
        padding-left: 8px;
        font-weight: bold;
        
        ${
            old ? 'text-decoration: line-through' : null
        }
    `,
    details: (old) => css`
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin-top: 3px;
        margin-left: 12px;
        
        @media (max-width: ${bp}px) {
            flex-direction: column;
            justify-content: flex-start;
        }

    `,
    time: css`
    `,
    spot: css`
        font-weight: bold;
        color: #61130F;
    `,
    with: css`
        font-style: italic;
        font-size: 14px;
        width: 150px;
    `,
    locSpot: css`
        display: flex;
        flex-direction: column;
        width: 220px;
    `,
};

const getMonthString = (monthIndex) => {
    let returnString = '';

    switch(monthIndex) {
        case 0: {
            returnString = 'JAN';
            break;
        }
        case 1: {
            returnString = 'FEB';
            break;
        }
        case 2: {
            returnString = 'MAR';
            break;
        }
        case 3: {
            returnString = 'APR';
            break;
        }
        case 4: {
            returnString = 'MAY';
            break;
        }
        case 5: {
            returnString = 'JUN';
            break;
        }
        case 6: {
            returnString = 'JUL';
            break;
        }
        case 7: {
            returnString = 'AUG';
            break;
        }
        case 8: {
            returnString = 'SEP';
            break;
        }
        case 9: {
            returnString = 'OCT';
            break;
        }
        case 10: {
            returnString = 'NOV';
            break;
        }
        case 11: {
            returnString = 'DEC';
            break;
        }
        default: break;
    }

    return returnString;
};

const Event = (props) => (
    <div className={styles.root}>
        <div className={styles.dateTime( new Date() > props.event.date )}>
            <div>
                <div>{`${getMonthString(props.event.date.getMonth())} ${props.event.date.getDate()}`}</div>
                <span className={styles.time}>{props.event.time}</span>
            </div>
        </div>
        <div className={styles.details( new Date() > props.event.date )}>
            <div className={styles.locSpot}>
                <span className={styles.spot}>{props.event.spot}</span>
                <span>{props.event.loc}</span>
            </div>
            <span className={styles.with}>{props.event.with ? `with ${props.event.with}` : ''}</span>
        </div>

    </div>
);

export default Event;
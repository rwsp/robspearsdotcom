import React from 'react';
import { css } from 'emotion';
import Event from "./Event";



const styles = {
    root: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        color: black;
        margin-top: 65px;
        font-family: spartan;
    `,
    header: css`
        font-size: 50px;
        font-family: im fell dw pica sc;
        margin-bottom: 40px;
                   border-bottom: solid;
            border-color: black;
            padding-bottom: 30px;
    `,
};

const allPlannedEvents = [
    {spot: 'Eldora',                 loc: 'Nederland',  date: new Date('March 7, 2020'), time: '3pm',      year: 2020,    with: 'Card Catalog'                            },
    {spot: 'Goosetown Tavern',       loc: 'Denver',     date: new Date('March 6, 2020'), time : '8pm',     year: 2020,    with : 'Lee Clark Allen'                        },
    {spot: 'Darkhorse', loc: 'Boulder',    date: new Date('February 15, 2020'), time : '9pm',     year: 2020, with : 'Ten Strip'                              },
    {spot: 'Outback Saloon',         loc: 'Boulder',    date: new Date('February 13, 2020'), time : '8pm',     year: 2020, with : null                                     },
    {spot: 'Bohemian Biergarten',    loc: 'Boulder',    date: new Date('August 3, 2019'), time : '8:15pm',  year: 2019,    with : 'Robison Palmer and Fox'                 },
    {spot: 'Periodic Brewing',       loc: 'Leadville',  date: new Date('July 4, 2019'), time : '4pm',     year: 2019,     with : null                                     },
    {spot: 'Spirit Hound',           loc: 'Lyons',      date: new Date('June 8, 2019'), time : '4:30pm',  year: 2019,     with : 'Card Catalog'                           },
    {spot: 'Outback Saloon',         loc: 'Boulder',    date: new Date('May 27, 2019'), time : '10:30pm', year: 2019,     with : null                                     },
    {spot: 'Tennyson Tap',           loc: 'Denver',     date: new Date('March 15, 2019'), time : '9:30pm',  year: 2019,   with : 'Lee Clark Allen and Avery J & the BA'   },
    {spot: 'Darkhorse', loc: 'Boulder',    date: new Date('August 11, 2018'), time : '6:30pm',  year: 2018,  with : 'Noctogon'                               },
    {spot: 'No Name Bar',            loc: 'Boulder',    date: new Date('August 10, 2018'), time : '10:30pm', year: 2018,  with : null                                     },
    {spot: 'Periodic Brewing',       loc: 'Leadville',  date: new Date('June 30, 2018'), time : '3:30pm',  year: 2018,    with : null                                     },

];

const RobsEvents = () => (
    <div className={styles.root}>
        <div className={styles.header}>- SHOWS -</div>
        {
            allPlannedEvents.map(e => <Event event={e} />)
        }
    </div>
);

export default RobsEvents;
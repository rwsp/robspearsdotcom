import React, {useState} from 'react';
import { css } from 'emotion';
import './app.css';
import Header from "./Header";
import Footer from "./Footer";
import Contents from "./Contents";


const styles = {
    root: css`
        background-color: green;
        display: flex;
        flex-direction: column;
        height: 100vh;
    `,
};

const App = () => {
    const [state, setState] = useState({screen: 'home'});

    return (
        <div className={styles.root}>
            <Header setScreen={(screen) => setState({screen})}/>
            <Contents screen={state.screen}/>
            <Footer />
        </div>
    );
};

export default App;

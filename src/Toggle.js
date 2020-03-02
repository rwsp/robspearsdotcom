import React from 'react';

const styles = {
    root: {

    },
};

const Toggle = (props) => {
    return (
        <div className={styles.root} onClick={() => props.onClick()}>
            {props.children}
        </div>
    );
};

export default Toggle;
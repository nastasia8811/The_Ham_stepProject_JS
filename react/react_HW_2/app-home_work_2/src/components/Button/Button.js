// import React from "react";
// import styles from './Button.module.scss';
//
// class Button extends React.PureComponent{
//     render() {
//         const { handleClick, backgroundColor, text} = this.props;
//         return <button type="button" onClick={handleClick} className={styles.btn} style={{backgroundColor}}> { text } </button>
//     }
// }
//
// export default Button;

import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const colorsMap = {
    blue: styles.blue,
    red: styles.red,
}

const Button = ({children, color, onClick, className, type}) => {
    const [isPressed, setIsPressed] = useState(false);
    const pressedStyle = isPressed ? styles.pressed : '';

    return (
        <button
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onClick={onClick}
            className={`${styles.btn} ${pressedStyle} ${colorsMap[color]} ${className}`}
            type={type}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(['blue', 'red']),
    className: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
    onClick: () => {},
    color: 'blue',
    className: '',
    type: 'button',
};

export default Button;

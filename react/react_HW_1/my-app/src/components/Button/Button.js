import React from "react";
import styles from './Button.module.scss';

class Button extends React.PureComponent{
    render() {
        const { children, handleClick, backgroundColor, text} = this.props;
        return <button type="button" onClick={handleClick} className={styles.btn} style={{backgroundColor}} text={text}> { children } </button>
    }
}

export default Button;
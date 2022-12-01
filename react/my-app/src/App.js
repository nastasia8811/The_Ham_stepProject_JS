import {Component} from "react";
import './App.css';
import Button from "./components/Button/Button";
//import styles from "./components/Button/Button.module.scss";
import Modal from "./components/Modal/Modal"

class App extends Component {
    state = {
        closeButton: false,
    }


    render() {
        return (
            <>
                <div className="App">
                    <Button handleClick={() => {
                        console.log('1')
                    }} backgroundColor={'lightblue'} text={'Open first modal'}>Open first modal</Button>
                    <Button handleClick={() => {
                        console.log('2')
                    }} backgroundColor={'red'} text={'Open second modal'}>Open second modal</Button>
                </div>

                <Modal
                    header={<header><h1>Do you want to delete this file?</h1></header>}
                    closeButton={
                        <svg className="header__cross" data-name="cross" width="25"
                             height="25" viewBox="0 0 25 25"
                             fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L23.5 24" stroke="white" strokeWidth="2"/>
                            <path d="M1 23L24 1" stroke="white" strokeWidth="2"/>
                        </svg>
                    }
                    text={<p>Once you delete this file, it won't be possible to undo this action. Are you sure you want
                        to delete it?</p>}

                    actions={
                    <>
                        <button className={'btnModal'}>Ok</button>
                        <button className={'btnModal'}>Cancel</button>
                    </>
                    }
                />
            </>
        );
    }
}

export default App;

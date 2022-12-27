import {Component} from "react";
import './App.css';
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal"

class App extends Component {
    state = {
        handleClick: false,
        header: "",
        text: "",
        actions: "",
    }

    render() {
        return (
            <>
                <div className="App" >

                    <Button handleClick={() => {
                            this.setState({handleClick: true})
                            this.setState({header: "Do you want to delete this file?"})
                            this.setState({text: "Once you delete this file, it won't be possible to undo this action. Are you\n" +
                                    "                            sure you want to delete it?"})
                            this.setState({actions:  <>
                                    <button className={'btnModal'}>Ok</button>
                                    <button className={'btnModal'}>Cancel</button>
                                </>}) &&
                        this.setState({backgroundColor: "rgba(0, 125, 215, 0.7)"})
                        }} backgroundColor={'lightblue'} text={'Open first modal'}>Open first modal</Button>



                        <Button handleClick={() => {
                            this.setState({closeButton: true})
                            this.setState({header: "qqqqqqqqqqqqqqqqqqqqqqqq?"})
                            this.setState({text: "ffffffffffffffffffffffffff"})
                            this.setState({actions:  <>
                                    <button className={'btnModal'}>lala</button>
                                    <button className={'btnModal'}>trululu</button>
                                </>})
                            this.setState({backgroundColor: "black"})
                        }} backgroundColor={'red'} text={'Open second modal'}>Open second modal</Button>


                    {this.state.handleClick && <Modal
                        header={<header><h1>{this.state.header}</h1>
                            <svg data-name="cross" width="25"
                                 height="25" viewBox="0 0 25 25"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L23.5 24" stroke="white" strokeWidth="2"/>
                                <path d="M1 23L24 1" stroke="white" strokeWidth="2"/>
                            </svg>
                        </header>}
                        text={<p>{this.state.text}</p>}
                        actions={this.state.actions}
                    />
                    }



                </div>
            </>
        );
    }
}

export default App;

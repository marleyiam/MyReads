import React, {Component} from 'react';
import './slider.css';
const Context = React.createContext();
const Consumer = Context.Consumer;

export default class Slider extends Component {

    toggleTheme = (event) => {

        let theme = event.target.checked
                ? "dark"
                : "light"

        this.props.themeContext.setTheme(
            theme
        )
    };

    render() {
        return (
            <label className="switch">
                <input 
                    onChange={(event) => {this.toggleTheme(event)}}
                    type="checkbox" 
                />
                <span className="slider round"/>
            </label>
        );
    }
}

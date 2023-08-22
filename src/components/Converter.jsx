import { Component } from "react";
import Input from "./Input";
import {celToFah, fahToCel} from "./Calculate";

class Converter extends Component{
    state = {
        fahrenheitValue: '',
        celciusValue: ''
    }
    inputHandler=(event,tmp)=>{
        let data = event.target.value;
        if(tmp==='f'){
            this.setState({fahrenheitValue: data, celciusValue: fahToCel(data)});
        }else if(tmp==='c' && data >= 0){
            this.setState({celciusValue: data, fahrenheitValue: celToFah(data)});
        }
    }
    render(){
        let {fahrenheitValue, celciusValue} = this.state;
        let assets = {
            fahrenheitValue,
            celciusValue, 
            inputHandler : this.inputHandler
        };
        return(
            <>
                <Input value={assets}/>
            </>
        )
    }
}

export default Converter;
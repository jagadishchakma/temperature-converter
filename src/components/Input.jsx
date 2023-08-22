function Input({value}){
    let {fahrenheitValue, celciusValue,inputHandler} = value;
    return(
        <div>
            <fieldset>
                <legend>Fahrenheit:</legend>
                <input type="number" value={fahrenheitValue} onChange={(e)=>inputHandler(e,'f')}/>
            </fieldset>
            <fieldset>
                <legend>Celcius:</legend>
                <input type="number" value={celciusValue} onChange={(e)=>inputHandler(e,'c')}/>
            </fieldset>
        </div>
    );
}
export default Input;
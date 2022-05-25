import React, { useState } from 'react'

export default function Textforms(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upperCase!", "success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowerCase!", "success")
    }

    const handleClearClick = () => {
        let newText = " ";
        setText(newText)
        props.showAlert("Clear all text", "success")
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpacesClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
        navigator.clipboard.writeText(text);
        props.showAlert("Removed extra spaces", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('')
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea class="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="6"></textarea>
                </div>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}

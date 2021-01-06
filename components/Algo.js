import {Fragment, useState} from 'react';
import {Button} from 'react-bootstrap';

export default function Algo(){
    const [input, setInput] = useState('');
    const [btnNames] = useState(
        [
            {name:'Reverse letters of every words', id:'reverseword'},
            {name:'Reverse words in text', id:'reverseword'},
            {name:'Capitelize all words', id:'capitalize'},
            {name:'Upper case all Letters', id:'uppercase'},
            {name:'Lower case all Letters', id:'lowercase'},
            {name:'Alternate case', id:'alternate'},
            {name:'Shuffle all Words', id:'shufflewords'},
            {name:'Shuffle all Letters', id:'shufflechars'},
        ])

    function handleTextInput(e){
        setInput(e.target.value);
    }

    function handleBtn(){
        let str = "";
        for(let i = input.length -1; i >= 0 ; i--){
            str = str + input[i];
        }
        setInput(str);
    }

    return(
        <Fragment className='center'>
            <div className='text'>
            <h1 className='title'>Reverse text</h1>
            <p className='welcomeP'> Welcome to javadeveloper.com!</p>
            <p> Do you need to fix your text? Accidentally left you CAPSLOCK on? Or copied content 
                from pdf file which has some crazy format? We have tools in place to resolve all these issues. 
                Feel free to contact us if you need any specific tools which we can develope specially for you! </p>
                <p className='infoText'>Below tool will reverse all charachters of the text. Paste your text in the textbox and press "Reverse Text" button.</p>
            </div>
            <textarea 
                className="form-control" 
                onChange={handleTextInput}
                placeholder='Enter your text here..' 
                id="text" 
                value={input}
                name="text" 
                rows="10"/>
            <div className='submitBtn'>
                <div className='mainBtn'>
                    <Button variant="info" onClick={handleBtn}>Reverse Text, other tsull ensoo</Button>
                </div>
                <div className='buttonFamily'>
                    {
                        btnNames.map((btn, index)=>{return(
                            <div className='secondBtn'>
                                <Button variant="outline-info" key={index} name={btn.id}>{btn.name}</Button>
                            </div>
                        )})
                    }
                </div>
            </div>
            <p className="footer"> Copyright ©2020-2021 - TheJavaDeveloper.com </p>
            <style jsx>{`
                .mainBtn{
                    width: 10rem;
                }
                .secondBtn{
                    margin-left: 2px;
                    margin-bottom: 1px
                }
                .infoText{    
                    margin-top: 0;
                    margin-bottom: 1rem;
                    font-size: 1.25rem;
                    font-weight: bold;
                    color: #464b86d1;
                }
                .title{
                    color: #317cb0c9;
                    font-size: 2.2rem;
                    font-family: 'Saira Condensed', cursive;
                    font-weight: bold;
                    text-align: center;
                }
                .text{
                    height : 20%;
                    // background-color: green
                }
                .submitBtn{
                    margin-top: 5px;
                    display: flex;
                }
                .buttonFamily{
                    display: flex;
                    flex-wrap: wrap;
                    margin-left: 2px;
                }
                .welcomeP{
                    margin-top: 2rem;
                    font-weight: bold;
                }
                .footer{
                    text-align: center;
                    margin-top: 2rem;
                }
            `}</style>
        </Fragment>
    )
}
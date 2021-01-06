import {Fragment, useState} from 'react';
import {Button} from 'react-bootstrap';

export default function Algo(){
    const [input, setInput] = useState('');
    const [btnNames, setBtnNames] = useState(
        [
            {name:'Capitelize all word', id:'capitalize'},
            {name:'Upper case all Charachters', id:'uppercase'},
            {name:'Lower case all Charachters', id:'lowercase'},
            {name:'Alternate case', id:'alternate'},
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
                <h1 className='title'>Revert Text Charachter</h1>
                <p className='infoText'>Paste your text below and press "Reverse Text" button.</p>
            </div>
            <textarea 
                className="form-control" 
                onChange={handleTextInput}
                placeholder='Enter your text here and press "Reverse Text" button below' 
                id="text" 
                value={input}
                name="text" 
                rows="10"/>
            <div className='submitBtn'>
                <Button variant="info" onClick={handleBtn}>Reverse Text</Button>
                <div className='buttonFamily'>
                    {
                        btnNames.map((btn)=>{return(
                            <div className='secondBtn'>
                            <Button variant="outline-info" id={btn.id}>{btn.name}</Button>
                            </div>
                        )})
                    }
                </div>
            </div>
            <style jsx>{`
                .secondBtn{
                    margin-left: 2px
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
                    width : 80%;
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
            `}</style>
        </Fragment>
    )
}
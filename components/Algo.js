import {Fragment, useState} from 'react';
import {Button} from 'react-bootstrap';

export default function Algo({algoDetails, family, extraFamily}){
    const [input, setInput] = useState('');

    function handleTextInput(e){
        setInput(e.target.value);
    }
    

    function handleBtn(e){  
        
        switch(e.target.id){
            case 'title-case':
                let capital = input.split(' ');
                console.log('capital : ' + capital);
                for(let i = 0; i < capital.length ; i++){
                    let word = capital[i].split('');
                    word[0] = word[0].toUpperCase();
                    capital[i] = word.join('');
                }
                capital = capital.join(' ');
                setInput(capital);
                break;
            case 'upper-case' :
                let upper = input.split('');
                for (let i = 0; i < upper.length; i++) {
                    upper[i] = upper[i].toUpperCase();
                }
                upper = upper.join('');
                setInput(upper);
                break;
            case 'lower-case' :
                let lower = input.split('');
                for (let i = 0; i < lower.length; i++) {
                    lower[i] = lower[i].toLocaleLowerCase();
                }
                lower = lower.join('');
                setInput(lower);
                break;
            case 'alternate-case' :
                let alternate = input.split('');
                for (let i = 0; i < alternate.length; i++) {
                    if(i%2){
                        alternate[i] = alternate[i].toUpperCase();
                    }else{
                        alternate[i] = alternate[i].toLowerCase();
                    }
                }
                alternate = alternate.join('');
                setInput(alternate);
                break;
            case 'toggle-case' :
                let toggle = input.split('');
                for (let i = 0; i < toggle.length; i++) {
                    if(toggle[i] === toggle[i].toLowerCase()){
                        toggle[i] = toggle[i].toUpperCase();
                    }else{
                        toggle[i] = toggle[i].toLowerCase();
                    }
                }
                toggle = toggle.join('');
                setInput(toggle);
                break;
            case 'reverse-characters':
                let str = "";
                for(let i = input.length -1; i >= 0 ; i--){
                    str = str + input[i]
                }
                setInput(str);
                break;
            default:
                break;
        }
    }

    return(        
        <Fragment>
            <div className='text'>
                <h1 className='title'>{algoDetails.name}</h1>
                <p className='welcomeP'> Welcome to TheJavaDeveloper.com!</p>
                <p> {algoDetails.descriptionLong} </p>
                <p className='infoText'>{algoDetails.descriptionShort}</p>
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
                    <Button 
                        variant="info" 
                        id={algoDetails.link} 
                        onClick={handleBtn}>{algoDetails.name}
                    </Button>
                </div>
                <div className='extraButtons'>
                <div className='buttonFamily'>
                    {
                        family.map((btn, index)=>{return(
                            <div className='secondBtn' key={index}>
                                <Button 
                                    variant="outline-info" 
                                    onClick={handleBtn} 
                                    id={btn.link}>{btn.name}
                                </Button>
                            </div>
                        )})
                    }
                </div>
                <div className='buttonFamily'>
                    {
                        extraFamily.map((btn, index)=>{return(
                            <div className='secondBtn' key={index}>
                                <Button 
                                    variant="outline-secondary" 
                                    onClick={handleBtn} 
                                    id={btn.link}>{btn.name}
                                </Button>
                            </div>
                        )})
                    }
                </div>
                </div>
            </div>
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
                    margin-bottom: 5px;
                }
                .welcomeP{
                    margin-top: 2rem;
                    font-weight: bold;
                }
                .extraButtons{
                    // border-color: #9bdbdd52;
                    // border-width: 1px;
                    // border-style: solid;
                    // border-radius: 10px;
                    margin: auto;
                }
            `}</style>
        </Fragment>
    )
}
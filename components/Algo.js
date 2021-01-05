import {Fragment} from 'react';
import {Button} from 'react-bootstrap';

export default function Algo(){
    return(
        <Fragment>
            <div className='text'>
                <h1 className='title'>Revert text value</h1>
                <p className='infoText'>Paste your text below and press Calculate..</p>
            </div>
            <textarea 
                className="form-control" 
                placeholder="Enter your text and press covert button below.." 
                id="text" 
                name="text" 
                rows="5"/>
            <Button>Calculate</Button>
            <style jsx>{`
                .infoText{    
                    margin-top: 0;
                    margin-bottom: 1rem;
                    font-size: 1.25rem;
                    font-weight: bold;
                    color: #464b86d1;
                }
                .title{
                    color: #317cb0c9;
                    font-size: 3rem;
                    font-family: 'Saira Condensed', cursive;
                    font-weight: bold;
                }
                .text{
                    height : 20%;
                    width : 80%;
                    // background-color: green
                }
            `}</style>
        </Fragment>
    )
}
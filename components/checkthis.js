import {useState} from 'react';
import {Button} from 'react-bootstrap';
//import styles from './checkthis.module.css';

export default function Checkthis(){
    const [val, setVal] = useState(0);
    function handleBtn(){
        console.log('clicked');
        setVal(val + 1);
    }

    return(
        <div className='main'>
            <div className='top'>
                <p className='logo'>Logo</p>
                <p>Menu</p>
            </div>
            <div className='text'>
                <h1 >Title is here</h1>
                <p>Some extra information about the algo process</p>
            </div>
            <div className='code'>
                <p>Details</p>
                <input type='text' width='20px' />
                <Button variant="outline-success">Calculate</Button>{' '}
            </div>
        <style jsx>
            {`
                .top{
                    height : 20%;
                    width : 80%;
                    background-color: yellow;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between
                }
                .text{
                    height : 20%;
                    width : 80%;
                    background-color: green
                }
                .code{
                    height : 20%;
                    width : 80%;
                    background-color: red
                }

                .logo{
                    color: blue
                }

                .main{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            `}
        </style>
        </div>
    )
}
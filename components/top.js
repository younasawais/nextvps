import {useState} from 'react';
import {Button} from 'react-bootstrap';
import Menu from './Menu';
//import styles from './checkthis.module.css';

export default function Top(){

    let articleMenuItems = [
        {name: 'algo1', router: 'algo1'},
        {name: 'algo2', router: 'algo2'},
        {name: 'algo3', router: 'algo3'}
    ];
    return(
            <div className='top'>
                <Menu 
                    articleMenuItems= {articleMenuItems}
                />
            <style jsx>
                {`
                    .top{
                        height : 20%;
                        width : 80%;
                        // background-color: yellow;
                        display: flex;
                        flex-direction: row;
                    }
                `}
            </style>
        </div>
    )
}
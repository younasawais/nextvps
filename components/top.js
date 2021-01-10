import {useState} from 'react';
import {Button} from 'react-bootstrap';
import Menu from './Menu';
import Logo from './Logo';
//import styles from './checkthis.module.css';

export default function Top({allMenus}){

    let articleMenuItems = [
        {name: 'algo1', router: 'algo1'},
        {name: 'algo2', router: 'algo2'},
        {name: 'algo3', router: 'algo3'}
    ];
    return(
            <div className='top'>
                <div className='menuTop'> 
                    <Menu 
                        articleMenuItems= {allMenus}
                    />
                </div>
                <Logo />
            <style jsx>
                {`
                    .menuTop{
                        margin-left: 2px
                    }
                    .top{
                        height : 20%;
                        // background-color: yellow;
                        display: flex;
                        flex-direction: row-reverse;
                        justify-content: space-between;
                    }
                `}
            </style>
        </div>
    )
}
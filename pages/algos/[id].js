import Top from '../../components/top';
import Algo from '../../components/Algo';
import {Fragment, useEffect, useState} from 'react';
import Bottom from '../../components/Bottom';

Algos.getInitialProps = async ({query}) => {
    const { id } = query;
    let data = null;
    for(let page of allPages){
        if(page.link === id){
            data = page;
            break;
        }
    }
    
    return( { 
        data : data
    })
}

export default function Algos({data}){
    console.log(data);
    
    return (
        <Fragment>
            <div className='center'>
                <div className='contain'>
                    <Top />
                    <Algo />
                    <Bottom />
                    <p className="footer"> Copyright ©2020-2021 - TheJavaDeveloper.com </p>
                </div>
                <style jsx>{`
                    .contain{
                        display:flex;
                        flex-direction: column;
                        max-width: 980px;    
                        margin-left: 1rem;
                        margin-right: 1rem;
                    }
                    .center{
                        margin-left: auto;
                        margin-right: auto;
                        max-width: 980px; 
                    }
                    .footer{
                        text-align: center;
                        margin-top: 2rem;
                    }
                `}</style>
            </div>
        </Fragment>
    )
}

const allPages = [{
    name                : 'Title Case',
    link                : 'title-case',
    family              : 'upper-lowerCase',
    extraFamily         : 'shuffleLetters',
    descriptionShort    : 'Below tool will reverse all charachters of the text. Paste your text in the textbox and press "Reverse Text" button.',
    descriptionLong     : 'Do you need to fix your text? Accidentally left you CAPSLOCK on? Or copied content from pdf file which has some crazy format? We have tools in place to resolve all these issues. Feel free to contact us if you need any specific tools which we can develope specially for you!'
},
{
    name                : 'Upper Case',
    link                : 'upper-case',
    family              : 'upper-lowerCase',
    extraFamily         : 'shuffleLetters',
    descriptionShort    : 'aadasd',
    descriptionLong     : 'asasdas'
},
{
    name                : 'Lower Case',
    link                : 'lower-case',
    family              : 'upper-lowerCase',
    extraFamily         : 'shuffleLetters',
    descriptionShort    : 'aadasd',
    descriptionLong     : 'asasdas'
},
{
    name                : 'Title Case',
    link                : 'title-case',
    family              : 'upper-lowerCase',
    extraFamily         : 'shuffleLetters',
    descriptionShort    : 'aadasd',
    descriptionLong     : 'asasdas'
},
{
    name                : 'Alternate Case',
    link                : 'alternate-case',
    family              : 'upper-lowerCase',
    extraFamily         : 'shuffleLetters',
    descriptionShort    : 'aadasd',
    descriptionLong     : 'asasdas'
},
{
    name                : 'Toggle Cases',
    link                : 'toggle-case',
    family              : 'upper-lowerCase',
    extraFamily         : 'shuffleLetters',
    descriptionShort    : 'aadasd',
    descriptionLong     : 'asasdas'
},
{
    name                : 'Toggle Cases',
    link                : 'toggle-case',
    family              : 'upper-lowerCase',
    extraFamily         : 'shuffleLetters',
    descriptionShort    : 'aadasd',
    descriptionLong     : 'asasdas'
}
]
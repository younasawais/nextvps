import Top from '../../components/top';
import Algo from '../../components/Algo';
import {Fragment, useEffect} from 'react';
import Bottom from '../../components/Bottom';

Algos.getInitialProps = async ({query}) => {
    const { id } = query;
    let algoDetails = null;
    for(let page of allPages){
        if(page.link === id){
            algoDetails = page;
            break;
        } 
    }
    let allButtons  = [];
    let notFound = false;
    if(algoDetails === null){
        notFound  = true;
        return({notFound})
    }
    
    let family      = [];
    let extraFamily = [];
    for(let page of allPages){
        if(algoDetails.family === page.family && page.link !== id){
            family.push(page);
        }
        if(algoDetails.family === page.extraFamily){
            extraFamily.push(page)
        }
        allButtons.push({name: page.name, link: page.link})
    }
    
    return( { 
        notFound,
        algoDetails,
        family,
        extraFamily,
        allButtons,
        allMenus,
        notFound
    })
}

export default function Algos({algoDetails, family, extraFamily, allButtons, allMenus, notFound}){   
    return (
        <Fragment>
            {
                (!notFound) ? 
                <div className='center'>
                    <div className='contain'>
                        <Top allMenus={allMenus}/>
                        <Algo 
                            algoDetails={algoDetails}
                            family={family}
                            extraFamily={extraFamily}
                        />
                        <Bottom allButtons={allButtons} />
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
                </div> :
                <p>Not Found</p>

            }
        </Fragment>
    )
}

const allPages = [
    {
        name                : 'Title Case',
        link                : 'title-case',
        family              : 'upperLowerCase',
        extraFamily         : 'shuffleString',
        descriptionShort    : 'Below tool will reverse all charachters of the text. Paste your text in the textbox and press "Reverse Text" button.',
        descriptionLong     : 'Do you need to fix your text? Accidentally left you CAPSLOCK on? Or copied content from pdf file which has some crazy format? We have tools in place to resolve all these issues. Feel free to contact us if you need any specific tools which we can develope specially for you!'
    },
    {
        name                : 'Upper Case',
        link                : 'upper-case',
        family              : 'upperLowerCase',
        extraFamily         : 'shuffleString',
        descriptionShort    : 'aadasd',
        descriptionLong     : 'asasdas'
    },
    {
        name                : 'Lower Case',
        link                : 'lower-case',
        family              : 'upperLowerCase',
        extraFamily         : 'shuffleString',
        descriptionShort    : 'aadasd',
        descriptionLong     : 'asasdas'
    },
    {
        name                : 'Alternate Case',
        link                : 'alternate-case',
        family              : 'upperLowerCase',
        extraFamily         : 'shuffleString',
        descriptionShort    : 'aadasd',
        descriptionLong     : 'asasdas'
    },
    {
        name                : 'Toggle Cases',
        link                : 'toggle-case',
        family              : 'upperLowerCase',
        extraFamily         : 'shuffleString',
        descriptionShort    : 'aadasd',
        descriptionLong     : 'asasdas'
    },
    {
        name                : 'Reverse characters of every word',
        link                : 'reverse-characters',
        family              : 'shuffleString',
        extraFamily         : 'upperLowerCase',
        descriptionShort    : 'aadasd',
        descriptionLong     : 'asasdas'
    },
    {
        name                : 'Reverse words in text',
        link                : 'reverse-words',
        family              : 'shuffleString',
        extraFamily         : 'upperLowerCase',
        descriptionShort    : 'aadasd',
        descriptionLong     : 'asasdas'
    },
    {
        name                : 'Shuffle all Words',
        link                : 'shuffle-words',
        family              : 'shuffleString',
        extraFamily         : 'upperLowerCase',
        descriptionShort    : 'aadasd',
        descriptionLong     : 'asasdas'
    },
    {
        name                : 'Shuffle all characters',
        link                : 'suffle-characters',
        family              : 'shuffleString',
        extraFamily         : 'upperLowerCase',
        descriptionShort    : 'aadasd',
        descriptionLong     : 'asasdas'
    }
]

const allMenus = [
    {
        name: 'Upper & Lower Cases',
        link: 'title-case'
    },
    {
        name: 'Words & Characters Shuffle',
        link: 'reverse-characters'
    },
]
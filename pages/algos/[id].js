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
const buttonNext = ' Note if you need to use any similar tools, use the buttons next to it!';
const allPages = [
    {
        name                : 'Title Case sentence',
        link                : 'title-case',
        family              : 'upperLowerCase',
        extraFamily         : 'shuffleString',
        descriptionShort    : 'Convert first character of all sentences. Paste your text in the textbox and press "Title Case sentence" button.',
        descriptionLong     : 'There might be cases where you have forgotten to capitalize your sentences where needed or auto-correct didn\'t do the job, with this simple tool you can rectify this!' + buttonNext
    },
    {
        name                : 'Title Case words',
        link                : 'title-case',
        family              : 'upperLowerCase',
        extraFamily         : 'shuffleString',
        descriptionShort    : 'Convert first character of all words in the text. Paste your text in the textbox and press "Title Case words" button.',
        descriptionLong     : 'Do you need to Capitalize all words in your sentences to have a nice title? BWith a click of a button below tool will convert the first character of all words to capital Case. Simple as that!' + buttonNext
    },
    {
        name                : 'Upper Case',
        link                : 'upper-case',
        family              : 'upperLowerCase',
        extraFamily         : 'shuffleString',
        descriptionShort    : 'Past your text below, then press the "Lower Case" button to convert all characters to lower case.',
        descriptionLong     : 'Below tool will convert all charachters to Upper case. Paste your text in the textbox and press "Upper Case" button.' + buttonNext
    },
    {
        name                : 'Lower Case',
        link                : 'lower-case',
        family              : 'upperLowerCase',
        extraFamily         : 'shuffleString',
        descriptionShort    : 'Past your text below, then press the "Lower Case" button to convert all characters to lower case.',
        descriptionLong     : 'Below tool will convert all charachters to Lower case. Paste your text in the textbox and press "Upper Case" button.' + buttonNext
    },
    {
        name                : 'Alternate Case',
        link                : 'alternate-case',
        family              : 'upperLowerCase',
        extraFamily         : 'shuffleString',
        descriptionShort    : 'Past your text below, then press the "Alternate Case" button to alternate cases for all characters.',
        descriptionLong     : 'Below tool will alternate all charachters. First character will be lower, the second upper, third lower ,fourth upper and so on... Paste your text in the textbox and press "Alternate Case" button.' + buttonNext
    },
    {
        name                : 'Toggle Cases',
        link                : 'toggle-case',
        family              : 'upperLowerCase',
        extraFamily         : 'shuffleString',
        descriptionShort    : 'Past your text below, then press the "Toggle Cases" button to toggle all characters to the opposite case.',
        descriptionLong     : 'Below tool will toggle the current case of every character to an opposite case.' + buttonNext
    },
    {
        name                : 'Reverse characters of every word',
        link                : 'reverse-characters',
        family              : 'shuffleString',
        extraFamily         : 'upperLowerCase',
        descriptionShort    : 'Past your text below, then press the "Reverse characters of every word" button.',
        descriptionLong     : 'Below tool will reverse all charachters of the text. Paste your text in the textbox and press "Reverse Text" button.' + buttonNext
    },
    {
        name                : 'Reverse words in text',
        link                : 'reverse-words',
        family              : 'shuffleString',
        extraFamily         : 'upperLowerCase',
        descriptionShort    : 'Past your text below, then press the "Reverse words in text" button to reverse all words in the text.',
        descriptionLong     : 'Below tool will reverse all the words in your text. The characters of every word will be at the same position.' + buttonNext
    },
    {
        name                : 'Shuffle all words of text',
        link                : 'shuffle-words',
        family              : 'shuffleString',
        extraFamily         : 'upperLowerCase',
        descriptionShort    : 'Past your text below, then press the "Shuffle all words of text" button.',
        descriptionLong     : 'Below tool will shuffle all words randomly inside the text. The characters of the words will stay in the same position.' + buttonNext
    },
    {
        name                : 'Shuffle all characters of every Word',
        link                : 'shuffle-words',
        family              : 'shuffleString',
        extraFamily         : 'upperLowerCase',
        descriptionShort    : 'Past your text below, then press the "Shuffle all characters of every Word".',
        descriptionLong     : 'Below tool will shuffle all charachters of every word randomly inside the text. The words order in the below text will be in the same position.' + buttonNext
    },
    {
        name                : 'Shuffle all characters',
        link                : 'suffle-characters',
        family              : 'shuffleString',
        extraFamily         : 'upperLowerCase',
        descriptionShort    : 'Past your text below, then press the "Shuffle all characters" button.',
        descriptionLong     : 'This tool every charachter in the text randomly including spaced.' + buttonNext
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
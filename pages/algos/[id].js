import Top from '../../components/top';
import Algo from '../../components/Algo';
import {Fragment} from 'react';
import Bottom from '../../components/Bottom';
import {allPages, allMenus} from '../data.json';
import Logo from '../../components/Logo';

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

export default function Algos({algoDetails, family, extraFamily, allMenus, notFound}){  
    return (
        <Fragment>
            {
                (!notFound) ? 
                <div className='center'>
                    <div className='contain'>
                        <Logo />
                        <Top allMenus={allMenus}/>
                        <Algo 
                            algoDetails={algoDetails}
                            family={family}
                            extraFamily={extraFamily}
                        />
                        <Bottom/>
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
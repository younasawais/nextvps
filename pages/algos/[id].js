import Top from '../../components/top';
import Algo from '../../components/Algo';
import {Fragment} from 'react';

export default function Test(){
    return (
        <Fragment>
            <div className='center'>
                <div className='contain'>
                    <Top/>
                    <Algo/>
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
                `}</style>
            </div>
        </Fragment>
    )
}
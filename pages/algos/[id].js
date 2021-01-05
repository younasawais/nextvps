import Top from '../../components/top';
import Algo from '../../components/Algo';
import {Fragment} from 'react';

export default function Test(){
    return (
        <Fragment>
            <div className='contain'>
                <Top/>
                <Algo/>
            </div>
            <style jsx>{`
                .contain{
                    display:flex;
                    flex-direction: column;
                    max-width: 90%;
                    margin-left: auto;
                    margin-right: auto;
                }
            `}</style>
        </Fragment>
    )
}
import {Fragment} from 'react';

export default function Logo(){
    return(
        <Fragment>
                <div className="menu-logo">
                    <div className="navbar-brand">
                        <a href="/">
                            <h2 className='logoName'>
                                The Javadeveloper</h2>
                        </a>
                    </div>
                </div>
                <style jsx>{`
                    a:hover{
                        text-decoration: none;
                    }
                    .menu-logo{
                        display: 'flex', 
                        justify-content: 'space-around'
                    }

                    .logoName{
                        font-family: 'Squada One';
                        color: #2e7880
                    }
                `}</style>
        </Fragment>
    )
}
import {Fragment} from 'react';

export default function Logo(){
    return(
        <Fragment>
                <div className="menu-logo">
                    <div className="navbar-brand">
                        <a href="/">
                            <h2 className='logoName'> THE JAVA DEVELOPER</h2>
                        </a>
                    </div>
                </div>
                <style jsx>{`
                    h2{
                        font-size: 1.1rem;
                        text-shadow: 3px 3px 5px #7183b5;
                    }
                    a:hover{
                        text-decoration: none;
                    }
                    .menu-logo{
                        display: 'flex', 
                        justify-content: 'space-around'
                    }

                    .logoName{
                        font-family: 'Audiowide';
                        color: #2e7880
                    }
                `}</style>
        </Fragment>
    )
}
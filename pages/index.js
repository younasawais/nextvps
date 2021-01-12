import {Fragment} from 'react'
import {allMenus} from './data.json'
import Link from 'next/link'
import Bottom from '../components/Bottom'

export default function Home() {
  return (
    <Fragment>
        <div className='center'>
            <div className='contain'>
                <h2> THE JAVA DEVELOPER</h2>
                <div>
                  {
                    allMenus.map((menu, index)=>{
                      return(
                        <Link 
                          key={index} 
                          href={'/algos/'+menu.link}><button>{menu.name}</button>
                        </Link>
                      )
                    })
                  }
                </div>
                <Bottom />
                <p className="footer"> Copyright ©2020-2021 - TheJavaDeveloper.com </p>
            </div>
            <style jsx>{`
                button{
                  font-size: 1.5rem;
                  background-color: #467bb7;
                  border: solid;
                  border-radius: 8px;
                  color: white;
                  padding: 3px 4px;
                  text-align: center;
                  text-decoration: none;
                  margin: 4px;
                }
                h2{
                    margin-top: 20px;
                    margin-bottom: 20px;
                    font-size: 1.6rem;
                    text-shadow: 3px 3px 5px #7183b5;
                    font-family: 'Audiowide';
                    color: #2e7880;
                }
                .contain{
                    display:flex;
                    flex-direction: column;
                    max-width: 980px;    
                    margin-left: 1rem;
                    margin-right: 1rem;
                    align-items: center;
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

import { Fragment, useState } from "react";
import { Button } from 'react-bootstrap';
import Link from 'next/link';

export default function Bottom({allButtons}){
    let [links] = useState([
        {name:'Title case', link:'/algos/capitalize'},
        {name:'Upper Case', link:'/algos/uppercase'},
        {name:'Lower Case', link:'/algos/lowercase'},
        {name:'Alternate cases', link:'/algos/alternate'},
        {name:'Toggle cases', link:'/algos/toggle'},
        {name:'Reverse letters of every word', link:'/algos/reverseletters'},
        {name:'Reverse words in text', link:'/algos/reverseword'},
        {name:'Shuffle all Words', link:'/algos/shufflewords'},
        {name:'Shuffle all Letters', link:'/algos/shufflechars'}
    ])
    
    return(
        <div><hr/>
        <div className='allLinks'>
            <p>Below are links to all the functionalities which can help you with resolving bunch of problems.
                Play around with text and charachters, converting different units, translating braille language,
                converting morse code, or ever wondered what details a website has of you? Check below links and
                let us know if we can add any other functionalities which can assist you!</p>
            {allButtons.map((el, index)=>{
                return(
                    <Fragment key={index}>
                        <Button className='btnBottom' variant="outline-light">
                            <Link key={index} href={'/algos/'+el.link}><a>{el.name}</a></Link>
                        </Button>
                    </Fragment>
                    )
                })
            }
            {/* <Nav className="mr-auto" style={{flexWrap: 'wrap'}} >
                <Nav.Link href={"/article/" + router}>{name}</Nav.Link> 
            </Nav> */}
        <style jsx>{`
            a{
                color: #8cb1ed
            }
            .allLinks{
                display: flex;
                flex-direction: row;
                justify-content: center;
                flex-wrap : wrap;
            }
            .btnBottom{
                padding: 0 0 0 0;
            }

        `}</style>
        </div>
        </div>
    )
}
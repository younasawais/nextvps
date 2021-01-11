import { Fragment } from "react";
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import {allPages} from '../pages/data.json';

export default function Bottom(){
    
    return(

        <div><hr/>
        <div className='allLinks'>
            <p>Below are links to all the functionalities which can help you with resolving bunch of problems.
                Play around with text and charachters, converting different units, translating braille language,
                converting morse code, or ever wondered what details a website has of you? Check below links and
                let us know if we can add any other functionalities which can assist you!</p>
            {allPages.map((el, index)=>{
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
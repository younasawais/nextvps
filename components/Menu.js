import { Nav, Navbar } from 'react-bootstrap';
import { Fragment } from 'react';

export default function Menu({articleMenuItems}) {
  return (
    <Fragment>
        {/* <Logo /> */}
        <Navbar bg="transparant" expand="lg" className='navebar'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <div className="test">
                        <Nav className="mr-auto" style={{flexWrap: 'wrap'}} >
                            {articleMenuItems.map( ({name, link}, index) => { return(
                                <Nav.Link key={index} href={"/algos/" + link}>{name}</Nav.Link>                            
                            )})}
                            {/* <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/dummy">Dummy</Nav.Link> */}
                        </Nav>
                    </div>
                </Navbar.Collapse>
        </Navbar>
        <style jsx>{`
            .navbar{
                display: flex;
                justify-content: space-between;
            }
            @media (min-Width: 991px){
                .test{
                    overflow-y: scroll;
                    max-height: 5rem;
                }
            }
            @media (max-Width: 991px){
                .test{
                    overflow-y: scroll;
                    max-height: 20rem;
                }
            }
            
        `}</style>
    </Fragment>
  )
}

// const styles = {
//     navOverFlow : {
//         flexWrap: 'wrap', 
//         maxHeight: '2rem'
//     }
// }

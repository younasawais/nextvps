import Menu from './Menu';
//import styles from './checkthis.module.css';

export default function Top({allMenus}){

    return(
            <div className='top'>
                <div className='menuTop'> 
                    <Menu 
                        articleMenuItems= {allMenus}
                    />
                </div>
            <style jsx>
                {`
                    .menuTop{
                        margin-left: 2px
                    }
                    .top{
                        height : 20%;
                        // background-color: yellow;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                    }
                `}
            </style>
        </div>
    )
}
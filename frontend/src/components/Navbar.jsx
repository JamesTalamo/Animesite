import '../styles/navbar.css'

import { Button } from '@chakra-ui/react'

let Navbar = () => {
    return (
        <div className='navbar'>
            <img
                src='./assets/navbarAssets/Frame%2072.png'
                id='navbar-logo'
            />

            <div className='navbar-button-container'>
                {/* <div className='navbar-button'>Genre</div>
                <div className='navbar-button'>Movies</div>
                <div className='navbar-button'>ONAs</div>
                <div className='navbar-button'>News</div> */}
                <Button size={'lg'} colorScheme='purple' variant={'outline'}>Genre</Button>
                <Button size={'lg'} colorScheme='purple' variant={'outline'}>Movies</Button>
                <Button size={'lg'} colorScheme='purple' variant={'outline'}>ONAs</Button>
                <Button size={'lg'} colorScheme='purple' variant={'outline'}>News</Button>
            </div>


        </div >
    )
}

export default Navbar
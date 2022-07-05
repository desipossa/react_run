import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header>
                <nav className='flexbar'>
                    <Link to="/">Home</Link>
                    <Link to="/CountUp">CountUp</Link>
                    <Link to="/Map">Map</Link>
                    <Link to="/ToggleClass">ToggleClass</Link>
                    <Link to="/Tab01">Tab01</Link>
                </nav>
            </header>
        </>
    )
}
export default Header;
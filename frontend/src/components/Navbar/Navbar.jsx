import './Navbar.css';

function Navbar({ onFlagClick, isLogAdded }) {
    return (
        <nav>
            <div>
                <ul>
                    <li>Sessies(1)</li>
                    <li>+</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Klantbeeld</li>
                    <li 
                        onClick={isLogAdded ? onFlagClick : null} 
                        style={{ cursor: isLogAdded ? 'pointer' : 'not-allowed' }}
                    >
                        <img src="/images/flag.svg" alt="Flag" />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

import './Navbar.css'

function Navbar() {
  return (
        <header className='navbar'>
            <nav>
                <input type="checkbox" id="checkbox" className="checkbox visuallyHidden" />
                <label htmlFor="checkbox">
                    <div className="hamburger">
                        <span className="bar bar1"></span>
                        <span className="bar bar2"></span>
                        <span className="bar bar3"></span>
                        <span className="bar bar4"></span>
                    </div>
                </label>
            </nav>
        </header>
    );
}

export default Navbar;
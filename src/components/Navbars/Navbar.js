import './Navbar.css'
function Navbar(){
    return(
            <nav>
                <ul className="navbar">
                    <li class="nav-item">
                        <a>Home</a>
                    </li>
             
                    <li class="nav-item"> <a>About</a></li>
              
                    <li class="nav-item"><a>Resume</a></li>
    
                    <li class="nav-item"><a>Contact</a></li>
                </ul>
                
            </nav>
    )
}

export default Navbar;

// speciificity of id is higher in css . 
// in css wwe use classes .
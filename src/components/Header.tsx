import logoText from "../assets/logo-text.png"

function Header(){
    return(
        <header className="flex items-center justify-between px-12 py-6">
            <div>
                <img src={logoText} alt="logo" />
            </div>
            <div className="flex items-center justify-between gap-6">
                <button>Home</button>
                <button>Technologies</button>
                <button>Project</button>
                <button>About</button>
                <button>Contact</button>
            </div>
            <div className="flex items-center justify-between gap-4">
                <button>Sign in</button>
                <button>Sign Up</button>
            </div>
        </header>
    )
}

export default Header
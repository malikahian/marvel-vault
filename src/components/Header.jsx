// header //

function Header({ totalCharacters }) { //recieve amount of characters as a prop
    return (
        <div className="header">
            <div className="header-left">
                <h1 className="header-title">Marvel Character Vault</h1>
                <p className="header-subtitle">Marvel Cinematic Universe</p>
            </div>
            <div className="header-right">
                <span className="header-badge">{totalCharacters} characters</span>
            </div>
        </div>
    )
}

export default Header;
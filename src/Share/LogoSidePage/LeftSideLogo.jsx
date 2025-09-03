
const Logo = require('../../assets/Gallery/Logo/Logo.png')
const LeftSideLogo = () => {
    return (
        <>
            <div className="">
                <center>
                    <img
                        className="img-fluid d-md-block d-none"
                        src={Logo}
                        alt="Logo"
                        style={{ maxWidth: "300px" }}
                    />
                    <img
                        className="img-fluid d-md-none d-block"
                        src={Logo}
                        alt="Logo"
                        style={{ maxWidth: "200px" }}
                    />
                    <h1 className="text-white fw-bold d-md-block d-none display-4">Fox</h1>
                </center>
            </div>
        </>
    )
}

export default LeftSideLogo
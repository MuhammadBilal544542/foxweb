
const Logo = require('../../assets/Gallery/Logo/Logo.png')
const LeftSideLogo = () => {
    return (
        <>
            <div className="">
                <center>
                    <img
                        className="img-fluid"
                        src={Logo}
                        alt="Logo"
                        style={{ maxWidth: "300px" }}
                    />
                    <h1 className="text-white fw-bold d-md-block d-none display-4">Fox</h1>
                </center>
            </div>
        </>
    )
}

export default LeftSideLogo
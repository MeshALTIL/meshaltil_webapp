import logo from '../assets/M-POWERED.svg'

export function Logo({ headline }) {
    return (
        <div className="logo">
            <div className="logo-img-wrapper">
                <img
                    className="logo-img"
                    src={logo}
                    alt="Meshtastic logo"
                    height="160"
                    width="160"
                />
            </div>
            <div className="headline">
                <h1>Meshtastic Alt IL Community</h1>
                <h2>{headline}</h2>
            </div>
        </div>
    )
}

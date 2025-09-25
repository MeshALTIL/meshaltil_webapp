import logo from '../assets/meshtastic.svg'
import ReactMarkdown from 'react-markdown'

import content from '../assets/markdown/config.md?raw'

export function Home() {
    return (
        <div class="home">
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
                    <h1>Meshtastic ALT IL</h1>
                    <h2>Node Configuration Settings</h2>
                </div>
            </div>

            <div className="content">
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </div>
    )
}

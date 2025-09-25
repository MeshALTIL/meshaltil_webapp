import logo from '../assets/meshtastic.svg'
import ReactMarkdown from 'react-markdown'

import config from '../assets/markdown/config.md'
import { useEffect, useState } from 'preact/hooks'

export function Home() {
    const [content, setContent] = useState('')

    useEffect(() => {
        fetch(config).then(res => res.text().then(t => setContent(t)))
    }, [])

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

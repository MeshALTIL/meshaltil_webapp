import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'preact/hooks'
import { Header } from '../components/Header'
import { Logo } from '../components/Logo'

import markdown from '../assets/markdown/basic_settings.md'

export function BasicSettings() {
    const [content, setContent] = useState(null)

    useEffect(() => {
        fetch(markdown).then(res => res.text().then(t => setContent(t)))
    }, [])

    return (
        <div>
            <Header />
            {!!content ? (
                <div class="content_wrapper">
                    <Logo headline={'Basic Node Configuration Settings'} />
                    <div className="content">
                        <ReactMarkdown>{content}</ReactMarkdown>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
}

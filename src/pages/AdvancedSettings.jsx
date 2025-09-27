import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'preact/hooks'
import { Header } from '../components/Header'
import { Logo } from '../components/Logo'

import markdown from '../assets/markdown/advanced_settings.md'

export function AdvancedSettings() {
    const [content, setContent] = useState('')

    useEffect(() => {
        fetch(markdown).then(res => res.text().then(t => setContent(t)))
    }, [])

    return (
        <div>
            <Header />
            {!!content ? (
                <div class="content_wrapper">
                    <Logo headline={'Advanced Node Configuration Settings'} />
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

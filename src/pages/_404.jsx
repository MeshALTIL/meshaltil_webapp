import { useEffect, useState } from 'preact/hooks'
import { Logo } from '../components/Logo'
export function NotFound() {
    const [ellipsis, setEllipsis] = useState(0)

    useEffect(() => {
        setInterval(() => setEllipsis(e => e + 1), 300)
        setTimeout(() => (window.location.href = '/meshtastic_alt_il/'), 2000)
    }, [])

    return (
        <section>
            <Logo headline={'404: Page Not Found'} />
            <p>Tracerouting{'.'.repeat(ellipsis)}</p>
        </section>
    )
}

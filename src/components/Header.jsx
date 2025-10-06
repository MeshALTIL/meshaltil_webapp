import { useLocation } from 'preact-iso'

export function Header() {
    const { url } = useLocation()
    const base = '/webapp/'
    return (
        <header>
            <nav>
                <a href={`${base}`} class={url == `${base}` && 'active'}>
                    Basic Settings
                </a>
                <a href={`${base}advanced`} class={url == `${base}advanced` && 'active'}>
                    Advanced Settings
                </a>
            </nav>
        </header>
    )
}

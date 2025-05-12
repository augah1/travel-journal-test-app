import journalLogo from "../images/globe.png"

export default function Header() {
    return (
        <header>
            <img src={journalLogo} />
            <h1>my travel journal.</h1>
        </header>
    )
}
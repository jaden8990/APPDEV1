import Title from './Title';

function Header() {

    const isLive = true;

    return (
        <header>
            <Title />
            <p>{isLive
            ? "Streaming from YouTube Music."
            : "offline Playlist."}
            </p>
        </header>
    );
}
export default Header;
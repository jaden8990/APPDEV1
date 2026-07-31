import { PLAYLIST_NAME, CURATOR } from "../constants"   ;

function hype(text) {
    return text.toUpperCase() + "🔥";
}

function Title() {
    return (
        <>
            <h1 className ="title">YouTube Music Playlist</h1>
            <p>Listen to Today's favorite tracks.</p>
            <p>{`${PLAYLIST_NAME} by ${CURATOR}`}</p>
            <p>{hype("now playing")}</p>
        </>
    );
    
}
export default Title;
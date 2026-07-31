import SongOne from "./SongOne";
import SongTwo from "./SongTwo";
import SongThree from "./SongThree";
import SongFour from "./SongFour";
import Divider from "../Divider"
import "./SongList.css";

function SongList() {
    return(
        <section>
            <div className = "song-card">
                <SongOne />
            </div>

            <Divider/>

            <div className = "song-card">
                <SongTwo />
            </div>

            <Divider/>

            <div className = "song-card">
            <SongThree />
            </div>

            <Divider/>

            <div className = "song-card">
                <SongFour/>
            </div>

        </section>
    );
}
export default SongList;
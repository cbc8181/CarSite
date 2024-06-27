import HomeFooter from "./home-footer";
import HomeLogin from "./home-login";
import MapFrame from "./map-frame";

export default function MainFooter() {
    return (
        <footer>
            <MapFrame></MapFrame>
            <HomeFooter></HomeFooter>
            <HomeLogin></HomeLogin>
        </footer>
    )
}
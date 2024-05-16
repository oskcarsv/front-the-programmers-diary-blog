import { Navbar } from "../../components/Navbar";
import { Post } from "../../components/Post";
import "./homePage.css";

export const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Post />
        </div>
    );
};
import { useState } from "react";
import { AddPost } from "../../components/AddPost";
import { Navbar } from '../../components/Navbar';
import './addPost.css';

export const AddPostPage = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <article>
                <div className="navContainer">
                    <Navbar className="divAddPost" />
                </div>
                <AddPost
                    loading={loading}
                    setLoading={setLoading}
                />
            </article>
        </>

    );
};
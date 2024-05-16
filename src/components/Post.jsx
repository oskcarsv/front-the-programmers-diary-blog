/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import useGetPosts from '../shared/hooks/useGetPosts';
import { useDeletePost } from '../shared/hooks'; 
import { CardPosts } from './CardPosts';
import { Link } from 'react-router-dom';

export const Post = () => {
    const { posts, loading, error, refetch } = useGetPosts();
    const { deletePostById } = useDeletePost();
    const [localPosts, setLocalPosts] = useState([]);

    useEffect(() => {
        setLocalPosts(posts);
    }, [posts]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const handleDelete = async (id) => {
        try {
            await deletePostById(id);
            setLocalPosts(localPosts.filter(publication => publication._id !== id));
        } catch (error) {
            console.error('Error al eliminar la publicación:', error);
        }
    };

    return (
        <section className='cards-container'>
            {localPosts.map(publication => (
                <div className="card" key={publication._id}>
                    <button onClick={() => handleDelete(publication._id)} className="delete-button">X</button>
                    <Link to={`/publicationContent/${publication._id}`} className='linkPost'>
                        <CardPosts
                            key={publication._id}
                            title={publication.title}
                            img={publication.img}
                        />
                    </Link>
                </div>
            ))}
        </section>
    );
};
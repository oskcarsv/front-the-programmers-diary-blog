import { Navbar } from '../../components/Navbar';
import { InfoPost } from '../../components/InfoPost';
import { useParams } from 'react-router-dom';

export const InfoPostPage = () => {
    
    const params = useParams();
    return (
        <div>
            <Navbar />
            <InfoPost id={ params.id } />
        </div>
    );
};
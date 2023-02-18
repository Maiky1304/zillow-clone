import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useRandomImage(query: string): string {
    const [image, setImage] = useState('');

    useEffect(() => {
        axios
            .get('/api/pexels/search', {
                params: {
                    query,
                },
            })
            .then(response => {
                setImage(response.data.large2x);
            })
            .catch(err => {
                console.error(err);
            });
    }, [query]);

    return image;
}

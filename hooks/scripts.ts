import { useState, useEffect } from 'react';

interface Params {
    [attribute: string]: any;
    callback?: () => void;
    id: string;
}


export const useScript = (src: string, { callback, id, }: Params) => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const existingScript = document.getElementById(id);

        if (!existingScript) {
            setLoaded(false)
            const script = document.createElement('script');
            script.src = src;
            script.id = id;
            script.onload = () => {
                setLoaded(true);
                if (callback) callback();
            };

            document.body.appendChild(script);
        } else {
            if (callback) callback();
        }
    }, []);

    return loaded;
};

import { useEffect, useState} from 'react';

const useFetchHook = () => {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchList = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
                const json = await response.json();
                setResult(json);
            } catch (error) {
                console.log(error)
            }
        }
        fetchList()
    }, [])

    return [result, loading]
}

export default useFetchHook;

export const useFetchCommentsHook = (postId) => {
    const [resultComment, setResultComment] = useState([])
    useEffect(() => {
        const fetchComments = async ()=> {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
                const json = await response.json();
                setResultComment(json);
            } catch (error) {
                console.log(error)
            }
        }
        fetchComments()
    }, [postId])
    return [resultComment]
}


import React, {useState, useEffect } from 'react';

import useFecthHook, { useFetchCommentsHook } from '../../services/useFetchHook';


const List = () => {
    // const [result, loading] = useFecthHook('posts');
    const [result] = useFecthHook();
    const [comment, setComment] = useState('');
    const [loadComment, setLoadComment] = useState(false)
    // console.log(result);
    console.log(result)
    console.log(comment)
    console.log(loadComment)
    
    const onCLickFetchComment = async (e) => {
        console.log(e.target.id)
        try {
            setLoadComment(true)
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${e.target.id}`);
            const json = await response.json();
            setComment(json)
            comment === '' ? setLoadComment(true) : setLoadComment(false)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <section>
                <div className='container'>
                    <div>
                        {result.map(elem => (
                        <div
                        key={elem.id}
                        id={elem.id}
                        onClick={onCLickFetchComment}>
                            {elem.title}
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default List; 
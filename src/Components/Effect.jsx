import {useEffect, useState} from 'react';

const Effect = () => {
    const [item, setItem] = useState([]);
    const [resource, setResource] = useState('posts');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
         fetch(`https://jsonplaceholder.typicode.com/${resource}`)
            .then(response => response.json())
            .then(json => setItem(json))
            console.log("re rendred"); 
            //return cleanup
            //call in unmount
            return (() => {
                console.log("unmounted");
            })
        
    }, [resource])

    //windows effect
    function handleResize(){
        setWindowWidth(window.innerWidth)
    }
    useEffect(() =>{
        window.addEventListener('resize', handleResize);
    }, []) //empty array mount
    return (
        <>
    <div>
        <h1>Hi</h1>
        <h1>{windowWidth}</h1>
        <button onClick={() => setResource('posts')}>posts</button>
        <button onClick={() => setResource('users')}>Users</button>
    </div>
    <h1>{resource}</h1>
    {item.map((item, id) => {
        return <pre key={id}>{JSON.stringify(item)}</pre>
    })}
    </>
  )
}

export default Effect
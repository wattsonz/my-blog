import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


type Props = {}

const Home = (props: Props) => {
    const [posts, setPosts] = useState([])
    const getPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        setPosts(data)
    }
    useEffect(() => {
        getPosts()
    }, [])

    const postsElements = posts?.map((post: any) => {
        return (
            <div key={post.id}>
                <h2><Link to={`post/${post.id}`}>{post.title}</Link></h2>
                <p>{post.body}</p>
                <hr />
            </div>
        )
    })

    return (
        <>
            <h1>Hello it's Home</h1>
            <hr />
            <h2>Posts</h2>
            <div>
                {postsElements}
            </div>
        </>
    )
}

export default Home
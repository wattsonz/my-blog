import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

type Props = {}

type Post = {
    id: number
    title: string
    body: string
}

const Div = styled.div`
    .normal {
        text-decoration: none;
    }
`

const Post = (props: Props) => {
    const { postId } = useParams()
    const [post, setPost] = useState<Post>()
    const [comments, setComments] = useState([])

    const getPost = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        const data = await response.json()
        setPost(data)
    }

    const getComments = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        const data = await response.json()
        setComments(data)
    }

    useEffect(() => {
        getPost()
        getComments()
    }, [])

    const commentsElements = comments?.map((comment: any) => {
        return (
            <div key={comment.id}>
                <h3>{comment.email}</h3>
                <p>{comment.body}</p>
                <hr />
            </div>
        )
    })

    return (
        <Div>
            <h1>Post - {post?.id}</h1>
            <hr />
            <h3>Content</h3>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
            <hr />
            <h3>Comments</h3>
            <div>{commentsElements}</div>
        </Div>
    )
}

export default Post
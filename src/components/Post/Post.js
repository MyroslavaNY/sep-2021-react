const Post = (posts) => {
    const {id, userId, title, body} = posts;
    return(
        <div>
            <div>{id}</div>
            <div>{userId}</div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    )
}
export default Post;
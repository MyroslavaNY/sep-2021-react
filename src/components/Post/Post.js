const Post = (props) => {
    const {userId, id, title, body} = props;
    return (
        <div>
            {userId} -- {id} -- {title} -- {body}
        </div>
    )
}
export default Post;

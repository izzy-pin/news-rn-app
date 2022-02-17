import Votes from "../Votes";
import UserImage from "./UserImage";
import { DefaultUserContext } from "../../../contexts/DefaultUser";
import { useContext } from "react";
import DeleteComment from "./DeleteComment";

const CommentCard = ({ comment, setDeletedComment, setCommentCount }) => {
  const createdDate = new Date(comment.created_at);
  const { user } = useContext(DefaultUserContext);

  return (
    <li className="CommentCard__li">
      <section className="CommentCard__body">
        <div className="CommentCard__userDiv">
          <UserImage username={comment.author} />
          <div className="CommentCard__infoDiv">
            <p>{comment.author}</p>
            <p>{createdDate.toUTCString()}</p>
          </div>
        </div>
        <p>{comment.body}</p>
        <div className="CommentCard__Buttons">
          <Votes
            votes={comment.votes}
            id={comment.comment_id}
            componentPath={"comments"}
          />
          {user.username === comment.author ? (
            <DeleteComment
              comment_id={comment.comment_id}
              setDeletedComment={setDeletedComment}
              setCommentCount={setCommentCount}
            />
          ) : null}
        </div>
      </section>
    </li>
  );
};

export default CommentCard;

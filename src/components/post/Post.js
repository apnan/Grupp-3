import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ img }) {
  return (
    <div className="post">
      <img className="postImg" src={img} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Entertainment
              
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Fun
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
           Don’t be late, join the fun!
          </Link>
        </span>
        <hr />
        <span className="postDate">Played 1 hour ago</span>
      </div>
      <p className="postDesc">
      Start playing Lorem Crush Saga today – a legendary puzzle game loved by many of players around the world.
      We hope you’re having fun playing our game! We update the game every week so don't forget to download the latest version to get all the sweet new features and levels!
      New to the game? Don’t be shy, join the fun!
      </p>
    </div>
  );
}

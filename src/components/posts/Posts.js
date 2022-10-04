import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://images.pexels.com/photos/228963/pexels-photo-228963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Post img="https://images.pexels.com/photos/9648783/pexels-photo-9648783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Post img="https://images.pexels.com/photos/2884572/pexels-photo-2884572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Post img="https://images.pexels.com/photos/8734282/pexels-photo-8734282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </div>
  );
}

import { Link } from "react-router-dom";

export default function PostDetail() {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae et,
          </div>
          <div className="post__profile-box">
            <div className="post__profile"></div>
            <div className="post__author-name">작성자 이름</div>
            <div className="post__date">{new Date().toISOString()}</div>
          </div>
          <div className="post__utils-box">
            <div className="post__update">
              <Link to={`/posts/edit/1`}>수정</Link>
            </div>
            <div className="post__delete">삭제</div>
          </div>
          <div className="post__title">post index</div>
          <div className="post__text">텍스트</div>
        </div>
      </div>
    </>
  );
}

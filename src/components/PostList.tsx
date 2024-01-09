import { useState } from "react";
import { Link } from "react-router-dom";

interface PostListProps {
  hasNavigation?: boolean;
}

type TabType = "all" | "my";

export default function PostList({ hasNavigation = true }: PostListProps) {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div
            role="presentation"
            onClick={() => setActiveTab("all")}
            className={activeTab === "all" ? "post__navigation--active" : ""}
          >
            전체
          </div>
          <div
            role="presentation"
            onClick={() => setActiveTab("my")}
            className={activeTab === "my" ? "post__navigation--active" : ""}
          >
            나의 글
          </div>
        </div>
      )}

      <div className="post-list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile"></div>
                <div className="post__author-name">작성자 이름</div>
                <div className="post__date">{new Date().toISOString()}</div>
              </div>
              <div className="post__title">post {index}</div>
              <div className="post__text">텍스트</div>
              <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__update">수정</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

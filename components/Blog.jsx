"use client";

import { useState, useEffect } from "react";
import "../styles/part2.css";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogPosts() {
      const apiUrl =
        "https://interdata.vn/blog/wp-json/wp/v2/posts?categories=148&per_page=4&orderby=date&order=desc&_embed";

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch posts");

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBlogPosts();
  }, []);

  return (
    <section className="block-bg bg-news py-7 py-xl-6">
      <div className="container">
        <div className="title-box mb-4 mb-xl-45 wow fadeIn text-center w-lg-75 mx-auto" style={{ visibility: 'visible' }}>
          <div className="tt tt-custom-bg x-mb-2">BLOG</div>
          <h2 className="tt-md tt-gradient text-uppercase x-mb-0" style={{ lineHeight: "1.7" }}>
            KIẾN THỨC - TÀI LIỆU HƯỚNG DẪN N8N
          </h2>
        </div>

        <div className="grid-news mx-auto" id="news-container">
          {isLoading ? (
            <div className="text-center">Đang tải...</div>
          ) : error ? (
            <div className="text-center">Không thể tải bài viết. Vui lòng thử lại sau.</div>
          ) : (
            posts.map((post, index) => {
              const imageUrl =
                index === 0 && post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
                  ? post._embedded["wp:featuredmedia"][0].source_url
                  : null;
              const postDate = new Date(post.date).toLocaleDateString("vi-VN");
              const postCategory =
                post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized";

              return (
                <div className="grid-news-item" key={post.id}>
                  <div className="block">
                    <a className="absolute" href={post.link} title={post.title.rendered}></a>
                    {imageUrl && (
                      <div className="thumb-res wide thumb-news">
                        <img src={imageUrl} alt={post.title.rendered} />
                      </div>
                    )}
                    <div className="info">
                      <div className="sub-info">
                        <span className="tag">{postCategory}</span>
                        <span className="datetime">{postDate}</span>
                      </div>
                      <h3 className="tt">
                        <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                      </h3>
                      <div className="desc">
                        <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                      </div>
                      <div className="link-more">
                        <span>Xem thêm <i className="fa fa-long-arrow-right"></i></span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
import getPostList from "./apiHandle.js"

const posts = await getPostList();

const postList = () => {
  return (`
  <ul class="post-list">
  ${posts.map(post =>
    `<li class="post-item">
    <article class="post">
      <div class="post-header d-flex">
        <div class="post-user d-flex">
          <img class="post-user-img" src=${post.userAvatar}
            alt="User's avatar">
          <p class="post-user-name">${post.userName}</p>
        </div>
        <span class="post-date text-secondary">${post.date}</span>
        <i class="icon icon-option"></i>
      </div>
      <a class="post-link d-flex row" href="../blog-detail/blog-detail.html">
        <div class="post-content col col-8">
          <h4 class="post-title">${post.title}</h4>
          <p class="post-desc text-secondary">${post.content}</p>
        </div>
        <div class="post-img col col-4">
          <img class="img-post" src="/html-practice/src/assets/images/post.png" alt="">
        </div>
      </a>
      <div class="post-info d-flex col-8">
        <div class="post-action">
          <ul class="action-list">
            <li class="action-item">
              <i class="icon icon-like"></i>
              <span class="action-count">${post.likes}</span>
            </li>
            <li class="action-item">
              <i class="icon icon-cmt"></i>
              <span class="action-count">${post.comments}</span>
            </li>
          </ul>
        </div>
        <div class="post-topic">
          <ul class="topic-list">

      ${post.topic.map(title =>
      ` <li class="topic-item">
        <a class="topic-link tab tab-secondary" href="">${title}</a>
      </li>
      `).join('')}
          </ul >
        </div >
      </div >
    </article >
  </li >
  `
  ).join('')}
  </ul>
  `)

}

const renderPostList = () => {
  const postSection = document.querySelector('.section-post')
  postSection.innerHTML = postList();
}

export default renderPostList

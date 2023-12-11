const posts = [
  { number: 0, message: 'test message', date: '1970-01-01T04:15', datetime: 'January 1st, 1970 4:15 AM' }
];

const postsPerPage = 10;
let currentPage = 0;

function createPost(post) {
  const article = document.createElement('article');
  article.classList.add('post');

  const info = document.createElement('div');
  info.classList.add('post__info');

  const date = document.createElement('time');
  date.classList.add('post__date');
  date.setAttribute('datetime', post.date);
  date.textContent = post.datetime;

  const number = document.createElement('p');
  number.classList.add('post__number');
  number.textContent = 'post #' + post.number;

  const message = document.createElement('div');
  message.classList.add('post__message');

  const p = document.createElement('p');
  p.textContent = post.message;

  message.appendChild(p);
  info.appendChild(date);
  info.appendChild(number);
  article.appendChild(info);
  article.appendChild(message);

  return article;
}

function displayPosts() {
  const start = currentPage * postsPerPage;
  const end = start + postsPerPage;
  const postsToDisplay = posts.slice(start, end);

  const postsDiv = document.getElementById('posts');
  postsDiv.innerHTML = '';

  postsToDisplay.forEach(post => {
    const postElement = createPost(post);
    postsDiv.appendChild(postElement);
  });

  if (start > 0) {
    document.getElementById('load-more').style.display = 'block';
  } else {
    document.getElementById('load-more').style.display = 'none';
  }
}

document.getElementById('load-more').addEventListener('click', () => {
  currentPage++;
  displayPosts();
});

displayPosts();
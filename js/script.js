// define an array of posts
const posts = [
  { number: 0, date: "1970-01-01T04:15", message: "test message" }
];

// define the number of posts displayed
let displayedPosts = 0;

// add posts to the site
function addPosts(count) {
  const container = document.querySelector('.main');

  // loop through the posts to add
  for (let i = displayedPosts; i < displayedPosts + count; i++) {
    if (i >= posts.length) break;
    const post = posts[i];

    // create the post structure
    const article = createPostStructure(post);
    container.appendChild(article);
  };

  displayedPosts += count;

  if (displayedPosts >= posts.length) {
    document.querySelector('.load-btn').remove();
  };
};

function createPostStructure(post) {
  const article = document.createElement('article');
  article.className = 'post';

  const postInfo = document.createElement('div');
  postInfo.className = 'post__info';

  const postDate = createPostDateElement(post.date);
  const postNumber = createPostNumberElement(post.number);

  const postMessage = createPostMessageElement(post.message);

  postInfo.appendChild(postDate);
  postInfo.appendChild(postNumber);
  article.appendChild(postInfo);
  article.appendChild(postMessage);

  return article;
};

function createPostDateElement(date) {
  const postDate = document.createElement('time');
  postDate.className = 'post__date';

  postDate.setAttribute('datetime', date);
  postDate.textContent = getFormattedDate(date);

  return postDate;
};

function createPostNumberElement(number) {
  const postNumber = document.createElement('p');
  postNumber.className = 'post__number';

  postNumber.textContent = 'post #' + number;

  return postNumber;
};

function createPostMessageElement(message) {
  const postMessage = document.createElement('div');
  postMessage.className = 'post__message';

  const p = document.createElement('p');
  p.textContent = message;
  postMessage.appendChild(p);

  return postMessage;
};

// format the date
function getFormattedDate(dateString) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];

  const [date, time] = dateString.split('T');
  const [year, month, day] = date.split('-');
  const [hour, minute] = time.split(':');

  const formattedDate = `${months[parseInt(month) - 1]} ${days[parseInt(day) - 1]}, ${year} ${hour}:${minute} ${hour < 12 ? 'AM' : 'PM'}`;

  return formattedDate;
};

// load more posts when the button is clicked
document.querySelector('.load-btn').addEventListener('click', () => {
  addPosts(10);
});

// load posts when the site is first loaded
document.addEventListener('DOMContentLoaded', () => {
  addPosts(10);
});
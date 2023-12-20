// define an array of posts
const posts = [
  { date: '2023-12-20T15:52', message: 'мало времени' },
  { date: '2023-12-19T23:17', message: 'в ближайшее время у меня будет новый пк и я смогу эффективно изучать программирование/веб. надеюсь будет работать нормально, ведь он на зеоне. но вроде серверные детали довольно надёжные.' },
  { date: '2023-12-17T22:25', message: 'бэм - интересная штука. пока остаются вопросы, но возможно, на практике пойму лучше.' },
  { date: '2023-12-17T17:16', message: '<p>вчера сделал скролл бар, всё оказалось просто. только теперь он виден и на телефонах. нужно потом исправить это.</p><p>убунту будет не скоро, по этому начинать писать программу для шифрования ещё не буду.</p><p>сейчас хочу начать писать портфолио, но для начала научусь правильно использовать бэм и scss.</p>' },
  { date: '2023-12-15T16:28', message: '<p>Yesterday I did everything I planned except for styling the scrollbar. There are problems with it because it&#39;s hard to make a scrollbar that is supported by all browsers. For this, you can use libraries, but yesterday I couldn&#39;t figure out how to do it. I liked the OverlayScrollbars library and a little later I will try again to understand the documentation.</p>' },
  { date: '2023-12-14T19:22', message: '<p>It seems that I have implemented the main features for this site that I wanted. There are small corrections and changes needed in the code:</p><ol><li>Style the scrollbar</li><li>Style the paragraphs that are nearby</li><li>Remove the bottom margin for the last ul and ol tags</li><li>Change the time format to 12-hour</li></ol><p>That&#39;s all I can remember right now. While solving these tasks, I might remember and do more.</p><p>Also, I will soon have Ubuntu OS. After its installation, I will start writing a program for encrypting and decrypting text. In the near future, my posts will be encrypted.</p>' },
  { date: '1970-01-01T04:15', message: '<p>test message</p>' },
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
    const article = createPostStructure(post, posts.length - 1 - i);
    container.appendChild(article);
  };

  displayedPosts += count;

  if (displayedPosts >= posts.length) {
    document.querySelector('.load-btn').remove();
  };
};

function createPostStructure(post, number) {
  const article = document.createElement('article');
  article.className = 'post';

  const postInfo = document.createElement('div');
  postInfo.className = 'post__info';

  const postDate = createPostDateElement(post.date);
  const postNumber = createPostNumberElement(number);

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

  postMessage.innerHTML = message;

  return postMessage;
};

// format the date
function getFormattedDate(dateString) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];

  const [date, time] = dateString.split('T');
  const [year, month, day] = date.split('-');
  let [hour, minute] = time.split(':');

  // convert hour to 12-hour format
  const period = hour < 12 ? 'AM' : 'PM';
  hour = (hour % 12) || 12; // 0 should be treated as 12 in 12-hour format

  const formattedDate = `${months[parseInt(month) - 1]} ${days[parseInt(day) - 1]}, ${year} ${hour}:${minute} ${period}`;

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
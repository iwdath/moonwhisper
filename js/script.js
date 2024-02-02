// define an array of posts
const posts = [
  { date: '2024-02-02T21:27', message: '<p>6b3c8ddb131578c517703ecbf3aec2959ed7f6e9131578c59e50a558b6a1fab36bd70ac937f8b4aef3aec2956b3c8ddbb6a1fab39ed7f6e9131578c524f95d32e8415c85b6a1fab317703ecb6bd70ac9b6a1fab32db5bc26131578c524f95d3237f8b4ae0abc8583b6a1fab36bd70ac9e8415c85b6a1fab323bcc905b6a1fab337f8b4ae6bd70ac9b6a1fab314e09ee3fcb5031bb6a1fab3131578c537f8b4ae131578c517703ecbe8415c85f3aec2950db38acbb6a1fab36bd70ac96b3c8ddbb6a1fab30abc85838f0cbf99131578c59ed7f6e96b3c8ddb79e365c324f95d32b6a1fab317703ecbf3aec2954e9d4637147ccbb2e8415c852ef02489b6a1fab3131578c5b6a1fab36bd70ac99ed7f6e9e8415c85131578c59e50a558b89e08d56b3c8ddb6bd70ac9147ccbb2b6a1fab36b3c8ddb6bd70ac99c3c0ef0aeefbe76fcb5031bb6a1fab36b3c8ddb131578c54e9d4637818e754c9e50a558b6a1fab33f7cede6131578c53f7cede6f3aec2955706bf73b6d057b9e8415c856bd70ac9b6a1fab302c7bd136bd70ac9e8415c856bd70ac90db38acbb6a1fab33f7cede66bd70ac9e8415c856bd70ac99c3c0ef079e365c3147ccbb2b6a1fab39c3c0ef0131578c57f96770e37f8b4ae131578c59d330c21e8415c85b6a1fab33f7cede69c3c0ef0f3aec29517703ecbe8415c850abc85832ef02489b6a1fab36b3c8ddb6bd70ac9b6a1fab317703ecb6bd70ac95706bf736bd70ac937f8b4ae0abc8583b6a1fab39ed7f6e93f7cede6131578c5aeefbe76b6a1fab3f3aec295b6a1fab30db38acb131578c52ffe4275147ccbb2b6a1fab39ed7f6e93f7cede60abc85838e6ba8106b3c8ddb6bd70ac9fcb5031bb6a1fab36b3c8ddb131578c537f8b4ae6bd70ac9b6a1fab30abc85838e6ba810f3aec295e8415c85b89e08d5b6a1fab366f65fdb9c3c0ef06bd70ac96b3c8ddbe8415c85147ccbb26b3c8ddb37f8b4aeb6a1fab302c7bd1379e365c39ed7f6e9e8415c859c3c0ef0147ccbb2147ccbb2b6a1fab3f3aec295b6a1fab3f3aec2959ed7f6e93f7cede6131578c5e8415c85b89e08d5b6a1fab30db38acb131578c53f7cede6131578c56b3c8ddb9ed7f6e9f3aec295f3aec295fcb5031bb6a1fab36b3c8ddb147ccbb217703ecb9e50a5586bd70ac95706bf736bd70ac9b6a1fab302c7bd1379e365c3b6a1fab3147ccbb22ffe4275818e754cb6a1fab39c3c0ef0147ccbb2131578c537f8b4aeaeefbe76f3aec295b6a1fab36b3c8ddb131578c5b6a1fab32db5bc26f3aec295e8415c85b6a1fab35706bf73131578c502c7bd13147ccbb2b6a1fab36bd70ac966f65fdb6bd70ac99c3c0ef0aeefbe76f3aec295e8415c85b89e08d52ef02489b6a1fab36b3c8ddb6bd70ac9b6a1fab3fc60142ee8415c856bd70ac9b6a1fab30abc85838f0cbf99147ccbb2b6a1fab317703ecb6bd70ac9b6a1fab3aeefbe76147ccbb29e50a5586bd70ac98e6ba810131578c5aeefbe76fcb5031bb6a1fab39ed7f6e9147ccbb224f95d328e6ba810131578c59ed7f6e9b6a1fab36b3c8ddb131578c537f8b4ae6bd70ac9b6a1fab337f8b4ae0abc8583aeefbe76131578c5e8415c85b89e08d5b6a1fab36bd70ac9b6a1fab3f3aec2957f96770e0abc85838e6ba810147ccbb26b3c8ddbf3aec295f3aec295b6a1fab39c3c0ef0147ccbb2131578c53f7cede6e8415c85131578c5b6a1fab3f3aec295b6a1fab3147ccbb2aeefbe760abc8583b6a1fab317703ecb6bd70ac937f8b4ae6bd70ac902c7bd136b3c8ddb79e365c35706bf73fcb5031b</p>' },
  { date: '2024-01-16T11:34', message: '<p>0db38acb8e6ba810147ccbb29c3c0ef0131578c5b6a1fab39ed7f6e937f8b4ae147ccbb29e50a558131578c59e50a558b6a1fab337f8b4aef3aec2957f96770e131578c524f95d326b3c8ddbb6a1fab337f8b4ae9e50a5585ecb7fe6b6a1fab317703ecb9c3c0ef06bd70ac92db5bc269c3c0ef0131578c5aeefbe76aeefbe7679e365c3b6a1fab34e9d4637f3aec29566f65fdb9c3c0ef06bd70ac90db38acb131578c56b3c8ddbf3aec2955ecb7fe6b6a1fab3f3aec295b6a1fab3e8415c85131578c53f7cede6b6a1fab33f7cede6131578c53f7cede6b6a1fab39ed7f6e9147ccbb22db5bc266bd70ac937f8b4ae6b3c8ddb5ecb7fe6b6a1fab30db38acbe8415c856bd70ac99c3c0ef06b3c8ddbf3aec2953f7cede62ef02489b6a1fab30abc8583b6a1fab3aeefbe76147ccbb26b3c8ddb5ecb7fe6b6a1fab36bd70ac9e8415c8537f8b4ae79e365c35706bf73fcb5031bb6a1fab37f96770e131578c50db38acbe8415c859c3c0ef0131578c5b6a1fab317703ecb6bd70ac90db38acbe8415c856bd70ac99c3c0ef09d330c21b6a1fab337f8b4ae6bd70ac93f7cede60abc8583aeefbe76147ccbb26b3c8ddbe8415c85131578c5dc846deef3aec2959d330c21b6a1fab32af27cceebef8b5b84b1164ab6a1fab3f3aec295b6a1fab36b3c8ddb131578c58e6ba8106b3c8ddb0abc8583b6a1fab317703ecbf3aec2959ed7f6e9131578c5e8415c85b89e08d5b6a1fab317703ecb9c3c0ef0131578c53f7cede6e8415c85f3aec2958e6ba810147ccbb29ed7f6e93f7cede6f3aec29524f95d32b6a1fab39ed7f6e9131578c524f95d32e8415c85fcb5031b</p>' },
  { date: '2024-01-13T23:00', message: '<p style="word-break: normal;">программа для шифрования готова. от сегодняшнего дня буду писать зашифрованным текстом.</p><p>0db38acb79e365c302c7bd13147ccbb29c3c0ef0f3aec295b6a1fab39ed7f6e95706bf73131578c59c3c0ef03f7cede66b3c8ddb0abc8583e8415c85b89e08d5b6a1fab30db38acbaeefbe76147ccbb29ed7f6e9e8415c856bd70ac9b6a1fab317703ecb9c3c0ef06bd70ac92db5bc269e50a5586bd70ac9e8415c85f3aec295e8415c85b89e08d5b6a1fab3f3aec295b6a1fab3e8415c8579e365c3b6a1fab36b3c8ddb147ccbb217703ecb6bd70ac902c7bd13147ccbb237f8b4aef3aec295aeefbe76</p><p style="word-break: normal;">шифр банальный, но лучше шифра цезаря</p>' },
  { date: '2024-01-07T19:10', message: '<p style="word-break: normal;">сегодня не спал всю ночь, хочу попробовать найти время сна которое будет достаточно чтобы проснуться бодрым. попробую спать 8 часов и дальше буду решать по самочувствию</p><p style="word-break: normal;">я уже наигрался и завтра с утра начну обучаться дальше. много времени потратил, это не хорошо</p>' },
  { date: '2024-01-01T15:50', message: '<p style="word-break: normal;">пишу уже с нового пк. было много проблем из-за того что диск от ноута был записан с помощью устаревшей файловой системой и нужно было всё перезаписывать</p><p style="word-break: normal;">убунту не очень понравилась из-за того что довольно сложно там всё и программ/драйверов многих нет, а разбираться я пока что не хочу в этом. поставил последнюю версию 11 винды и всё нормально</p><p style="word-break: normal;">пк работает отлично, всё очень плавно и быстро. играю пока что в trove и делаю майнкрафт сборку. буду играть по вторникам, а так как сейчас новый год, играю и в понедельник</p><p style="word-break: normal;">вот комплектующие пк:</p><ul><li style="word-break: normal;">Процессор Intel Xeon E5-2650 v2 (2.6GHz-TB3.3GHz)</li><li style="word-break: normal;">Видеокарта Radeon RX 570 (4GB)</li><li style="word-break: normal;">ОЗУ x2 16GB DDR3-1600 SDRAM</li><li style="word-break: normal;">Материнка C600/X79 chipset</li><li style="word-break: normal;">БП Qube 600W (QBF-HPG-600W-12S)</li><li style="word-break: normal;">Корпус Prologix E107</li><li style="word-break: normal;">Монитор HP Compaq LA2405x</li></ul>' },
  { date: '2023-12-29T21:55', message: '<p style="word-break: normal;">посмотрел гайды по grid, scss и sass. overflow кажется мне не поможет, тоже немного читал об этом свойстве.</p><p style="word-break: normal;">планы на выходные поменялись, верстать практику и портфолио буду когда приедет монитор, потому что на ноуте это очень тяжело делать. я хочу начать верстать с gulp сборкой, а она сильно нагружает ноут.</p><p style="word-break: normal;">сейчас хочу начать делать сборку для майнкрафта чтобы проверить комп на мощность и чтобы иногда играть.</p>' },
  { date: '2023-12-29T18:48', message: '<p style="word-break: normal;">из-за обстрелов, доставка задерживается, поэтому монитор может не приехать до нового года. пока что буду продолжать учиться на ноуте. в планах на выходные:</p><ul><li style="word-break: normal;">посмотреть гайд grid</li><li style="word-break: normal;">понять работу свойства overflow</li><li style="word-break: normal;">посмотреть гайд scss</li><li style="word-break: normal;">сделать анимацию для moonwhisper</li><li style="word-break: normal;">написать сайт-практику</li><li style="word-break: normal;">начать писать сайт-портфолио</li></ul><p style="word-break: normal;">некоторые из пунктов я хотел сделать вчера, но не получилось. не уверен что смогу сделать всё из списка за выходные, но попробую</p>' },
  { date: '2023-12-28T22:02', message: '<p style="word-break: normal;">приехал диск на 160гб который я поставлю в свой старый ноут, а из ноута на 500гб поставлю в пк</p><p style="word-break: normal;">сегодня хочу посмотреть гайд по grid и возможно scss и свойство overflow: hidden. мне кажется что это свойство может быть полезно при использовании анимаций выезжания блока из-за экрана на телефонах</p>' },
  { date: '2023-12-27T20:45', message: '<p style="word-break: normal;">отправили монитор, была ошибка какая-то. в проге пишет что он приедет 30 числа :/</p><p style="word-break: normal;">ну хоть не после нового года</p>' },
  { date: '2023-12-26T21:18', message: '<p style="word-break: normal;">монитор ещё не отправили, хотя должны были сегодня. надеюсь завтра отправят чтобы до нового года приехал. хочется на новый год уже с новым пк быть</p>' },
  { date: '2023-12-25T15:25', message: '<p style="word-break: normal;">крч не получилось, потому что я хотел к пк подключить ноутбук в качестве монитора, но видимо у ноута только видеовыход, а не видеовход и нужен монитор</p><p style="word-break: normal;">заказал монитор, скоро отправят и по идее теперь смогу всё сделать</p>' },
  { date: '2023-12-24T23:56', message: '<p style="word-break: normal;">не получилось</p>' },
  { date: '2023-12-23T23:49', message: '<p style="word-break: normal;">выбрал место на столе под пк, завтра возможно включу. нужен кабель vga и переходник vga dp чтобы подключить к монитору.</p><p style="word-break: normal;">пк больше чем я думал. выглядит огромным</p>' },
  { date: '2023-12-22T19:50', message: '<p style="word-break: normal;">получил пк, поставил в него диск, через два дня куплю переходник и запущу</p>' },
  { date: '2023-12-21T19:06', message: '<p style="word-break: normal;">пк уже приехал на почту, завтра заберу его, а пока что продолжаю смотреть видео по flexbox, grid.</p><p style="word-break: normal;">почитал немного о линуксе и теперь не уверен что буду использовать его. много программ которые мне нужны работают только на виндовс или мак. в любом случае когда подключу пк, немного посижу на убунту и решу какую ос использовать.</p>' },
  { date: '2023-12-20T20:14', message: '<p style="word-break: normal;">scss не сложный, но хочу ещё подробнее разобраться в flexbox, grid, svg и после этого пойду делать вёрстку по макету</p>'},
  { date: '2023-12-20T15:52', message: '<p style="word-break: normal;">мало времени</p>' },
  { date: '2023-12-19T23:17', message: '<p style="word-break: normal;">в ближайшее время у меня будет новый пк и я смогу эффективно изучать программирование/веб. надеюсь будет работать нормально, ведь он на зеоне. но вроде серверные детали довольно надёжные.</p>' },
  { date: '2023-12-17T22:25', message: '<p style="word-break: normal;">бэм - интересная штука. пока остаются вопросы, но возможно, на практике пойму лучше.</p>' },
  { date: '2023-12-17T17:16', message: '<p style="word-break: normal;">вчера сделал скролл бар, всё оказалось просто. только теперь он виден и на телефонах. нужно потом исправить это.</p><p style="word-break: normal;">убунту будет не скоро, по этому начинать писать программу для шифрования ещё не буду.</p><p style="word-break: normal;">сейчас хочу начать писать портфолио, но для начала научусь правильно использовать бэм и scss.</p>' },
  { date: '2023-12-15T16:28', message: '<p style="word-break: normal;">Yesterday I did everything I planned except for styling the scrollbar. There are problems with it because it&#39;s hard to make a scrollbar that is supported by all browsers. For this, you can use libraries, but yesterday I couldn&#39;t figure out how to do it. I liked the OverlayScrollbars library and a little later I will try again to understand the documentation.</p>' },
  { date: '2023-12-14T19:22', message: '<p style="word-break: normal;">It seems that I have implemented the main features for this site that I wanted. There are small corrections and changes needed in the code:</p><ol><li style="word-break: normal;">Style the scrollbar</li><li style="word-break: normal;">Style the paragraphs that are nearby</li><li style="word-break: normal;">Remove the bottom margin for the last ul and ol tags</li><li style="word-break: normal;">Change the time format to 12-hour</li></ol><p style="word-break: normal;">That&#39;s all I can remember right now. While solving these tasks, I might remember and do more.</p><p style="word-break: normal;">Also, I will soon have Ubuntu OS. After its installation, I will start writing a program for encrypting and decrypting text. In the near future, my posts will be encrypted.</p>' },
  { date: '1970-01-01T04:15', message: '<p style="word-break: normal;">test message</p>' },
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
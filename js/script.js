// define an array of posts
const posts = [
  {
    date: '2024-03-17T20:03', message: '\
    <p>обновлённый список комплектующих пк:</p>\
    <ul>\
      <li>Процессор Intel Xeon E5-2650 v2 (2.6GHz-TB3.3GHz)</li>\
      <li>Видеокарта Radeon RX 570 (4GB)</li>\
      <li>ОЗУ x2 16GB DDR3-1600 SDRAM</li>\
      <li>Материнка C600/X79 chipset</li>\
      <li>БП Qube 600W (QBF-HPG-600W-12S)</li>\
      <li>Кулер ID-COOLING SE-903-SD</li>\
      <li>Корпус Prologix E107</li>\
      <li>Монитор HP Compaq LA2405x</li>\
    </ul>\
    <p>девайсы:</p>\
    <ul>\
      <li>Клавиатура Razer BlackWidow V3 TKL</li>\
      <li>Мышь Greenwave GM-4861L</li>\
      <li>Наушники Baseus Encok WM01 Plus</li>\
      <li>Коврик для мыши Havit MP845</li>\
    </ul>'
  },
  {
    date: '2024-03-17T19:47', message: '\
    <p>пока форматировал js файл, читал все старые посты и вспомнил как себя ощущал тогда, о чём думал.</p>\
    <p>полезно иногда почитать старые мысли. хорошо что сделал этот сайт.</p>'
  },
  {
    date: '2024-03-17T18:55', message: '\
    <p>зашифрованный текст выглядит неприятно и нужно совершать лишние действия для его шифровки, а я люблю автоматизацию и краткость, которую на данный момент не могу сделать.</p>\
    <p>для того что я хочу, скорее всего нужны хостинги и базы данных, на которые у меня нет денег.</p>'
  },
  {
    date: '2024-03-16T19:36', message: '\
    <p>наверное не нужно было шифровать сообщения, из-за этого не хочется писать сюда что-то.</p>\
    <p>завтра расшифрую все зашифрованные посты и сделаю репозиторий с шифратором публичным. исправлю некоторые детали и будет лучше, + нужно обдумать что делать дальше.</p>'
  },
  {
    date: '2024-02-23T19:05', message: '\
    <p>придумал интересную идею для будущего сайта.</p>\
    <p>можно сделать сайт на котором будут все мои практические работы и ссылка на этот сайт может размещаться в моём портфолио. наверное лучше всего будет сделать этот сайт в портфолио, а не отдельно. надо немного подучиться делать скрипты, чтобы на сайт портфолио автоматически подгружались все мои практические работы. можно подобное сделать и с пет проектами.</p>'
  },
  {
    date: '2024-02-02T21:27', message: '\
    <p>написал один сайт по гайду от 0 до 1. адаптив он ужасный пишет, а остальное норм. нашёл каких-то ботов которые раздают крипту, но походу скам и ваще скучно. надо учить фронтенд быстрее и искать вакансии. неплохо бы ещё реадми на гит хабе оформить, но это уже по мелочам. сейчас надо думать о изучении реакта и ему подобных.</p>'
  },
  {
    date: '2024-01-16T11:34', message: '\
    <p>вчера сделал дизайн для программы шифрования и так как сегодня вторник, у меня отдых. завтра повторю документацию bem и начну писать практический сайт.</p>'
  },
  {
    date: '2024-01-13T23:00', message: '\
    <p>программа для шифрования готова. от сегодняшнего дня буду писать зашифрованным текстом.</p>\
    <p>шифр банальный, но лучше шифра цезаря</p>'
  },
  {
    date: '2024-01-07T19:10', message: '\
    <p>сегодня не спал всю ночь, хочу попробовать найти время сна которое будет достаточно чтобы проснуться бодрым. попробую спать 8 часов и дальше буду решать по самочувствию</p>\
    <p>я уже наигрался и завтра с утра начну обучаться дальше. много времени потратил, это не хорошо</p>'
  },
  {
    date: '2024-01-01T15:50', message: '\
    <p>пишу уже с нового пк. было много проблем из-за того что диск от ноута был записан с помощью устаревшей файловой системой и нужно было всё перезаписывать</p>\
    <p>убунту не очень понравилась из-за того что довольно сложно там всё и программ/драйверов многих нет, а разбираться я пока что не хочу в этом. поставил последнюю версию 11 винды и всё нормально</p>\
    <p>пк работает отлично, всё очень плавно и быстро. играю пока что в trove и делаю майнкрафт сборку. буду играть по вторникам, а так как сейчас новый год, играю и в понедельник</p>\
    <p>вот комплектующие пк:</p>\
    <ul>\
      <li>Процессор Intel Xeon E5-2650 v2 (2.6GHz-TB3.3GHz)</li>\
      <li>Видеокарта Radeon RX 570 (4GB)</li>\
      <li>ОЗУ x2 16GB DDR3-1600 SDRAM</li>\
      <li>Материнка C600/X79 chipset</li>\
      <li>БП Qube 600W (QBF-HPG-600W-12S)</li>\
      <li>Корпус Prologix E107</li>\
      <li>Монитор HP Compaq LA2405x</li>\
    </ul>'
  },
  {
    date: '2023-12-29T21:55', message: '\
    <p>посмотрел гайды по grid, scss и sass. overflow кажется мне не поможет, тоже немного читал об этом свойстве.</p>\
    <p>планы на выходные поменялись, верстать практику и портфолио буду когда приедет монитор, потому что на ноуте это очень тяжело делать. я хочу начать верстать с gulp сборкой, а она сильно нагружает ноут.</p>\
    <p>сейчас хочу начать делать сборку для майнкрафта чтобы проверить комп на мощность и чтобы иногда играть.</p>'
  },
  {
    date: '2023-12-29T18:48', message: '\
    <p>из-за обстрелов, доставка задерживается, поэтому монитор может не приехать до нового года. пока что буду продолжать учиться на ноуте. в планах на выходные:</p>\
    <ul>\
      <li>посмотреть гайд grid</li>\
      <li>понять работу свойства overflow</li>\
      <li>посмотреть гайд scss</li>\
      <li>сделать анимацию для moonwhisper</li>\
      <li>написать сайт-практику</li>\
      <li>начать писать сайт-портфолио</li>\
    </ul>\
    <p>некоторые из пунктов я хотел сделать вчера, но не получилось. не уверен что смогу сделать всё из списка за выходные, но попробую</p>'
  },
  {
    date: '2023-12-28T22:02', message: '\
    <p>приехал диск на 160гб который я поставлю в свой старый ноут, а из ноута на 500гб поставлю в пк</p>\
    <p>сегодня хочу посмотреть гайд по grid и возможно scss и свойство overflow: hidden. мне кажется что это свойство может быть полезно при использовании анимаций выезжания блока из-за экрана на телефонах</p>'
  },
  {
    date: '2023-12-27T20:45', message: '\
    <p>отправили монитор, была ошибка какая-то. в проге пишет что он приедет 30 числа :/</p>\
    <p>ну хоть не после нового года</p>'
  },
  {
    date: '2023-12-26T21:18', message: '\
    <p>монитор ещё не отправили, хотя должны были сегодня. надеюсь завтра отправят чтобы до нового года приехал. хочется на новый год уже с новым пк быть</p>'
  },
  {
    date: '2023-12-25T15:25', message: '\
    <p>крч не получилось, потому что я хотел к пк подключить ноутбук в качестве монитора, но видимо у ноута только видеовыход, а не видеовход и нужен монитор</p>\
    <p>заказал монитор, скоро отправят и по идее теперь смогу всё сделать</p>'
  },
  {
    date: '2023-12-24T23:56', message: '\
    <p>не получилось</p>'
  },
  {
    date: '2023-12-23T23:49', message: '\
    <p>выбрал место на столе под пк, завтра возможно включу. нужен кабель vga и переходник vga dp чтобы подключить к монитору.</p>\
    <p>пк больше чем я думал. выглядит огромным</p>'
  },
  {
    date: '2023-12-22T19:50', message: '\
    <p>получил пк, поставил в него диск, через два дня куплю переходник и запущу</p>'
  },
  {
    date: '2023-12-21T19:06', message: '\
    <p>пк уже приехал на почту, завтра заберу его, а пока что продолжаю смотреть видео по flexbox, grid.</p>\
    <p>почитал немного о линуксе и теперь не уверен что буду использовать его. много программ которые мне нужны работают только на виндовс или мак. в любом случае когда подключу пк, немного посижу на убунту и решу какую ос использовать.</p>'
  },
  {
    date: '2023-12-20T20:14', message: '\
    <p>scss не сложный, но хочу ещё подробнее разобраться в flexbox, grid, svg и после этого пойду делать вёрстку по макету</p>'
  },
  {
    date: '2023-12-20T15:52', message: '\
    <p>мало времени</p>'
  },
  {
    date: '2023-12-19T23:17', message: '\
    <p>в ближайшее время у меня будет новый пк и я смогу эффективно изучать программирование/веб. надеюсь будет работать нормально, ведь он на зеоне. но вроде серверные детали довольно надёжные.</p>'
  },
  {
    date: '2023-12-17T22:25', message: '\
    <p>бэм - интересная штука. пока остаются вопросы, но возможно, на практике пойму лучше.</p>'
  },
  {
    date: '2023-12-17T17:16', message: '\
    <p>вчера сделал скролл бар, всё оказалось просто. только теперь он виден и на телефонах. нужно потом исправить это.</p>\
    <p>убунту будет не скоро, по этому начинать писать программу для шифрования ещё не буду.</p>\
    <p>сейчас хочу начать писать портфолио, но для начала научусь правильно использовать бэм и scss.</p>'
  },
  {
    date: '2023-12-15T16:28', message: '\
    <p>Yesterday I did everything I planned except for styling the scrollbar. There are problems with it because it&#39;s hard to make a scrollbar that is supported by all browsers. For this, you can use libraries, but yesterday I couldn&#39;t figure out how to do it. I liked the OverlayScrollbars library and a little later I will try again to understand the documentation.</p>'
  },
  {
    date: '2023-12-14T19:22', message: '\
    <p>It seems that I have implemented the main features for this site that I wanted. There are small corrections and changes needed in the code:</p>\
    <ol>\
      <li>Style the scrollbar</li>\
      <li>Style the paragraphs that are nearby</li>\
      <li>Remove the bottom margin for the last ul and ol tags</li>\
      <li>Change the time format to 12-hour</li>\
    </ol>\
    <p>That&#39;s all I can remember right now. While solving these tasks, I might remember and do more.</p>\
    <p>Also, I will soon have Ubuntu OS. After its installation, I will start writing a program for encrypting and decrypting text. In the near future, my posts will be encrypted.</p>'
  },
  {
    date: '1970-01-01T04:15', message: '\
    <p>test message</p>'
  },
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
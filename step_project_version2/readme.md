## Task

Create the [layout](https://www.figma.com/file/Do0TLndoEjGwuF9Ri7UHol/The_Ham_Steo-Project?node-id=1%3A2). Implement dynamic elements (see below).

#### Technical requirements for the layout
- The layout should be made for widescreen monitors with a screen width of 1200 pixels or more (i.e., the content width is fixed in pixels). The maximum width of the content container is 1160 pixels (except for the second block with squares).
- The background image in the header should occupy the entire available screen width and not move when scrolling down (parallax effect).
- Responsive design for different screen resolutions is NOT required.
- Cards in the `Breaking news` section should be clickable links.
- The `Gallery of best images` section is optional.
- The layout should be done without using CSS libraries like Bootstrap or Materialize.

#### Dynamic elements on the page:
- Tabs in the `Our services` section should switch when clicked. Add any text and images for other tabs.
- The `Load more` button in the `Our amazing work` section simulates loading new images from the server. When clicked, 12 more images should appear at the bottom of the section (you can use any images). After this, the button disappears.
- The buttons in the `Our amazing work` section act as "product filters." Each image should be assigned one of four categories at your discretion (in the mockup these are `Graphic design`, `Web design`, `Landing pages`, `Wordpress`). Clicking on a category button should show only the images that belong to that category. `All` shows images from all categories. Categories can be renamed, and images for the categories can be any.
- The carousel in the `What people say about theHam` section should be functional, with the image and text changing when clicking on the photo icon at the bottom or the left-right arrows. The carousel must have animation.
- Any libraries can be used to connect dynamic elements – either jQuery/its plugins or pure JavaScript code.

#### Optional advanced tasks:
- The `Load more` button in the `Our amazing work` section can be clicked twice, with each click adding 12 images at the bottom. A maximum of 36 images can be in this section. After the second click, the button disappears.
- Also, layout the `Gallery of best images` section, positioning the images inside the block using the [Masonry](https://masonry.desandro.com/) plugin.
- The `Load more` button in the `Gallery of best images` section should also be functional and add a batch of new images to the page.
- When clicking each of the `Load more` buttons, simulate image loading from the server. Display a CSS loading animation for two seconds instead of the button or above it (you can write your own or use any example from the internet, for example [here](https://freefrontend.com/css-loaders/) or [here](http://nisnom.com/preloadery-loader/)), and only after that add the images to the page.
- Publish the project online using [Github pages](https://pages.github.com/) or [Gitlab pages](https://docs.gitlab.com/ee/user/project/pages/) (Don't forget to add the link to your resume afterward).

For convenience, all images from the mockup are placed in the [archive](./Step%20Project%20Ham%20Pictures.zip).

#### Good luck!



## Завдання

Зверстати [макет](https://www.figma.com/file/Do0TLndoEjGwuF9Ri7UHol/The_Ham_Steo-Project?node-id=1%3A2). Підключити динамічні елементи (див. нижче)

#### Технічні вимоги до верстки
- Потрібно зробити верстку тільки під широкоформатні монітори з шириною екрану 1200 пікселів або більше (тобто ширина контенту фіксована в пікселях). Максимальна ширина контейнера з контентом – 1160 пікселів (крім другого блоку з квадратами).
- Фонове зображення в шапці повинне займати всю доступну ширину екрана і не рухатися під час скролу вниз (ефект паралаксу).
- Адаптивна верстка під різні роздільні здатності екрана НЕ потрібна.
- Картки в секції `Breaking news` мають бути клікабельними посиланнями.
- Секція `Gallery of best images` не є обов'язковою для виконання.
- Верстка має бути виконана без використання CSS бібліотек типу Bootstrap або Materialize.

#### Динамічні елементи на сторінці:
- Вкладки у секції `Our services` повинні перемикатися при натисканні мишею. Текст та картинки для інших вкладок додати будь-які.
- Кнопка `Load more` у секції `Our amazing work` імітує завантаження з сервера нових картинок. При її натисканні в секції знизу мають з'явитись ще 12 картинок (зображення можна взяти будь-які). Після цього кнопка зникає.
- Кнопки на вкладці `Our amazing work` є "фільтрами продукції". Попередньо кожній із картинок потрібно присвоїти одну з чотирьох категорій, на ваш розсуд (на макеті це `Graphic design`, `Web design`, `Landing pages`, `Wordpress`).При натисканні на кнопку категорії необхідно показати лише ті картинки, які належать до цієї категорії. `All` показує картинки з усіх категорій. Категорії можна перейменувати, картинки для категорій взяти будь-які. 
- Карусель на вкладці `What people say about theHam` має бути робочою, по кліку як на іконку фотографії внизу, так і на стрілки вправо-вліво. У каруселі має змінюватися як картинка, і текст. Карусель обов'язково має бути з анімацією.
- Для підключення динамічних елементів можна використовувати будь-які бібліотеки – як jQuery/його плагіни, так і чистий Javascript код.
   
#### Необов'язкові завдання підвищеної складності:
- Кнопку `Load more` у секції `Our amazing work` можна натиснути двічі, кожне натискання додає 12 картинок знизу. Тобто максимум у цій секції може бути 36 картинок. Після другого натискання кнопка зникає.
- Зверстати також секцію `Gallery of best images`, розташувати картинки всередині блоку за допомогою плагіну [Masonry](https://masonry.desandro.com/).
- Кнопка `Load more` у секції `Gallery of best images` також має бути робочою та додавати порцію нових картинок на сторінку.
- При натисканні на кожну з кнопок `Load more` імітувати завантаження картинок із сервера. Показувати замість кнопки або над нею дві секунди CSS анімацію завантаження (можна написати самому або взяти будь-який приклад з інтернету, наприклад [тут](https://freefrontend.com/css-loaders/) або [тут](http://nisnom.com/preloadery-loader/)), і лише після цього додавати картинки на сторінку.
- Розмістити проект в інтернеті за допомогою [Github pages](https://pages.github.com/) або [Gitlab pages](https://docs.gitlab.com/ee/user/project/pages/) (Не забудьте потім додати посилання на резюме).

Для зручності всі картинки з макету розміщені в [архіві](./Step%20Project%20Ham%20Pictures.zip).

#### Удачі!

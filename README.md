# Проект "Travel blog"

Проект представляет собой реакт приложение с информацией о путешествиях тревэл блогера.

# Разработка

Для разработки и корректного отображения проекта необходим Node.js.
Чтобы проверить установлен ли node и его менеджер пакетов (npm), воспользуйтесь следующими командами:

$ node --version
$ npm --version

Если Node.js не установлен, пройдите на официальный сайт https://nodejs.org/ru и скачайте его последнюю версию.
После загрузки склонируйте репозиторий и установите Node через менеджер пакетов:

$ npm install

далее поключите node modules:
$ npm i

# Запуск

Для запуска приложения наберите в терминале:

фронтенд

### `npm start`

бэкэнд

### `npm run dev`

# Стек технологий

-   HTML5
-   CSS3 (SASS / SCSS)
-   JavaScript (ES6+)
-   React
-   Redux
-   React Router
-   Express (для работы с CRUD операциями)

# Библиотеки

-   Ant Design 5.0 (UI компоненты)
-   Axios
-   Day.js
-   API Яндекс карт
-   ReactPlayer

# Структура проекта

Проект представляет собой реакт приложение, которое разделено на несколько частей.

1. Greeting - первоначальная информация о блогере, а также фотогалерея из мест, которые он посетил. Для перехода на эту страницу в Header есть соответствующая иконка;

2. About - информация об истории блогера и причинах начала ведения блога, а также ряд его фотографий. Для перехода на эту страницу в Header есть раздел "Обо мне".

3. Video - видеокарточки для стран. Для каждой страны предусмотрено по три видео, которые ототбражаются при нажатии на конкретный регион/город. Если по стране есть информация в базе данных destinations.js, то на карточке отображается кнопка "В путешествие".
   На данной странице предусмотрено:
   a. Добавление видеокарточки. При нажатии на кнопку "Добавить" появляется специальная форма, при заполнении которой видеокарточка появляется на странице Видео;
   b. Редактировние и удаление видеокарточки. При нажатии на видеокарточку появляется Popover c 2мя кнопками: редактировать и удалить. При нажатии на кнопку "Редактировать" появляется специальная форма, в которой можно отредактировать данные видеокарточки. При нажатии на кнопку "Удалить" появляется уведомление с подтверждением удаления / отмены удаления карточки;
   c. Поиск видео через поисковую панель. Поиск можно осуществить по названию страны, названию города или видео, по временному диапазону. При поиске видео по стране можно также добавить временной диапазон и отсортировать список видео по дате (сначала новые).
   При поиске по названию видео предусмотрен динамический поиск с предложением вариантов по мере набора.
   При поиске видео по временному диапазону из базы данных videos.js (если не добавить новые видео), можно задать его декабрьскими датами (01.12.2023-31.12.2023), так в базе данных зафиксированы декабрьские даты добавления (для удобства проверки).
   При поиске видео по названию города в базе данных два раза указан город "Пьемонт", это сделано для удобства проверки.

    Для перехода на эту страницу в Header есть раздел "Видео".

4. WorldRegions - карточки мировых регионов. При нажатии на карточку пользователь переходит на страницу Countries с карточками и вкладами регионов. Для перехода на эту страницу в Header есть раздел "Путешествия".

5. Countries - карточки стран и вкладки регионов. При нажатии на карточку может перейти на страницу CountiesInformation и посмотреть информацию о конкретной стране. При нажатии на вкладку региона пользователь может увидеть карточки стран соответствующего региона. Переход на эту страницу осуществляется из WorldRegions.

6. CountiesInformation - информация о стране, предоставляется при переходе из карточки со страницы Countries. Страница содержит факты о стране, рекомендации по проживанию, кухне и местам, которые стоит посетить. Также перейти на страницу можно из Header при наведении курсора на раздел "Петешествия" и далее выбор конкретной страны.

7. ToMap - карта с местами посещений из базы данных destinations.js. При наведении на метку появлется название и фото места. Для перехода на эту страницу в Header есть раздел "На карту"

Дополнительная информация: приложение создано для десктопной версии (без адаптива под мобильные и планшетные устройства).

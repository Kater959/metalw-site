# Metalw Next.js v2

Полноценный мультиязычный каркас корпоративного сайта на **Next.js (App Router)** для промышленной компании.

## Что внутри

- Next.js 14 + TypeScript
- Маршруты по языкам: `/ru`, `/en`, `/zh`
- Главная страница
- Внутренние страницы:
  - Оснастка
  - Стапели и кондукторы
  - Модернизация
  - Агрегатные станки
  - Кейсы
  - Контакты
- Единый словарь контента
- Базовый premium tech-industrial UI

## Запуск

```bash
npm install
npm run dev
```

Открыть:

```bash
http://localhost:3000
```

Главная автоматически редиректит на `/ru`.

## Где редактировать тексты

Все тексты лежат в:

```bash
content/site.ts
```

## Что я бы добавил следующим этапом

- реальные фото/видео
- форма отправки заявки
- интеграция с CRM
- SEO metadata для каждой страницы
- отдельная страница "О компании"
- блог / статьи / каталог кейсов
- анимации и production polishing


## v3 animated

Добавлены премиальные анимации:

- плавное появление hero-блока
- движущаяся инженерная сетка
- glow/pulse точки в визуальном блоке
- scan-line эффект
- hover-анимации карточек
- spotlight-эффект от курсора
- shimmer на кнопках
- scroll reveal для секций
- поддержка prefers-reduced-motion


## v4 German premium

Добавлены все 7 премиальных пунктов:

1. Parallax background от курсора.
2. Псевдо-3D промышленный объект на hero.
3. Металлические блики на основной кнопке.
4. Стальная текстура/шум и инженерная сетка.
5. Loading screen в стиле industrial brand.
6. Анимация цифр достижений.
7. Усиленная CTA-кнопка и premium glow interactions.

Загрузка в GitHub: распаковать архив, открыть папку, выделить всё внутри и загрузить поверх текущих файлов → Commit changes.


## v5 real media

Эта версия подключает реальные медиа через пути:

- `/media/VIDEO/METALW_VIDEO_CNC_CLOSEUP_01.mp4`
- `/media/VIDEO/METALW_VIDEO_HERO_FACTORY_01.mp4`
- `/media/VIDEO/METALW_VIDEO_WELDING_01.mp4`
- `/media/PHOTO/...`
- `/media/MODEL_3D/...`

Важно: папки `PHOTO` и `MODEL_3D` должны лежать внутри `public/media/`, а не в корне проекта.


## v6 real hero

Новый первый экран:

- реальное CNC/video производство в hero
- B2B оффер без самоописания сайта
- затемнение и premium industrial overlay
- animated count-up метрики
- проектные proof-пункты
- старый абстрактный hero убран


## v7 interactive 3D model

Добавлен реальный интерактивный GLB viewer:

- путь модели: `/media/MODEL_3D/METALW_MODEL_DOUBLE_FIXTURE_01.glb`
- auto-rotate
- mouse controls
- zoom/orbit controls
- отдельная секция "Инженерная модель до изготовления"

Если модель не видна, проверь что файл лежит именно тут:
`public/media/MODEL_3D/METALW_MODEL_DOUBLE_FIXTURE_01.glb`


## v8 clean visuals

Правки по визуалу:

- убрана подсказка "Крутите модель мышкой"
- подписи на фото уменьшены и перенесены в нижний тонкий градиент
- описания на фото скрыты, чтобы не закрывать изображения
- фото-блок стал чище и дороже
- video band стал менее перегруженным текстом


## v9 image lightbox

Добавлено открытие фото на весь экран:

- клик по фото в блоках real media и cases
- затемнение фона
- крупное изображение без обрезки
- закрытие по клику на фон или ESC
- кнопка "Открыть" появляется при наведении


## v10 clean translations

Исправлены переводы и синхронизация блоков:

- real media теперь RU/EN/ZH
- real cases теперь RU/EN/ZH
- video band теперь RU/EN/ZH
- 3D section теперь RU/EN/ZH
- убраны/заменены остатки текста "про сайт"


## v11 dual theme

Добавлена светлая premium тема:

- переключатель Light/Dark в шапке
- сохранение выбора в localStorage
- light theme в стиле silver industrial / Siemens
- тёмная тема остаётся основной


## v12 heavy luxury + mobile polish

Добавлено:

- более тяжёлый luxury industrial визуал
- gold/silver акценты
- усиленный hero
- lux sweep эффекты
- более дорогие карточки и фото
- улучшенная мобильная шапка
- адаптация hero под телефон
- улучшение фото/кейсов/3D/lightbox на мобильных
- компактные правила для маленьких экранов


## v13 money luxury
- sticky mobile CTA
- richer hero motion
- premium hover cards
- CTA shine
- smoother reveals
- conversion focused polish

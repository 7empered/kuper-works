# Kuper Works — Detailing Studio

Односторінковий лендинг для студії автодетейлінгу. Темна тема, гострі кути,
акцент на кераміці, поліровці та PPF.

## Стек

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/) — збірка та dev-сервер
- [lucide-react](https://lucide.dev/) — іконки
- Звичайний CSS (без фреймворків), змінні кольору/відступів у `src/index.css`

## Структура проєкту

```
src/
├── main.jsx              # точка входу
├── App.jsx                # збирає всі секції докупи
├── index.css               # усі стилі сайту
├── data/
│   └── content.js          # тексти, ціни, відгуки, налаштування студії
├── hooks/
│   ├── useScrollToSection.js     # плавний скрол до секції по кліку на посилання
│   ├── useCompareCarousel.js     # логіка слайдера "До/Після" (секція «Результат»)
│   └── useTestimonialsCarousel.js # логіка каруселі відгуків (з циклом і свайпом)
└── components/
    ├── Header.jsx
    ├── Hero.jsx
    ├── Marquee.jsx
    ├── Services.jsx
    ├── Process.jsx
    ├── Compare.jsx
    ├── Pricing.jsx
    ├── Testimonials.jsx
    ├── Contact.jsx
    └── Footer.jsx
```

## Запуск локально

```bash
npm install
npm run dev
```

Відкриється на `http://localhost:5173`.

## Збірка

```bash
npm run build
npm run preview
```

## Редагування контенту

Майже всі тексти, ціни й відгуки лежать в одному місці — `src/data/content.js`.
Щоб змінити телефон/адресу студії, поправ об'єкт `STUDIO` там же.

## Відомі TODO

- Форма запису поки що не відправляє дані нікуди (просто показує стан "успішно") —
  треба підключити бекенд або сервіс на кшталт Formspree/Telegram-бота.
- Секція «Результат» використовує умовну графіку (CSS-градієнти) замість
  реальних фото до/після — варто замінити на справжні фотографії робіт.

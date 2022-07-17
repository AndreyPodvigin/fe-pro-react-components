import React from "react";

const articles = [
  ['15 полезных однострочных выражений JavaScript', 'Улучшение JavaScript-кода за пару минут перевод 15 Helpful JavaScript One-Liners'],
  ['Полиморфизм простыми словами', 'Скорее всего вы уже встречались с понятием “полиморфизм” и даже помните примеры с наследованием, но они показывают далеко не всё'],
  ['Начало работы с Node.js', 'Node Hero: Глава 1'],
  ['Нейросети с нуля для JavaScript разработчиков (Часть 1: Перцептрон)', 'Перевод статьи Elyx0: Neural networks from scratch for Javascript linguists (Part1 The Perceptron).'],
  ['8 практичных хитростей веб-разработчика применить немедленно!', 'HTML, CSS и JS хинты, которые полезно знать перевод 8 Tricks for Web Developers You Can Put Into Practice Immediately'],
  ['Насколько JavaScript сильный?', 'Погружение в тему неявных преобразований. Где и как возникают и вычисляются неявные преобразования в JavaScript?'],
  ['Изучите CSS-переменные за 5 минут', 'Перевод статьи Per Harald Borgen: Learn CSS Variables in 5 minutes.'],
  ['Создание MEVN-приложения (Часть 1/2)', 'Создание full-stack приложения на основе Vue.js и Express.js (+MongoDB)'],
  ['Реактивность Vue.js', 'Реактивность фреймворка Vue.js и использование метода Vue.set'],
  ['Микроптимизации производительности и JavaScript', 'Недавно в комментариях на Hexlet я поучаствовал в дискуссии на тему «Что важнее — оптимизации производительности или качество кода?» Если…'],
  ['Девшахта-подкаст', '#108: Производительность кода — это важнейший критерий качества?'],
  ['Одна из самых красивых идей в информатике: Y-Combinator', 'Перевод статьи Lucas Fernandes da Costa “Y: The Most Beautiful Idea in Computer Science explained in JavaScript”']
];

const Article = () => {
  return articles.map(([title, text], index) => {
    return <li className="list__item" key={index}>
      <h2>{title}</h2>
      <p>{text}</p>
    </li>
  })
}

export default Article;
"use client";
import { NextPage } from "next";
import { useState, useEffect } from "react";
import s from "./page.module.scss";

interface Match {
  date: string; // Например, "2024-12-15"
  category: string; // Например, "Футбол", "Баскетбол", "Хоккей"
  team1: string;
  score1: number;
  score2: number;
  team2: string;
  status: string; // Например, "окончено"
}

const Page: NextPage = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [dates, setDates] = useState<string[]>([]); // Уникальные даты
  const [categories, setCategories] = useState<string[]>([]); // Уникальные категории
  const [selectedDate, setSelectedDate] = useState<string | null>(null); // Фильтрация по дате
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // Фильтрация по категории
  const [loading, setLoading] = useState(true); // Индикатор загрузки

  useEffect(() => {
    // Функция для загрузки данных с сервера
    const fetchMatches = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5500/matches"); // Укажите свой API-эндпоинт
        if (!response.ok) {
          throw new Error("Ошибка загрузки данных");
        }
        const data: Match[] = await response.json();

        setMatches(data);

        // Извлекаем уникальные даты
        const uniqueDates = Array.from(new Set(data.map((match) => match.date))).sort();
        setDates(uniqueDates);

        // Извлекаем уникальные категории
        const uniqueCategories = Array.from(new Set(data.map((match) => match.category)));
        setCategories(uniqueCategories);

        // Устанавливаем текущую дату по умолчанию
        setSelectedDate(uniqueDates[0]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  // Фильтрация матчей по дате и категории
  const filteredMatches = matches.filter(
    (match) => (selectedDate === null || match.date === selectedDate) && (selectedCategory === null || match.category === selectedCategory)
  );

  return (
    <div className={s.Page}>
      <h1>Результаты игр</h1>
      <div className={s.Filter}>
        <span>Матч-центр:</span>
        {dates.map((date) => (
          <button key={date} className={date === selectedDate ? s.Active : ""} onClick={() => setSelectedDate(date)}>
            {new Date(date).toLocaleDateString("ru-RU", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </button>
        ))}
      </div>
      <div className={s.Filter}>
        <span>Категория:</span>
        <button className={selectedCategory === null ? s.Active : ""} onClick={() => setSelectedCategory(null)}>
          Все
        </button>
        {categories.map((category) => (
          <button key={category} className={category === selectedCategory ? s.Active : ""} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        categories
          .filter((category) => selectedCategory === null || selectedCategory === category)
          .map((category) => (
            <div key={category}>
              <h2>{category}</h2>
              <table className={s.Table}>
                <thead>
                  <tr>
                    <th>Команды</th>
                    <th>Счет</th>
                    <th>Статус</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMatches
                    .filter((match) => match.category === category)
                    .map((match, index) => (
                      <tr key={index}>
                        <td>
                          {match.team1} - {match.team2}
                        </td>
                        <td>
                          {match.score1} - {match.score2}
                        </td>
                        <td>{match.status}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          ))
      )}
    </div>
  );
};

export default Page;

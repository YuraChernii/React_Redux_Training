import { useDispatch, useSelector } from "react-redux";
import { updateHeroFilter } from "../../actions";
var classNames = require("classnames");

// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {
  const dispatch = useDispatch();

  const ocClickFilter = (filterName) => {
    dispatch(updateHeroFilter(filterName));
  };

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Отфильтруйте героев по элементам</p>
        <div className="btn-group">
          <button
            className="btn btn-outline-dark active"
            onClick={() => ocClickFilter("all")}
          >
            Все
          </button>
          <button
            className={"btn btn-danger "}
            onClick={() => ocClickFilter("fire")}
          >
            Огонь
          </button>
          <button
            className="btn btn-primary"
            onClick={() => ocClickFilter("water")}
          >
            Вода
          </button>
          <button
            className="btn btn-success"
            onClick={() => ocClickFilter("wind")}
          >
            Ветер
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => ocClickFilter("earth")}
          >
            Земля
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroesFilters;

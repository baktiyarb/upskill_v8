import React, { Component } from "react";

import CalendarDay from "./CalendarDay";
import CalendarMonth from "./CalendarMonth";
// import CalendarWeek from "./CalendarWeek";
import CalendarYear from "./CalendarYear";

import "./index.less";

export default class Calendar extends Component {
  constructor() {
    super();

    this.weekdays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    this.longWeekDays = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];
    this.months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];

    this.shortMonths = {
      Jan: "янв",
      Feb: "фев",
      Mar: "мар",
      Apr: "апр",
      May: "май",
      Jun: "июн",
      Jul: "июл",
      Aug: "авг",
      Sep: "сен",
      Oct: "окт",
      Nov: "ноя",
      Dec: "дек",
    };
  }

  state = {
    currentDay: new Date(),
    currentMode: "month",
  };

  changeCurrentDay = (day) => {
    day.month -= 1;
    this.setState({ currentDay: new Date(day.year, day.month, day.number) });
  };

  nextDay = () => {
    this.setState({
      currentDay: new Date(
        this.state.currentDay.setDate(this.state.currentDay.getDate() + 1)
      ),
    });
  };

  previousDay = () => {
    this.setState({
      currentDay: new Date(
        this.state.currentDay.setDate(this.state.currentDay.getDate() - 1)
      ),
    });
  };

  nextYear = () => {
    this.setState({
      currentDay: new Date(
        this.state.currentDay.setDate(this.state.currentDay.getDate() + 367)
      ),
    });
  };

  previousYear = () => {
    this.setState({
      currentDay: new Date(
        this.state.currentDay.setDate(this.state.currentDay.getDate() - 367)
      ),
    });
  };

  render() {
    return (
      <div className="calendar">
        <div className="calendar-header">
          <div className="title">
            <h2>
              {this.months[this.state.currentDay.getMonth()]}{" "}
              {this.state.currentDay.getFullYear()}
            </h2>
          </div>
          <nav className="calendar-modes">
            <li
              onClick={(e) => {
                this.setState({ currentMode: "day" });
              }}
              className={`${
                this.state.currentMode === "day" ? "active-mode" : ""
              }`}
            >
              День
            </li>
            {/* <li
              onClick={(e) => {
                this.setState({ currentMode: "week" });
              }}
              className={`${
                this.state.currentMode === "week" ? "active-mode" : ""
              }`}
            >
              Неделя
            </li> */}
            <li
              onClick={(e) => {
                this.setState({ currentMode: "month" });
              }}
              className={`${
                this.state.currentMode === "month" ? "active-mode" : ""
              }`}
            >
              Месяц
            </li>
            <li
              onClick={(e) => {
                this.setState({ currentMode: "year" });
              }}
              className={`${
                this.state.currentMode === "year" ? "active-mode" : ""
              }`}
            >
              Год
            </li>
          </nav>
        </div>
        <div className="calendar-body">
          {this.state.currentMode === "day" ? (
            <CalendarDay
              data={this.props}
              day={this.state.currentDay}
              weekdays={this.longWeekDays}
              changeCurrentDay={this.changeCurrentDay}
              nextDay={this.nextDay}
              previousDay={this.previousDay}
              shortMonths={this.shortMonths}
            />
          ) : (
            ""
          )}
          {/* {this.state.currentMode === "week" ? (
            <CalendarWeek
              data={this.props}
              day={this.state.currentDay}
              weekdays={this.weekdays}
              changeCurrentDay={this.changeCurrentDay}
              nextDay={this.nextDay}
              previousDay={this.previousDay}
            />
          ) : (
            ""
          )} */}
          {this.state.currentMode === "month" ? (
            <CalendarMonth
              data={this.props}
              day={this.state.currentDay}
              weekdays={this.weekdays}
              changeCurrentDay={this.changeCurrentDay}
              shortMonths={this.shortMonths}
            />
          ) : (
            ""
          )}
          {this.state.currentMode === "year" ? (
            <CalendarYear
              day={this.state.currentDay}
              months={this.months}
              data={this.props}
              nextYear={this.nextYear}
              previousYear={this.previousYear}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}


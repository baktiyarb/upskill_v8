import React, { Component } from "react";

import {
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

import "./index.less";

export default class CalendarYear extends Component {
  render() {
    const currentYearDays = [];

    this.props.months.forEach((el, idx) => {
      let days = [];
      let d = new Date(
        this.props.day.getFullYear(),
        idx + 1,
        0
      );

      for (let i = 1; i <= d.getDate(); i++) {
        days.push(i);
      }

      currentYearDays.push({
        year: this.props.day.getFullYear(),
        month: idx + 1,
        monthName: el,
        days,
      });
    });

    currentYearDays.forEach((el, i) => {
      this.props.data.lessons.forEach((elem, j) => {
        let courseDate = elem.date;
        let courseYear = parseInt(
          courseDate.slice(0, courseDate.indexOf("-"))
        );
        let courseMonth = parseInt(
          courseDate.slice(courseDate.indexOf("-") + 1)
        );
        let courseDay = parseInt(
          courseDate.slice(courseDate.lastIndexOf("-") + 1)
        );

        if (el.courseDays) {
          if (
            el.year === courseYear &&
            el.month === courseMonth
          ) {
            el.courseDays = [...el.courseDays, courseDay];
          } else {
            el.courseDay = [...el.courseDays, courseDay];
          }
        } else {
          el.courseDays = [];
          if (
            el.year === courseYear &&
            el.month === courseMonth
          ) {
            el.courseDays = [...el.courseDays, courseDay];
          } else {
            el.courseDay = [...el.courseDays, courseDay];
          }
        }
      });

      if (!el.courseDays) {
        el.courseDays = [];
      }
    });

    // console.log(currentYearDays);

    return (
      <>
        <div className="year-header">
          <div className="header__tool">
            <div
              className="pre-btn"
              onClick={() => {
                this.props.previousYear();
              }}
            >
              <LeftOutlined />
              <span>прош. год</span>
            </div>
            <div
              className="next-btn"
              onClick={() => {
                this.props.nextYear();
              }}
            >
              <span>след. год</span>
              <RightOutlined />
            </div>
          </div>
        </div>
        <div className="year-content">
          {currentYearDays.map((el) => {
            return (
              <div
                key={el.monthName}
                className="month-block"
                style={{
                  borderTop: el.month <= 3 ? "none" : "",
                  borderBottom:
                    el.month >= 10 ? "none" : "",
                  borderLeft:
                    el.month === 1 ||
                    el.month === 4 ||
                    el.month === 7 ||
                    el.month === 10
                      ? "none"
                      : "",
                  borderRight: el.month % 3 ? "none" : "",
                }}
              >
                <div className="month-block__header">
                  {el.monthName}
                </div>
                <div className="month-block__content">
                  {el.days.map((elem) => {
                    return (
                      <span
                        key={el.monthName + elem}
                        className={`day-in-year ${
                          el.courseDays.includes(elem)
                            ? "day-in-year--active"
                            : ""
                        }`}
                      >
                        {elem}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

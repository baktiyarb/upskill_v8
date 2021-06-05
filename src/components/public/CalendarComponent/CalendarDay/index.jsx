import React, { Component } from "react";

import {
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

import "./index.less";

export default class CalendarDay extends Component {
  render() {
    const firstDayOfMonth = new Date(
      this.props.day.getFullYear(),
      this.props.day.getMonth()
    );
    const weekdayOfFirstDay = firstDayOfMonth.getDay();
    let currentDays = [];

    for (let day = 0; day < 42; day++) {
      if (day === 0 && weekdayOfFirstDay === 1) {
        firstDayOfMonth.setDate(
          firstDayOfMonth.getDate() - 7
        );
      } else if (day === 0) {
        firstDayOfMonth.setDate(
          firstDayOfMonth.getDate() +
            (day - weekdayOfFirstDay)
        );
      } else {
        firstDayOfMonth.setDate(
          firstDayOfMonth.getDate() + 1
        );
      }

      let calendarDay = {
        currentMonth:
          firstDayOfMonth.getMonth() ===
          this.props.day.getMonth(),
        date: new Date(firstDayOfMonth),
        month: firstDayOfMonth.getMonth(),
        number: firstDayOfMonth.getDate(),
        selected:
          firstDayOfMonth.toDateString() ===
          this.props.day.toDateString(),
        year: firstDayOfMonth.getFullYear(),
      };

      currentDays.push(calendarDay);
    }

    const timeArr = [
      { year: 0, month: 0, day: 0, time: "06:00" },
      { year: 0, month: 0, day: 0, time: "07:00" },
      { year: 0, month: 0, day: 0, time: "08:00" },
      { year: 0, month: 0, day: 0, time: "09:00" },
      { year: 0, month: 0, day: 0, time: "10:00" },
      { year: 0, month: 0, day: 0, time: "11:00" },
      { year: 0, month: 0, day: 0, time: "12:00" },
      { year: 0, month: 0, day: 0, time: "13:00" },
      { year: 0, month: 0, day: 0, time: "14:00" },
      { year: 0, month: 0, day: 0, time: "15:00" },
      { year: 0, month: 0, day: 0, time: "16:00" },
      { year: 0, month: 0, day: 0, time: "17:00" },
      { year: 0, month: 0, day: 0, time: "18:00" },
      { year: 0, month: 0, day: 0, time: "19:00" },
      { year: 0, month: 0, day: 0, time: "20:00" },
      { year: 0, month: 0, day: 0, time: "21:00" },
      { year: 0, month: 0, day: 0, time: "22:00" },
    ];

    currentDays.forEach((day, idx) => {
      if (day.currentMonth && day.selected) {
        timeArr.forEach((el) => {
          el.year = day.year;
          el.month = day.month + 1;
          el.day = day.number;
        });
      }
    });

    timeArr.forEach((el, i) => {
      this.props.data.lessons.some((elem, j) => {
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

        let startTime = elem.start_time;
        startTime = parseInt(
          startTime.slice(0, startTime.indexOf(":"))
        );
        //
        let endTime = elem.end_time;
        endTime = parseInt(
          endTime.slice(0, endTime.indexOf(":"))
        );

        if (
          el.year === courseYear &&
          el.month === courseMonth &&
          el.day === courseDay &&
          parseInt(
            el.time.slice(0, el.time.indexOf(":"))
          ) >= startTime &&
          parseInt(
            el.time.slice(0, el.time.indexOf(":"))
          ) <= endTime
        ) {
          el.haveCourse = true;
          el.courseInfo = elem;
          return true;
        } else {
          el.haveCourse = false;
          return false;
        }
      });
    });

    return (
      <>
        <div className="header">
          {currentDays.map((day, idx) => {
            if (day.currentMonth && day.selected) {
              return (
                <div
                  key={day.date + day.number * 6}
                  className="header__date"
                >
                  <p>{`${day.number} ${
                    this.props.shortMonths[
                      day.date.toString().slice(4, 7)
                    ]
                  }.`}</p>
                  <p>
                    {this.props.weekdays[day.date.getDay()]}
                  </p>
                </div>
              );
            } else {
              return null;
            }
          })}
          <div className="header__tool">
            <div
              className="pre-btn"
              onClick={() => {
                this.props.previousDay();
              }}
            >
              <LeftOutlined />
              <span>вчера</span>
            </div>
            <div
              className="next-btn"
              onClick={() => {
                this.props.nextDay();
              }}
            >
              <span>завтра</span>
              <RightOutlined />
            </div>
          </div>
        </div>

        <div className="content">
          {timeArr.map((el) => {
            return (
              <div className="time-line" key={el.time}>
                <span className="time">{el.time}</span>
                <span className="line">
                  {`${
                    el.haveCourse ? el.courseInfo.title : ""
                  }`}
                </span>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

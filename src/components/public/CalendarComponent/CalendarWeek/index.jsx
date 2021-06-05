import React, { Component } from "react";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import "./index.less";

export default class CalendarWeek extends Component {
  render() {
    const firstDayOfMonth = new Date(
      this.props.day.getFullYear(),
      this.props.day.getMonth()
    );
    const weekdayOfFirstDay = firstDayOfMonth.getDay();
    let currentDays = [];

    for (let day = 0; day < 42; day++) {
      if (day === 0 && weekdayOfFirstDay === 1) {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
      } else if (day === 0) {
        firstDayOfMonth.setDate(
          firstDayOfMonth.getDate() + (day - weekdayOfFirstDay)
        );
      } else {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
      }

      let calendarDay = {
        currentMonth: firstDayOfMonth.getMonth() === this.props.day.getMonth(),
        date: new Date(firstDayOfMonth),
        month: firstDayOfMonth.getMonth(),
        number: firstDayOfMonth.getDate(),
        selected:
          firstDayOfMonth.toDateString() === this.props.day.toDateString(),
        year: firstDayOfMonth.getFullYear(),
      };

      currentDays.push(calendarDay);
    }

    return (
      <>
        <div className="header-week">
          <div className="header-week__tool-week">
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
          <div className="weekday-wrap">
            {this.props.weekdays.map((weekday) => {
              return (
                <div className="weekday" key={weekday}>
                  {weekday}
                </div>
              );
            })}
          </div>
        </div>
        <div className="content"></div>
      </>
    );
  }
}

import React, {Component} from 'react';

import './index.less';

export default class CalendarMonth extends Component {
  handleMonthCalendarScroll = (e) => {
    console.log(1111);
    console.log(e);
  };

  componentDidMount = () => {
    console.log('did mount');
    document.querySelector('.table-content').addEventListener(
      'scroll',
      function (e) {
        console.log(e);
      }
      // this.handleMonthCalendarScroll
    );
  };

  componentWillUnmount = () => {
    document.querySelector('.table-content').removeEventListener(
      'scroll',
      function (e) {
        console.log(e);
      }
      // this.handleMonthCalendarScroll
    );
  };

  render() {
    const log = console.log;
    this.currentDate = this.props.dateGroup;

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

    currentDays.forEach((el, i) => {
      el.month += 1;
      this.props.data.lessons.some((elem, j) => {
        let courseDate = elem.date;
        let courseYear = parseInt(courseDate.slice(0, courseDate.indexOf('-')));
        let courseMonth = parseInt(
          courseDate.slice(courseDate.indexOf('-') + 1)
        );
        let courseDay = parseInt(
          courseDate.slice(courseDate.lastIndexOf('-') + 1)
        );

        if (
          el.year === courseYear &&
          el.month === courseMonth &&
          el.number === courseDay
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

    console.log(this.props.day);

    return (
      <>
        <div className="table-header">
          {' '}
          {this.props.weekdays.map((weekday) => {
            return (
              <div className="weekday" key={weekday}>
                {' '}
                {weekday}{' '}
              </div>
            );
          })}{' '}
        </div>{' '}
        <div className="table-content">
          {currentDays.map((day, idx) => {
            const date = `${day.year}-${day.month}-${day.number}`;

            const test = this.currentDate.some((t) => {
              return t === date;
            });

            return (
              <div
                key={day.date + idx * 6}
                className={
                  `${day.year}-${day.month}-${day.number} ` +
                  'calendar-day' +
                  (day.currentMonth ? ' current' : '') +
                  (day.selected ? ' selected' : '') +
                  `${test ? ' currentDate' : ' '}`
                }
                style={{
                  borderTop: `${idx < 8 ? 'none' : ''}`,
                  borderBottom: `${idx > 34 ? 'none' : ''}`,
                  borderLeft: `${idx % 7 === 0 ? 'none' : ''}`,
                  borderRight: `${(idx + 1) % 7 === 0 ? 'none' : ''}`,
                  backgroundColor: `${day.haveCourse ? '#eee' : ''}`,
                }}
                onClick={() => this.props.changeCurrentDay(day)}>
                <p className="day-number">
                  {day.number === 1
                    ? `${day.number} ${
                        this.props.shortMonths[day.date.toString().slice(4, 7)]
                      }.`
                    : day.number}
                </p>
                <p className="course-title-in-calendar">
                  {`${day.haveCourse ? day.courseInfo.title : ''}`}{' '}
                </p>{' '}
              </div>
            );
          })}{' '}
        </div>{' '}
      </>
    );
  }
}

import React, {Component} from 'react';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import shortid from 'shortid';
import {deleteUserInfoAction} from '@redux/actions';
import {Layout} from 'antd';
import TopNavBar from '@student-components/TopNavBarComponent';
import SideBar from '@student-components/SideBarComponent';
import Calendar from '@public-components/CalendarComponent';
import './index.less';

const log = console.log;

const lists = [
  {
    name: 'Django',
    id: 1,
    group: [
      {
        name: 'Первая группа',
        groupId: 1,
        date: ['2021-6-21', '2021-6-25', '2021-6-20'],
      },
      {
        name: 'Вторая группа',
        groupId: 2,
        date: ['2021-6-15', '2021-6-18'],
      },
      {
        name: 'Третья группа',
        groupId: 3,
        date: ['2021-6-21', '2021-6-25'],
      },
    ],
  },
  {
    name: 'Python',
    id: 2,
    group: [
      {
        name: 'Первая группа',
        groupId: 4,
        date: ['2021-6-21', '2021-6-25'],
      },
      {
        name: 'Вторая группа',
        groupId: 5,
        date: ['2021-6-21', '2021-6-25'],
      },
      {
        name: 'Третья группа',
        groupId: 6,
        date: ['2021-6-21', '2021-6-25'],
      },
    ],
  },
  {
    name: 'Node.js',
    id: 3,
    group: [
      {
        name: 'Первая группа',
        groupId: 7,
        date: ['2021-6-29', '2021-6-14'],
      },
      {
        name: 'Вторая группа',
        groupId: 8,
        date: ['2021-6-21', '2021-6-25'],
      },
      {
        name: 'Третья группа',
        groupId: 9,
        date: ['2021-6-21', '2021-6-25'],
      },
    ],
  },
];

const {Content} = Layout;

const CalendarPage = (props) => {
  const [history, set] = useState();
  const [state, setState] = useState();
  const [lessons, setLessons] = useState([]);
  const [groups, setGroups] = useState(lists);
  const [dateGroup, setDateGroup] = useState([]);
  const [currentGroup, setCurrentGroup] = useState(null);
  const [eachId, setEachId] = useState(null);
  const {deleteUserInfo} = props;
  const {collapsed} = props.page;

  const jumpPath = (path, mode = 'push') => {
    props.history[mode](path);
  };

  const manageGroup = (id) => {
    if (currentGroup !== id) {
      setCurrentGroup(id);
    } else {
      setCurrentGroup(null);
    }
  };

  const eachGroupManage = (id) => {
    let item;

    groups.map((t) => {
      const test = t.group.find((k) => {
        return k.groupId === id;
      });

      if (test) {
        item = test;
      }
    });

    setDateGroup(item.date);

    setEachId(item.groupId);
  };

  useEffect(() => {
    setGroups(lists);
  }, []);

  useEffect(() => {
    if (currentGroup === null) {
      setDateGroup([]);
    }
  }, [currentGroup]);

  return (
    <section className="student-calendar-page">
      <SideBar currentPath={props.location.pathname} jumpPath={jumpPath} />{' '}
      <Layout>
        {' '}
        <TopNavBar jumpPath={jumpPath} logout={deleteUserInfo} />{' '}
        <Content
          className="course-page__course-page-content"
          style={{
            maxWidth: collapsed ? '' : '100%',
          }}>
          <div className="page-content">
            <Calendar
              lessons={lessons}
              currentGroup={currentGroup}
              dateGroup={dateGroup}
            />{' '}
          </div>
          <section className="page-navbar">
            <h1 className="settings-page__navbar-header">Группы </h1>{' '}
            <nav className="settings-page__navbat-nav">
              <ul className="settings-page__navbar-wrap">
                {groups.length ? (
                  groups.map((el, idx) => {
                    const {name, group, id} = el;

                    return (
                      <li key={id}>
                        <p
                          onClick={() => manageGroup(id)}
                          className={`${
                            currentGroup === id
                              ? 'settings-page__navbar-link settings-page__navbar-link-active'
                              : 'settings-page__navbar-link '
                          }`}>
                          {name}
                        </p>

                        {group.length > 0 && (
                          <div
                            className={`${
                              currentGroup === id
                                ? 'setting-page_navbar-link-group setting-page_navbar-link-group-active'
                                : 'setting-page_navbar-link-group'
                            }`}>
                            {group.map((t) => {
                              const {name, date, groupId} = t;

                              return (
                                <p
                                  onClick={() => eachGroupManage(groupId)}
                                  className={`${
                                    eachId === groupId
                                      ? 'settings-page__navbar-link-each settings-page__navbar-link-each-active'
                                      : 'settings-page__navbar-link-each'
                                  }`}
                                  key={id * Math.random() * 6}>
                                  {name}
                                </p>
                              );
                            })}
                          </div>
                        )}
                      </li>
                    );
                  })
                ) : (
                  <li className={`settings-page__navbar-link `}>Нет Группы </li>
                )}{' '}
              </ul>{' '}
            </nav>{' '}
          </section>{' '}
        </Content>{' '}
      </Layout>{' '}
    </section>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  deleteUserInfo: () => dispatch(deleteUserInfoAction()),
});

console.log(mapDispatchToProps);

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage);

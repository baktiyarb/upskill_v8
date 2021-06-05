import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { deleteUserInfoAction } from "@redux/actions";

import { Input, Menu, Dropdown } from "antd";

import "./index.less";

class TopNavBar extends Component {
  state = {
    searchText: "",
  };

  updateSearchText = (event) => {
    this.setState({ searchText: event.target.value });
  };

  handleSearch = (event) => {
    console.log(event.target.value);
    this.setState({ searchText: "" });
  };

  render() {
    const userMenu = (
      <Menu>
        <Menu.Item>
          <Link to="/setting_profile">Мой профиль</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/setting_payment_history">
            История платежей
          </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <a
            href="/logout"
            onClick={(e) => {
              e.preventDefault();
              this.props.deleteUserInfo();
            }}
          >
            Выйти
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <header className="top-nav-bar">
        <div className="top-nav-bar__search-wrap">
          <Input
            placeholder="Search"
            prefix={
              <svg
                className="top-nav-bar__search-icon"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7016 10C19.7016 14.8338 15.7878 18.75 10.9628 18.75C6.13791 18.75 2.22412 14.8338 2.22412 10C2.22412 5.16618 6.13791 1.25 10.9628 1.25C15.7878 1.25 19.7016 5.16618 19.7016 10Z"
                  stroke="#9A9CB7"
                  strokeWidth="2.5"
                />
                <line
                  x1="1.25"
                  y1="-1.25"
                  x2="8.74436"
                  y2="-1.25"
                  transform="matrix(-0.706708 -0.707506 0.706708 -0.707506 25.019 23.071)"
                  stroke="#9A9CB7"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            allowClear
            type="search"
            value={this.state.searchText}
            onChange={this.updateSearchText}
            onPressEnter={this.handleSearch}
            maxLength={40}
          />
        </div>

        <div className="top-nav-bar__btns-wrap">
          <button
            className="news-btn"
            onClick={() => {
              this.props.jumpPath("/news");
            }}
          >
            новости
          </button>
          <div className="top-nav-bar_my-course-wrap">
            <span className="my-course-wrap__text">
              мой счет
            </span>
            <span className="my-course-wrap__course">
              40 000 ₸
            </span>
          </div>

          <div className="top-nav-bar__notice-icon-wrap">
            <svg
              className="top-nav-bar__notice-icon"
              viewBox="0 0 48 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="23.7221"
                cy="23.5"
                rx="23.7221"
                ry="23.5"
                fill="#F6F7F8"
              />
              <path
                d="M34.3169 28.6043C32.6537 27.1985 31.7 25.1437 31.7 22.9668V19.9C31.7 16.0291 28.8246 12.8248 25.1 12.288V11.1C25.1 10.4917 24.6072 10 24 10C23.3928 10 22.9 10.4917 22.9 11.1V12.288C19.1743 12.8248 16.3 16.0291 16.3 19.9V22.9668C16.3 25.1437 15.3463 27.1985 13.6732 28.6131C13.2453 28.9794 13 29.5118 13 30.075C13 31.1365 13.8635 32 14.925 32H33.075C34.1365 32 35 31.1365 35 30.075C35 29.5118 34.7547 28.9794 34.3169 28.6043Z"
                fill="#9297BA"
              />
              <path
                d="M24.0004 36.4C25.9925 36.4 27.659 34.9799 28.0418 33.1H19.959C20.3418 34.9799 22.0083 36.4 24.0004 36.4Z"
                fill="#9297BA"
              />
            </svg>
          </div>
          <Dropdown overlay={userMenu}>
            <a
              className="top-nav-bar__dropdown-link-wrap"
              href="##"
              onClick={(e) => e.preventDefault()}
            >
              <span className="top-nav-bar__first-name">
                {this.props.user.firstName}
              </span>
              <span className="top-nav-bar__last-name">{`${this.props.user.lastName[0]}.`}</span>
              <svg
                className="top-nav-bar__dropdown-arrow"
                viewBox="0 0 19 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L9.06615 10L16.637 2"
                  stroke="#9A9CB7"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </Dropdown>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  deleteUserInfo: () => dispatch(deleteUserInfoAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavBar);

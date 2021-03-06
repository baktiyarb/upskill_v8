import React, { Component } from "react";
import { connect } from "react-redux";
import shortid from "shortid";

import { deleteUserInfoAction } from "@redux/actions";

import { Layout } from "antd";

import TopNavBar from "@student-components/TopNavBarComponent";
import SideBar from "@student-components/SideBarComponent";
import SettingPagesRightSideBar from "@student-components/SettingPagesRightSideBar";

import "./index.less";

const { Content } = Layout;

class SettingPaymentHistoryPage extends Component {
  jumpPath = (path, mode = "push") => {
    this.props.history[mode](path);
  };

  render() {
    const { pathname: currentPath } = this.props.location;

    const fakeData = [
      {
        name: "Python: 4 уровень",
        date: "3 апреля, 2021",
        money: "-42 000",
        status: "в обработке",
      },
      {
        name: "Пополнение счета",
        date: "2 апреля, 2021",
        money: "34 000",
        status: "исполнено",
      },
      {
        name: "Python: 4 уровень",
        date: "3 апреля, 2021",
        money: "-42 000",
        status: "в обработке",
      },
      {
        name: "Пополнение счета",
        date: "8 февраля, 2021",
        money: "50 000",
        status: "исполнено",
      },
      {
        name: "Python: 4 уровень",
        date: "3 апреля, 2021",
        money: "-42 000",
        status: "в обработке",
      },
    ];

    const { jumpPath } = this;
    const { deleteUserInfo } = this.props;
    const { collapsed } = this.props.page;

    return (
      <section className="settings-page">
        <SideBar
          currentPath={this.props.location.pathname}
          jumpPath={jumpPath}
        />
        <Layout>
          <TopNavBar
            logout={() => {
              deleteUserInfo();
            }}
          />
          <Content
            className="settings-page__settings-page-content"
            style={{
              background: "#fff",
              maxWidth: collapsed ? "" : "100%",
            }}
          >
            <section className="settings-page__content">
              <h1 className="content__title">
                История платежей
              </h1>
              <div className="content__functions">
                <div className="view-mode">
                  <div className="view-mode__list">
                    <svg
                      width="17"
                      height="13"
                      viewBox="0 0 17 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="17"
                        height="2.14286"
                        rx="1.07143"
                        fill="white"
                      />
                      <rect
                        y="6.42847"
                        width="17"
                        height="2.14286"
                        rx="1.07143"
                        fill="white"
                      />
                      <rect
                        y="12.8572"
                        width="17"
                        height="2.14286"
                        rx="1.07143"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="view-mode__block">
                    <svg
                      width="17"
                      height="15"
                      viewBox="0 0 17 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.82979 1.49409V5.415C7.82979 6.24 7.07097 6.90864 6.137 6.90864H1.69279C0.758818 6.90864 0 6.24 0 5.415V1.49409C0 0.669091 0.758818 0 1.69279 0H6.137C7.07252 0 7.82979 0.669091 7.82979 1.49409ZM15.3072 0H10.863C9.92903 0 9.17021 0.669091 9.17021 1.49409V5.415C9.17021 6.24 9.92903 6.90864 10.863 6.90864H15.3072C16.2412 6.90864 17 6.24 17 5.415V1.49409C17 0.669091 16.2412 0 15.3072 0ZM6.137 8.09136H1.69279C0.758818 8.09136 0 8.75955 0 9.585V13.5064C0 14.3305 0.758818 15 1.69279 15H6.137C7.07097 15 7.82979 14.3305 7.82979 13.5064V9.585C7.82979 8.75955 7.07252 8.09136 6.137 8.09136ZM15.3072 8.09136H10.863C9.92903 8.09136 9.17021 8.76 9.17021 9.585V13.5064C9.17021 14.3305 9.92903 15 10.863 15H15.3072C16.2412 15 17 14.3305 17 13.5064V9.585C17 8.75955 16.2412 8.09136 15.3072 8.09136Z"
                        fill="#C1C4D0"
                      />
                    </svg>
                  </div>
                </div>
                <div className="search">
                  <span className="search__icon">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.7497 13.5085L12.1559 11.0963C13.1995 9.8794 13.7714 8.34824 13.7714 6.75424C13.7714 3.03001 10.6824 0 6.88568 0C3.08897 0 0 3.03001 0 6.75424C0 10.4785 3.08897 13.5085 6.88568 13.5085C8.31101 13.5085 9.66929 13.0868 10.8306 12.2863L13.4552 14.7298C13.6261 14.904 13.856 15 14.1024 15C14.3356 15 14.5569 14.9128 14.7248 14.7542C15.0817 14.4174 15.093 13.8588 14.7497 13.5085ZM6.88568 1.76198C9.69204 1.76198 11.9751 4.00145 11.9751 6.75424C11.9751 9.50704 9.69204 11.7465 6.88568 11.7465C4.07931 11.7465 1.79626 9.50704 1.79626 6.75424C1.79626 4.00145 4.07931 1.76198 6.88568 1.76198Z"
                        fill="#C1C4D0"
                      />
                    </svg>
                  </span>
                  <input
                    className="search__input"
                    placeholder="Найти"
                  />
                </div>
                <div className="filter">
                  <p>
                    Фильтр: <strong>Все</strong>
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="11"
                    viewBox="0 0 19 11"
                    fill="none"
                  >
                    <path
                      d="M2 2L9.24138 9L17 2"
                      stroke="#C1C4D0"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="filter-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M14.9359 0.415529C14.8152 0.138621 14.6062 0.000149256 14.308 0H0.691694C0.393876 0 0.184587 0.138621 0.064014 0.415529C-0.0564845 0.706615 -0.00689161 0.95535 0.213016 1.16125L5.45761 6.4133V11.5908C5.45761 11.7757 5.52501 11.9353 5.65971 12.0704L8.38285 14.7975C8.51061 14.9323 8.67012 15 8.86167 15C8.9467 15 9.0353 14.9821 9.12752 14.9466C9.40421 14.8258 9.5426 14.6164 9.5426 14.3181V6.41334L14.787 1.16129C15.007 0.955387 15.0565 0.706727 14.9359 0.415529Z"
                      fill="#C1C4D0"
                    />
                  </svg>
                </div>
                <div className="export">
                  <button className="export__btn">
                    Экспорт
                  </button>
                </div>
              </div>

              <table className="Table">
                <thead>
                  <tr>
                    <th></th>
                    <th>
                      <div className="th-content">
                        <div className="wrap">
                          <h1>Название</h1>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="11"
                            viewBox="0 0 19 11"
                            fill="none"
                          >
                            <path
                              d="M2 2L9.24138 9L17 2"
                              stroke="#C1C4D0"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </th>
                    <th>
                      <div className="th-content">
                        <div className="wrap">
                          <h1>Дата</h1>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="11"
                            viewBox="0 0 19 11"
                            fill="none"
                          >
                            <path
                              d="M2 2L9.24138 9L17 2"
                              stroke="#C1C4D0"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </th>
                    <th>
                      <div className="th-content">
                        <div className="wrap">
                          <h1>Сумма</h1>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="11"
                            viewBox="0 0 19 11"
                            fill="none"
                          >
                            <path
                              d="M2 2L9.24138 9L17 2"
                              stroke="#C1C4D0"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </th>
                    <th></th>
                    <th>
                      <div className="th-content">
                        <div className="wrap">
                          <h1>Статус</h1>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="11"
                            viewBox="0 0 19 11"
                            fill="none"
                          >
                            <path
                              d="M2 2L9.24138 9L17 2"
                              stroke="#C1C4D0"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {fakeData.map((el) => {
                    return (
                      <tr
                        className="table_row"
                        key={shortid.generate()}
                      >
                        <td>
                          {el.money < 0 ? (
                            <svg
                              width="45"
                              height="45"
                              viewBox="0 0 45 45"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="45"
                                height="45"
                                rx="7"
                                fill="#F1F2F5"
                              />
                              <path
                                d="M13 17.5C13 16.837 13.2634 16.2011 13.7322 15.7322C14.2011 15.2634 14.837 15 15.5 15H30.5C31.163 15 31.7989 15.2634 32.2678 15.7322C32.7366 16.2011 33 16.837 33 17.5V18.75H13V17.5ZM13 21.25V27.5C13 28.163 13.2634 28.7989 13.7322 29.2678C14.2011 29.7366 14.837 30 15.5 30H30.5C31.163 30 31.7989 29.7366 32.2678 29.2678C32.7366 28.7989 33 28.163 33 27.5V21.25H13ZM16.75 23.75H18C18.3315 23.75 18.6495 23.8817 18.8839 24.1161C19.1183 24.3505 19.25 24.6685 19.25 25V26.25C19.25 26.5815 19.1183 26.8995 18.8839 27.1339C18.6495 27.3683 18.3315 27.5 18 27.5H16.75C16.4185 27.5 16.1005 27.3683 15.8661 27.1339C15.6317 26.8995 15.5 26.5815 15.5 26.25V25C15.5 24.6685 15.6317 24.3505 15.8661 24.1161C16.1005 23.8817 16.4185 23.75 16.75 23.75Z"
                                fill="#C1C4D0"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="45"
                              height="45"
                              viewBox="0 0 45 45"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="45"
                                height="45"
                                rx="7"
                                fill="#F1F2F5"
                              />
                              <path
                                d="M12.9168 32.9166C12.4928 32.9166 12.1439 32.577 12.1355 32.151L12.0835 29.5469C12.0793 29.3364 12.1595 29.1344 12.3074 28.9844C12.4533 28.8344 12.6553 28.75 12.8647 28.75H15.4688C15.9001 28.75 16.2501 29.1 16.2501 29.5312C16.2501 29.9625 15.9001 30.3125 15.4688 30.3125H13.6616L13.698 32.1197C13.7064 32.551 13.3637 32.9083 12.9314 32.9166C12.9272 32.9166 12.922 32.9166 12.9168 32.9166Z"
                                fill="#C1C4D0"
                              />
                              <path
                                d="M32.1347 16.2503H29.5306C29.0994 16.2503 28.7494 15.9003 28.7494 15.4691C28.7494 15.0379 29.0994 14.6879 29.5306 14.6879H31.3535V12.865C31.3535 12.4337 31.7035 12.0837 32.1347 12.0837C32.566 12.0837 32.916 12.4337 32.916 12.865V15.4691C32.916 15.9003 32.566 16.2503 32.1347 16.2503Z"
                                fill="#C1C4D0"
                              />
                              <path
                                d="M11.2812 26.6664C10.9458 26.6664 10.6354 26.4487 10.5333 26.1101C10.1802 24.9362 10 23.7216 10 22.4998C10 15.6072 15.6072 10 22.4998 10C26.3424 10 29.9038 11.7218 32.2694 14.7249C32.5371 15.0635 32.4777 15.5551 32.1392 15.8218C31.7986 16.0874 31.308 16.0301 31.0423 15.6916C28.9757 13.0677 25.8622 11.5625 22.4998 11.5625C16.4686 11.5625 11.5625 16.4686 11.5625 22.4998C11.5625 23.5685 11.7198 24.631 12.0291 25.6601C12.1541 26.0726 11.9208 26.5091 11.5073 26.6341C11.4323 26.656 11.3562 26.6664 11.2812 26.6664Z"
                                fill="#C1C4D0"
                              />
                              <path
                                d="M22.5003 34.9999C18.6576 34.9999 15.0962 33.278 12.7306 30.275C12.4629 29.9364 12.5223 29.4448 12.8608 29.1781C13.2004 28.9104 13.6931 28.9698 13.9577 29.3083C16.0243 31.9322 19.1378 33.4374 22.5003 33.4374C28.5314 33.4374 33.4376 28.5312 33.4376 22.5001C33.4376 21.4314 33.2803 20.3689 32.9709 19.3397C32.8459 18.9272 33.0792 18.4908 33.4928 18.3658C33.9074 18.2398 34.3417 18.4752 34.4667 18.8887C34.8198 20.0637 35 21.2782 35 22.5001C35 29.3927 29.3928 34.9999 22.5003 34.9999Z"
                                fill="#C1C4D0"
                              />
                              <path
                                d="M22.4999 24.5835C18.6396 24.5835 15.7292 23.0159 15.7292 20.9378C15.7292 18.8597 18.6396 17.292 22.4999 17.292C26.3603 17.292 29.2706 18.8597 29.2706 20.9378C29.2706 23.0159 26.3603 24.5835 22.4999 24.5835ZM22.4999 18.8545C19.3208 18.8545 17.2917 20.0888 17.2917 20.9378C17.2917 21.7867 19.3208 23.0211 22.4999 23.0211C25.679 23.0211 27.7081 21.7867 27.7081 20.9378C27.7081 20.0888 25.679 18.8545 22.4999 18.8545Z"
                                fill="#C1C4D0"
                              />
                              <path
                                d="M22.4999 27.7084C18.6396 27.7084 15.7292 26.1408 15.7292 24.0627V20.9377C15.7292 20.5065 16.0792 20.1565 16.5104 20.1565C16.9417 20.1565 17.2917 20.5065 17.2917 20.9377V24.0627C17.2917 24.9116 19.3208 26.146 22.4999 26.146C25.679 26.146 27.7081 24.9116 27.7081 24.0627V20.9377C27.7081 20.5065 28.0581 20.1565 28.4894 20.1565C28.9206 20.1565 29.2706 20.5065 29.2706 20.9377V24.0627C29.2706 26.1408 26.3603 27.7084 22.4999 27.7084Z"
                                fill="#C1C4D0"
                              />
                            </svg>
                          )}
                        </td>
                        <td>{el.name}</td>
                        <td>{el.date}</td>
                        <td>{el.money} ₸</td>
                        <td>
                          {el.status === "в обработке" ? (
                            <svg
                              width="45"
                              height="45"
                              viewBox="0 0 45 45"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="45"
                                height="45"
                                rx="7"
                                fill="#F1F2F5"
                              />
                              <path
                                d="M17.4227 15.6766C16.9516 15.1133 16.0352 15.0886 15.4697 15.71C14.0261 17.2973 11.8004 20.5796 12.8448 24.9494C12.8448 24.9494 12.5496 25.0326 12.1857 25.1355C11.8217 25.2379 12.0093 25.8035 12.605 26.3978L15.1548 28.9439C15.7505 29.5387 16.335 29.3556 16.4599 28.5356L16.9685 25.2068C17.0935 24.3865 16.8041 23.8323 16.3218 23.9684L15.4484 24.2149C14.8159 21.3075 16.1609 19.0347 17.2065 17.7787C17.743 17.1333 17.8938 16.2398 17.4227 15.6766Z"
                                fill="#C1C4D0"
                              />
                              <path
                                d="M20.334 32.7501C21.0074 32.884 21.87 32.9996 22.8413 32.9996C24.9158 32.9996 27.4865 32.4686 29.7741 30.4682C29.7741 30.4682 30.0662 30.7406 30.4255 31.0768C30.7856 31.4127 31.2679 31.0389 31.5023 30.2419L32.5081 26.829C32.7428 26.032 32.2884 25.6316 31.4931 25.9348L28.2636 27.1653C27.4682 27.4685 27.0459 27.9218 27.3201 28.1777L27.8168 28.6416C25.5609 30.5122 22.9294 30.508 21.3168 30.2588C20.4728 30.1282 19.5994 30.4465 19.3305 31.1234C19.0625 31.8 19.4969 32.5834 20.334 32.7501Z"
                                fill="#C1C4D0"
                              />
                              <path
                                d="M32.9604 20.8054C32.4731 18.7862 31.0534 15.2322 26.9768 13.4865C26.9768 13.4865 27.1118 13.1094 27.2785 12.6437C27.4449 12.1785 26.8955 11.9041 26.0507 12.031L22.436 12.5747C21.5912 12.7015 21.4071 13.2697 22.0237 13.8434L24.528 16.1726C25.1446 16.7463 25.7434 16.9362 25.8648 16.5966L26.0844 15.9815C28.7039 17.1985 29.7796 19.4773 30.2164 20.9821C30.4481 21.7803 31.1115 22.4167 31.858 22.3698C32.6038 22.3233 33.1554 21.6122 32.9604 20.8054Z"
                                fill="#C1C4D0"
                              />
                            </svg>
                          ) : el.status === "исполнено" ? (
                            <svg
                              width="45"
                              height="45"
                              viewBox="0 0 45 45"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="45"
                                height="45"
                                rx="7"
                                fill="#F1F2F5"
                              />
                              <path
                                d="M32.4758 15.4093C31.8246 14.8252 30.8118 14.8709 30.2166 15.5167L20.4565 26.1222L15.7413 21.3918C15.1189 20.7697 14.1077 20.7603 13.4789 21.3729C12.8485 21.9839 12.8389 22.9834 13.4597 23.6055L19.3621 29.5263C19.6645 29.8294 20.0741 29.9984 20.5028 29.9984C20.5124 29.9984 20.5237 29.9984 20.5333 30C20.9749 29.9905 21.3909 29.8042 21.6868 29.4821L32.5845 17.6404C33.1782 16.993 33.1302 15.9951 32.4758 15.4093Z"
                                fill="#C1C4D0"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="45"
                              height="45"
                              viewBox="0 0 45 45"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M36.5625 0H8.4375C3.77654 0 0 3.77654 0 8.4375V36.5625C0 41.2235 3.77654 45 8.4375 45H36.5625C41.2235 45 45 41.2235 45 36.5625V8.4375C45 3.77654 41.2235 0 36.5625 0ZM32.5038 30.105L30.1015 32.5056C29.6619 32.9469 28.9419 32.9469 28.5023 32.5056L22.5 26.5033L16.4994 32.5038C16.0581 32.9452 15.3398 32.9452 14.8985 32.5004L12.4962 30.105C12.0583 29.6619 12.0583 28.9471 12.4962 28.5023L18.4985 22.5017L12.4979 16.5012C12.0583 16.0581 12.0583 15.3381 12.4979 14.9002L14.9002 12.4979C15.3415 12.0531 16.0615 12.0531 16.5012 12.4979L22.5 18.5002L28.5023 12.4979C28.9437 12.0531 29.6637 12.0531 30.1015 12.4979L32.5038 14.8967C32.9435 15.3381 32.9435 16.0581 32.5056 16.5012L26.5033 22.5017L32.5056 28.5023C32.9417 28.9471 32.9417 29.6619 32.5038 30.105Z"
                                fill="#C1C4D0"
                              />
                            </svg>
                          )}
                        </td>
                        <td>{el.status}</td>
                        <td style={{ width: "46px" }}>
                          <svg
                            width="46"
                            height="45"
                            viewBox="0 0 46 45"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M23 15.5556C24.6569 15.5556 26 14.3119 26 12.7778C26 11.2437 24.6569 10 23 10C21.3431 10 20 11.2437 20 12.7778C20 14.3119 21.3431 15.5556 23 15.5556Z"
                              fill="#C1C4D0"
                            />
                            <path
                              d="M23 25.2778C24.6569 25.2778 26 24.0341 26 22.5C26 20.9658 24.6569 19.7222 23 19.7222C21.3431 19.7222 20 20.9658 20 22.5C20 24.0341 21.3431 25.2778 23 25.2778Z"
                              fill="#C1C4D0"
                            />
                            <path
                              d="M23 34.9999C24.6569 34.9999 26 33.7563 26 32.2221C26 30.688 24.6569 29.4443 23 29.4443C21.3431 29.4443 20 30.688 20 32.2221C20 33.7563 21.3431 34.9999 23 34.9999Z"
                              fill="#C1C4D0"
                            />
                          </svg>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>
            <SettingPagesRightSideBar
              currentPath={currentPath}
            />
          </Content>
        </Layout>
      </section>
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
)(SettingPaymentHistoryPage);

import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { changeSideBarCollapsed } from "@redux/actions";

import "./index.less";

class SideBar extends Component {
  onCollapse = () => {
    this.props.changeSideBarCollapsedAction(
      !this.props.page.collapsed
    );
  };

  render() {
    const { collapsed } = this.props.page;
    let { userType } = this.props.user;
    

    // Для теста админки
    userType = 'AD' 


    return (
      <div
        className={`${
          collapsed ? "nav" : "nav nav--collapsed"
        }`}
      >
        <div className="nav__header">
          <div className="nav__logo">
            <svg
              width="158"
              height="50"
              viewBox="0 0 158 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 11.3757C5.19497 5.82011 11.9748 0.793651 19.8994 0C14.2642 2.99824 9.15723 8.37743 7.39623 15.6085L0 11.3757ZM46.5786 11.3757C41.3837 5.82011 34.6038 0.793651 26.6792 0C32.4025 2.99824 37.5094 8.37743 39.2704 15.6085L46.5786 11.3757ZM46.5786 11.3757L23.3333 34.7443L0 11.3757V26.6314L23.3333 50L46.6667 26.6314V11.3757H46.5786Z"
                fill="#E9012B"
              />
              <path
                d="M70.7217 7.71973V13.7246C70.7217 14.4102 70.5672 15.0111 70.2583 15.5273C69.9536 16.0436 69.5114 16.4393 68.9316 16.7144C68.3519 16.9894 67.6663 17.127 66.875 17.127C65.6816 17.127 64.7549 16.8223 64.0947 16.2129C63.4346 15.5993 63.1045 14.7614 63.1045 13.6992V7.71973H65.0659V13.4009C65.0659 14.116 65.2098 14.6408 65.4976 14.9751C65.7853 15.3094 66.2614 15.4766 66.9258 15.4766C67.569 15.4766 68.0345 15.3094 68.3223 14.9751C68.6143 14.6366 68.7603 14.1076 68.7603 13.3882V7.71973H70.7217ZM76.7393 17.127C75.9056 17.127 75.2518 16.8244 74.7778 16.2192H74.6763C74.744 16.8117 74.7778 17.1545 74.7778 17.2476V20.123H72.8418V9.90332H74.416L74.689 10.8237H74.7778C75.2306 10.1213 75.9014 9.77002 76.79 9.77002C77.6279 9.77002 78.2839 10.0938 78.7578 10.7412C79.2318 11.3887 79.4688 12.2879 79.4688 13.439C79.4688 14.1965 79.3566 14.8545 79.1323 15.4131C78.9123 15.9717 78.597 16.397 78.1865 16.689C77.776 16.981 77.2936 17.127 76.7393 17.127ZM76.168 11.3188C75.6898 11.3188 75.3407 11.467 75.1206 11.7632C74.9006 12.0552 74.7863 12.5397 74.7778 13.2168V13.4263C74.7778 14.188 74.89 14.7339 75.1143 15.064C75.3428 15.394 75.7025 15.5591 76.1934 15.5591C77.0609 15.5591 77.4946 14.8439 77.4946 13.4136C77.4946 12.7153 77.3867 12.1927 77.1709 11.8457C76.9593 11.4945 76.625 11.3188 76.168 11.3188ZM86.6987 14.4229C86.6987 15.2607 86.3962 15.9209 85.791 16.4033C85.1901 16.8857 84.3522 17.127 83.2773 17.127C82.2871 17.127 81.4111 16.9408 80.6494 16.5684V14.7402C81.2757 15.0195 81.8047 15.2163 82.2363 15.3306C82.6722 15.4448 83.07 15.502 83.4297 15.502C83.8613 15.502 84.1914 15.4194 84.4199 15.2544C84.6527 15.0894 84.769 14.8439 84.769 14.5181C84.769 14.3361 84.7183 14.1753 84.6167 14.0356C84.5151 13.8918 84.3649 13.7542 84.166 13.623C83.9714 13.4919 83.5715 13.2824 82.9663 12.9946C82.3993 12.728 81.974 12.472 81.6904 12.2266C81.4069 11.9811 81.1805 11.6955 81.0112 11.3696C80.842 11.0438 80.7573 10.6629 80.7573 10.2271C80.7573 9.40609 81.0345 8.76074 81.5889 8.29102C82.1475 7.82129 82.9176 7.58643 83.8994 7.58643C84.3818 7.58643 84.841 7.64355 85.2769 7.75781C85.717 7.87207 86.1761 8.03288 86.6543 8.24023L86.0195 9.77002C85.5244 9.56689 85.1139 9.42513 84.7881 9.34473C84.4665 9.26432 84.1491 9.22412 83.8359 9.22412C83.4635 9.22412 83.1779 9.31087 82.979 9.48438C82.7801 9.65788 82.6807 9.88428 82.6807 10.1636C82.6807 10.3371 82.7209 10.4894 82.8013 10.6206C82.8817 10.7476 83.0086 10.8724 83.1821 10.9951C83.3599 11.1136 83.7767 11.3294 84.4326 11.6426C85.3001 12.0573 85.8947 12.4741 86.2163 12.8931C86.5379 13.3078 86.6987 13.8177 86.6987 14.4229ZM90.0884 13.1406L90.9326 12.0615L92.9194 9.90332H95.103L92.2847 12.9819L95.2744 17H93.04L90.9961 14.1245L90.1646 14.791V17H88.2285V7.12305H90.1646V11.5283L90.063 13.1406H90.0884ZM96.2075 8.06885C96.2075 7.43831 96.5588 7.12305 97.2612 7.12305C97.9637 7.12305 98.3149 7.43831 98.3149 8.06885C98.3149 8.3693 98.2261 8.60417 98.0483 8.77344C97.8748 8.93848 97.6125 9.021 97.2612 9.021C96.5588 9.021 96.2075 8.70361 96.2075 8.06885ZM98.2261 17H96.29V9.90332H98.2261V17ZM102.2 17H100.264V7.12305H102.2V17ZM106.173 17H104.237V7.12305H106.173V17ZM114.91 11.4385C115.555 11.4385 116.059 11.6908 116.424 12.1953C116.788 12.6966 116.971 13.3851 116.971 14.2607C116.971 15.1624 116.782 15.8607 116.404 16.3555C116.03 16.8503 115.519 17.0977 114.871 17.0977C114.23 17.0977 113.727 16.8649 113.362 16.3994H113.26L113.011 17H111.873V9.40234H113.362V11.1699C113.362 11.3945 113.343 11.7542 113.304 12.249H113.362C113.711 11.7087 114.227 11.4385 114.91 11.4385ZM114.432 12.6299C114.064 12.6299 113.795 12.7438 113.626 12.9717C113.457 13.1963 113.369 13.569 113.362 14.0898V14.251C113.362 14.8369 113.449 15.2568 113.621 15.5107C113.797 15.7646 114.074 15.8916 114.451 15.8916C114.757 15.8916 115 15.7516 115.179 15.4717C115.361 15.1885 115.452 14.7783 115.452 14.2412C115.452 13.7041 115.361 13.3021 115.179 13.0352C114.996 12.765 114.747 12.6299 114.432 12.6299ZM117.42 11.541H119.051L120.081 14.6123C120.169 14.8792 120.229 15.195 120.262 15.5596H120.291C120.327 15.2243 120.397 14.9085 120.501 14.6123L121.512 11.541H123.108L120.799 17.6982C120.587 18.2679 120.285 18.6943 119.891 18.9775C119.5 19.2607 119.043 19.4023 118.519 19.4023C118.261 19.4023 118.009 19.3747 117.762 19.3193V18.1377C117.941 18.18 118.136 18.2012 118.348 18.2012C118.611 18.2012 118.841 18.1198 119.036 17.957C119.235 17.7975 119.389 17.555 119.5 17.2295L119.588 16.9609L117.42 11.541Z"
                fill="#50535F"
              />
              <path
                d="M74.2783 32.4521C74.2783 34.5674 73.6748 36.1875 72.4678 37.3125C71.2666 38.4375 69.5293 39 67.2559 39H63.6172V26.1504H67.6514C69.749 26.1504 71.3779 26.7041 72.5381 27.8115C73.6982 28.9189 74.2783 30.4658 74.2783 32.4521ZM71.4482 32.5225C71.4482 29.7627 70.2295 28.3828 67.792 28.3828H66.3418V36.75H67.5107C70.1357 36.75 71.4482 35.3408 71.4482 32.5225ZM84.3418 39H76.9414V26.1504H84.3418V28.3828H79.666V31.2041H84.0166V33.4365H79.666V36.75H84.3418V39ZM94.3613 26.1504H97.1123L92.7441 39H89.7734L85.4141 26.1504H88.165L90.582 33.7969C90.7168 34.248 90.8545 34.7754 90.9951 35.3789C91.1416 35.9766 91.2324 36.3926 91.2676 36.627C91.332 36.0879 91.5518 35.1445 91.9268 33.7969L94.3613 26.1504ZM106.139 39H98.7383V26.1504H106.139V28.3828H101.463V31.2041H105.813V33.4365H101.463V36.75H106.139V39ZM108.828 39V26.1504H111.553V36.75H116.765V39H108.828ZM118.417 37.7432C118.417 37.251 118.549 36.8789 118.812 36.627C119.076 36.375 119.46 36.249 119.964 36.249C120.45 36.249 120.825 36.3779 121.089 36.6357C121.358 36.8936 121.493 37.2627 121.493 37.7432C121.493 38.2061 121.358 38.5723 121.089 38.8418C120.819 39.1055 120.444 39.2373 119.964 39.2373C119.472 39.2373 119.091 39.1084 118.821 38.8506C118.552 38.5869 118.417 38.2178 118.417 37.7432ZM134.475 39H131.381L128.015 33.5859L126.863 34.4121V39H124.139V26.1504H126.863V32.0303L127.936 30.5186L131.416 26.1504H134.439L129.957 31.8369L134.475 39ZM144.468 39H134.905V37.2334L141.066 28.4004H135.072V26.1504H144.301V27.9082L138.148 36.75H144.468V39Z"
                fill="#50535F"
              />
            </svg>
          </div>
          <div
            className="nav__burger-container"
            onClick={this.onCollapse}
          >
            <svg
              className="nav__burger-icon"
              width="25"
              height="17"
              viewBox="0 0 25 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 15.7857C0 15.4637 0.109747 15.1548 0.305097 14.9271C0.500448 14.6994 0.7654 14.5714 1.04167 14.5714H7.29167C7.56793 14.5714 7.83289 14.6994 8.02824 14.9271C8.22359 15.1548 8.33333 15.4637 8.33333 15.7857C8.33333 16.1078 8.22359 16.4166 8.02824 16.6443C7.83289 16.8721 7.56793 17 7.29167 17H1.04167C0.7654 17 0.500448 16.8721 0.305097 16.6443C0.109747 16.4166 0 16.1078 0 15.7857ZM0 8.5C0 8.17795 0.109747 7.86909 0.305097 7.64137C0.500448 7.41365 0.7654 7.28571 1.04167 7.28571H15.625C15.9013 7.28571 16.1662 7.41365 16.3616 7.64137C16.5569 7.86909 16.6667 8.17795 16.6667 8.5C16.6667 8.82205 16.5569 9.13091 16.3616 9.35863C16.1662 9.58635 15.9013 9.71429 15.625 9.71429H1.04167C0.7654 9.71429 0.500448 9.58635 0.305097 9.35863C0.109747 9.13091 0 8.82205 0 8.5ZM0 1.21429C0 0.892237 0.109747 0.583379 0.305097 0.355656C0.500448 0.127934 0.7654 0 1.04167 0H23.9583C24.2346 0 24.4996 0.127934 24.6949 0.355656C24.8903 0.583379 25 0.892237 25 1.21429C25 1.53633 24.8903 1.84519 24.6949 2.07292C24.4996 2.30064 24.2346 2.42857 23.9583 2.42857H1.04167C0.7654 2.42857 0.500448 2.30064 0.305097 2.07292C0.109747 1.84519 0 1.53633 0 1.21429Z"
                fill="#C1C4D0"
              />
            </svg>
          </div>
        </div>

        <div className="nav__content">
          <Link
            to={`${
              userType === "ST"
                ? "/course"
                : userType === "TC"
                ? "/teacher_course"
                : userType === "AD"
                ? "/admin-lessons"
                : ""
            }`}
            className={`${
              this.props.currentPath === "/course" ||
              this.props.currentPath === "/teacher_course" ||
              this.props.currentPath === "/admin-lessons"
                ? "nav__link nav__link--active"
                : "nav__link"
            }`}
          >
            <div className="nav__icon-container">
              <svg
                className="nav__icon"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 25.0698V18.5581C10 18.186 10.4 17.6279 11 17.6279H15C15.4 17.6279 16 18 16 18.5581V25.0698C16 25.6279 16.4 26 17 26H25C25.6 26 26 25.6279 26 25.0698V12.0465C26 11.8605 25.8 11.4884 25.8 11.3023L23 8.88372V2.74419C23 2.18605 22.6 1.81395 22 1.81395H20C19.4 1.81395 19 2.18605 19 2.74419V5.16279L13.8 0.139535C13.4 -0.0465116 12.6 -0.0465116 12.2 0.139535L0.2 11.3023C0.2 11.4884 0 11.8605 0 12.0465V25.0698C0 25.6279 0.4 26 1 26H9C9.6 26 10 25.6279 10 25.0698Z" />
              </svg>
            </div>
            <span className="nav__label">Уроки</span>
          </Link>

          <Link
            to={`${
              userType === ("ST" || "TC")
                ? "/task"
                : userType === "AD"
                ? "/admin-task"
                : ""
            }`}
            className={`${
              this.props.currentPath === "/task" || this.props.currentPath === "/admin-task"
                ? "nav__link nav__link--active"
                : "nav__link"
            }`}
          >
            <div className="nav__icon-container">
              <svg
                className="nav__icon"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.20588 0H21.7941C24.1142 0 26 1.6029 26 3.575V22.425C26 24.3971 24.1142 26 21.7941 26H4.20588C1.88577 26 0 24.3971 0 22.425V3.575C0 1.6029 1.88577 0 4.20588 0ZM7.26471 22.1H18.7353C19.3685 22.1 19.8824 21.6632 19.8824 21.125C19.8824 20.5868 19.3685 20.15 18.7353 20.15H7.26471C6.63153 20.15 6.11765 20.5868 6.11765 21.125C6.11765 21.6632 6.63153 22.1 7.26471 22.1ZM7.26471 16.9H18.7353C19.3685 16.9 19.8824 16.4632 19.8824 15.925C19.8824 15.3868 19.3685 14.95 18.7353 14.95H7.26471C6.63153 14.95 6.11765 15.3868 6.11765 15.925C6.11765 16.4632 6.63153 16.9 7.26471 16.9ZM7.26471 12.35H18.7353C19.3685 12.35 19.8824 11.9132 19.8824 11.375C19.8824 10.8368 19.3685 10.4 18.7353 10.4H7.26471C6.63153 10.4 6.11765 10.8368 6.11765 11.375C6.11765 11.9132 6.63153 12.35 7.26471 12.35ZM7.26471 7.15H18.7353C19.3685 7.15 19.8824 6.7132 19.8824 6.175C19.8824 5.6368 19.3685 5.2 18.7353 5.2H7.26471C6.63153 5.2 6.11765 5.6368 6.11765 6.175C6.11765 6.7132 6.63153 7.15 7.26471 7.15Z" />
              </svg>
            </div>
            <span className="nav__label">Задания</span>
          </Link>

          <Link
            to={`${
              userType === ("ST" || "TC")
                ? "/calendar"
                : userType === "AD"
                ? "/admin-calendar"
                : ""
            }`}
            className={`${
              this.props.currentPath === "/calendar" || this.props.currentPath === "/admin-calendar"
                ? "nav__link nav__link--active"
                : "nav__link"
            }`}
          >
            <div className="nav__icon-container">
              <svg
                className="nav__icon"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.5 0.8125C6.5 0.597012 6.4144 0.390349 6.26202 0.237976C6.10965 0.0856024 5.90299 0 5.6875 0C5.47201 0 5.26535 0.0856024 5.11298 0.237976C4.9606 0.390349 4.875 0.597012 4.875 0.8125V1.625H3.25C2.38805 1.625 1.5614 1.96741 0.951903 2.5769C0.34241 3.1864 0 4.01305 0 4.875L0 6.5H26V4.875C26 4.01305 25.6576 3.1864 25.0481 2.5769C24.4386 1.96741 23.612 1.625 22.75 1.625H21.125V0.8125C21.125 0.597012 21.0394 0.390349 20.887 0.237976C20.7347 0.0856024 20.528 0 20.3125 0C20.097 0 19.8903 0.0856024 19.738 0.237976C19.5856 0.390349 19.5 0.597012 19.5 0.8125V1.625H6.5V0.8125ZM26 22.75V8.125H0V22.75C0 23.612 0.34241 24.4386 0.951903 25.0481C1.5614 25.6576 2.38805 26 3.25 26H22.75C23.612 26 24.4386 25.6576 25.0481 25.0481C25.6576 24.4386 26 23.612 26 22.75ZM20.3125 11.375H21.9375C22.153 11.375 22.3597 11.4606 22.512 11.613C22.6644 11.7653 22.75 11.972 22.75 12.1875V13.8125C22.75 14.028 22.6644 14.2347 22.512 14.387C22.3597 14.5394 22.153 14.625 21.9375 14.625H20.3125C20.097 14.625 19.8903 14.5394 19.738 14.387C19.5856 14.2347 19.5 14.028 19.5 13.8125V12.1875C19.5 11.972 19.5856 11.7653 19.738 11.613C19.8903 11.4606 20.097 11.375 20.3125 11.375Z" />
              </svg>
            </div>
            <span className="nav__label">Календарь</span>
          </Link>

          <Link
            to={`${
              userType === ("ST" || "TC")
                ? "/statistics"
                : userType === "AD"
                ? "/admin-statistics"
                : ""
            }`}
            className={`${
              this.props.currentPath === "/statistics" || this.props.currentPath === "/admin-statistics"
                ? "nav__link nav__link--active"
                : "nav__link"
            }`}
          >
            <div className="nav__icon-container">
              <svg
                className="nav__icon"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 12.9813C0 16.2787 1.24182 19.2848 3.26973 21.5812L7.89846 16.9525C7.04075 15.849 6.51017 14.4819 6.51017 12.9797C6.51017 9.66923 9.00357 6.95775 12.2066 6.55249V0.00162884C5.4067 0.42479 0 6.07562 0 12.9813Z" />
                <path d="M13.8325 0V6.55086C16.7669 6.92357 19.0764 9.23305 19.4475 12.1659H25.9984C25.5915 5.63618 20.3622 0.406886 13.8325 0Z" />
                <path d="M19.4491 13.7934C19.0422 16.9964 16.3324 19.4898 13.0203 19.4898C11.5197 19.4898 10.1526 18.9576 9.04913 18.1015L4.4204 22.7303C6.71687 24.7582 9.72294 26 13.0203 26C19.9244 26 25.5752 20.5933 26 13.7934H19.4491Z" />
              </svg>
            </div>
            <span className="nav__label">Статистика</span>
          </Link>

          {
            userType === "AD" ? 
            <Link
              to="/admin-users"
              className={`${
                this.props.currentPath === "/admin-users"
                  ? "nav__link nav__link--active"
                  : "nav__link"
              }`}
            >
              <div className="nav__icon-container">
                <svg
                  className="nav__icon"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.2831 1.70625C14.612 -0.56875 11.388 -0.56875 10.7169 1.70625L10.5544 2.25875C10.4541 2.59934 10.2789 2.91317 10.0415 3.17722C9.80416 3.44127 9.51072 3.64885 9.1827 3.78473C8.85469 3.92061 8.50042 3.98135 8.14587 3.96249C7.79133 3.94363 7.4455 3.84566 7.13375 3.67575L6.63 3.3995C4.54513 2.26525 2.26525 4.54513 3.40112 6.62838L3.67575 7.13375C4.4005 8.46625 3.71312 10.1254 2.25875 10.5544L1.70625 10.7169C-0.56875 11.388 -0.56875 14.612 1.70625 15.2831L2.25875 15.4456C2.59934 15.5459 2.91317 15.7211 3.17722 15.9585C3.44127 16.1958 3.64885 16.4893 3.78473 16.8173C3.92061 17.1453 3.98135 17.4996 3.96249 17.8541C3.94363 18.2087 3.84566 18.5545 3.67575 18.8662L3.3995 19.37C2.26525 21.4549 4.54513 23.7348 6.62838 22.5989L7.13375 22.3242C7.4455 22.1543 7.79133 22.0564 8.14587 22.0375C8.50042 22.0187 8.85469 22.0794 9.1827 22.2153C9.51072 22.3512 9.80416 22.5587 10.0415 22.8228C10.2789 23.0868 10.4541 23.4007 10.5544 23.7412L10.7169 24.2937C11.388 26.5687 14.612 26.5687 15.2831 24.2937L15.4456 23.7412C15.5459 23.4007 15.7211 23.0868 15.9585 22.8228C16.1958 22.5587 16.4893 22.3512 16.8173 22.2153C17.1453 22.0794 17.4996 22.0187 17.8541 22.0375C18.2087 22.0564 18.5545 22.1543 18.8662 22.3242L19.37 22.6005C21.4549 23.7348 23.7348 21.4549 22.5989 19.3716L22.3242 18.8662C22.1543 18.5545 22.0564 18.2087 22.0375 17.8541C22.0187 17.4996 22.0794 17.1453 22.2153 16.8173C22.3512 16.4893 22.5587 16.1958 22.8228 15.9585C23.0868 15.7211 23.4007 15.5459 23.7412 15.4456L24.2937 15.2831C26.5687 14.612 26.5687 11.388 24.2937 10.7169L23.7412 10.5544C23.4007 10.4541 23.0868 10.2789 22.8228 10.0415C22.5587 9.80416 22.3512 9.51072 22.2153 9.1827C22.0794 8.85469 22.0187 8.50042 22.0375 8.14587C22.0564 7.79133 22.1543 7.4455 22.3242 7.13375L22.6005 6.63C23.7348 4.54513 21.4549 2.26525 19.3716 3.40112L18.8662 3.67575C18.5545 3.84566 18.2087 3.94363 17.8541 3.96249C17.4996 3.98135 17.1453 3.92061 16.8173 3.78473C16.4893 3.64885 16.1958 3.44127 15.9585 3.17722C15.7211 2.91317 15.5459 2.59934 15.4456 2.25875L15.2831 1.70625ZM13 17.7613C11.7372 17.7613 10.5262 17.2596 9.63329 16.3667C8.74038 15.4738 8.23875 14.2628 8.23875 13C8.23875 11.7372 8.74038 10.5262 9.63329 9.63329C10.5262 8.74038 11.7372 8.23875 13 8.23875C14.2623 8.23875 15.473 8.74021 16.3656 9.63281C17.2582 10.5254 17.7596 11.736 17.7596 12.9984C17.7596 14.2607 17.2582 15.4713 16.3656 16.3639C15.473 17.2565 14.2623 17.758 13 17.758V17.7613Z" />
                </svg>
              </div>
              <span className="nav__label">Пользователи</span>
            </Link> : null
          }

          {
            userType === "AD" ? 
            <Link
              to="/crm"
              className={`${
                this.props.currentPath === "/crm"
                  ? "nav__link nav__link--active"
                  : "nav__link"
              }`}
            >
              <div className="nav__icon-container">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.8727 9.8085C25.1514 9.29175 25.3784 8.58975 25.1368 7.87367C24.8559 7.04383 24.0816 6.49242 22.8321 6.23675L14.9077 4.61175L6.81596 0.43875C6.72831 0.39325 5.94059 0 5.07984 0C4.4382 0 3.88534 0.2145 3.47969 0.618583C3.101 0.996667 2.87401 1.52208 2.80209 2.18292C2.72764 2.1785 2.65307 2.17634 2.57848 2.17642C1.35477 2.17642 0.726619 2.67042 0.41423 3.08533C-0.0689618 3.72667 -0.129642 4.59442 0.233314 5.66583L3.21 14.4603L3.49205 22.0794C3.54149 23.4033 4.29999 24.8267 5.84957 24.8278C6.14623 24.8278 6.453 24.7726 6.77101 24.6653C7.13958 25.2677 7.80481 26 8.86559 26C9.61397 26 10.3534 25.6133 11.0635 24.8484L16.8057 18.6767L24.4277 14.0367C24.5929 13.9349 26.0504 13.0076 25.9987 11.622C25.9739 10.9265 25.5919 10.3198 24.8727 9.8085ZM7.82729 21.8465L5.21131 14.118L4.85622 4.53375L14.2122 6.45233L21.8207 10.3762L15.4943 17.1784L7.82729 21.8465ZM22.4141 8.13583C23.0265 8.2615 23.2108 8.43808 23.2231 8.47492C23.2467 8.54317 23.204 8.68725 23.1254 8.84758L21.3016 7.90725L22.4141 8.13583ZM5.07984 1.94133C5.38211 1.94133 5.76192 2.09842 5.86643 2.15042L7.81942 3.15683L4.79329 2.53608C4.8079 2.18617 4.88319 2.01175 4.92814 1.96625C4.94162 1.95433 4.99781 1.94133 5.07984 1.94133ZM2.14698 5.0635C1.92786 4.41892 2.0436 4.225 2.0436 4.225C2.06495 4.19683 2.23125 4.11775 2.57848 4.11775C2.67175 4.11775 2.75715 4.12317 2.82682 4.12967L2.9493 7.43383L2.14698 5.0635ZM5.5046 22.009L5.47201 21.1445L6.04959 22.8497C5.98492 22.8705 5.91765 22.8829 5.84957 22.8865C5.68551 22.8865 5.52033 22.3448 5.5046 22.009ZM9.56565 23.5517C9.10044 24.0533 8.86896 24.0587 8.86671 24.0587C8.80154 24.0587 8.65883 23.9157 8.52848 23.7153L10.5714 22.4716L9.56565 23.5517ZM23.3535 12.3944L21.7297 13.3835L23.6344 11.336C23.9142 11.5245 23.9861 11.6588 23.9872 11.6924C23.994 11.8365 23.6647 12.1994 23.3535 12.3944Z" fill="#C1C4D0"/>
                </svg>
              </div>
              <span className="nav__label">CRM</span>
            </Link> : null
          }

          <Link
            to={`${
              userType === "ST"
                ? "/setting_profile"
                : userType === "TC"
                ? "/teacher_profile"
                : userType === "AD"
                ? "/admin-settings"
                : ""
            }`}
            className={`${
              this.props.currentPath === "/teacher_profile" || this.props.currentPath === "/setting_profile" || this.props.currentPath === "/admin-settings"
                ? "nav__link nav__link--active"
                : "nav__link"
            }`}
          >
            <div className="nav__icon-container">
              <svg
                className="nav__icon"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.2831 1.70625C14.612 -0.56875 11.388 -0.56875 10.7169 1.70625L10.5544 2.25875C10.4541 2.59934 10.2789 2.91317 10.0415 3.17722C9.80416 3.44127 9.51072 3.64885 9.1827 3.78473C8.85469 3.92061 8.50042 3.98135 8.14587 3.96249C7.79133 3.94363 7.4455 3.84566 7.13375 3.67575L6.63 3.3995C4.54513 2.26525 2.26525 4.54513 3.40112 6.62838L3.67575 7.13375C4.4005 8.46625 3.71312 10.1254 2.25875 10.5544L1.70625 10.7169C-0.56875 11.388 -0.56875 14.612 1.70625 15.2831L2.25875 15.4456C2.59934 15.5459 2.91317 15.7211 3.17722 15.9585C3.44127 16.1958 3.64885 16.4893 3.78473 16.8173C3.92061 17.1453 3.98135 17.4996 3.96249 17.8541C3.94363 18.2087 3.84566 18.5545 3.67575 18.8662L3.3995 19.37C2.26525 21.4549 4.54513 23.7348 6.62838 22.5989L7.13375 22.3242C7.4455 22.1543 7.79133 22.0564 8.14587 22.0375C8.50042 22.0187 8.85469 22.0794 9.1827 22.2153C9.51072 22.3512 9.80416 22.5587 10.0415 22.8228C10.2789 23.0868 10.4541 23.4007 10.5544 23.7412L10.7169 24.2937C11.388 26.5687 14.612 26.5687 15.2831 24.2937L15.4456 23.7412C15.5459 23.4007 15.7211 23.0868 15.9585 22.8228C16.1958 22.5587 16.4893 22.3512 16.8173 22.2153C17.1453 22.0794 17.4996 22.0187 17.8541 22.0375C18.2087 22.0564 18.5545 22.1543 18.8662 22.3242L19.37 22.6005C21.4549 23.7348 23.7348 21.4549 22.5989 19.3716L22.3242 18.8662C22.1543 18.5545 22.0564 18.2087 22.0375 17.8541C22.0187 17.4996 22.0794 17.1453 22.2153 16.8173C22.3512 16.4893 22.5587 16.1958 22.8228 15.9585C23.0868 15.7211 23.4007 15.5459 23.7412 15.4456L24.2937 15.2831C26.5687 14.612 26.5687 11.388 24.2937 10.7169L23.7412 10.5544C23.4007 10.4541 23.0868 10.2789 22.8228 10.0415C22.5587 9.80416 22.3512 9.51072 22.2153 9.1827C22.0794 8.85469 22.0187 8.50042 22.0375 8.14587C22.0564 7.79133 22.1543 7.4455 22.3242 7.13375L22.6005 6.63C23.7348 4.54513 21.4549 2.26525 19.3716 3.40112L18.8662 3.67575C18.5545 3.84566 18.2087 3.94363 17.8541 3.96249C17.4996 3.98135 17.1453 3.92061 16.8173 3.78473C16.4893 3.64885 16.1958 3.44127 15.9585 3.17722C15.7211 2.91317 15.5459 2.59934 15.4456 2.25875L15.2831 1.70625ZM13 17.7613C11.7372 17.7613 10.5262 17.2596 9.63329 16.3667C8.74038 15.4738 8.23875 14.2628 8.23875 13C8.23875 11.7372 8.74038 10.5262 9.63329 9.63329C10.5262 8.74038 11.7372 8.23875 13 8.23875C14.2623 8.23875 15.473 8.74021 16.3656 9.63281C17.2582 10.5254 17.7596 11.736 17.7596 12.9984C17.7596 14.2607 17.2582 15.4713 16.3656 16.3639C15.473 17.2565 14.2623 17.758 13 17.758V17.7613Z" />
              </svg>
            </div>
            <span className="nav__label">Настройки</span>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  changeSideBarCollapsedAction: (collapsed) =>
    dispatch(changeSideBarCollapsed(collapsed)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);

import LoginPage from '@public-pages/LoginPage';
import RegisterPage from '@student-pages/RegisterPage';

import CoursePage from '@student-pages/CoursePage';
import TeacherCoursePage from '@teacher-pages/CoursePage';
import TaskPage from '@student-pages/TaskPage';
import TeacherTaskPage from '@teacher-pages/TaskPage';

import StatisticsPage from '@student-pages/StatisticsPage';
import TeacherStatisticsPage from '@teacher-pages/StatisticsPage';
import CalendarPage from '@student-pages/CalendarPage';
import TeacherCalendarPage from '@teacher-pages/CalendarPage';
import NewsPage from '@student-pages/NewsPage';
import TeacherNewsPage from '@teacher-pages/NewsPage';

import SettingProfilePage from '@student-pages/SettingPages/SettingProfilePage';
import TeacherSettingProfilePage from '@teacher-pages/SettingPages/SettingProfilePage';
import SettingPaymentHistoryPage from '@student-pages/SettingPages/SettingPaymentHistoryPage';
import TeacherSettingPaymentHistoryPage from '@teacher-pages/SettingPages/SettingPaymentHistoryPage';

import AdminCalendarPage from '@admin-pages/AdminCalendarPage';
import AdminCoursePage from '@admin-pages/AdminCoursePage';
import AdminHistoryPage from '@admin-pages/AdminSettingsPage/AdminHistoryPage';
import AdminLessonsPage from '@admin-pages/AdminLessonsPage';
import AdminTaskPage from '@admin-pages/AdminTaskPage';
import AdminUsersPage from '@admin-pages/AdminUsersPage';
import AdminCRMPage from '@admin-pages/AdminCRMPage';
import AdminSettingsPage from '@admin-pages/AdminSettingsPage/AdminSettingsProfile';
import AdminStatisticsPage from '@admin-pages/AdminStatisticsPage';
import AdminPayInfoPage from '@admin-pages/AdminSettingsPage/AdminPayInfoPage';
import AdminParentsPage from '@admin-pages/AdminSettingsPage/AdminParentsPage';

import PageNotFoundPage from '@public-pages/ErrorPages/PageNotFoundPage';

const DEBUG = true;

const routeConfig = [
  {
    path: '/admin-statistics',
    page: AdminStatisticsPage,
    auth: [true],
    permission: ['AD'],
    accepted: [true]
  },
  {
    path: '/admin-parents',
    page: AdminParentsPage,
    auth: [true],
    permission: ['AD'],
    accepted: [true]
  },
  {
    path: '/admin-payinfo',
    page: AdminPayInfoPage,
    auth: [true],
    permission: ['AD'],
    accepted: [true]
  },
  {
    path: '/admin-settings',
    page: AdminSettingsPage,
    auth: [true],
    permission: ['AD'],
    accepted: [true]
  },
  {
    path: '/crm',
    page: AdminCRMPage,
    auth: [true],
    permission: ['AD'],
    accepted: [true]
  },
  {
    path: '/admin-calendar',
    page: AdminCalendarPage,
    auth: [true],
    permission: ['AD'],
    accepted: [true]
  },
  {
    path: '/admin-course',
    page: AdminCoursePage,
    auth: [true],
    permission: ['AD'],
    accepted: [true]
  },
  {
    path: '/admin-history',
    page: AdminHistoryPage,
    auth: [true],
    permission: ['AD'],
    accepted: [true]
  },
  {
    path: '/admin-lessons',
    page: AdminLessonsPage,
    auth: [true],
    permission: ['AD'],
    accepted: [true]
  },
  {
    path: '/admin-task',
    page: AdminTaskPage,
    auth: [true],
    permission: ['AD'],
    accepted: [true]
  },
  {
    path: '/admin-users',
    page: AdminUsersPage,
    auth: [true],
    permission: ['AD'],
    accepted: [true]
  },

  {
    path: '/teacher',
    // page: TeacherHomePage,
    auth: [true],
    permission: ['TC'],
    accepted: [true],
  },
  {
    path: '/admin',
    // page: AdminHomePage,
    auth: [true],
    permission: ['AD'],
    accepted: [true],
  },
  /* - - - */
  {
    path: '/login',
    page: LoginPage,
    auth: [false],
    permission: ['guest'],
    accepted: [false],
  },
  {
    path: '/register',
    page: RegisterPage,
    auth: [false, true],
    permission: ['guest', 'ST'],
    accepted: [false],
  },
  /* - - - */
  {
    path: '/course',
    page: CoursePage,
    auth: [true],
    permission: ['ST'],
    accepted: [true],
  },
  {
    path: '/teacher_course',
    page: TeacherCoursePage,
    auth: [true],
    permission: ['TC'],
    accepted: [true],
  },
  {
    path: '/task',
    page: TaskPage,
    auth: [true],
    permission: ['ST'],
    accepted: [true],
  },
  {
    path: '/teacher_task',
    page: TeacherTaskPage,
    auth: [true],
    permission: ['TC'],
    accepted: [true],
  },
  /* - - - */
  {
    path: '/news',
    page: NewsPage,
    auth: [true],
    permission: ['ST'],
    accepted: [true],
  },
  /* - - - */
  {
    path: '/statistics',
    page: StatisticsPage,
    auth: [true],
    permission: ['ST'],
    accepted: [true],
  },
  {
    path: '/teacher_statistics',
    page: TeacherStatisticsPage,
    auth: [true],
    permission: ['TC'],
    accepted: [true],
  },

  /* - - - */
  {
    path: '/calendar',
    page: CalendarPage,
    auth: [true],
    permission: ['ST'],
    accepted: [true],
  },
  {
    path: '/teacher_calendar',
    page: TeacherCalendarPage,
    auth: [true],
    permission: ['TC'],
    accepted: [true],
  },
  /* - - - */
  {
    path: '/setting_profile',
    page: SettingProfilePage,
    auth: [true],
    permission: ['ST'],
    accepted: [false, true],
  },
  {
    path: '/teacher_profile',
    page: TeacherSettingProfilePage,
    auth: [true],
    permission: ['TC'],
    accepted: [true],
  },
  {
    path: '/setting_payment_history',
    page: SettingPaymentHistoryPage,
    auth: [true],
    permission: ['ST'],
    accepted: [true],
  },
  {
    path: '/tacher_setting_payment_history',
    page: TeacherSettingPaymentHistoryPage,
    auth: [true],
    permission: ['TC'],
    accepted: [true],
  },
  /* --- */
  {
    path: '/404',
    page: PageNotFoundPage,
    auth: [false, true],
    permission: ['guest', 'ST', 'TC', 'AD'],
    accepted: [true, false],
  },
];

if (DEBUG) {
  routeConfig.forEach((el) => {
    el.auth.push(false, true);
    el.permission.push('guest', 'ST', 'TC', 'AD');
    el.accepted.push(false, true);
  });
}

export default routeConfig;

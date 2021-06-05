import { upSkillApiInstance as upSkillApi } from "@api/ajax";

// Token
export const reqTokenSoFresh = (data) =>
  upSkillApi.post("/auth/token/verify/", data);
export const reqFreshToken = (data) =>
  upSkillApi.post("/auth/token/refresh/", data);

// Auth
export const reqLoginWithPhone = (data) =>
  upSkillApi.post("/auth/login/", data);
export const reqLoginWithEmail = (data) =>
  upSkillApi.post("/auth/login/", data);
export const reqRegister = (data) =>
  upSkillApi.post("/auth/registration/", data);

// Student Calendar
export const reqStudentCalendar = (params) =>
  upSkillApi.get("/lesson/calendar/", params);

// Student Groups
export const reqStudentMyGroup = () =>
  upSkillApi.get("/groups/my_groups/");

// Student Course
export const reqStudentMyCourses = () =>
  upSkillApi.get("/groups/my_courses/");

// Student Lessons list
export const reqStudentLessonsList = (params) =>
  upSkillApi.get("/lesson/", params);

// Student Lesson Content
export const reqStudentLessonContent = (id) =>
  upSkillApi.get(`/lesson/${id}/`);

// Student Task Page
export const reqStudentTasks = (params) =>
  upSkillApi.get("/lesson/task/", params);

// Student Task Content
export const reqStudentTaskContent = (id) =>
  upSkillApi.get(`/lesson/task/${id}/`);

// Student Profile
export const reqStudentProfile = (id, data) =>
  upSkillApi.post(`/user/profile/${id}`, data);

// Student info
export const reqStudentProfileInfo = (id) =>
  upSkillApi.get(`/user/profile/${id}`);

// Student Satatistic info
export const reqStudentStatisticInfo = () =>
  upSkillApi.get("/lesson/student/statistic/");

// Student Search Parent
export const reqStudentSearchParent = (emailOrPhone) =>
  upSkillApi.post(
    "/user/profile/parent/search/",
    emailOrPhone
  );

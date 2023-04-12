import AdminsMenus from "./AdminsMenuConfig";
import LecturersMenus from "./LecturersMenuConfig";
import StudentsMenus from "./StudentsMenuConfig";

const Roles = {
  AdminRole: true,
  LecturerRole: false,
  StudentRole: false,
};

let MainMenu = null;

if (Roles.AdminRole === true) {
  MainMenu = AdminsMenus;
} else if (Roles.LecturerRole === true) {
  MainMenu = LecturersMenus;
} else if (Roles.StudentRole === true) {
  MainMenu = StudentsMenus;
}

export default MainMenu;

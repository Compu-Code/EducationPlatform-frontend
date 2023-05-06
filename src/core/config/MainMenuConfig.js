const AdminsMenus = () => import("./AdminsMenuConfig");
const LecturersMenus = () => import("./LecturersMenuConfig");
const StudentsMenus = () => import("./StudentsMenuConfig");

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

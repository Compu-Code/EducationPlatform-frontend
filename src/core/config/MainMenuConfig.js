import AdminsMenus from "./AdminsMenuConfig";
import LecturersMenus from "./LecturersMenuConfig";
import StudentsMenus from "./StudentsMenuConfig";

const Roles = {
  AdminRole: true,
  LecturerRole: false,
  StudentRole: false,
};

let MainMenu = null;

console.log(AdminsMenus);
console.log(LecturersMenus);
console.log(StudentsMenus);

if (Roles.AdminRole === true) {
  MainMenu = AdminsMenus;
} else if (Roles.LecturerRole === true) {
  MainMenu = LecturersMenus;
} else if (Roles.StudentRole === true) {
  MainMenu = StudentsMenus;
}
console.log(MainMenu);
export default MainMenu;

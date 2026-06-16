import {
  AppItem,
  NavDrawer,
  NavDrawerBody,
  NavItem,
  makeStyles,
} from "@fluentui/react-components";
import {
  Board20Filled,
  Board20Regular,
  BoxMultiple20Filled,
  BoxMultiple20Regular,
  DataArea20Filled,
  DataArea20Regular,
  DocumentBulletListMultiple20Filled,
  DocumentBulletListMultiple20Regular,
  bundleIcon,
  PersonCircle32Regular,
} from "@fluentui/react-icons";
import { useLocation, useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  nav: {
    height: "100%",
    width: "100%",
    // Fluent's Drawer caps its own width, so lift the cap too or it won't fill.
    maxWidth: "100%",
    minWidth: "200px",
    backgroundColor: "transparent",
  },
});

const Dashboard = bundleIcon(Board20Filled, Board20Regular);
const Recipes = bundleIcon(
  DocumentBulletListMultiple20Filled,
  DocumentBulletListMultiple20Regular
);
const Materials = bundleIcon(BoxMultiple20Filled, BoxMultiple20Regular);
const Jobs = bundleIcon(DataArea20Filled, DataArea20Regular);

function NavMenu() {
  const styles = useStyles();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // NavItem value === route path, so the selected highlight follows the URL.
  return (
    <nav>
      <NavDrawer
        open
        type="inline"
        selectedValue={pathname}
        onNavItemSelect={(_, data) => navigate(String(data.value))}
        className={styles.nav}
      >
        <NavDrawerBody>
          <AppItem icon={<PersonCircle32Regular />}>Atlas</AppItem>

          <NavItem icon={<Dashboard />} value="/">
            Dashboard
          </NavItem>
          <NavItem icon={<Recipes />} value="/recipes">
            Recipes
          </NavItem>
          <NavItem icon={<Materials />} value="/materials">
            Materials
          </NavItem>
          <NavItem icon={<Jobs />} value="/jobs">
            Jobs
          </NavItem>
        </NavDrawerBody>
      </NavDrawer>
    </nav>
  );
}

export default NavMenu;

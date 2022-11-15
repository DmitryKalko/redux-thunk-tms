import { Link } from "react-router-dom";
import CustomizedSwitches from "./SwitcherTheme";

import classNames from "classnames";
import styles from "./menu.module.css";

import { changeTheme } from "../../redux/theme/actions";
import { useDispatch, useSelector } from "react-redux";

const Menu = () => {
	const dispath = useDispatch();
	const theme = useSelector((state) => state.theme.theme);

	const switchTheme = () => {
		const nextTheme = theme === 'dark' ? 'light' : 'dark';
		dispath(changeTheme(nextTheme));
	};

	const classHeader = classNames(styles.header, {
		[styles.header_night]: theme === 'dark',
		// могу тут написать еще сколько угодно случаев
	});

	return (
		<>
			<header className={classHeader}>
				<Link to='/' className={styles.link}>
					Home
				</Link>
				<Link to='/favourite' className={styles.link}>
					Favourites
				</Link>
				<Link to='/users' className={styles.link}>
					Users
				</Link>

				<CustomizedSwitches switchTheme={switchTheme} />
			</header>
		</>
	);
};

export default Menu;

import React, { useState } from "react";
import styles from './header.module.scss'
import { menu } from '../../data/menu'
import { Menu } from "antd";

function Header(props) {
	const [current, setCurrent] = useState("mail");
	const onClick = (e) => {
		console.log("click ", e);
		setCurrent(e.key);
	};

	return (
		<div className={styles.header}>
			<Menu
				onClick={onClick}
				selectedKeys={current}
				mode="horizontal"
				items={menu}
				className={styles.header__menu}
			/>
		</div>
	);
}

export default Header;

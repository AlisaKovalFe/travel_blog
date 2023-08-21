import React, { useState } from "react";
import styles from './header.module.scss'
import { Menu } from "antd";
import { Link } from 'react-router-dom'
import { menuCountries } from '../../data/menuCountries'

function Header(props) {
	const menu = [
		{
			label: <Link to='/about'>Обо мне</Link>,
			key: "about",
		},
	
		{
			label: <Link to='/world-regions'>Путешествия</Link>,
			key: "destinations",
			children: [menuCountries.europe, menuCountries.asia],
		},
	
		{
			label: <Link to='/video'>Видео</Link>,
			key: 'video',
		},

		{
			label: <Link to='/tomap'>На карту</Link>,
			key: 'map',
		},
	
	]
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

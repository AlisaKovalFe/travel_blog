import React, { useState,  useEffect} from "react";
import styles from './header.module.scss'
import { Menu } from "antd";
import { Link } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { getDestinationsThunk } from '../../store/actions/mainActions'

function Header() {
	const dispatch = useDispatch();
	const destinations = useSelector((store) => store.mainStore);

    useEffect(() => {   
        dispatch(getDestinationsThunk())
    }, [])
	const menu = [
		{
			label: <Link to='/'><HomeOutlined/></Link>,
			key: "logo",
		},

		{
			label: <Link to='/about'>Обо мне</Link>,
			key: "about",
		},
	
		{
			label: <Link to='/world-regions'>Путешествия</Link>,
			key: "destinations",
			children: destinations.map((el) => {
				return {
					type: "group",
					label: el.title,
					children: el.countries.map((item) => {
						return {
							label: <Link key={item.id} to={`/world-regions/countries/${el.id}/country-information/${item.id}`}>{item.title}</Link>,
							key: item.title,
						}
					})
				}
			}),
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

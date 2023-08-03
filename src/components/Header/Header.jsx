import React, { useState } from "react";
import {
	AppstoreOutlined,
	MailOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

function Header(props) {
	const items = [
		{
			label: "Обо мне",
			key: "about",
		},

		{
			label: "Путешествия",
			key: "destinations",

			children: [
				{
					type: "group",
					label: "Италия",
					children: [
						{
							label: "Option 1",
							key: "setting:1",
						},
						{
							label: "Option 2",
							key: "setting:2",
						},
					],
				},

				{
					type: "group",
					label: "Франция",
					children: [
						{
							label: "Option 3",
							key: "setting:3",
						},
						{
							label: "Option 4",
							key: "setting:4",
						},
					],
				},
			],
		},

		{
			label: (
				<a href="#" rel="noopener noreferrer">
				  	Видео
				</a>
			  ),
			  key: 'video',
		},
	];

	const [current, setCurrent] = useState("mail");
	const onClick = (e) => {
		console.log("click ", e);
		setCurrent(e.key);
	};

	return (
		<div className="header">
			<Menu
				onClick={onClick}
				selectedKeys={current}
				mode="horizontal"
				items={items}
				className="menu"
			/>
		</div>
	);
}

export default Header;

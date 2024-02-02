import React from 'react';
import { Layout } from 'antd';

const AppHeader = () => {
	const headerStyle = {
		textAlign: 'center',
		color: '#fff',
		height: 60,
		paddingInline: 48,
		lineHeight: '64px',
		backgroundColor: '#4096ff',
	};
	return <Layout.Header style={headerStyle}>Header</Layout.Header>;
};

export default AppHeader;

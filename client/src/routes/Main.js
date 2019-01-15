import React, { Fragment } from 'react';
import NavBar from '../components/includes/NavBar';
import NumberTable from '../components/includes/NumberTable';

const Main = ({phoneNumbers, isLoading, handleGenerate}) => (
	<Fragment>
		<NavBar />
		<NumberTable 
		isLoading={isLoading}
		phoneNumbers={phoneNumbers}
		handleGenerate={handleGenerate}
		/>
	</Fragment>
);

export default Main;

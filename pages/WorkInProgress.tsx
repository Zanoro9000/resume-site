import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import classes from './generalStyles.module.css';

export default function WorkInProgress() {
	return (
		<DefaultLayout title="Work in Progress!">
			<h1 className={classes.title}>This page is a work-in-progress!</h1>
			<p className={classes.description}>Come back when it's done!</p>
		</DefaultLayout>
	);
}

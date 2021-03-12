import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import classes from './generalStyles.module.css';
import DefaultLayout from '../layout/defaultLayout';

const email = 'tyken628@gmail.com';

export default function Home() {
	return (
		<DefaultLayout>
			<img src="/headshot.jpg" height={256} width={256} alt="Tyler Kennedy" className={classes.headshot} />

			<h1 className={classes.title}>Tyler Kennedy</h1>

			<p className={classes.description}>Fullstack Software Developer</p>

			<div className={classes.grid}>
				<Link href="./aboutme">
					<span className={classes.card}>
						<h3>About Me &rarr;</h3>
						<p>Find out more about me!</p>
					</span>
				</Link>

				<Link href="./workexperience">
					<span className={classes.card}>
						<h3>Work Experience &rarr;</h3>
						<p>See where I've worked!</p>
					</span>
				</Link>

				<Link href="./projects">
					<span className={classes.card}>
						<h3>Projects &rarr;</h3>
						<p>Take a deeper dive into my favorite projects I've worked on!</p>
					</span>
				</Link>

				<Link href="./blog">
					<span className={classes.card}>
						<h3>Blog &rarr;</h3>
						<p>Read about how I created this site and more!</p>
					</span>
				</Link>
			</div>
		</DefaultLayout>
	);
}

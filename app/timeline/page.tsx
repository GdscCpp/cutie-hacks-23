"use client"
import Image from 'next/image'
import { useState } from 'react';
<Head>
	
export default function page() {
	function updateLocation() {
		// send name + location + time to database
	}
	// get user profile
	const userName = 'name from profile'
	var [userLocation, setLocation] = useState('your location')
	setLocation(() => {
		userLocation = 'location from gps tracker?='
	}, [])
	var [currentTime, setTime] = useState('default time')
	setTime(() => {
		currentTime = 'current time'
	}, [])
	// get 10 most recent location from database
	const recentLocations = [['Foo','Bar','12:00'],['name2','location2','time'],['name3','location3','time']]
	return (
		<div>
			<p class="font-sans: inter">
			<p><a href="/"><u>Back</u></a></p>
			<h1><button className="btn" onClick={updateLocation}>Show my location!</button></h1>
			<p><u>The 10 most recent locations visited</u></p>
			<ul>
				{recentLocations.map(([name,location,time]) => (
				  <li key={[name,location,time]}>{name} was at {location} at {time}</li>
				))}
			</ul>
			</p>
		</div>
	)
}

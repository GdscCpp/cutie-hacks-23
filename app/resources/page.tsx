"use client"
import Image from 'next/image'
import { useState } from 'react';
	
export default function page() {
	
	return (
	
		<div class="m-8">
			<p class="font-sans: inter">
			<h1 class="text-center"> <p class="text-2xl"><b>Resources</b></p></h1>
			<p style={{color: 'red'}}><p class="text-xl"><p>
			Emergency: Police, Fire, Medical - Dial <a href="tel:911">9-1-1</a>
			</p></p>
			<p> </p>
			<p>
			If using  a cell phone in an emergency, dial <a href="tel:9098693070">(909) 869-3070</a>
			</p></p>
			<p> </p>
			<p>
			Main Office Number: <a href="tel:9098693061">(909) 869-3061</a>
			</p><p>
			Non-Emergency After Hours: <a href="tel:9098693070">(909) 869-3070</a>
			</p><p>
			Anonymous Crime Tips: <a href="tel:9098693399">(909) 869-3399</a>
			</p><p>
			Email: <a href="mailto:<police@cpp.edu>">police@cpp.edu</a>
			</p><p> </p><p>
			Location/Mailing Address:
			</p><p> </p><p>
			Cal Poly Pomona - University Police Department
			3801 W. Temple Ave Bldg. 109
			Pomona, CA 91768
			</p><p> </p><p>
			Campus Map: <a href="https://www.cpp.edu/maps/"> https://www.cpp.edu/maps/ </a>
			</p>
			<p> </p>
			<a href="/">Back</a>
			</p>
		</div>
	)
}

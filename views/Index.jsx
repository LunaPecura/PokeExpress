
import React from 'react'
import { pokemon } from '../models/pokemon'
import { capitalize } from '../helperfns'



const Index = () => {

	// create the list items
	const pokeyList = pokemon.map( (pokey, i) => {
		const name = capitalize(pokey.name);
		return (
			<li key={i}>
				<a href={`/pokemon/${i}`}>{ name }</a>
			</li> 
		)
	})


	return (
		<div>
			<h1>View All The Pokemon!</h1>
			<ul>{ pokeyList }</ul>
		</div>
	)
}

export default Index

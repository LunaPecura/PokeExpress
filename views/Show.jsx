import React from 'react'
import { pokemon } from '../models/pokemon'
import { capitalize } from '../helperfns'



const Show = (props) => {

	const name = capitalize(pokemon[props.id].name);
	const url = `${pokemon[props.id].img}.jpg`;


	return (
		<div>
			<h1>Gotta Catch Em All</h1>
			<h2>{ name }</h2>
			<img src={url} />
		</div>
	)
}

export default Show

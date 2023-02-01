import React from 'react'
import useFetch from '../../../hooks/useFetch'
import Button from '../../common/Button'

export default function Jokes() {
	const {
		data: joke,
		loading,
		error,
		refetch,
	} = useFetch('https://v2.jokeapi.dev/joke/Any')

	if (loading) return <h2>LOADING...</h2>

	if (error) console.log(error)

	return (
		<div>
			<h3>Here's a joke for you :</h3>
			<h2>
				{joke?.setup && joke?.delivery !== ''
					? `${joke?.setup} ${joke?.delivery}`
					: `${joke?.joke}`}
			</h2>
			<Button action={refetch} buttonText='Refetch' />
		</div>
	)
}

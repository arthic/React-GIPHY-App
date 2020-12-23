import React from 'react'
import '@testing-library/jest-dom'
import { GifGrid } from '../../components/GifGrid'
import { shallow } from 'enzyme'
import { useFetchGifs } from '../../hooks/useFetchGifs';
/* Fingir cualquier llamada a ese archivo y controlar lo que
la infor que va a responder */
jest.mock('../../hooks/useFetchGifs')

describe('Testing en <GifGrid />', () => {
	const category = 'Test-Categoria'

	test('Correcto despliege de <GifGrid />', () => {
		// El controlar el useFetchGifs
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true
		})
		const wrapper = shallow(<GifGrid category={category}/>)
		expect(wrapper).toMatchSnapshot()
	})
	test('Mostrar items cuando se cargan gifs del hook "useFetchGifs"', () => {
		const gifs = [{
				id: 12345,
				title: 'Cualquier title',
				url: 'https://localhost/anywhere/ramdom-gif.gif'
			},
			{
				id: 54321,
				title: 'Cualquier title',
				url: 'https://localhost/anywhere/ramdom-gif.gif'
			}
		]
		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false
		})
		const wrapper = shallow(<GifGrid category={category}/>)
		// Que no exista el loading
		expect(wrapper.find('p').exists()).toBe(false)
		// Evaluar que el <GifGridItem /> exista
		expect(wrapper.find('GifGridItem').length).toBe(gifs.length)

		expect(wrapper).toMatchSnapshot()
	})
});


import React from 'react'
import {shallow} from 'enzyme'
import '@testing-library/jest-dom'
import {GifGridItem} from '../../components/GifGridItem'

describe('Test de GifGridItem', () => {
	const title = 'Un título'
	const url = 'https://localhost/algo.jpg'
	const wrapper = shallow(<GifGridItem title={title} url={url}/>)

	test('Despliege de <GifGridItem /> correcto', () => {
		expect(wrapper).toMatchSnapshot()
	})
	test('El parrafo debe tener el title', () => {
		const p = wrapper.find('p')
		expect( p.text().trim()).toBe(title)
	})
	test('la imagen debe contener las props alt e img correspondientes', () => {
		const img = wrapper.find('img')
		expect( img.prop('src')).toBe(url)
		expect( img.prop('alt')).toBe(title)
	})
	test('Debe contener la clase de css "animate__fadeIn"', () => {
		const div = wrapper.find('div')
		const class_name = div.prop('className')
		expect( class_name.includes('animate__fadeIn')).toBe(true)
	})
});


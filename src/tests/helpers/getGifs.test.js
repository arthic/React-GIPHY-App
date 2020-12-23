import React from 'react'
import {shallow} from 'enzyme'
import '@testing-library/jest-dom'
import {getGifs} from '../../helpers/getGifs'

describe('Testing en getGifs', () => {
	test('Debe traer 5 elementos', async() => {
	const gifs = await getGifs('holi')
	expect(gifs.length).toBe(5)
	})
});

import '@testing-library/jest-dom'
import {renderHook} from '@testing-library/react-hooks'
const { useFetchGifs } = require("../../hooks/useFetchGifs");

describe('Testing en Hook "useFetchGifs"', () => {
	test('Retorno del estado inicial', async() => {
		// const {data, loading} = useFetchGifs(category)
		const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('Test-category'))
		const {data, loading} = result.current
		console.log(data, loading);

		await waitForNextUpdate()

		expect(data).toEqual([])
		expect(loading).toBe(true)
	})
	test('Retornar un arreglo de imagenes', async() => {
		// waitForNextUpdate: Indica cuando ya sucedio un cambio en el state
		const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('Test-category'))

		await waitForNextUpdate()

		const {data, loading} = result.current
		console.log(data, loading);

		expect(data.length).toBe(5)
		expect(loading).toBe(false)
	})
});

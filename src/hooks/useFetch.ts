import useSWR from 'swr'

// @ts-ignore:next-line
const fetcher = (...args: any) => fetch(...args).then((res) => res.json())

const useFetch = (url: string, params?: any): any => useSWR(url, fetcher)

export { useFetch, fetcher }
export default useFetch

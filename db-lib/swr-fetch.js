//@ts-check

import useSWR from 'swr'

async function fetcher(url) {
    const res = await fetch(url);
    return res.json()
}

export const useDataHP = (cell) => {
    //url
    const url = "http://localhost:3000/api/Data-HP"
    //data error
    const {data, error} = useSWR(url, fetcher, {initialData : cell, refreshInterval : 1000})

    return {data, error}
}
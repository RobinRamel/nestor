import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, initiateData } from '@/reducers/apartment'
import type { AppState } from '@/store'

import Loading from '@/components/loading'
import CardsList from '@/components/cardsList'

const IndexPage: NextPage = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state: AppState) => state.apartments.loading)
  const [dataSet, setDataSet] = useState(false)

  useEffect(() => {
    dispatch(setLoading(true))

    fetch('api/apartments')
      .then(res => res.json())
      .then(dataFromDb => {
        dispatch(initiateData(dataFromDb.data))
        dispatch(setLoading(false))
        setDataSet(true)
      })
  }, [])

  return (
    <div className="h-full dark:bg-gray-900 text-white">
      <Head>
        <title>Nestor Location</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="flex bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed h-[7vh] w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Nestor</span>
        </div>
      </nav>
      <main className='w-full h-full pt-[7vh] flex justify-center'>
        { isLoading && !dataSet ? <Loading /> :  <CardsList /> }
      </main>
    </div>
  )
}

export default IndexPage

import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, initiateData } from '@/reducers/apartment'
import type { AppState } from '@/store'

import Loading from '@/components/loading'
import CardsList from '@/components/cardsList'
import Navbar from '@/components/navBar'
import { setLocalStoWithBaseData } from '@/helpers/apiAction'

const IndexPage: NextPage = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state: AppState) => state.apartments.loading)
  const [dataSet, setDataSet] = useState(false)

  useEffect(() => {
    dispatch(setLoading(true))

    const data = setLocalStoWithBaseData()
    if (data) {
      dispatch(initiateData(data))
      dispatch(setLoading(false))
      setDataSet(true)
    }
  }, [])

  return (
    <div className="h-full bg-bgColor text-textColor">
      <Head>
        <title>Nestor Location</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className='w-full h-full pt-[7vh] flex justify-center'>
        { isLoading && !dataSet ? <Loading /> :  <CardsList /> }
      </main>
    </div>
  )
}

export default IndexPage

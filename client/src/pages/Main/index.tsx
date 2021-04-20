import React, { ReactElement } from 'react'
import {MainLayout} from './style'
import {Header} from '../../components/Header'

export const MainPage = ():ReactElement=>{
    return (
      <MainLayout>
        <Header />
      </MainLayout>
    )
}
import React, { ReactElement } from 'react'
import {HeaderLayout, Title, GNB} from './style'

export const Header = ():ReactElement=>{
    const menuList = ['Blog', 'Graphs', 'Support', 'Careers']
    const list = menuList.map((item)=>{
        return <li key={item}>{item}</li>
    })
    return (
      <HeaderLayout>
        <Title>기술 블로그</Title>
        <GNB><ul>{list}</ul></GNB>
      </HeaderLayout>
    )
}
import React, { ReactElement, useState } from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import {HeaderLayout, Title, GNB, NavList, IconBtn,SearchInput, SearchDiv} from './style'

export const Header = ():ReactElement=>{
  const [isSearchOpen, setSearch] = useState<boolean>(false);

    const menuList = ['Blog', 'Graphs', 'Support', 'Careers']
    const list = menuList.map((item)=>{
        return <li key={item}><a href="/">{item}</a></li>
    })
    
    return (
      <HeaderLayout>
        <Title>기술 블로그</Title>
        <GNB>
          <NavList>{list}</NavList>
          <IconBtn onClick={()=>{setSearch(true)}}><SearchIcon /></IconBtn>
          <SearchDiv className={isSearchOpen ? '': 'hide'}>
            <SearchInput type="text" />
            <IconBtn onClick={()=>{setSearch(false)}}><CloseIcon /></IconBtn>
          </SearchDiv>
          
        </GNB>
      </HeaderLayout>
    )
}
import React, { ReactElement, useState, useEffect } from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import {HeaderLayout, Title, GNB, NavList, IconBtn,SearchInput, SearchDiv} from './style'

export const Header = ():ReactElement=>{
  const [isSearchOpen, setSearch] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState(0); // px

  const logit = ()=>{
    setScrollY(window.pageYOffset); // pageYOffset: https://ko.javascript.info/size-and-scroll-window, 브라우저 상관없이 스크롤 정보를 구할 수 있어서 사용
  }

    const menuList = ['Blog', 'Graphs', 'Support', 'Careers']
    const list = menuList.map((item)=>{
        return <li key={item}><a href="/">{item}</a></li>
    })

    useEffect(() => {
      function watchScroll() {
        window.addEventListener("scroll", logit);
      }
      watchScroll();
      return () => {
        window.removeEventListener("scroll", logit);
      };
    });
    
    return (
      <HeaderLayout className={scrollY > 100 ? 'scroll' : ''}>
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
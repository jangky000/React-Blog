import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const HeaderLayout = styled.div`
    padding: 1.5rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: gray;
`

export const Title = styled.h1`
    float: left;
    font-size: 2rem;
`

export const MobileMenuBtn = styled.button`
    // float: left;
    // font-size: 2rem;
`

export const GNB = styled.nav`
    float: right;
    display: flex;
`

export const NavList = styled.ul`
    display: flex;
    li {
        margin: 0 1rem;
    }
`

export const IconBtn = styled.button`
    border: none;
    background-color: transparent;
    &:hover {
        cursor: pointer;
    }
`

export const SearchInput = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
`

export const hide = css`
    overflow: hidden;
    width: 0;
    height: 0;
`

export const show = css`
    transition: all 0.3s ease-in-out; 
`
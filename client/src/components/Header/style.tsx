import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const HeaderLayout = styled.div`
    padding: 1.5rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.1);

    &.scroll{
        background-color: rgba(0, 0, 0, 1);
        color: white;
        button {
            color: white;
            transition: all 0.3s ease-in-out;
        }
        transition: all 0.3s ease-in-out;
    }
`

export const Title = styled.h1`
    float: left;
    font-size: 2rem;
    font-weight: bold;
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
`
export const SearchDiv = styled.div`
    visibility: visible;
    opacity: 1;
    max-width: 500px;
    max-height: 500px;
    transition: all 1s ease-in-out;
    border-bottom: 1px solid black;
    position: relative;

    &.hide{
        visibility: hidden;
        opacity: 0;
        max-width: 0;
        max-height: 0;
    }
`
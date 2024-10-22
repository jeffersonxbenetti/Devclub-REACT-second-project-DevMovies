import styled from 'styled-components'
import { BsTwitterX } from 'react-icons/bs'

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
`

export const Container = styled.div`
    width: 50%;
    background-color: #000;
    padding: 20px;
    border-radius: 5px;
    position: relative;

    iframe {
        border: 0.2px solid rgba(255, 0, 0, 0.1);
        border-radius: 5px;
        padding: 3px;
    }
`

export const ButtonX = styled(BsTwitterX)`
    color: #fff;
    font-size: 0.8rem;
    font-weight: 600;
    position: absolute;
    top: 5px;
    right: 5px;
`
import styled from 'styled-components'

const mainButton = styled.button`
    border-radius: 1.87rem;
    padding: 0.4rem 0.8rem;
    cursor: pointer;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    transition: all 200ms ease-in-out;
`

export const ButtonRed = styled(mainButton)`
    background: #ff0000;
    box-shadow: 0px 0px 0px 3px rgb(255 0 0 / 30%);

    &:hover {
        box-shadow: 0px 0px 0px 8px rgb(255 0 0 / 30%);
    }
` 

export const ButtonWhite = styled(mainButton)`
    background: transparent;
    box-shadow: 0px 0px 0px 3px rgb(255 255 255 / 30%);

    &:hover {
        background-color: #fff;
        color: #ff0000;
        box-shadow: 0px 0px 0px 8px rgb(255 255 255 / 30%);
    }
`
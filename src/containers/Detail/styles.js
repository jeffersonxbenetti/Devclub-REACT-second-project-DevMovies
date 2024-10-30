import styled, { keyframes } from 'styled-components'

const scale = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    max-width: 1500px;
    margin-top: -100px;
`

export const Background = styled.div`
    height: 50vh;
    background-image: url(${(props) => props.$image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    }
`

export const Cover = styled.div`
    padding: 1.25rem;
    display: flex;
    align-items: flex-start;
    height: 100%;

    img {
        width: 19rem;
        border-radius: 1.8rem;
        z-index: 5;
        box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0;
        animation: ${scale} 0.5s linear;
    }
`

export const Info = styled.div`
    padding: 20px;
    width: 50%;
    z-index: 5;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h2 {
        font-size: 3rem;
        font-weight: 700;
        color: #fff;
    }

    p {
        color: #fff;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
        margin: 20px 0 30px;
    }
`
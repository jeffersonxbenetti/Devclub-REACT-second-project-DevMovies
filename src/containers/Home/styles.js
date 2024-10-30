import styled, { keyframes } from 'styled-components'

const scale = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`


export const Background = styled.div`
    background-image: url(${props => props.$img});
    width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.7);
    }

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100px;
        background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    }
`

export const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Info = styled.div`
    z-index: 2;
    padding: 1.25rem;
    width: 50%;

    h1 {
        color: #fff;
        font-size: 3.44rem;
        font-weight: 700;
    }

    p {
        color: #fff;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
        margin: 1.25rem 0 2.5rem;
    }
`

export const ContainerButtons = styled.div`
    display: flex;
    gap: 1.25rem;
`

export const Poster = styled.div`
    z-index: 2;

    img {
        width: 19rem;
        border-radius: 1.8rem;
        Animation: ${scale} 0.5s linear;
    }
`
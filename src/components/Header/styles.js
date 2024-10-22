import styled from 'styled-components'

export const Container = styled.div`
    min-height: 50px;
    z-index: 3;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px;
    background-color: ${props => props.$changeBackground ? '#000' : 'transparent'};
    transition: background-color 300ms ease-in-out;

    img {
        width: 20%;
    }
`

export const Menu = styled.ul`
    display: flex;
    gap: 30px;
    list-style: none;
`

export const Li = styled.li`
    cursor: pointer;
    position: relative;

    a {
        color: #fff;
        font-size: 1.25rem;
        font-weight: 500;
    }

    &::after{
        content: '';
        height: 3px;
        width: ${props => props.$isActive ? '100%' : 0};
        background-color: #189b20;
        position: absolute;
        left: 50%;
        bottom: -10px;
        transform: translateX(-50%);
        transition: width 500ms ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }
`
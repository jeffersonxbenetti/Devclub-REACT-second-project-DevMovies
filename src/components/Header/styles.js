import styled from 'styled-components'

export const Container = styled.div`
    z-index: 3;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px;

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

    a {
        color: #fff;
        font-size: 1.25rem;
        font-weight: 500;
    }
`
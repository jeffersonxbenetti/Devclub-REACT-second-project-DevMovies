import styled from 'styled-components'

export const ListGenres = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px; 
    list-style: none;
    margin: 20px 0;
    

    li {
        color: #fff;
        border: 1px solid #fff;
        border-radius: 20px;
        padding: 10px 15px;
        transition: all 200ms ease-in-out;

        &:hover {
            color: #189b20;
            border: 1px solid #189b20;
            opacity: 0.8;
        }
    }
`
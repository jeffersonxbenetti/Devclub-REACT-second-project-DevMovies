import styled, { keyframes } from 'styled-components'

const scaleCast = keyframes`
    from{
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`

export const ListCast = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;


    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        img {
            height: 180px;
            border-radius: 10px;
            transition: all 300ms ease-in-out;
            animation: ${scaleCast} 600ms 300ms linear;
            
            &:hover {
                transform: scale(1.1);
                border: 1px solid #189b20;
            }
        }

        p {
            font-size: 0.85rem;
        }
    }
`
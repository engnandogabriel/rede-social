import styled from 'styled-components'

export const GraphStyled = styled.div`

display: grid;
grid-template-columns: 1fr 1fr;
gap: 2rem;

.graphItem{
    box-shadow: 0px 10px 20px rgba(0,0,0,0.1);
    border-radius: 0.2rem;
    display: grid;
    align-items: center;
}
.totalAccess{
    display: grid;
    grid-column: 1/3;
    padding: 2rem;
    font-size: 2rem;
}

@media (max-width:40rem) {
    grid-template-columns: 1fr;
    margin-top: 2rem;

    .totalAccess{
        grid-column: 1;

    }
}

`
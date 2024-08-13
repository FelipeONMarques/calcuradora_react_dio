import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #cacaca;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    width: 50%;
    background-color: #bbbbbb;
    padding: 30px 20px 50px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Colunm = styled.div`
    display: flex;
    flex-direction: colunm;
    justify-content: space-between;
    align-items: center;
`
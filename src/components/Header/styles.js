import styled from 'styled-components'

import search from '../../assets/images/ic_Search.png'

export const Container = styled.header`
  background-color: #ffe600;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1020px;
    margin: 0 auto;
    padding: 10px 0;
    height: 100%;

    img {
      margin-right: 30px;
    }
  }
`
export const Search = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;

  input {
    font-size: 18px;
    color: #333;
    padding: 7px;
    width: 100%;
    border: none;
    border-radius: 3px 0 0 3px;
  }

  a {
    border: none;
    text-indent: -9999px;
    background: #eee url(${search}) no-repeat center center;
    padding: 9.5px 20px;
    border-radius: 0 3px 3px 0;
  }
`

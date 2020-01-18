import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 1020px;
  margin: 0 auto;

  ul {
    list-style: none;
    margin: 16px 0;
    li {
      display: inline-block;
      margin-right: 5px;
      font-size: 14px;
      color: #999;

      &:last-child {
        font-weight: bold;
      }

      &::before {
        content: '>';
        margin-right: 5px;
      }

      &:first-child {
        &::before {
          content: '';
          margin: 0;
        }
      }
    }
  }
`

import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  .container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1020px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 3px;

    .productInfo {
      display: flex;
      justify-content: space-between;
      margin: 0 32px 32px;
      color: #333;

      .picture {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 15px;
        max-width: 680px;

        img {
          max-width: 680px;
          height: auto;
          margin: 32px 15px 32px;
        }

        .description {
          width: 680px;
          strong {
            font-size: 28px;
            margin: 32px;
          }

          p {
            font-size: 16px;
            color: #999;
            margin: 32px;
          }
        }
      }

      .info {
        display: flex;
        flex-direction: column;
        margin-top: 32px;

        small {
          font-size: 14px;
          margin-bottom: 16px;
        }

        span {
          font-size: 24px;
          margin-bottom: 32px;
        }

        strong {
          font-size: 46px;
          font-weight: normal;
          margin-bottom: 32px;
        }

        button {
          border: none;
          background-color: #3883fa;
          color: #fff;
          max-width: 200px;
          padding: 10px;
          border-radius: 4px;

          &:hover {
            background-color: ${darken(0.03, '#3883fa')};
          }
        }
      }
    }
  }
`

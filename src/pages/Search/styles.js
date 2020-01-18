import styled from 'styled-components'

export const Container = styled.div`
  .container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1020px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 3px;

    div.wrap {
      display: flex;
      width: 100%;
      margin: 16px;
      border-bottom: 1px solid #eee;

      &:last-child {
        border: none;
      }

      .product-picture {
        display: flex;
        align-items: center;
        border-radius: 4px;
        margin-right: 16px;
        margin-bottom: 16px;
        width: 190px;
        height: 180px;

        img {
          width: 180px;
          height: auto;
        }
      }

      div {
        width: 100%;

        p {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: baseline;
          margin: 16px 0 32px;

          strong {
            display: flex;
            font-weight: normal;
            font-size: 24px;
            align-items: baseline;

            img {
              margin-left: 10px;
            }
          }

          small {
            font-size: 12px;
            color: #999;
            margin-right: 50px;
          }
        }

        span {
          font-size: 18px;
        }
      }
    }
  }
`

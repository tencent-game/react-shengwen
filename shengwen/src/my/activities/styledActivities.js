import styled from "styled-components";

const StyledActivities = styled.div`
  .activities-title {
    background-color: rgba(215, 215, 215, 0.349019607843137);
    height: .4rem;
    padding-left: .12rem;
    line-height: .4rem;
    span {
      font-size: .16rem;
      color: #3D7EFF;
      font-weight: 700;
    }
  }
  .activities-item {
    padding: 0 .12rem;
    ul {
      padding-top: .3rem;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 48%;
        height: 1.68rem;
        margin-bottom: .2rem;
        box-shadow: 0 2px 5px rgba(153, 153, 153, 0.349019607843137);
        .activities-img {
          position: relative;
          img[alt="activitiesImg"] {
            width: 100%;
          }
          .top-left {
            position: absolute;
            top: .04rem;
            left: 0.04rem;
            img[alt="eyes"] {
              width: .19rem;
              height: .18rem;
              font-size: 0;
            }
            span {
              color: #ffffff;
              line-height: .2rem;
              font-size: .12rem;
              padding-left: .06rem;
            }
          }
          .top-right {
            img {
              position: absolute;
              top: -0.06rem;
              right: -0.06rem;
            }
          }
        }
        .activities-name {
          padding: .12rem .1rem 0 .1rem;
          p {
            text-align: center;
            word-break: normal;
          }
        }
      }
      li:nth-child(2n) {
        margin-left: .12rem;
      }
    }
  }
`

export {
  StyledActivities
}
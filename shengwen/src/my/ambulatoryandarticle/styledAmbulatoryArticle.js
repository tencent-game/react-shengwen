import border from "@/styles/border";
import styled from "styled-components";

const StyledAmbulatoryAndArticle = border(
  styled.div`
    padding: 0 .12rem;
    height: 1.44rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    .item-img {
      width: 1.45rem;
      height: 1.02rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .item-text {
      padding-left: .12rem;
      height: 1.02rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      i {
        font-size: .12rem;
        color: #3D7EFF;
      }
      i.error {
        color: #ff9900;
      }
      i.push {
        color: #999999;
      }
      .item-bottom {
        height: 0.16rem;
        font-size: .12rem;
        color: #999999;
        display: flex;
        flex-direction: row;
        p {
          flex: 1;
        }
        span {
          img {
            width: .17rem;
            height: .18rem;          
          }
        }
      }
    }
  `
)

export {
  StyledAmbulatoryAndArticle
}
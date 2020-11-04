import styled from 'styled-components'


const Container = styled.div`
  padding:0 .2rem 0 .2rem;
  display:flex;
  flex-direction:column;
  header{
    font-size:.24rem;
    font-weight:700;
    font-family: "思源黑体 Bold", 思源黑体;
    line-heiht:.44rem;
    height:.44rem;
  }
`

const MenuWrap = styled.div`
    height:100%;
    > div {
      flex:1;
      display:flex;
      flex-direction:column;
      width:25%;
      float: left;
      padding:.15rem;
      justify-content: center;
      align-items: center;
      img{
        width:.48rem;
        height:.48rem;
      }
      .title{
        padding-top:.1rem;
        float:left;
        width:100%;
        font-size:.13rem;
        text-align:center;
      }
    }
`

const TipsWrap = styled.div`
  .wrap{
    display:flex;
    justify-content:space-between;
    padding:.15rem 0 ;
    .left{
      border-radius:50%;
      width:.44rem;
      height:.44rem;
      overflow:hidden;
    }
    .center{
      <disp></disp>aly:flex;
      padding: 0  0 .15rem 0;
      margin: 0 .35rem 0 .15rem;
      border-bottom:1px solid #666;
      p{
        font-size:.14rem;
      }
      .btm{
        font-size:.12rem;
      }
    }
    .right{ 
      font-size:0.1rem;
      justify-content:flex-end;
      display:flex;
    }
  }
`

const LikeWrap = styled.div`
  padding:0 .15rem 0 .1rem;
  header{
    display:flex;
    padding:.1rem .2rem;
    p{
      text-align:center;
      font-size:.18rem;
      font-weight:normal;
      height:.44rem;
      line-height:.44rem;
      width:100%;
    }
    .back{
      display:flxe;
      align-items:center;
      img{
        width:.18rem;
        height:.18rem;
      }
    }
  }
  .wrap{
    display:flex;
    flex-direction:column;
    border-bottom:1px solid #999999;
    margin-bottom:.1rem;
      .name{
        display:flex;
        font-size:.1rem;
        justify-content:space-between;
        align-items:center;
        .left{
          display:flex;
          p{
            display:flex;
            font-size:.14rem;
            align-items:center;
            padding-left:.1rem;
          }
        }
      }
      .title{
        display:flex;
        font-size:.12rem;
        padding:.1rem 0;
        p{
          color:#999999;
        }
      }
  }
`

export {
  Container,
  MenuWrap,
  TipsWrap,
  LikeWrap
}
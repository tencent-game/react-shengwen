import styled from 'styled-components'

const ListWrap = styled.div`
padding:0 .2rem;
header{
  display:flex;
    padding:.1rem 0;
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
  border-bottom:.01rem solid #999999;
  margin-bottom:.1rem;
    .name{
      display:flex;
      font-size:.1rem;
      justify-content:space-between;
      align-items:center;
      .left{
        display:flex;
        .box{
          border-radius:50%;
          overflow:hidden;
        }
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
    .que{
      font-size:.12rem;
      padding:.1rem;
      background-color:#999;
      margin-bottom:.15rem;
      border-radius:.05rem;
    }

`

export {
  ListWrap
}
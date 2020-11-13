// 我的 我的钱包
import styled from "styled-components";
import border from "../../styles/border";
import ellipsis from "../../styles/ellipsis";

const StyledWallet = styled.div`
   .wallet-item {
     padding: .22rem .12rem 0 .12rem;
     h3 {
       font-size: .16rem;
       font-weight: 700;
     }
     .end {
       margin-top: .24rem;
       text-align: center;
       font-size: .12rem;
       color: #CCCCCC;
     }
   }
`

// 我的钱包边框
const StyledBalance = border(
  styled.div`
    margin: .4rem .3rem 0 .3rem;
    padding:.2rem .18rem 0 .18rem;
    display: flex;
    flex-direction: column;
    height: 1.7rem;
    box-shadow: 2px 2px 15px rgba(242, 242, 242, 0.619607843137255);
    .balance-top {
       span {
         padding-right: .08rem;
       }
    }
    .balance-center {
       padding-top: .16rem;
       h3 {
         font-size: .3rem;
         color: #3D7EFF;
         font-weight: 700;
       }
    }
    .balance-footer {
       display: flex;
       padding-top: .16rem;
       justify-content: space-between;
       .withdrawals {
         border: 1px solid rgba(61, 126, 255, 1);
         color: #3D7EFF;
         border-radius: .04rem;
         width: 1.2rem;
         height: .4rem;
         background-color: rgba(22, 155, 213, 0);
       }
       .recharge {
         width: 1.2rem;
         height: .4rem;
         background-color: rgba(61, 126, 255, 1);
         border-radius: .04rem;
         color: #ffffff;
         border: 1px solid rgba(61, 126, 255, 1);
       }
    }
  `
)

// 我的钱包明细边框
const StyledWalletItem = border(
  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: .78rem;
    .tips {
      flex: 1;
      p {
        padding-top: .12rem;
        font-size: .12rem;
      }
    }
    .price {
      color: #3D7EFF;
    }
  `
)

// 我的钱包明细省略...
const StyledStyledWalletItemTips = ellipsis(
  styled.span`
    width: 90%;
  `
)

export {
  StyledBalance,
  StyledWallet,
  StyledStyledWalletItemTips,
  StyledWalletItem
}
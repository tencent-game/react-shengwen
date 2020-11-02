import React from 'react';
import {StyledWallet, StyledBalance,StyledWalletItem,StyledStyledWalletItemTips} from "./styledWallet"
import {useHistory} from "react-router-dom"
import MyListPublicTitle from "../../component/MyListPublicTitle";
import question from "../../assets/img/my/question.png"

function Wallet(props) {
  const history = useHistory()
  return (
    <StyledWallet>
      <MyListPublicTitle title="我的钱包"/>
      <StyledBalance radius="0.1" color="rgba(242, 242, 242, 1)">
        <div className="balance-top">
          <span>我的余额</span>
          <img src={question} alt=""/>
        </div>
        <div className="balance-center">
          <h3>￥1036.00</h3>
        </div>
        <div className="balance-footer">
          <button className="withdrawals" onClick={() => history.push("/withdrawals")}>提现</button>
          <button className="recharge">充值</button>
        </div>
      </StyledBalance>
      <div className="wallet-item">
        <h3>余额明细</h3>
        <ul>
          <StyledWalletItem width="0 0 1px 0">
            <div className="tips">
              <StyledStyledWalletItemTips>文章收到赞赏：人工智能迷途，计算机文章收到赞赏：人工智能迷途，计算机文章收到赞赏：人工智能迷途，计算机</StyledStyledWalletItemTips>
              <p>2018-05-02 10:23:25</p>
            </div>
            <div className="price">+1000.00</div>
          </StyledWalletItem>
          <StyledWalletItem width="0 0 1px 0">
            <div className="tips">
              <StyledStyledWalletItemTips>文章收到赞赏：人工智能迷途，计算机文章收到赞赏：人工智能迷途，计算机文章收到赞赏：人工智能迷途，计算机</StyledStyledWalletItemTips>
              <p>2018-05-02 10:23:25</p>
            </div>
            <div className="price">+1000.00</div>
          </StyledWalletItem>
          <StyledWalletItem width="0 0 1px 0">
            <div className="tips">
              <StyledStyledWalletItemTips>文章收到赞赏：人工智能迷途，计算机文章收到赞赏：人工智能迷途，计算机文章收到赞赏：人工智能迷途，计算机</StyledStyledWalletItemTips>
              <p>2018-05-02 10:23:25</p>
            </div>
            <div className="price">+1000.00</div>
          </StyledWalletItem>
          <StyledWalletItem width="0 0 1px 0">
            <div className="tips">
              <StyledStyledWalletItemTips>文章收到赞赏：人工智能迷途，计算机文章收到赞赏：人工智能迷途，计算机文章收到赞赏：人工智能迷途，计算机</StyledStyledWalletItemTips>
              <p>2018-05-02 10:23:25</p>
            </div>
            <div className="price">+1000.00</div>
          </StyledWalletItem>
          <StyledWalletItem width="0 0 1px 0">
            <div className="tips">
              <StyledStyledWalletItemTips>文章收到赞赏：人工智能迷途，计算机文章收到赞赏：人工智能迷途，计算机文章收到赞赏：人工智能迷途，计算机</StyledStyledWalletItemTips>
              <p>2018-05-02 10:23:25</p>
            </div>
            <div className="price">+1000.00</div>
          </StyledWalletItem>
          <StyledWalletItem width="0 0 1px 0">
            <div className="tips">
              <StyledStyledWalletItemTips>文章收到赞赏：人工智能迷途，计算机文章收到赞赏：人工智能迷途，计算机文章收到赞赏：人工智能迷途，计算机</StyledStyledWalletItemTips>
              <p>2018-05-02 10:23:25</p>
            </div>
            <div className="price">+1000.00</div>
          </StyledWalletItem>
          <StyledWalletItem width="0 0 1px 0">
            <div className="tips">
              <StyledStyledWalletItemTips>文章收到赞赏：人工智能迷途，计算机文章收到赞赏：人工智能迷途，计算机文章收到赞赏：人工智能迷途，计算机</StyledStyledWalletItemTips>
              <p>2018-05-02 10:23:25</p>
            </div>
            <div className="price">+1000.00</div>
          </StyledWalletItem>
          <StyledWalletItem width="0 0 1px 0">
            <div className="tips">
              <StyledStyledWalletItemTips>文章收到赞赏：人工智能迷途，计算机文章收到赞赏：人工智能迷途，计算机文章收到赞赏：人工智能迷途，计算机</StyledStyledWalletItemTips>
              <p>2018-05-02 10:23:25</p>
            </div>
            <div className="price">+1000.00</div>
          </StyledWalletItem>
          <StyledWalletItem width="0 0 1px 0">
            <div className="tips">
              <StyledStyledWalletItemTips>文章收到赞赏：人工智能迷途，计算机文章收到赞赏：人工智能迷途，计算机文章收到赞赏：人工智能迷途，计算机</StyledStyledWalletItemTips>
              <p>2018-05-02 10:23:25</p>
            </div>
            <div className="price">+1000.00</div>
          </StyledWalletItem>
          <StyledWalletItem width="0 0 1px 0">
            <div className="tips">
              <StyledStyledWalletItemTips>文章收到赞赏：人工智能迷途，计算机文章收到赞赏：人工智能迷途，计算机文章收到赞赏：人工智能迷途，计算机</StyledStyledWalletItemTips>
              <p>2018-05-02 10:23:25</p>
            </div>
            <div className="price">+1000.00</div>
          </StyledWalletItem>
          <StyledWalletItem width="0 0 1px 0">
            <div className="tips">
              <StyledStyledWalletItemTips>文章收到赞赏：人工智能迷途，计算机文章收到赞赏：人工智能迷途，计算机文章收到赞赏：人工智能迷途，计算机</StyledStyledWalletItemTips>
              <p>2018-05-02 10:23:25</p>
            </div>
            <div className="price">+1000.00</div>
          </StyledWalletItem>
          <StyledWalletItem width="0 0 1px 0">
            <div className="tips">
              <StyledStyledWalletItemTips>文章收到赞赏：人工智能迷途，计算机文章收到赞赏：人工智能迷途，计算机文章收到赞赏：人工智能迷途，计算机</StyledStyledWalletItemTips>
              <p>2018-05-02 10:23:25</p>
            </div>
            <div className="price">+1000.00</div>
          </StyledWalletItem>
        </ul>
        <p className="end">我也是有底线的</p>
      </div>
    </StyledWallet>
  );
}

export default Wallet;
import styled from 'styled-components'

export const UserInfoWrapper = styled.div`
    width:100%;
    height:6.293333rem;
    background:#FEDA6A;
    display:flex;
    
    justify-content: center;
    align-items:center;
    flex-direction:column;
    .head-imgbox{
        width:2.453333rem;
        height:2.453333rem;
        border-radius:50%;
        overflow:hidden;
        img{
            width:100%;
            height:100%;
        }
    }
    .user-name{
        font-size:.48rem;
        padding: .4rem 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .weibo{
        span{
            padding:0 .133333rem;
        }
    }
`
export const ContentFram = styled.ul`
    overflow: hidden;
    background-color: #FFF;
    border-bottom: .013333rem solid #E3E3E3;
    border-top: .013333rem solid #E3E3E3;
    margin: 0 0 .426667rem 0;
    li{
        overflow: hidden;
        border-bottom: .013333rem solid #E3E3E3;
        position: relative;
        margin: 0 0 0 .426667rem;
        height: 1.333333rem;
        line-height: 1.333333rem;
        font-size:.426667rem;
        position:relative;
        display:flex;
        align-items:center;
        justify-content:space-between;
        .icon{
            float:right;
            font-size:.533333rem;
            padding-right: .2rem;
            color:#999;
        }
        .phone-status{
            position:absolute;
            right: .6rem;
            color:#999;
        }
        .weibo-status{
            width: 1.333333rem;
            height: .8rem;
            display:inline-block;
            position:absolute;
            right: .6rem;
            background: #987A57;
            border: .013333rem solid rgba(0,0,0,0.10);
            border-radius: .533333rem;
            .weibo-btn{
                width: .8rem;
                height: .8rem;
                border-radius:50%;
                background:#fff;
            }
        }
    }
`
export const Logout  = styled.div`
    margin: .8rem 0 1.6rem 0;
    padding: 0 .4rem;
    .btn{
        width: 100%;
        height: 1.226667rem;
        line-height: 1.226667rem;
        color: #FFF;
        background: #987A57;
        border-radius: .106667rem;
        display:inline-block;
        text-align:center;
        font-size:.426667rem;
    }
`
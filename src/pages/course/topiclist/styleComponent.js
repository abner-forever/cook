import styled from 'styled-components'

export const TopicItem = styled.div`
    width:100%;
    height:5.68rem;
    position:relative;
    margin-bottom:.32rem;
`
export const ImgBox = styled.div`
    width:100%;
    height:5.68rem;
    background:url(${props => props.topic_img}) 0 0 no-repeat;
    background-size:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const Nocourse = styled.div`
    width:100%;
    padding: 2.666667rem 0;
    display:flex;
    justify-content:space-between;
     flex-direction:column;
     align-items:center;
     p{
         padding: .2rem 0;
     }
     .flowing{
         color:#969696;
     }
    .nocourse-title{
        font-size:.533333rem
    }
    .btn{
        display:block;
        width: 5.333333rem;
        height:1.173333rem;
        border-radius:.106667rem;
        border:.013333rem solid #987A57;
        color:#987A57;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:.426667rem;
    }
`

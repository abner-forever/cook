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
    background:url(${props=>props.topic_img}) 0 0 no-repeat;
    background-size:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`
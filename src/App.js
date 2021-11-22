import React from "react";
// BucketList 컴포넌트를 import 해옵니다. import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import styled from "styled-components";
import {Route, Switch} from 'react-router-dom';
import Details from './Details';
import NotFound from "./NotFound";
import { useDispatch, useSelector } from 'react-redux';
import {} from './redux/modules/bucket';
import {createBucket} from './redux/modules/bucket';
import Progress from "./Progress";

function App() {

    const [list, setList] = React.useState(["영화관 가기", "매일 책읽기", "수영 배우기"]);
    const text = React.useRef(null);

    // useDispatch 사용법 
    // create 완성 후 이제 추가하기 버튼 만들 때 import useDispatch  먼저 한다
    // 객체를 가지고 얘를 활용할거임
    const dispatch = useDispatch();

    // const data = useSelector((state)=> state);
    // console.log(data);


    //추가하기 버튼에 걸린 함수 찾기
    const addBucketList = () => {
        // 스프레드 문법! 기억하고 계신가요? :) 원본 배열 list에 새로운 요소를 추가해주었습니다.
        // setList([
        //     ...list,
        //     text.current.value
        // ]);
        

        //action 일으킬 준비하기
       //action 생성 함수를 이용해서 dispatch() 사용하기       
       
       dispatch(createBucket({text: text.current.value, compelted:false}));
       
       

    }
    return (
        <div className="App">
            <Container>
                <Title>내 버킷리스트</Title>
                <Progress></Progress>
                <Line/> {/* 컴포넌트를 넣어줍니다. */}
                {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}

                <Switch>
                    <Route path="/" exact="exact" render={(porops) => (<BucketList list={list}/>)}/>
                    <Route path="/detail/:index" component={Details}/>

                    <NotFound></NotFound>

                </Switch>
            </Container>
            {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
            <Input>
                <input type="text" ref={text}/>
                <button onClick={addBucketList}>추가하기</button>
            </Input>
            <button onClick={()=>{
              window.scrollTo({top:0, left:0, behavior:'smooth'});
            }}>위로가기</button>
        </div>
    );
}

const Input = styled.div `
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;

  & input {
    border:1px solid orange;
    margin-right:20px; 
    border-radius:4px;
  }
  
 & input:focus {
  outline:none;
  border:3px solid orange;
 }
`;

const Container = styled.div `
  max-width: 350px;
  height: 40vh;
  overflow-y:auto;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1 `
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr `
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;
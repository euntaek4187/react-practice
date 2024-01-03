import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components'
import { addItem } from "../store";
import { useDispatch } from "react-redux";

function Detail(props){

    let [alert, setalert] = useState(true);
    let [count] = useState(0);
    let [tap, setTap] = useState(0);
    let dispatch = useDispatch()

    useEffect(()=>{
        setTimeout( ()=>{setalert(false)}, 2000);

        return ()=>{
            clearTimeout(alert);
        }
    }, [count])


    let {id} = useParams();
    let findId = props.shoes.find(function(x){
        return x.id == id
      });

    useEffect(()=>{
        let a = localStorage.getItem('watched')
        a = JSON.parse(a);
        a.push(findId.id);
        a = new Set(a);
        a = Array.from(a);
        localStorage.setItem('watched', JSON.stringify(a));
    }, []);

    return (
        <div className="container">

            {
                alert == true
                ? <div>2초 이내 구매시 할인</div>
                : null
            }

        <div className="row">
            <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${findId.id+1}.jpg`} width="100%" />
            </div>
            <div className="col-md-6">
            <h4 className="pt-5">{findId.title}</h4>
            <p>{findId.content}</p>
            <p>{findId.price}</p>
            <button onClick={()=>{
                dispatch(addItem({id: id, name: findId.title, count: 0}));
            }} className="btn btn-danger">주문하기</button> 
            </div>
        </div>

        <Nav justify variant="tabs" defaultActiveKey="link0">
            <Nav.Item>
                <Nav.Link onClick={()=>{setTap(0)}} eventKey="link0">버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={()=>{setTap(1)}} eventKey="link1">버튼2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={()=>{setTap(2)}} eventKey="link2">버튼3</Nav.Link>
            </Nav.Item>
        </Nav>
        <TabContainer tap={tap}></TabContainer>
    </div> 
    );
}
function TabContainer({tap}){

    let [fade, setFade] = useState('')

    useEffect(() => {
        setTimeout(() => {setFade('end')}, 100)

        return ()=>{
            setFade('')
        }
    }, [tap])

    return (<div className={'start ' + fade}>
        {
            [<div>content0</div>, <div>content0</div>, <div>content0</div>][tap]
        }
    </div>)
}

export default Detail;
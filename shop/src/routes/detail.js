import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'

function Detail(props){

    let [alert, setalert] = useState(true);
    let [count] = useState(0);

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
            <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>
    </div> 
    );
}

export default Detail;
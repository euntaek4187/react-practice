import Table from 'react-bootstrap/Table';
import {useDispatch, useSelector} from 'react-redux';
import {test, increase} from "./../store/userSlice.js";
import { addCount } from '../store.js';
import { memo, useState, useMemo } from 'react';

function Cart(){

    let state = useSelector((state)=>{return state})
    let dispatch = useDispatch()
    let [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={()=>{setCount(count+1)}}></button>
            <h4>{state.user.name} {state.user.age} 의 장바구니 </h4>
            <button onClick={()=>{dispatch(increase(10))}}>+</button>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    <th>좋아요</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a, i)=>{
                            return (
                                <tr key={i}>
                                <td>{i+1}</td>
                                <td>{state.cart[i].name}</td>
                                <td>{state.cart[i].count}</td>
                                <td>안녕</td>
                                <td>
                                    <button onClick={()=>{
                                        dispatch(addCount(state.cart[i].id))
                                    }}>+</button>
                                </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table> 
        </div>
    );
}

export default Cart;
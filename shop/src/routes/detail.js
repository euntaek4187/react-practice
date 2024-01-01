import { useParams } from "react-router-dom";

function Detail(props){

    let {id} = useParams();
    let findId = props.shoes.find(function(x){
        return x.id == id
      });

    return (
        <div className="container">
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
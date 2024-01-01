function Card(props){
    return (
    <div className='col-md-4'>
      <img src={`https://codingapple1.github.io/shop/shoes${props.num+1}.jpg`} width="80%" />
      <h4>{props.shoe.title}</h4>
      <p>{props.shoe.price}</p>
    </div>
    );
}

export default Card;

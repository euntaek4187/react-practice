import Card from '../components/card';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'


function Main(props){
    let navigate = useNavigate();
    return(
        <>
            <div className='main-bg'>
            </div>
            <div className='container'>
            <div className='row'>
                {
                props.shoes.map((e, i)=>{
                    return (
                        <>
                            <Card shoe={e} num={i}></Card>
                            <Button onClick={()=>navigate(`/detail/${i}`)}>상세보기</Button>
                        </>
                    );
                })
                }
            </div>
            </div>
        </>
    );
}

export default Main;
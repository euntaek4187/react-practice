import Card from '../components/card';
import Button from 'react-bootstrap/Button';

function Main(props){
    return(
        <>
            <div className='main-bg'>
            </div>
            <div className='container'>
            <div className='row'>
                {
                props.shoes.map((e, i)=>{
                    return (
                    <Card shoe={e} num={i}></Card>
                    );
                })
                }
            </div>
            </div>
            <Button variant="primary">Primary</Button>{' '}
        </>
    );
}

export default Main;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EditEmployee from './EditEmployee.js'
import { propTypes } from 'react-bootstrap/esm/Image';

function Employee(props) {
  return (
    <div className='col-3'>
    <Card className='mt-3 text-center' style={{ width: '18rem' }} >
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title><h3>{props.name}</h3></Card.Title>
        <Card.Text>
          <b className='mt-3 text-secondary'>{props.role ? props.role : 'No Role'}</b>
        </Card.Text>
        <EditEmployee name={props.name} role={props.role} updateEmployee={props.updateEmployee} id={props.id}/>
        
      </Card.Body>
    </Card>
    </div>
  );
}

export default Employee;
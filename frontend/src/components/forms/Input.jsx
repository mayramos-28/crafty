import Form from 'react-bootstrap/Form';
export const Input = (props) => {

    return (
        <>
            <Form.Group className="text-start mb-3" key={props.key}>
                <Form.Label >{props.label}</Form.Label>
                <Form.Control className="py-3"
                type={props.type} 
                name={props.name} 
                value={props.value} 
                onChange={props.onChange} 
                placeholder={props.placeholder} 
              />

                {props.error && <div className="invalid-feedback">{props.error}</div>}

            </Form.Group>
        </>
    );

}

 
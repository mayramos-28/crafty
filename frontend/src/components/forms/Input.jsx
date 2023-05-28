import Form from 'react-bootstrap/Form';
export const Input = (props) => {

    return (
        <>
            <Form.Group className="text-start mb-3" key={props.key}>
                <Form.Label >{props.label}</Form.Label>
                <Form.Control type={props.type} name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder} className={'form-control' + (props.error ? ' is-invalid' : '')} />

                {props.error && <div className="invalid-feedback">{props.error}</div>}

            </Form.Group>
        </>
    );

}

 
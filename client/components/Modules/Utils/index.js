import { Form, Row, Col } from 'react-bootstrap';

export const showForm = (data, name) => {
    return (
        <Form.Group as={Row} controlId={`formHorizontal${name}`} >
            <Form.Label column sm={2}> {name} </Form.Label>
            <Col sm={10}>
                <Form.Control plaintext readOnly defaultValue={data} />
            </Col>
        </Form.Group >
    )
}

export const createFrom = (values, touched, errors, handleChange, handleBlur, param, name) => {
    return (
        <Form.Group as={Row} controlId={`formHorizontal${name}`} >
            <Form.Label column sm={2}>{name}</Form.Label>
            <Col sm={10}>
                <Form.Control
                    required
                    type={name === "Email" ? "email" : "text"}
                    placeholder={name}
                    name={param}
                    value={values[param]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched[param] && !errors[param]} />
            </Col>
            <Form.Control.Feedback type="invalid">
                {errors[param]}
            </Form.Control.Feedback>
        </Form.Group >

    )
}
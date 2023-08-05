
import {Formik, Field, ErrorMessage } from 'formik'
import {Form, Row, Col, Button, Alert} from 'react-bootstrap'
//usamos Yup para las validaciones de form
import * as Yup from 'yup'
import useAuth from '../../../hooks/useAuth'

export const Login = () => {

  const {login, alert} = useAuth()

  const initialValues = {
      email : '',
      password :''
  }

  const handleSubmit = (values)=>{
    console.log(values)

    login(values)
  }

  const validationSchema = Yup.object({
    email : Yup.string().required('La email es obligatoria'),
    password : Yup.string().required('La constraseña es obligatoria') 
  })

  return (
    <Formik 
    initialValues = {initialValues}
    onSubmit={handleSubmit}
    //con esta linea puedo decirle a mi formulario que 
    //se valida con las condiciones de la variable calidationSchema
    validationSchema={validationSchema}
    >
      {
        (formik) => (
          <Form onSubmit={formik.handleSubmit} className="col-6 mx-auto">
                {alert && <Alert variant='danger' >{alert}</Alert> }
                <Form.Group>
                  <Form.Label htmlFor='email'>
                      email
                  </Form.Label>
                  <Field
                    id= "email"
                    type= "text"
                    placeholder = "ej: florencia89@gamil.com"
                    name= "email"
                    as = {Form.Control}
                  >
                  </Field>
                  <ErrorMessage
                  name="email"
                  component= {Form.Text}
                  className='text-danger ms-2'
                   >
                  </ErrorMessage>
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor='password'>
                    Contraseña
                  </Form.Label>
                  <Field
                    id= "password"
                    type= "text"
                    name= "password"
                    as = {Form.Control}
                  >
                  </Field>
                  <ErrorMessage
                  name="password"
                  component= {Form.Text}
                  className='text-danger ms-2'
                   >
                  </ErrorMessage>
                </Form.Group>

            <Row className='justify-content-end mt-3'>
              <Col md={3}>
                <Button 
                variant= "dark"
                disabled= {false}
                className= "w-100"
                type= "submit"
                >
                  login
                </Button>
              </Col>
            </Row>
          </Form>
        )
      }
    </Formik>
  )
}

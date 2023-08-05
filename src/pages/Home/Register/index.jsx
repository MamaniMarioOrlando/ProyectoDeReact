
import {Formik, Field, ErrorMessage } from 'formik'
import {Form, Row, Col, Button} from 'react-bootstrap'
//usamos Yup para las validaciones de form
import * as Yup from 'yup'

export const Register = () => {

  const initialValues = {
      name : '',
      email : '',
      password :''
  }

  const handleSubmit = (values)=>{
    console.log(values)
  }

  const validationSchema = Yup.object({
    name : Yup.string().required('El nombre es obligatorio'),
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
          <Form onSubmit={formik.handleSubmit}>

                <Form.Group>
                  <Form.Label htmlFor='name'>
                      Nombre
                  </Form.Label>
                  <Field
                    id= 'name'
                    type= 'text'
                    placeholder = 'ej: Marcos'
                    name= 'name'
                    as = {Form.Control}
                  ></Field>
                  <ErrorMessage
                  name="name"
                  component= {Form.Text}
                  className='text-danger ms-2'
                   >

                  </ErrorMessage>
                </Form.Group>
             
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
                  name="category"
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
                  Registrate
                </Button>
              </Col>
            </Row>
          </Form>
        )
      }
    </Formik>
  )
}

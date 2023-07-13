
import {Formik, Field, ErrorMessage } from 'formik'
import {Form, Row, Col, Button} from 'react-bootstrap'
//usamos Yup para las validaciones de form
import * as Yup from 'yup'
import useCategories from '../../../hooks/useCategories'

export const SearchForm = () => {

  const {categories} = useCategories();
  console.log("Estas son las categorias:  ",categories)

  const initialValues = {
      name : '',
      category : ''
  }
  const handleSubmit = (values)=>{
    console.log("Los valores son: " + values);
  }
  const validationSchema = Yup.object({
    name : Yup.string().required('El nombre es obligatorio')
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
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label htmlFor='name'>
                      Nombre de la bebida
                  </Form.Label>
                  <Field
                    id= 'name'
                    type= 'text'
                    placeholder = 'ej: Tequila, Vodka'
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
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label htmlFor='category'>
                      Categoria de la bebida
                  </Form.Label>
                  <Field
                    id= "category"
                    type= "text"
                    placeholder = "ej: Tequila, Vodka"
                    name= "category"
                    as = {Form.Select}
                  >
                    <option value="" defaultValue="" hidden> Seleccine categoria</option>
                    {
                      categories.map(category =>(
                        <option 
                        value= {category.strCategory}
                        key= {category.strCategory}>
                          {category.strCategory}
                        </option>
                      ))
                    }
                  </Field>
                </Form.Group>
              </Col>
            </Row>
            <Row className='justify-content-end mt-3'>
              <Col md={3}>
                <Button 
                variant= "danger"
                disabled= {false}
                className= "w-100"
                type= "submit"
                >
                  Mostrar bebida
                </Button>
              </Col>
            </Row>
          </Form>
        )
      }
    </Formik>
  )
}

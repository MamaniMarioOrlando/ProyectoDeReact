
import {Formik, Field, ErrorMessage } from 'formik'
import {Form, Row, Col, Button} from 'react-bootstrap'
//usamos Yup para las validaciones de form
import * as Yup from 'yup'
import useCategories from '../../../hooks/useCategories'
import useDrinks from '../../../hooks/useDrinks'

export const SearchForm = () => {

  const {categories} = useCategories();
  const {getDrinks, loading} = useDrinks()

  const initialValues = {
      ingredient : '',
      category : ''
  }

  const handleSubmit = (values)=>{
    getDrinks(values)
  }

  const validationSchema = Yup.object({
    ingredient : Yup.string().required('El nombre es obligatorio'),
    category : Yup.string().required('La categoria es obligatoria') 
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
                  <Form.Label htmlFor='ingredient'>
                      Ingrediente de la bebida
                  </Form.Label>
                  <Field
                    id= 'ingredient'
                    type= 'text'
                    placeholder = 'ej: Tequila, Vodka'
                    name= 'ingredient'
                    as = {Form.Control}
                  ></Field>
                  <ErrorMessage
                  name="ingredient"
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
                  <ErrorMessage
                  name="category"
                  component= {Form.Text}
                  className='text-danger ms-2'
                   >

                  </ErrorMessage>
                </Form.Group>
              </Col>
            </Row>
            <Row className='justify-content-end mt-3'>
              <Col md={3}>
                <Button 
                variant= "danger"
                disabled= {loading}
                className= "w-100"
                type= "submit"
                >
                  {loading ? "cargando .." : "Mostrar bebida"}
                </Button>
              </Col>
            </Row>
          </Form>
        )
      }
    </Formik>
  )
}

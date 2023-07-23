
import { Button, Card, Col } from 'react-bootstrap'
import {PropTypes} from 'prop-types'
import useDrinks from '../../hooks/useDrinks'
import styles from './index.module.css'
import useCart from '../../hooks/useCart'
import { types } from '../../types'
import Swal from 'sweetalert2'

export const DrinkCard = ({drink}) => {
    const {strDrinkThumb, strDrink,idDrink} = drink;
    
    const {handleDrinkIdClick} = useDrinks();

    const {dispatch} = useCart();

    const handleAddCard = () => {
        dispatch({
            type: types.addItemToCart,
            payload : drink
        });

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your add drink in the cart',
            showConfirmButton: false,
            timer: 1500
          })
    }
    
  return (  
    <Col md={6} lg={3}>
        <Card className='mb-4'>
            <Card.Img
                variant='top'
                src={strDrinkThumb}
                alt={`Imagen de: ${strDrink}`}
            ></Card.Img>
            <Card.Body>
                <Card.Title className={styles.strDrink}>
                    {strDrink}
                </Card.Title>
                <Button
                variant='warning'
                className= 'w-100 text-uppercase mt-2'
                onClick={() => {
                    handleDrinkIdClick(idDrink)
                }}
                >
                    Ver receta
                </Button>
                <Button
                variant='danger'
                className= 'w-100 text-uppercase mt-2'
                onClick={handleAddCard}
                >
                    comprar
                </Button>
            </Card.Body>
        </Card>
    </Col>
   
  )
}

DrinkCard.propTypes = {
    drink : PropTypes.object.isRequired,
    strDrinkThumb : PropTypes.string.isRequired,
    strDrink : PropTypes.string.isRequired
}

DrinkCard.defaultProps = {
    strDrinkThumb : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEWIjZF6gYT///+Bh4tze37Iy8y5vL7S09W+wMKBhord39/Z2tv8/Pzn6OiAh4q0t7qtsbKOlJafpKZweHuVmpyeoqXFyMnt7u6lqquanqHz8/SusbR4foMm/gDFAAAEg0lEQVR4nO3c4VbiMBQE4JQWEcRVFhER3/85t6hggSa9yb093Jl1/sOZ7ySBQE8SKvLU4dYNRk4dyIUtkFt4AFILP4HMwi8gsfAbyCs8AmmFJyCr8AdIKuwAOYVdIKXwDMgoPAcSCi+AfMJLIJ3wCsgmvAaSCXuAXMI+IJWwF8gk7AcSCSNAHmEMSCOMAlmEcSCJMAHkEKaAFMIkkEGYBhIIB4D4wiEgvHAQiC4cBoILBUBsoQQILRQBkYUyILBQCMQVSoGwQjEQVSgHggozgJjCHCCkMAuIKMwDAgozgXjCXCCcMBuIJswHggkLgFjCEiCUsAiIJCwDmggbTcYGGgibzfShOK9vQYgsBaqFTXic6PL4VAmMxUC1MCyVwDbLu/V4QK2w2eqBbbYhPYwKoFa4MQG2w7hJETVApbC5NxJOJn/jRBVQK5yaCSe7GFEHdCSMjaISaCVc3GVGTNQCrYTTdeZW5vt1y9VrmqgGmgnlu6+vHIV/1qtlgqgH3l5YNS8d4tv5+xgAHQgTRAugB2HVrPrXognQhbAl9o2iDdCHsHeiGgGdCC+Ia0OgF+H5WmxH0QzoRnixFiszoB/h+UR9IhzDA7EzUfd06/Dz3VZjjKIn4cVEnRMKRyH6Ep5/adisRWfCqtp0RnFDKKxD3SFu+YSHaVl3/qG0+EB1Jfzy1LuT8F0PdCU8Dlhnoj5TCX9m5Hx/FC703xi3Fv48fKxCfcrH6YEWvnD//J39Uzezo3CHLhyM/tPUu/AeVdgkWRRC6bNxXOEbu7BqZkkYgVBKBBZW69108RjNkkDYvnq9Xn/Me/OxoBBW8X+25yzCaH0WYbw9iTBRnkOY6k4hTFZnEKabEwgHiuMLh3rDCwdrowuHW4MLBaWxhZLO0EJRZWShrDGwUFgYVyjtCysU10UVytuCCjPKYgpzukIKs6oiCvOaAgozi+IJc3vCCbNrognzW4IJC0piCUs6QgmLKiIJyxoCCQsL4ghL+8EIi+uhCMvbgQgV5TCEmm4QQlU1BKGuGYBQWcy/UNvLvVBdy7tQfw7EudDgoItvocWJM9dCkyN1noU2h1sdC41O7/oVWh1Pdis0O2LuVWh3TYBToR3QqdAQ6FNoCXQpNAV6FBpet3KIQ6HtEDoUzoyu6TjmV5iRX+Gv8L8RTiOn7EpTuRNuZ8Z59yYcLbcWVuzCura77ToS/fUtKmAIu+GOuqiBGuFh/swfxgUa7Hd1wBBqm4v1I1kYbOiVwJY43iguXy32EVpgO1Ff9rnXlcuyDyYbJTXwkHqUWPCKhca/d0cNPbBICAUsEWIBC4RgwHwhGjBbCAfMFeIBM4WAwDwhIjBLCAnMEWICM4SgQLkQFSgWwgKlQlygUAgMlAmRgSIhNFAixAYKhODAYSE6cFAIDxwS4gMHhATAtJABmBRSAFNCDmBCSAKMC1mAUSENMCbkAUaERMB+IROwV0gF7BNyAXuEZMBrIRvwSkgHvBTyAQM9MNADAz0w0AMDPTDQAwM9MNADAz0w0AMDPTDQAwM9MNADAz3wH1x6nqXpQLWYAAAAAElFTkSuQmCC',
    strDrink : "Nombre de la bebida"
}
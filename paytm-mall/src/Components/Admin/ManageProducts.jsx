import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
 
import { Heading, Grid, CircularProgress } from '@chakra-ui/react';
import SingleProduct from './AdminSingleProduct';
// import { getProducts } from '../../Redux/Admin/actions';
import { useGet } from '../../hooks/useGet';

const ManageProducts = () => {
  // const { isLoading, isError, products } = useSelector(store => store.AdminReducer);
  // const dispatch = useDispatch();
  const { isLoading,  products , serverError }=useGet("https://universal-mall-api.onrender.com/products");
  // useEffect(() => {
  //   dispatch(getProducts);
  // }, [])

  console.log(products)
  return (
    <div>
      <Heading size={'md'}>Manage Products</Heading>

      {isLoading && <CircularProgress isIndeterminate color='green.300' />}

      {serverError && <h2>Error Occured while getting product list</h2>}


      <Grid templateColumns={'repeat(4,1fr)'} gap={2} templateRows={'100'}>
        {products.length > 0 && products.map(product => <SingleProduct key={product.id} product={product} />)}
      </Grid>
    </div>
  )
}

export default ManageProducts;

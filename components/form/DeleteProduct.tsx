import React from 'react'
import FormContainer from './FormContainer';
import { IconButton } from './Buttons';
import { deleteProductAction } from '@/utils/actions';

function DeleteProduct({ productId }: { productId: string }) {
  const deleteProduct = deleteProductAction.bind(null, { productId });
  return (
    <FormContainer action={deleteProduct}>
      <IconButton actionType='delete' />
    </FormContainer>
  );
}

export default DeleteProduct
import React from 'react';
// import useStyles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import CustomDialog from '../CustomDialog';
import { setLoading } from '../../actions/loadingAction';

const Loading = () => {
  // const classes = useStyles();
  const loading = useSelector((state) => state.loadingReducer);
  const dispatch = useDispatch();

  return ( 
    loading && (
      <CustomDialog dialogContent={loading?.content} openDialog={loading.open} 
        closeDialog={() => dispatch(setLoading({open: false}))}
      />
    )
  );
}

export default Loading;
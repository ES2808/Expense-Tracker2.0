import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  income: {
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
    borderRadius: '25px',
    border: '2px solid #21ad70',
  },
  expense: {
    borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
    borderRadius: '25px',
    border: '2px solid #a60d0d',
  },
}));

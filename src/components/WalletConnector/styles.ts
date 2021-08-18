import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    background: '#FFFFFF',
    width: '225px',
    height: '50px',
    borderRadius: '10px',
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Konnect',
    fontSize: '18px',
    color: 'rgba(37, 37, 37, 0.7)',
  },
  ball: {
    position: 'absolute',
    left: '20px',
    top: '19px',
    height: '12px',
    width: '12px',
    backgroundColor: '#3EB859',
    borderRadius: '50%',
  },
  address: {
    position: 'absolute',
    left: '55px',
    top: '10px',
    width: '63px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Konnect',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  power: {
    position: 'absolute',
    right: '10px',
    top: '9px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '32px',
    width: '32px',
    color: '#EF4A50',
    borderRadius: '5px',
    '&:hover': {
      cursor: 'pointer',
      background: 'rgba(239, 74, 80, 0.25)'
    }
  }
}));

export default useStyles
import { makeStyles } from '@material-ui/core/styles'

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
    fontSize: '18px',
    color: 'rgba(37, 37, 37, 0.7)',
  },
  ball: {
    position: 'absolute',
    left: '20px',
    top: '13px',
    height: '24px',
    width: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(180deg, #FFF5DF 0%, #FFEFCA 92.71%)',
    borderRadius: '50%',
    objectFit: 'contain',
  },
  balance: {
    position: 'absolute',
    left: '81px',
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
  arrow: {
    position: 'absolute',
    right: '10px',
    width: '24px',
    height: '24px',
    color: 'rgba(37, 37, 37, 0.6)',
  },
}))

export default useStyles
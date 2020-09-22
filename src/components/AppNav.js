import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
//import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
    searchButton: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
}));

export default function AppNav() {
  const classes = useStyles();
  const [product,setProduct] = useState('')


  const handleChange = (e)=>{
  
    setProduct(e.target.value)
  }

  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
            
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            MercadoApp
          </Typography>

          <Link to='/'>
            <IconButton>
                <HomeIcon 
                    color="success"  
                    className={classes.menuButton}
                />
            </IconButton>
          </Link>
          <Link to='/Catalogue' className={classes.title}>Ver Catalogo</Link>
                    
          <div className={classes.search}>
            <form onSubmit={(e)=>{
                  e.preventDefault()
                  window.location.reload(false)
                  
                }}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onChange={handleChange}
              placeholder="Buscar…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            {
              product === ''?
              <Button 
                variant="contained" 
                color="secondary" 
                className={classes.searchButton}
                onClick={
                  e=>{
                    e.preventDefault()
                    alert('Debe ingresar un producto para realizar la busqueda')
                  }
                }              
              >
                Buscar
              </Button>
              :
              <Link to={`/Products/${product}`}>
                <Button 
                variant="contained" 
                color="secondary" 
                className={classes.searchButton}
                                
              >
                Buscar
              </Button>
              </Link>
            }
            
            </form>
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}



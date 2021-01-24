import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Paginacion() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const handleChange = (event, value) => {
    setPage(value - 1);
  };

  return (
    <div className={classes.root}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} variant="outlined" shape="rounded" page={page} onChange={handleChange} />
    </div>
  );
}
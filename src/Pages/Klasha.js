import * as React from "react";
import Navbar from "../Component/Navbar";
import Sidebar from "../Component/Sidebar";
import { Grid, makeStyles, Typography, Button } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { DataGrid } from '@material-ui/data-grid';



const useStyle = makeStyles((theme) => ({
  bg: {
    backgroundColor: "#fff",
  },

  totalarea: {
    width: "685px",
    marginTop: "63px",
    marginLeft: "190px",
    border: "1px solid #EBEBEB",
    height: "176px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "80px",
    },
  },

  total: {
    marginLeft: "20px",
    marginTop: "15px",
    fontSize: "14px",
    fontFamily: "Founders Grotesk",
    color: "#2C665D",
  },
  totalgrid: {
    display: "flex",
    flexDirection: "column",
  },
  totalnumber: {
    fontFamily: "Space Grotesk",
    fontSize: "36px",
    fontWeight: "700",
    marginLeft: "20px",
    letterSpacig: "0.1px",
    color: "#2A2A2A",
    marginTop: "18px",
    paddingTop: "19px",
    borderTop: "1px solid #EBEBEB",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  subtotal: {
    fontFamily: "Founders Grotesk",
    fontSize: "16px",
    color: "#A6ABB2",
    marginLeft: "20px",
    marginTop: "8px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  currencygrid: {
    display: "flex",
    flexDirection: "column",
  },
  select: {
    height: "25px",
    marginLeft: "17px",
    marginTop: "15px",
    width: "80px",
    border: "1px solid #F5F5F5",
    borderRadius: "4px",
    backgroundColor: "#F5F5F5", 
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-20px",
      width: "70px",
    },
  },
  menu: {
    fontSize: "14px",
    marginTop: "-10px",
  },
  curList: {
    marginTop: "10px",
    border: "1px solid #EBEBEB",
    borderRadius: "4px",
    backgroundColor: "#FFFFFF",
    width: "97px",
    height: "97px",
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-10px",
      width: "60px",
    },
  },
  curLists: {
    borderBottom: "1px solid #EBEBEB",
    fontFamily: "Founders Grotesk",
    fontSize: "14px",
    fontWeight: "700",
    padding: "4px",
    marginTop: "2px",
  },
  funds: {
    border: "1px solid #EBEBEB",
    boxSizing: "border-box",
    borderRadius: "10px",
    backgroundColor: "#F5F5F5",
  },
  fund: {
    fontFamily: "Founders Grotesk",
    fontSize: "14px",
    color: "#2A2A2A",
    marginLeft: "20px",
    marginTop: "25px",
  },
  totalnumberr: {
    marginLeft: "-37px",
    marginRight: "68px",
    marginTop: "8px",
    paddingTop: "19px",
    borderTop: "1px solid #EBEBEB",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-5px",
    },
  },
  fundNumber: {
    marginLeft: "55px",
    marginTop: "10px",
    fontFamily: "Space Grotesk",
    fontSize: "36px",
    fontWeight: "700",
    color: "#2A2A2A",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      marginLeft: "23px",
    },
  },
  payoutTable: {
    marginLeft: "190px",
    marginTop: "50px",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "80px",
    },
  },
  searchInput: {
    marginLeft: "350px",
    width: "300px",
    border: "1px solid #EBEBEB",
    backgroundColor: "#FFFFFF",
    borderRadius: "4px",
    fontFamily: "Founders Grotesk",
    fontSize: "14px",
    color: "#A6ABB2",
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "30px",
      width: "230px",
    },
  },
  monthInput: {
    fontFamily: "Founders Grotesk",
    fontSize: "14px",
    width: "140px",
    padding: "5px",
    marginLeft: "15px",
    color: "#2A2A2A",
    backgroundColor: "#fff",
    border: "1px solid #EBEBEB",
    borderRadius: "4px",
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      marginTop: "10px",
      width: "133px",
    },
  },
  payBtn: {
    width: "104px",
    height: "42px",
    color: "#fff",
    backgroundColor: "#3D8F83",
    borderRadius: "4px",
    marginLeft: "26px",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "125px",
      marginTop: "10px",
    },
  },
  table: {
    marginLeft: "190px",
    height: "50vh",
    marginTop: "20px",
    marginBottom: "20px",
    marginRight: "100px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "80px",
      marginTop: "10px",
    },
  },
}));

const columns = [
  {
    field: 'id', headerName: ' ', width: 50,
  },
  {
    field: 'payoutId', headerName: 'Payout ID', width: 150,
  },
  {
    field: 'source', headerName: 'Source', width: 250,
  },
  {
    field: 'date', headerName: 'Date', 
    // type: 'date',
    width: 200,
  },
  {
    field: 'amount', headerName: 'Amount', width: 140,
    // description: 'This column has a value getter and is not sortable',
    // sortable: false,
    // valueGetter: (params) => `${params.getValue('paymentId') || ''} ${params.getValue('source') || ''}`,
  },
];

const rows = [
  {
    id: 1, payoutId: 'KLA12578DHQ', source: 'Vel pellentesque ornare', date: '25th November, 2020', amount: '$1,200',
  },
  {
    id: 2, payoutId: 'KLA12578DHQ', source: 'Vel pellentesque ornare', date: '25th November, 2020', amount: '$1,200',
  },
  {
    id: 3, payoutId: 'KLA12578DHQ', source: 'Vel pellentesque ornare', date: '25th November, 2020', amount: '$1,200',
  },
  {
    id: 4, payoutId: 'KLA12578DHQ', source: 'Vel pellentesque ornare', date: '25th November, 2020', amount: '$1,200',
  },
  {
    id: 5, payoutId: 'KLA12578DHQ', source: 'Vel pellentesque ornare', date: '25th November, 2020', amount: '$1,200',
  },
  {
    id: 6, payoutId: 'KLA12578DHQ', source: 'Vel pellentesque ornare', date: '25th November, 2020', amount: '$1,200'
  },
  {
    id: 7, payoutId: 'KLA12578DHQ', source: 'Vel pellentesque ornare', date: '25th November, 2020', amount: '$1,200',
  },
];

const Klasha = () => {
  const classes = useStyle();
  const [cur, setCur] = React.useState('');

  const handleChange = (event) => {
    setCur(event.target.value);
  };

  return (
    <>
        <Grid container xs={12}>
          <Sidebar />
        </Grid>
      <Grid container xs={12} className={classes.bg}>
        <Grid container xs={12}>
          <Navbar />
        </Grid>
        <Grid container xs={7}className={classes.totalarea}>
          <Grid item xs={5} className={classes.totalgrid}>
            <Typography className={classes.total}>
              Total account balance
            </Typography>
            <Typography className={classes.totalnumber}>
              $5,332.18
            </Typography>
            <Typography className={classes.subtotal}>
              1 USD = 381.97 NGN
            </Typography>
          </Grid>
          <Grid item xs={2} className={classes.currencygrid}>
            <Grid item>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={cur}
                onChange={handleChange}
                className={classes.select}
              >
                <MenuItem className={classes.menu} value="USD">
                  <em>USD</em>
                </MenuItem>
                <MenuItem className={classes.menu} value={1}>KES</MenuItem>
                <MenuItem className={classes.menu} value={2}>NGN</MenuItem>
                <MenuItem className={classes.menu} value={3}>GHC</MenuItem>
              </Select>
            </Grid>
            <Grid item className={classes.curList}>
              <Typography className={classes.curLists}>
                KES
              </Typography>
              <Typography className={classes.curLists}>
                NGN
              </Typography>
              <Typography className={classes.curLists}>
                GHC
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={5} className={classes.funds}>
            <Typography className={classes.fund}>
              Funds on hold
            </Typography>
            <div className={classes.totalnumberr}>
            <Typography className={classes.fundNumber}>
              $5,332.18
            </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container xs={12} className={classes.payoutTable}>
          <Typography
          style={{
            fontFamily: "Space Grotesk",
            fontWeight: "700",
            fontSize: "18px",
            color: "#2A2A2A"
          }}>
            Payout Table
          </Typography>
          <input
            type="text"
            id="searcher"
            className={classes.searchInput}
            placeholder="Search something..."
          />
          <SearchOutlinedIcon style={{
            marginLeft: "-30px",
            marginTop: "5px",
          }} />
          <input 
          type="month"
          id="date"
          name="date"
          value="2020-03"
          className={classes.monthInput}
          />
          <Button className={classes.payBtn}>
            Payout
          </Button>
        </Grid>
        <Grid container xs={12} className={classes.table}>
          <DataGrid rows={rows} columns={columns} pageSize={4} checkboxSelection />
        </Grid>
      </Grid>
    </>
  );
};

export default Klasha;
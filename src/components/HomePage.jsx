import { Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react"
import { LuMenuSquare } from "react-icons/lu";

const useStyles = makeStyles(() => ({
    boxApp: {
        backgroundColor: '#DEEDFF',
        display: 'flex',
        width: '1600px',
        height: '800px',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    header: {
        backgroundColor: '#DEEDFF',
        display: 'flex',
        width: '1600px',
        height: '70px',
        alignItems: 'center',
        flexDirection: 'row',
    },
    main: {
        backgroundColor: '#DEEDFF',
        display: 'flex',
        width: '1600px',
        height: '730px',
        alignItems: 'center',
        flexDirection: 'row',
    },
    luMenuSquareStyle : {
        width: '45px',
        height: '45px',
        marginLeft: '20px',
        color: '#475569',
    },
    grid: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    titleGrid: {
        fontSize: '30px',
        fontWeight: 'bold',
        color: '#475569',
        marginTop: '20px',
    },
    inputBox1: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '280px',
        width: '360px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        marginTop: '20px',
    },
    inputBox2: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '225px',
        width: '360px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        marginTop: '20px',
        marginBottom: '10px',
    },
    inputBox3: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '280px',
        width: '360px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        marginTop: '20px',
        marginBottom: '30px',
        paddingTop: '20px',
    },
    input: {
        marginTop: '30px'
    },
    input2: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '10px',
    },
    button1: {
        marginTop: '30px'
    },
    button2: {
        marginTop: '10px'
    },
    button3: {
        paddingTop: '30px'
    },
    checkbox: {
        marginTop: '10px',
        marginBottom: '0',
    },
    select: {
        width: '320px',
        height: '50px',
        justifyItems: 'center'
    },
    valorUnitario: {
        textDecoration: 'underline',
        paddingLeft: '20px',
        width: '220px',
        textAlign: 'start',
    },
    qtd: {
        width: '100px',
        paddingTop: '20px'
    },
    hr: {
        width: '650px',
        margin: '0',
        padding: '0',
    },
    hrDiv: {
        transform: 'rotate(90deg)',
        marginBottom: '700px',
        padding: '0',
        width: '2px',
    },
    tableContainer: {
        height: '325px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        marginTop: '20px',
        marginBottom: '30px',
    },
    valorTotal: {
        marginLeft: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '10px',
        backgroundColor: '#fff',
        height: '50px',
        width: '200px',
        borderRadius: '10px',
        textAlign: 'start',
    }
  }));

export const HomePage = () => {
    const classes = useStyles();

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];


    return(
        <div className={classes.boxApp}>
            <div className={classes.header}>
                <LuMenuSquare className={classes.luMenuSquareStyle} />
                <Typography sx={{fontSize: '25px', paddingLeft: '5px', fontWeight: 'bold', color: '#475569'}}>MENU</Typography>
            </div>
            <div className={classes.main}>

                {/* SELECIONAR COMANDA */}
                <div className={classes.grid}>
                    <p className={classes.titleGrid}>
                        Selecionar comanda
                    </p>
                    <div className={classes.inputBox1}> 
                        <div className={classes.input}>
                            <TextField id="outlined-password-input" label="Número da comanda" size="medium" />
                        </div>
                        <div className={classes.input}>
                            <TextField id="outlined-password-input" label="Número da mesa" size="medium" />
                        </div>
                        <div className={classes.button1}>
                            <Button size='large' variant="contained">Ok</Button>
                        </div>
                    </div>
                </div>

                <div className={classes.hrDiv}>
                    <hr className={classes.hr}></hr>
                </div>

                {/* REGISTRAR PEDIDOS */}
                <div className={classes.grid}>
                    <p className={classes.titleGrid}>Registrar pedidos</p>
                    <div className={classes.inputBox2}> 
                        <div className={classes.input}>
                            <TextField id="outlined-password-input" label="Número da comanda" size="medium" />
                        </div>
                        <div className={classes.checkbox}>
                            <FormControlLabel control={<Checkbox size="medium" />} label="Buffet livre" />
                        </div>
                        <div className={classes.button2}>
                            <Button size='large' variant="contained">Ok</Button>
                        </div>
                    </div>
                    <div className={classes.inputBox3}>
                        <div>
                            <FormControl sx={{ m: 1}}>
                                <InputLabel id="demo-simple-select-autowidth-label">Produto</InputLabel>
                                <Select
                                    className={classes.select}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value=''
                                    label="Produto"
                                    // onChange={handleChange}
                                >
                                    <MenuItem value='Pepsi lata'>Pepsi lata</MenuItem>
                                    <MenuItem>Agua sem gas</MenuItem>
                                    <MenuItem>Agua com gas</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        
                        <div className={classes.input2}>
                            <div>
                                <Typography className={classes.valorUnitario}>Valor unitário:</Typography>
                            </div>
                            <div className={classes.qtd}>
                            <TextField label="Qtd" size="medium"></TextField>
                            </div>
                        </div>
                        <div>
                                <Typography className={classes.valorUnitario}>Subtotal:</Typography>
                            </div>
                        <div className={classes.button3}>
                            <Button size='large' variant="contained">Ok</Button>
                        </div>
                    </div>
                </div>

                <div className={classes.hrDiv}>
                    <hr className={classes.hr}></hr>
                </div>

                {/* PEDIDOS */}
                <div className={classes.grid}>
                    <p className={classes.titleGrid}>Pedidos</p>
                    <TableContainer sx={{ width: 450 }} className={classes.tableContainer}>
                        <Table aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Produto</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }} align="right">Qtd</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }} align="right">Valor</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <div className={classes.valorTotal}>
                        <Typography sx={{fontSize: '20px', paddingLeft: '10px'}}>Valor total:</Typography>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
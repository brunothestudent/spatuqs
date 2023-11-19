import { Button, Checkbox, Drawer, FormControl, FormControlLabel, InputLabel, List, ListItem, ListItemText, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, darken } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react"
import { LuMenuSquare } from "react-icons/lu";
import TableChartIcon from '@mui/icons-material/TableChart';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

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
    const navigate = useNavigate();

    const [numeroComanda, setNumeroComanda] = useState('');
    const [numeroMesa, setNumeroMesa] = useState('');
    const [tempNumeroComanda, setTempNumeroComanda] = useState('');
    const [tempNumeroMesa, setTempNumeroMesa] = useState('');
    const [rows, setRows] = useState([]);
    const [peso, setPeso] = useState('');
    const [isBuffetLivreChecked, setIsBuffetLivreChecked] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleProductChange = (event) => setSelectedProduct(event.target.value);
    const handleQuantityChange = (event) => setQuantity(event.target.value);

    const handleOkProductClick = () => {
    let price;
    switch (selectedProduct) {
        case 'Pepsi lata':
        price = '6.00';
        break;
        // Add more cases for other products
        default:
        price = '0.00';
    }
    setRows(prevRows => [...prevRows, {name: selectedProduct, qtd: quantity, price}]);
    };

    const handleBuffetLivreChange = (event) => setIsBuffetLivreChecked(event.target.checked);

    const handleOkBuffetClick = () => {
    if (isBuffetLivreChecked) {
        setRows(prevRows => [...prevRows, {name: 'Buffet Livre', qtd: 1, price: '27.90'}]);
    } else {
        setRows(prevRows => [...prevRows, {name: 'Buffet', qtd: peso, price: '18.50'}]);
    }
    };

    const handlePesoChange = (event) => setPeso(event.target.value);

    let totalPrice = 0;

    useEffect(() => {
        if (numeroComanda === "1" && numeroMesa === "1") {
            setRows([
                {name: 'Pepsi lata', qtd: 1, price: '6.00'},
                {name: 'Buffet livre', qtd: 2, price: '27.90'},
                {name: 'Água mineral 600mL', qtd: 1, price: '5.00'},
            ]);
        } else if (numeroComanda === "2" && numeroMesa === "2") {
            setRows([
                {name: 'Suco de Laranja', qtd: 2, price: '6.00'},
                {name: 'Buffet livre', qtd: 4, price: '27.90'},
                {name: 'Cerveja Polar 473mL', qtd: 1, price: '8.00'},
            ]);
        }
    }, [numeroComanda, numeroMesa, peso, totalPrice]);

    rows.forEach(row => {
        totalPrice += Number(row.price);
    });

    const handleOkClick = () => {
        setNumeroComanda(tempNumeroComanda);
        setNumeroMesa(tempNumeroMesa);
      };

      const [drawerOpen, setDrawerOpen] = useState(false);

        const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
        };

        const goToTable = () => {
            navigate("/table")
        }



    return(
        <div className={classes.boxApp}>
            <div className={classes.header} >
                <div>
                <Typography onClick={toggleDrawer} sx={{alignContent: 'center', fontSize: '30px', paddingLeft: '20px', paddingRight: '20px', fontWeight: 'bold', color: '#475569', cursor: 'pointer', '&:hover': {backgroundColor: darken('#DEEDFF', 0.1)}}}>MENU</Typography>
                </div>
            </div>

            {/* MENU */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                <List>
                <ListItem button sx={{paddingBottom: '20px', paddingTop: '20px'}}>
                        <HomeIcon sx={{color: '#475569', fontSize: '35px'}} />
                        <Typography sx={{fontSize: '25px', paddingLeft: '5px', fontWeight: 'bold', color: '#475569'}}>Pagina Inicial </Typography>
                    </ListItem>
                    <ListItem button sx={{paddingBottom: '20px', paddingTop: '20px'}} onClick={goToTable}>
                        <TableChartIcon sx={{color: '#475569', fontSize: '35px'}} />
                        <Typography sx={{fontSize: '25px', paddingLeft: '5px', fontWeight: 'bold', color: '#475569'}}>Controle de estoque </Typography>
                    </ListItem>
                </List>
            </Drawer>

            <div className={classes.main}>

                {/* SELECIONAR COMANDA */}
                <div className={classes.grid}>
                    <p className={classes.titleGrid}>
                        Selecionar comanda
                    </p>
                    <div className={classes.inputBox1}> 
                        <div className={classes.input}>
                            <TextField id="outlined-password-input" label="Número da comanda" size="medium"  value={tempNumeroComanda} onChange={(event) => setTempNumeroComanda(event.target.value)} />
                        </div>
                        <div className={classes.input}>
                            <TextField id="outlined-password-input" label="Número da mesa" size="medium" value={tempNumeroMesa} onChange={(event) => setTempNumeroMesa(event.target.value)} />
                        </div>
                        <div className={classes.button1}>
                            <Button onClick={handleOkClick} size='large' variant="contained">Ok</Button>
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
                            <TextField id="outlined-password-input" label="Peso(g)" size="medium" value={peso} onChange={handlePesoChange} />
                        </div>
                        <div className={classes.checkbox}>
                            <FormControlLabel control={<Checkbox size="medium" checked={isBuffetLivreChecked} onChange={handleBuffetLivreChange}/>} label="Buffet livre" />
                        </div>
                        <div className={classes.button2}>
                            <Button size='large' variant="contained" onClick={handleOkBuffetClick}>Ok</Button>
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
                                    value={selectedProduct}
                                    label="Produto"
                                    onChange={handleProductChange}
                                >
                                    <MenuItem value='Pepsi lata'>Pepsi lata</MenuItem>
                                    <MenuItem>Agua sem gas</MenuItem>
                                    <MenuItem>Agua com gas</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        
                        <div className={classes.input2}>
                            <div>
                                <Typography className={classes.valorUnitario}>Valor unitário: {selectedProduct === 'Pepsi lata' ? '6,00' : '0,00'}</Typography>
                            </div>
                            <div className={classes.qtd}>
                            <TextField label="Qtd" size="medium" value={quantity} onChange={handleQuantityChange}></TextField>
                            </div>
                        </div>
                        <div>
                                <Typography className={classes.valorUnitario}>Subtotal: {selectedProduct === 'Pepsi lata' ? (quantity * 6).toFixed(2) : '0,00'}</Typography>
                            </div>
                        <div className={classes.button3}>
                            <Button size='large' variant="contained" onClick={handleOkProductClick}>Ok</Button>
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
                                <TableCell align="right">{row.qtd}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <div className={classes.valorTotal}>
                        <Typography sx={{fontSize: '20px', paddingLeft: '10px'}}>Valor total:{totalPrice}</Typography>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
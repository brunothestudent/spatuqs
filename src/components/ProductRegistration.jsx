import HomeIcon from '@mui/icons-material/Home';
import { Button, Checkbox, Dialog, Drawer, FormControl, FormControlLabel, InputLabel, List, ListItem, ListItemText, MenuItem, Modal, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, darken } from "@mui/material";
import { useState } from 'react';
import { LuMenuSquare } from 'react-icons/lu';
import TableChartIcon from '@mui/icons-material/TableChart';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

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
        flexDirection: 'column',
    },
    luMenuSquareStyle : {
        width: '45px',
        height: '45px',
        marginLeft: '20px',
        color: '#475569',
    },
    boxButton: {
        display: 'flex',
        flexDirection: 'row',
    },
    tableContainer: {
        height: '325px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        marginTop: '20px',
        marginBottom: '30px',
    },
    inputBox1: {
        display: 'flex',
        flexDirection: 'column',
        height: '560px',
        width: '460px',
        backgroundColor: '#fff',
        borderRadius: '20px',
        marginTop: '20px',
    },
    input: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
    },
    select: {
        width: '220px',
        height: '50px',
        justifyItems: 'center',
        marginBottom: '12px',
    },
    selectDiv: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
    },
    button1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '20px',
    },
    button2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '40px',
    },
    button3: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '40px',
    },
    inputBox2: {
        display: 'flex',
        flexDirection: 'column',
        height: '300px',
        width: '460px',
        backgroundColor: '#fff',
        borderRadius: '20px',
        marginTop: '20px',
    },
}));

export const ProductRegistration = () => {
    const classes = useStyles();
    const navigate = useNavigate()

    const [drawerOpen, setDrawerOpen] = useState(false);

    const [openRegisterModal, setOpenRegisterModal] = useState(false);
    const [openStockModal, setOpenStockModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');
    const [selectedSubItem, setSelectedSubItem] = useState('');
    const [rows, setRows] = useState([
        createData(200, 'Pepsi lata', 1, '6,00', '2,85', 'Refrigerante'),
        createData(50, 'Suco de laranja', 2, '5,00', '2,85', 'Suco'),
        createData(60, 'Água mineral 600mL', 3, '5,00', '0,80', 'Água'),
        createData(20, 'Trident canela', 4, '2,00', '0,90', 'Doces'),
        createData(20, 'Halls', 5, '2,00', '1,00', 'Doces'),
      ]);
      
    // const addProduct = (product) => setRows(prevRows => [...prevRows, product]);

    const handleSelectChange = (event) => setSelectedItem(event.target.value);
    const handleSelectChangeSubItem = (event) => setSelectedSubItem(event.target.value);
    const handleOpenRegisterModal = () => setOpenRegisterModal(true);
    const handleOpenStockModal = () => setOpenStockModal(true);

    const handleCloseRegisterModal = () => setOpenRegisterModal(false);
    const handleCloseStockModal = () => setOpenStockModal(false);

    function createData(quantity, name, cod, sellingPrice, price, type) {
        return { quantity, name, cod, sellingPrice, price, type };
      }

    const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    };

    const goToHomePage = () => {
        navigate("/")
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
                <ListItem button sx={{paddingBottom: '20px', paddingTop: '20px'}} onClick={goToHomePage}>
                        <HomeIcon sx={{color: '#475569', fontSize: '35px'}} />
                        <Typography sx={{fontSize: '25px', paddingLeft: '5px', fontWeight: 'bold', color: '#475569'}}>Pagina Inicial </Typography>
                    </ListItem>
                    <ListItem button sx={{paddingBottom: '20px', paddingTop: '20px'}}>
                        <TableChartIcon sx={{color: '#475569', fontSize: '35px'}} />
                        <Typography sx={{fontSize: '25px', paddingLeft: '5px', fontWeight: 'bold', color: '#475569'}}>Controle de estoque </Typography>
                    </ListItem>
                </List>
            </Drawer>
                
                {/* MAIN */}
            <div className={classes.main}>
                <Typography sx={{fontSize: '30px', paddingLeft: '5px', fontWeight: 'bold', color: '#475569'}}>Controle de estoque </Typography>

                <TableContainer sx={{ width: 1200, height: 500 }} className={classes.tableContainer}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: 18, width: 100 }}>Qtd</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: 18, width: 350 }}>Produto</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: 18, width: 100 }}>Código</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: 18, width: 100 }}>Custo</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: 18, width: 100 }}>Valor venda</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: 18, width: 150 }}>Tipo</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.cod}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{row.quantity}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.cod}</TableCell>
                                    <TableCell>{row.price}</TableCell>
                                    <TableCell>{row.sellingPrice}</TableCell>
                                    <TableCell>{row.type}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <div className={classes.boxButton}>
                    <Button size='large' variant="contained" sx={{ margin: 2  }} onClick={handleOpenRegisterModal}>Cadastrar produto</Button>
                    <Button size='large' variant="contained" sx={{ margin: 2 }} onClick={handleOpenStockModal}>Alterar estoque</Button>

                    <Dialog
                    open={openRegisterModal}
                    onClose={handleCloseRegisterModal}
                    >
                        <div className={classes.inputBox1}> 
                        <div className={classes.input}>
                            <TextField id="outlined-password-input" label="Produto" size="medium" />
                        </div>
                        <div className={classes.input}>
                            <TextField id="outlined-password-input" label="Quantidade" size="medium" />
                        </div>
                        <div className={classes.input}>
                            <TextField id="outlined-password-input" label="Custo" size="medium" />
                        </div>
                        <div className={classes.input}>
                            <TextField id="outlined-password-input" label="Valor de venda" size="medium" />
                        </div>
                        <div className={classes.selectDiv}>
                            <FormControl sx={{ m: 1}}>
                                <InputLabel id="demo-simple-select-autowidth-label">Categoria...</InputLabel>
                                <Select
                                    className={classes.select}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Categoria..."
                                    value={selectedItem}
                                    onChange={handleSelectChange}
                                >
                                    <MenuItem value='Pepsi lata'>Bebida</MenuItem>
                                    <MenuItem>Salgado</MenuItem>
                                    <MenuItem>Diversos</MenuItem>
                                </Select>
                                </FormControl>
                                <FormControl sx={{ m: 1}}>
                                <InputLabel id="demo-simple-select-autowidth-label">Subcategoria...</InputLabel>
                                <Select
                                    className={classes.select}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Subcategoria..."
                                    value={selectedSubItem}
                                    onChange={handleSelectChangeSubItem}
                                >
                                    <MenuItem value='Pepsi lata'>Refrigerante</MenuItem>
                                    <MenuItem>Água</MenuItem>
                                    <MenuItem>Vinho</MenuItem>
                                    <MenuItem>Destilado</MenuItem>
                                </Select>
                                </FormControl>
                        </div>
                        <div className={classes.button1}>
                            <Button size='large' variant="contained" onClick={() => {setOpenRegisterModal(false); setSelectedItem(''); setSelectedSubItem('')}}>Cancelar</Button>
                            <Button size='large' variant="contained" onClick={() => {setOpenRegisterModal(false); setSelectedItem(''); setSelectedSubItem('')}}>Adicionar</Button>
                        </div>
                    </div>
                    </Dialog>

                    <Dialog
                    open={openStockModal}
                    onClose={handleCloseStockModal}
                    >
                        <div className={classes.button2}>
                            <Button size='large' variant="outlined" onClick={() => {setOpenRegisterModal(false); setSelectedItem(''); setSelectedSubItem('')}}>Remover</Button>
                            <Button size='large' variant="outlined" onClick={() => {setOpenRegisterModal(false); setSelectedItem(''); setSelectedSubItem('')}}>Incluir</Button>
                        </div>
                        <div className={classes.inputBox2}> 
                        <div className={classes.selectDiv}>
                            <FormControl sx={{ m: 1}}>
                                <InputLabel id="demo-simple-select-autowidth-label">Categoria...</InputLabel>
                                <Select
                                    className={classes.select}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Categoria..."
                                    value={selectedItem}
                                    onChange={handleSelectChange}
                                >
                                    <MenuItem>Bebida</MenuItem>
                                    <MenuItem>Salgado</MenuItem>
                                    <MenuItem>Diversos</MenuItem>
                                </Select>
                                </FormControl>
                                <FormControl sx={{ m: 1}}>
                                <InputLabel id="demo-simple-select-autowidth-label">Produto...</InputLabel>
                                <Select
                                    className={classes.select}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Categoria..."
                                    value={selectedItem}
                                    onChange={handleSelectChange}
                                >
                                    <MenuItem>Bebida</MenuItem>
                                    <MenuItem>Salgado</MenuItem>
                                    <MenuItem>Diversos</MenuItem>
                                </Select>
                                </FormControl>
                        </div>
                        <div className={classes.button3}>
                            <Button size='large' variant="contained" onClick={() => {setOpenStockModal(false); setSelectedItem(''); setSelectedSubItem('')}}>Cancelar</Button>
                            <Button size='large' variant="contained" onClick={() => {setOpenStockModal(false); setSelectedItem(''); setSelectedSubItem('')}}>Finalizar</Button>
                        </div>
                    </div>
                    </Dialog>
                </div>

            </div>
        </div>
    )

}
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
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
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        width: '1600px',
        height: '730px',
        alignItems: 'center',
        flexDirection: 'row',
    },
    luMenuSquareStyle : {
        width: '50px',
        height: '50px',
        marginLeft: '20px',
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
    form1: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '280px',
        width: '360px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        marginTop: '20px',
    },
    form2: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '225px',
        width: '360px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        marginTop: '20px',
    },
    input: {
        marginTop: '30px'
    },
    button1: {
        marginTop: '30px'
    },
    button2: {
        marginTop: '10px'
    },
    checkbox: {
        marginTop: '10px',
        marginBottom: '0',
    }
  }));

export const HomePage = () => {
    const classes = useStyles();

    return(
        <div className={classes.boxApp}>
            <div className={classes.header}>
                <LuMenuSquare className={classes.luMenuSquareStyle} />
            </div>
            <div className={classes.main}>

                {/* SELECIONAR COMANDA */}
                <div className={classes.grid}>
                    <p className={classes.titleGrid}>
                        Selecionar comanda
                    </p>
                    <div className={classes.form1}> 
                        <div className={classes.input}>
                            <TextField id="outlined-password-input" label="Número da comanda" size="medium" />
                        </div>
                        <div className={classes.input}>
                            <TextField id="outlined-password-input" label="Número da comanda" size="medium" />
                        </div>
                        <div className={classes.button1}>
                            <Button size='large' variant="contained">Ok</Button>
                        </div>
                    </div>
                </div>

                {/* REGISTRAR PEDIDOS */}
                <div className={classes.grid}>
                    <p className={classes.titleGrid}>Registrar pedidos</p>
                    <div className={classes.form2}> 
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
                    <div className={classes.form2}> 
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
                </div>

                {/* PEDIDOS */}
                <div className={classes.grid}>
                    <p className={classes.titleGrid}>Pedidos</p>
                </div>
            </div>
        </div>
    )
}
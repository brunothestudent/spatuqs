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
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '300px',
        width: '400px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        marginTop: '40px',
    },
  }));

export const HomePage = () => {
    const classes = useStyles();

    return(
        <div className={classes.boxApp}>
            <div className={classes.header}>
                <LuMenuSquare className={classes.luMenuSquareStyle} />
            </div>
            <div className={classes.main}>
                <div className={classes.grid}>
                    <p className={classes.titleGrid}>
                        Selecionar comanda
                    </p>
                    <div className={classes.form} // fazer com mui
                    > 
                        <label>Número da comanda</label>
                        <input type="text" />
                    </div>
                </div>

                <div className={classes.grid}>
                    <p className={classes.titleGrid}>Registrar pedidos</p>
                </div>
                <div className={classes.grid}>
                    <p className={classes.titleGrid}>Pedidos</p>
                </div>
            </div>
        </div>
    )
}
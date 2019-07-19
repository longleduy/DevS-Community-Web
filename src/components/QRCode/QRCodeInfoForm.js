import React, { memo, Fragment, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Done from '@material-ui/icons/Done';
import QRCode from 'qrcode.react';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Print from '@material-ui/icons/Print';
//Todo: Styles
import StyleMain from '../../themes/StyleMain';

const QRCodeInfoForm = memo(props => {
    const StyleQRCode = StyleMain.styleQRCode();
    const StyleApp = StyleMain.styleApp();
    const { maSx, qrCode, createTime } = props.qrCodeInfo;
    const [number, setNumber] = useState(null);
    const [text, setText] = useState('')
    const _onrenderItem = () => {
        let arr = [];
        for (let i = 0; i < number; i++) {
            arr.push(<Grid item md={4} style={{ padding: 20 }}>
                <div className={StyleQRCode.divInfo}>
                    <QRCode size={200} value={qrCode} />
                </div>
            </Grid>)
        }
        return arr;
    }
    const _onHandleText = (e) => {
        setText(parseInt(e.target.value))
    }
    if (!number) return (
        <Fragment>
            <div className={StyleApp.defaultContainer}>
                <div className={StyleQRCode.divMainInfo}>
                    <div className={StyleQRCode.divInfo}>
                        <QRCode size={200} value={qrCode} />
                        <label>{maSx}</label>
                        <div className={StyleQRCode.divAction}>
                            <input type="text" placeholder="Số lượng" value={text} onChange={e => _onHandleText(e)} />
                            <input type="text" placeholder="Kích thước" />
                        </div>
                        <div>
                            <IconButton aria-label="Delete" onClick={() => setNumber(text)}>
                                <Done />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
    return (
        <Fragment>
            <div className={StyleApp.defaultContainer}>
                <div className={StyleQRCode.divMainInfo}>
                    <Grid container>
                        {_onrenderItem()}
                    </Grid>
                </div>
                <Fab aria-label="Add" className={StyleQRCode.btnIn}>
                    <Print />
                </Fab>
                <Fab aria-label="Add" className={StyleQRCode.btnCancel} onClick={() => setNumber(null)}>
                    <ArrowBack />
                </Fab>
            </div>
        </Fragment>
    )
})
export default QRCodeInfoForm;
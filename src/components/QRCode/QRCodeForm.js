import React, { memo, Fragment, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import QRCode from 'qrcode.react';
//Todo: Styles
import StyleMain from '../../themes/StyleMain';
//Todo: Component
import GraphqlMutationPropRender from '../Utils/HOC_RDP/GraphqlMutationPropRender';
//TOdo: GraphQls
import { TAO_LENH_SX_MUTATION } from '../../graphqls/mutations/userMutation';

const QRCodeForm = memo(props => {
    const StyleQRCode = StyleMain.styleQRCode();
    const StyleApp = StyleMain.styleApp();
    const [dataState, setDataState] = React.useState({
        S01: false,
        S02: false,
        BK07: false,
        BK08: false,
        MK03: false,
        MK05: false,
        SE04: false,
        qrCode: '',
        arrSp: [],
        maSx: '',
        status: false
    });
    const handleChange = name => event => {
        let qrCode = '';
        let target = event.target.checked;
        if (target) {
            dataState.arrSp.push(name)
        }
        else {
            let idx = dataState.arrSp.indexOf(name);
            dataState.arrSp.splice(idx, 1);
        }
        if (dataState.arrSp.length > 0) {
            dataState.arrSp.forEach((sp, index) => {
                if (index != dataState.arrSp.length - 1) {
                    qrCode = qrCode + `${sp}-`
                }
                else {
                    qrCode = qrCode + `${sp}`
                }
            });
        }
        setDataState({ ...dataState, [name]: event.target.checked, qrCode,status:false });
    };
    const handleChangeText = name => event => {
        setDataState({ ...dataState, [name]: event.target.value });
    };
    const _onTaoLenhSx = async (action) => {
        const lenhSxData = {
            maSx: dataState.maSx,
            qrCode: dataState.qrCode
        }
        let { data } = await action({
            variables: {
                lenhSxData
            }

        })
        if (data.taoLenhSx.isSuccess) {
            setDataState({
                S01: false,
                S02: false,
                BK07: false,
                BK08: false,
                MK03: false,
                MK05: false,
                SE04: false,
                qrCode: '',
                arrSp: [],
                maSx: '',
                status: true
            });
        }
    }
    return (
        <Fragment>
            <div className={StyleApp.defaultContainer}>
                <div className={StyleQRCode.divQrCodeLeft}>
                    <label className={StyleQRCode.title}>TẠO LỆNH SẢN XUẤT</label>
                    <div className={StyleQRCode.divMaSX}>
                        <TextField
                            id="maSx"
                            name="maSx"
                            label="Mã sản xuất"
                            value={dataState.maSx}
                            className={StyleQRCode.inputMaSX}
                            onChange={handleChangeText('maSx')}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        {/* //<label style={{width:'70%',padding:'10px 0px 10px 0px'}}>Thành phần</label> */}
                        <div className={StyleQRCode.divMaTP}>
                            <div className={StyleQRCode.divMaTPL}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={dataState.S01}
                                            onChange={handleChange('S01')}
                                            value="S01"
                                            inputProps={{
                                                'aria-label': 'primary checkbox',
                                            }}
                                        />
                                    }
                                    label="S01"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={dataState.S02}
                                            onChange={handleChange('S02')}
                                            value="S02"
                                            inputProps={{
                                                'aria-label': 'primary checkbox',
                                            }}
                                        />
                                    }
                                    label="S02"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={dataState.BK07}
                                            onChange={handleChange('BK07')}
                                            value="BK07"
                                            inputProps={{
                                                'aria-label': 'primary checkbox',
                                            }}
                                        />
                                    }
                                    label="BK07"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={dataState.SE04}
                                            onChange={handleChange('SE04')}
                                            value="SE04"
                                            inputProps={{
                                                'aria-label': 'primary checkbox',
                                            }}
                                        />
                                    }
                                    label="SE04"
                                />
                            </div>
                            <div className={StyleQRCode.divMaTPR}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={dataState.BK08}
                                            onChange={handleChange('BK08')}
                                            value="BK08"
                                            inputProps={{
                                                'aria-label': 'primary checkbox',
                                            }}
                                        />
                                    }
                                    label="BK08"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={dataState.MK03}
                                            onChange={handleChange('MK03')}
                                            value="MK03"
                                            inputProps={{
                                                'aria-label': 'primary checkbox',
                                            }}
                                        />
                                    }
                                    label="MK03"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={dataState.MK05}
                                            onChange={handleChange('MK05')}
                                            value="MK05"
                                            inputProps={{
                                                'aria-label': 'primary checkbox',
                                            }}
                                        />
                                    }
                                    label="MK05"
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 50 }}>
                        <GraphqlMutationPropRender
                            mutation={TAO_LENH_SX_MUTATION}
                            graphqlMutationPropRender={(action, { loading }) => (
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={StyleQRCode.btnSave}
                                    onClick={() => _onTaoLenhSx(action)}>
                                    <SaveIcon />
                                    Hoàn thành
                        </Button>
                            )} />
                    </div>
                </div>
                <div className={StyleQRCode.divQrCodeRight}>
                    {dataState.qrCode !== '' && <QRCode size={200} value={dataState.qrCode} />}
                    {dataState.status && <div className={StyleQRCode.divStatus}>
                        <svg viewBox="0 0 24 24">
                            <path fill="#000000" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                        </svg>
                    </div>}
                </div>
            </div>
        </Fragment>
    )
})
export default QRCodeForm;
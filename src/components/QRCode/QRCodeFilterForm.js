import React, { memo, Fragment,useState } from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import QRCode from 'qrcode.react';
//Todo: Styles
import StyleMain from '../../themes/StyleMain';
//Todo: Component
import GraphqlMutationPropRender from '../Utils/HOC_RDP/GraphqlMutationPropRender';
import QRCodeFilterItemForm from './QRCodeFilterItemForm';

const QRCodeFilterForm = memo(props => {
    const StyleQRCode = StyleMain.styleQRCode();
    const StyleApp = StyleMain.styleApp();
    const [filterKey,setFilterKey] = useState('');
    const _onChangeText = e => {
        const filterKey = e.target.value;
            setFilterKey(filterKey)
    }
    return (
        <Fragment>
            <div className={StyleApp.defaultContainer}>
                <div className={StyleQRCode.divMainFilter}>
                    <div className={StyleQRCode.divFilter}>
                        <label className={StyleQRCode.lblInQR}>IN QRCODE</label>
                        <div className={StyleQRCode.divSearch}>
                            <input type="text" placeholder="Nhập mã sản xuất" onChange={e => _onChangeText(e)}/>
                        </div>
                        <div className={StyleQRCode.divResult}>
                           {filterKey !== '' && <QRCodeFilterItemForm filterKey={filterKey}/>}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
})
export default QRCodeFilterForm;
import React, { memo, Fragment } from 'react';
import QRCode from 'qrcode.react';
import { Query } from "react-apollo";
import { Link } from 'react-router-dom';
//Todo: Styles
import StyleMain from '../../themes/StyleMain';
//Todo: GraphQL
import { FILTER_QRCODE_QUERY } from '../../graphqls/querys/qr_code/qrCodeQuery';

const QRCodeFilterItemForm = memo(props => {
    const StyleQRCode = StyleMain.styleQRCode();
    const { filterKey } = props;
    const _renderItem = ({ filterQRCode }) => {
        if (filterQRCode.length === 0) {
            return <div style={{ display: 'flex', height: 300, justifyContent: 'center' }}>
                <svg viewBox="0 0 24 24" style={{ width: 70 }}>
                    <path fill="#cccccc" d="M20.37,8.91L19.37,10.64L7.24,3.64L8.24,1.91L11.28,3.66L12.64,3.29L16.97,5.79L17.34,7.16L20.37,8.91M6,19V7H11.07L18,11V19A2,2 0 0,1 16,21H8A2,2 0 0,1 6,19M8,19H16V12.2L10.46,9H8V19Z" />
                </svg>
            </div>
        }
        return filterQRCode.map(({ QRCOdeID, maSx, createTime, qrCode }, idx) => {
            return <div className={StyleQRCode.divResultItem}>
                <label className={StyleQRCode.lblStt}>{idx + 1}</label>
                <label className={StyleQRCode.lblMaSx}>{maSx}</label>
                <label className={StyleQRCode.lblCreateTime}>{createTime}</label>
                <div className={StyleQRCode.divQrCode}>
                    <Link to={`/qrcode/${QRCOdeID}`}>
                        <QRCode size={30} value={qrCode} />
                    </Link>
                </div>
            </div>
        })
    }
    return (
        <Query query={FILTER_QRCODE_QUERY} variables={{ filterKey }} fetchPolicy="network-only">
            {({ loading, error, data }) => {
                if (loading) return null
                return <Fragment>
                    {_renderItem(data)}
                </Fragment>
            }}</Query>
    )
})
export default QRCodeFilterItemForm;
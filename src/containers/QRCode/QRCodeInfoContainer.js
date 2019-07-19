import React, { memo } from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from "react-apollo";
//Todo: Component
import QRCodeInfoForm from '../../components/QRCode/QRCodeInfoForm';
//Todo: GraphQL
import {GET_INFO_QRCODE_QUERY} from '../../graphqls/querys/qr_code/qrCodeQuery';
import {FILTER_QRCODE_QUERY} from '../../graphqls/querys/qr_code/qrCodeQuery';

const QRCodeInfoContainer = memo(props => {
    const { id } = props.match.params;
    return <Query query={GET_INFO_QRCODE_QUERY} variables={{ qrCodeID:id }}>
        {({ loading, error, data }) => {
            if (loading) return null
            return <QRCodeInfoForm qrCodeInfo={data.getQRCodeInfo} />
        }}</Query>
})
export default withRouter(QRCodeInfoContainer);
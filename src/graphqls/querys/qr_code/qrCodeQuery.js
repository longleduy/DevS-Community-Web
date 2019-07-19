import gql from 'graphql-tag';

export const FILTER_QRCODE_QUERY = gql`
    query FilterQRCode($filterKey: String){
        filterQRCode(filterKey:$filterKey){
            QRCOdeID
            maSx
            qrCode
            createTime
        }
    }
`;
export const GET_INFO_QRCODE_QUERY = gql`
query GetQRCodeInfo($qrCodeID: String){
    getQRCodeInfo(qrCodeID:$qrCodeID){
        maSx
        qrCode
        createTime
    }
}
`;
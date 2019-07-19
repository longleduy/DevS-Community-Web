import React, { memo, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
//Todo: Styles
import StyleMain from '../../themes/StyleMain';
//Todo: Component

const DefaultPostRightForm = memo(props => {
    const StyleRigtForm = StyleMain.styleRightDefaultPostForm();
    return (
        <Fragment>
            <div className={StyleRigtForm.divRightForm}>
                <div className={StyleRigtForm.divNews}>
                    <img
                        src="https://techtalk.vn/wp-content/uploads/2019/06/0_y5xhXZ_kHJ3zLX1F-696x522.png"
                        className={StyleRigtForm.imgNews} />
                         <div className={StyleRigtForm.contentNews}>
                            <label>Sử dụng gem Ransack để search trong rails</label>
                        </div>
                </div>
                <div className={StyleRigtForm.divNews}>
                    <img
                        src="https://techtalk.vn/wp-content/uploads/2019/04/perl-696x522.png"
                        className={StyleRigtForm.imgNews} />
                        <div className={StyleRigtForm.contentNews}>
                            <label>Ngôn ngữ lập trình Perl</label>
                        </div>
                </div>
                <div className={StyleRigtForm.divNews}>
                    <img
                        src="https://techtalk.vn/wp-content/uploads/2019/06/10-na%CC%86m-la%CC%A3%CC%82p-tri%CC%80nh-696x522.png"
                        className={StyleRigtForm.imgNews} />
                         <div className={StyleRigtForm.contentNews}>
                            <label>10 năm tiến hóa của một lập trình viên</label>
                        </div>
                </div>
            </div>
        </Fragment>
    )
})
export default DefaultPostRightForm;
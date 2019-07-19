import React, { memo, Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
//Todo: Styles
import StyleMain from '../../../themes/StyleMain';
//Todo: Component

const RecruitmentPostLeftItem = memo(props => {
    const StyleRecruitmentLeftForm = StyleMain.styleRecruitmentLeftForm();
    let {
        postID,
        postContent,
        postImage,
        postTag,
        role,
        salary,
        number,
        company,
        address,
        emailAddress,
        phoneNumber,
        interactive2: {
            attends,
            attended,
            comments
        },
        createTime,
        userInfo: {
            userID,
            profileName,
            avatar
        }
    } = props.post;
    const _getAvatar = () => {
        if (avatar) {
            return <Avatar
                src={avatar}
                className={StyleRecruitmentLeftForm.userAvatar} />
        }
        return <Avatar className={StyleRecruitmentLeftForm.userAvatarLabel}>
            <label>{profileName.charAt(0)}</label>
        </Avatar>
    }
    const _getRole = () => {
        return role.map((roleName, idx) => {
            if (idx !== role.length - 1) return <label key={idx}>{roleName},</label>
            return <label key={idx}>{roleName}</label>
        })
    }
    const _getSkill = () => {
        return postTag.map((skill, idx) => {
            return <label key={idx}>{skill}</label>
        })
    }
    return (
        <Fragment>
            <div className={StyleRecruitmentLeftForm.divRecruitmentLeftItem}>
                <div className={StyleRecruitmentLeftForm.divCompanyInfo}>
                    <div className={StyleRecruitmentLeftForm.divCompany}>
                        <svg viewBox="0 0 24 24">
                            <path fill="#000000" d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z" />
                        </svg>
                        <label>{company}</label>
                    </div>
                    <div className={StyleRecruitmentLeftForm.divUser}>
                        {_getAvatar()}
                        <div className={StyleRecruitmentLeftForm.divUserName}>
                            <label className={StyleRecruitmentLeftForm.lblUserName}>{profileName}</label>
                            <label className={StyleRecruitmentLeftForm.lblCreateTime}>{createTime}</label>
                        </div>
                    </div>
                </div>
                <div className={StyleRecruitmentLeftForm.divSalaryInfo}>
                    <div className={StyleRecruitmentLeftForm.divNumber}>
                        <label>
                            <label className={StyleRecruitmentLeftForm.numberTitle}>Số lượng: </label>
                            {number}
                        </label>
                    </div>
                    <div className={StyleRecruitmentLeftForm.divSalary}>
                        <label>{salary}</label>
                    </div>
                </div>
                <div className={StyleRecruitmentLeftForm.divRoleInfo}>
                    <label className={StyleRecruitmentLeftForm.lblRoleTitle}>Vị trí tuyển dụng: </label>
                    <div className={StyleRecruitmentLeftForm.divRole}>
                        {_getRole()}
                    </div>
                </div>
                <div className={StyleRecruitmentLeftForm.divRoleInfo}>
                    <label className={StyleRecruitmentLeftForm.lblRoleTitle}>Kỹ năng: </label>
                    <div className={StyleRecruitmentLeftForm.divSkill}>
                        {_getSkill()}
                    </div>
                </div>
                <div className={StyleRecruitmentLeftForm.divContent}>
                    <label>{postContent}</label>
                </div>
                <div className={StyleRecruitmentLeftForm.divContact}>
                    <div className={StyleRecruitmentLeftForm.divEmail}>
                        <svg viewBox="0 0 24 24">
                            <path fill="#000000" d="M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z" />
                        </svg>
                        <label>{emailAddress}</label>
                    </div>
                    <div className={StyleRecruitmentLeftForm.divPhoneNumber}>
                        <svg viewBox="0 0 24 24">
                            <path fill="#000000" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                        </svg>
                        <label>{phoneNumber}</label>
                    </div>
                </div>
                <div className={StyleRecruitmentLeftForm.divAction}>
                    <div className={StyleRecruitmentLeftForm.divCreateCV}>
                        <Button>
                            <svg viewBox="0 0 24 24">
                                <path fill="#000000" d="M8,12H16V14H8V12M10,20H6V4H13V9H18V12.1L20,10.1V8L14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H10V20M8,18H12.1L13,17.1V16H8V18M20.2,13C20.3,13 20.5,13.1 20.6,13.2L21.9,14.5C22.1,14.7 22.1,15.1 21.9,15.3L20.9,16.3L18.8,14.2L19.8,13.2C19.9,13.1 20,13 20.2,13M20.2,16.9L14.1,23H12V20.9L18.1,14.8L20.2,16.9Z" />
                            </svg>
                            <label>Tạo CV</label>
                        </Button>
                    </div>
                    <div className={StyleRecruitmentLeftForm.divJDDownload}>
                        <Button>
                            <svg viewBox="0 0 24 24">
                                <path fill="#000000" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
                            </svg>
                            <label>Tải JD</label>
                        </Button>
                    </div>
                    <div className={StyleRecruitmentLeftForm.divComment}>
                        <Button>

                            <svg viewBox="0 0 24 24">
                                <path fill="#000000" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10M6,7H18V9H6V7M6,11H15V13H6V11Z" />
                            </svg>
                            <label>{comments}</label>
                        </Button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
})
export default RecruitmentPostLeftItem;
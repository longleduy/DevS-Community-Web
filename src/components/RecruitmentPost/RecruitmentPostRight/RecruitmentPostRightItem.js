import React, { memo, Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
//Todo: Styles
import StyleMain from '../../../themes/StyleMain';
//Todo: Component

const RecruitmentPostRightItem = memo(props => {
    const StyleRecruitmentRightForm = StyleMain.styleRecruitmentRightForm();
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
        },
        education,
        experience
    } = props.post;
    const _getAvatar = () => {
        if (avatar) {
            return <Avatar
                src={avatar}
                className={StyleRecruitmentRightForm.userAvatar} />
        }
        return <Avatar className={StyleRecruitmentRightForm.userAvatarLabel}>
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
            <div className={StyleRecruitmentRightForm.divRecruitmentRightItem}>
                <div className={StyleRecruitmentRightForm.divCompanyInfo}>
                    <div className={StyleRecruitmentRightForm.divUser}>
                        {_getAvatar()}
                        <div className={StyleRecruitmentRightForm.divUserName}>
                            <label className={StyleRecruitmentRightForm.lblUserName}>{profileName}</label>
                            <label className={StyleRecruitmentRightForm.lblCreateTime}>{createTime}</label>
                        </div>
                    </div>
                </div>
                <div className={StyleRecruitmentRightForm.divRoleInfo}>
                    <label className={StyleRecruitmentRightForm.lblRoleTitle}>Vị trí ứng tuyển: </label>
                    <div className={StyleRecruitmentRightForm.divRole}>
                        {_getRole()}
                    </div>
                </div>
                <div className={StyleRecruitmentRightForm.divRoleInfo}>
                    <label className={StyleRecruitmentRightForm.lblRoleTitle}>Kỹ năng: </label>
                    <div className={StyleRecruitmentRightForm.divSkill}>
                        {_getSkill()}
                    </div>
                </div>
                <div className={StyleRecruitmentRightForm.divRoleInfo}>
                    <label className={StyleRecruitmentRightForm.lblRoleTitle}>Học Vấn: </label>
                    <div className={StyleRecruitmentRightForm.divRole}>
                        <label>{education}</label>
                    </div>
                </div>
                <div className={StyleRecruitmentRightForm.divRoleInfo}>
                    <label className={StyleRecruitmentRightForm.lblRoleTitle}>Kinh nghiệm: </label>
                    <div className={StyleRecruitmentRightForm.divRole}>
                        <label>{experience}</label>
                    </div>
                </div>
                <div className={StyleRecruitmentRightForm.divContent}>
                    <label>{postContent}</label>
                </div>
                <div className={StyleRecruitmentRightForm.divContact}>
                    <div className={StyleRecruitmentRightForm.divEmail}>
                        <svg viewBox="0 0 24 24">
                            <path fill="#000000" d="M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z" />
                        </svg>
                        <label>{emailAddress}</label>
                    </div>
                </div>
                <div className={StyleRecruitmentRightForm.divAction}>
                    <div className={StyleRecruitmentRightForm.divJDDownload}>
                        <Button>
                            <svg viewBox="0 0 24 24">
                                <path fill="#000000" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                            </svg>
                            <label>Gửi JD</label>
                        </Button>
                    </div>
                    <div className={StyleRecruitmentRightForm.divJDDownload}>
                        <Button>
                            <svg viewBox="0 0 24 24">
                                <path fill="#000000" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
                            </svg>
                            <label>Tải CV</label>
                        </Button>
                    </div>
                    <div className={StyleRecruitmentRightForm.divComment}>
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
export default RecruitmentPostRightItem;
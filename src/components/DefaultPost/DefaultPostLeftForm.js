import React, { memo, Fragment } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
//Todo: Styles
import StyleMain from '../../themes/StyleMain';
//Todo: Component

const userInfo = {
    userID: "5ccfa1bbb8ff872ef0a2713c",
    profileName: "Duy Long",
    email: "longldseatechit@gmail.com",
    passWord: "$2b$10$x6H1my6uxdtgoviKqvljqOG3hAf80chk4Mrirw13wR.nany5PxXzS",
    gender: "M",
    dateOfBirth: "21/08/1994",
    address: 'Bình Giang, Hải Dương, Việt Nam',
    avatar: "https://res.cloudinary.com/seatechit/image/upload/v1557370393/g75ni2vbjm0jkdc0ccu7.jpg",
    school: 'Đại học Công nghiệp Hà Nội',
    company: 'Seatech IT',
    role: 'Full Stack developer',
    yearsOfExperience: '2 Năm',
    skill: [
        "NodeJs",
        "ReactJs"
    ]
}

const DefaultPostRightForm = memo(props => {
    const StyleLeftForm = StyleMain.styleLeftForm();
    let { address, profileName, gender, dateOfBirth, avatar, school, company, role, yearsOfExperience, skill } = userInfo;
    const _getGender = () => {
        switch (gender) {
            case "M":
                return "Nam";
            case "F":
                return "Nu"
            default:
                return "LGBT"
        }
    }
    const _getSkill = () => {
        return skill.map((item, idx) => {
            return <label className={StyleLeftForm.lblSkill} key={idx}>{item}</label>
        })
    }
    return (
        <Fragment>
            <div className={StyleLeftForm.leftFormDiv}>
                <div className={StyleLeftForm.bannerDiv}>
                    <img className={StyleLeftForm.banner} src={require('../../../public/images/angularjs-baner.png')} />
                    {/* <div className={StyleLeftForm.userProfile}> */}
                    <div className={`${StyleLeftForm.userAvatarDiv}`}>
                        <div className="divAvatar">
                            <Avatar
                                src={`${avatar}`}
                                className={StyleLeftForm.avatar} />
                        </div>
                    </div>
                    <div className={StyleLeftForm.userNameDiv}>
                        <label className={StyleLeftForm.lblName}>{profileName}</label>
                    </div>
                </div>
                <div className={StyleLeftForm.moreInfoDiv}>
                    <svg viewBox="0 0 24 24">
                        <path fill="#000000" d="M21,21V17C21,15.89 20.1,15 19,15H18V12C18,10.89 17.1,10 16,10H13V8H11V10H8C6.89,10 6,10.89 6,12V15H5C3.89,15 3,15.89 3,17V21H1V23H23V21M12,7A2,2 0 0,0 14,5C14,4.62 13.9,4.27 13.71,3.97L12,1L10.28,3.97C10.1,4.27 10,4.62 10,5A2,2 0 0,0 12,7Z" />
                    </svg>
                    <label>{dateOfBirth}</label>
                </div>
                <div className={StyleLeftForm.moreInfoDiv}>
                    <svg viewBox="0 0 24 24">
                        <path fill="#000000" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                    </svg>
                    <label>{address}</label>
                </div>
                <div className={StyleLeftForm.moreInfoDiv}>
                    <svg viewBox="0 0 24 24">
                        <path fill="#000000" d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
                    </svg>
                    <label>{school}</label>
                </div>
                <div className={StyleLeftForm.moreInfoDiv}>
                    <svg viewBox="0 0 24 24">
                        <path fill="#000000" d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z" />
                    </svg>
                    <label>{company}</label>
                </div>
                <div className={StyleLeftForm.moreInfoLabelDiv}>
                    <label className={StyleLeftForm.lblTitle}>Kinh nghiệm: </label>
                    <label>{yearsOfExperience}</label>
                </div>
                <div className={StyleLeftForm.moreInfoLabelDiv}>
                    <label className={StyleLeftForm.lblTitle}>Vị trí: </label>
                    <label>{role}</label>
                </div>
                <div className={StyleLeftForm.moreInfoLabelDiv}>
                    <label className={StyleLeftForm.lblTitle}>Kỹ năng: </label>
                    {_getSkill()}
                </div>
                <div className={StyleLeftForm.sourceInfo}>
                    <IconButton >
                        <svg viewBox="0 0 24 24">
                            <path fill="#000000" d="M20.38,8.53C20.54,8.13 21.06,6.54 20.21,4.39C20.21,4.39 18.9,4 15.91,6C14.66,5.67 13.33,5.62 12,5.62C10.68,5.62 9.34,5.67 8.09,6C5.1,3.97 3.79,4.39 3.79,4.39C2.94,6.54 3.46,8.13 3.63,8.53C2.61,9.62 2,11 2,12.72C2,19.16 6.16,20.61 12,20.61C17.79,20.61 22,19.16 22,12.72C22,11 21.39,9.62 20.38,8.53M12,19.38C7.88,19.38 4.53,19.19 4.53,15.19C4.53,14.24 5,13.34 5.8,12.61C7.14,11.38 9.43,12.03 12,12.03C14.59,12.03 16.85,11.38 18.2,12.61C19,13.34 19.5,14.23 19.5,15.19C19.5,19.18 16.13,19.38 12,19.38M8.86,13.12C8.04,13.12 7.36,14.12 7.36,15.34C7.36,16.57 8.04,17.58 8.86,17.58C9.69,17.58 10.36,16.58 10.36,15.34C10.36,14.11 9.69,13.12 8.86,13.12M15.14,13.12C14.31,13.12 13.64,14.11 13.64,15.34C13.64,16.58 14.31,17.58 15.14,17.58C15.96,17.58 16.64,16.58 16.64,15.34C16.64,14.11 16,13.12 15.14,13.12Z" />
                        </svg>
                    </IconButton >
                    <IconButton >
                        <svg viewBox="0 0 24 24">
                            <path fill="#000000" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                    </IconButton >
                    <IconButton >
                        <svg viewBox="0 0 24 24">
                            <path fill="#000000" d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                        </svg>
                    </IconButton >
                </div>
                <div className={StyleLeftForm.userSettingDiv}>
                    <IconButton className={StyleLeftForm.iconUserSetting}>
                        <svg viewBox="0 0 24 24">
                            <path fill="#000000" d="M15.9,18.45C17.25,18.45 18.35,17.35 18.35,16C18.35,14.65 17.25,13.55 15.9,13.55C14.54,13.55 13.45,14.65 13.45,16C13.45,17.35 14.54,18.45 15.9,18.45M21.1,16.68L22.58,17.84C22.71,17.95 22.75,18.13 22.66,18.29L21.26,20.71C21.17,20.86 21,20.92 20.83,20.86L19.09,20.16C18.73,20.44 18.33,20.67 17.91,20.85L17.64,22.7C17.62,22.87 17.47,23 17.3,23H14.5C14.32,23 14.18,22.87 14.15,22.7L13.89,20.85C13.46,20.67 13.07,20.44 12.71,20.16L10.96,20.86C10.81,20.92 10.62,20.86 10.54,20.71L9.14,18.29C9.05,18.13 9.09,17.95 9.22,17.84L10.7,16.68L10.65,16L10.7,15.31L9.22,14.16C9.09,14.05 9.05,13.86 9.14,13.71L10.54,11.29C10.62,11.13 10.81,11.07 10.96,11.13L12.71,11.84C13.07,11.56 13.46,11.32 13.89,11.15L14.15,9.29C14.18,9.13 14.32,9 14.5,9H17.3C17.47,9 17.62,9.13 17.64,9.29L17.91,11.15C18.33,11.32 18.73,11.56 19.09,11.84L20.83,11.13C21,11.07 21.17,11.13 21.26,11.29L22.66,13.71C22.75,13.86 22.71,14.05 22.58,14.16L21.1,15.31L21.15,16L21.1,16.68M6.69,8.07C7.56,8.07 8.26,7.37 8.26,6.5C8.26,5.63 7.56,4.92 6.69,4.92A1.58,1.58 0 0,0 5.11,6.5C5.11,7.37 5.82,8.07 6.69,8.07M10.03,6.94L11,7.68C11.07,7.75 11.09,7.87 11.03,7.97L10.13,9.53C10.08,9.63 9.96,9.67 9.86,9.63L8.74,9.18L8,9.62L7.81,10.81C7.79,10.92 7.7,11 7.59,11H5.79C5.67,11 5.58,10.92 5.56,10.81L5.4,9.62L4.64,9.18L3.5,9.63C3.41,9.67 3.3,9.63 3.24,9.53L2.34,7.97C2.28,7.87 2.31,7.75 2.39,7.68L3.34,6.94L3.31,6.5L3.34,6.06L2.39,5.32C2.31,5.25 2.28,5.13 2.34,5.03L3.24,3.47C3.3,3.37 3.41,3.33 3.5,3.37L4.63,3.82L5.4,3.38L5.56,2.19C5.58,2.08 5.67,2 5.79,2H7.59C7.7,2 7.79,2.08 7.81,2.19L8,3.38L8.74,3.82L9.86,3.37C9.96,3.33 10.08,3.37 10.13,3.47L11.03,5.03C11.09,5.13 11.07,5.25 11,5.32L10.03,6.06L10.06,6.5L10.03,6.94Z" />
                        </svg>
                    </IconButton >
                </div>
            </div>
        </Fragment >
    )
})
export default DefaultPostRightForm;
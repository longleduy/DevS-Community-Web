import React, { memo, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
//Todo: Styles
import StyleMain from '../../themes/StyleMain';
//Todo: Component
import RecruitmentPostRightItem from './RecruitmentPostRight/RecruitmentPostRightItem';

const listRecruitmentPost = [
    {
        postID: "5d124b05b445f7173428c6c8",
        postTag: [
            ".Net",
            "GraphQL",
            "NodeJs"
        ],
        role: [
            "FullStack Dev",
            "Database Administrator",
            "Android Dev"
        ],
        postStatus: "Y",
        postContent: "The Text Buttons, Contained Buttons, Floating Action Buttons and Icon Buttons are built on top of the same component: the ButtonBase. You can take advantage of this lower level component to build custom interactions.",
        salary: "800 - 1500 USD",
        number: "5",
        company: "Seatech IT",
        address: "98A, Ngụy Như, Thanh Xuân, Hà Nội",
        emailAddress: "longldseatechit@gmail.com",
        phoneNumber: "0363219295",
        createTime: "15 phút",
        interactive2: {
            attends: 12,
            attended: false,
            comments: 7
        },
        userInfo: {
            userID: "5ccfa1bbb8ff872ef0a2713c",
            profileName: "Duy Khánh",
            avatar: "https://res.cloudinary.com/seatechit/image/upload/v1553588356/oqyvdgpoyeebdcjosxtr.jpg"
        },
        education: 'Tốt nghiệp Đại Học Công Nghiệp Hà Nội',
        experience: '3 năm kinh nghiệm'
    },
    {
        postID: "5d124b05b445f7173428c6c9",
        postTag: [
            "Java",
            "React Native",
            "NodeJs"
        ],
        role: [
            "Front End Dev",
            "Manual Test",
            "Android Dev"
        ],
        postStatus: "Y",
        postContent: "Sometimes you might want to have icons for certain button to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon.",
        salary: "15.000.000 - 22.000.000 VND",
        number: "2",
        company: "Sun* Inc",
        address: "Hà Nội",
        emailAddress: "suninc@gmail.com",
        phoneNumber: "0363219295",
        createTime: "46 phút",
        interactive2: {
            attends: 12,
            attended: false,
            comments: 22
        },
        userInfo: {
            userID: "5ccfa1bbb8ff872ef0a2713e",
            profileName: "Tùng Lâm",
            avatar: null
        },
        education: 'Tốt nghiệp Đại Học Quốc gia Hà Nội',
        experience: '2 năm kinh nghiệm'
    }
]

const RecruitmentPostRightForm = memo(props => {
    const StyleRecruitmentRightForm = StyleMain.styleRecruitmentRightForm();
    const _getRecruitmentRighttItem = () => {
        return listRecruitmentPost.map((post, idx) => {
            return <RecruitmentPostRightItem post={post} key={idx} />
        })
    }
    return (
        <Fragment>
            <div className={StyleRecruitmentRightForm.divRecruitmentRight}>
                <div className={StyleRecruitmentRightForm.divTitle}>
                    <label>ỨNG TUYỂN</label>

                </div>
                {_getRecruitmentRighttItem()}
                <div className={StyleRecruitmentRightForm.divCreatePostButton}>
                    <Fab aria-label="Share" className={StyleRecruitmentRightForm.createPostButton}>
                        <svg viewBox="0 0 24 24">
                            <path fill="#000000" d="M8,12H16V14H8V12M10,20H6V4H13V9H18V12.1L20,10.1V8L14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H10V20M8,18H12.1L13,17.1V16H8V18M20.2,13C20.3,13 20.5,13.1 20.6,13.2L21.9,14.5C22.1,14.7 22.1,15.1 21.9,15.3L20.9,16.3L18.8,14.2L19.8,13.2C19.9,13.1 20,13 20.2,13M20.2,16.9L14.1,23H12V20.9L18.1,14.8L20.2,16.9Z" />
                        </svg>
                    </Fab>
                </div>
            </div>
        </Fragment>
    )
})
export default RecruitmentPostRightForm;
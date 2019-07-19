import React, { memo, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
//Todo: Styles
import StyleMain from '../../themes/StyleMain';
//Todo: Component
import RecruitmentPostLeftItem from './RecruitmentPostLeft/RecruitmentPostLeftItem';

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
        postContent: "Flow Technology Group cung cấp các lời giải đáp bằng công nghệ cho những bài toán khó trong kinh doanh, vận hành, quản lý. Qua đó giúp những doanh nghiệp, tổ chức trong và ngoài nước phát triển một cách bền vững.",
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
            profileName: "Quang Trung",
            avatar: "https://res.cloudinary.com/seatechit/image/upload/v1557462630/y8epxrb4dz1i7qcijl7x.png"
        }
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
            profileName: "Khánh Linh",
            avatar: null
        }
    }
]
const RecruitmentPostLeftForm = memo(props => {
    const StyleRecruitmentLeftForm = StyleMain.styleRecruitmentLeftForm();
    const _getRecruitmentLeftItem = () => {
        return listRecruitmentPost.map((post, idx) => {
            return <RecruitmentPostLeftItem post={post} key={idx} />
        })
    };
    return (
        <Fragment>
            <div className={StyleRecruitmentLeftForm.divRecruitmentLeft}>
                <div className={StyleRecruitmentLeftForm.divTitle}>
                    <label>TUYỂN DỤNG</label>
                </div>
                {_getRecruitmentLeftItem()}
                <div className={StyleRecruitmentLeftForm.divCreatePostButton}>
                    <Fab aria-label="Share" className={StyleRecruitmentLeftForm.createPostButton}>
                        <svg viewBox="0 0 24 24">
                            <path fill="#000000" d="M22,2C22,2 14.36,1.63 8.34,9.88C3.72,16.21 2,22 2,22L3.94,21C5.38,18.5 6.13,17.47 7.54,16C10.07,16.74 12.71,16.65 15,14C13,13.44 11.4,13.57 9.04,13.81C11.69,12 13.5,11.6 16,12L17,10C15.2,9.66 14,9.63 12.22,10.04C14.19,8.65 15.56,7.87 18,8L19.21,6.07C17.65,5.96 16.71,6.13 14.92,6.57C16.53,5.11 18,4.45 20.14,4.32C20.14,4.32 21.19,2.43 22,2Z" />
                        </svg>
                    </Fab>
                </div>
            </div>
        </Fragment>
    )
})
export default RecruitmentPostLeftForm;
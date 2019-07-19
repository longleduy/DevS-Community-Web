import React, { memo, Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
//Todo: Styles
import StyleMain from '../../../themes/StyleMain';
//Todo: Component

const DefaultContentItemForm = memo(props => {
    console.log("DefaultContentItemForm");
    const StyleContentForm = StyleMain.styleContentForm();
    const {
        postID,
        postTag,
        postContent,
        postImage,
        userInfo: { profileName, avatar },
        postCreateTime,
        interactive: { likes, liked, comments }
    } = props.defaultPost;
    const _getTag = () => {
        return postTag.map((tag, idx) => {
            return <label key={idx}>{tag}</label>
        })
    }
    return (
        <Fragment>
            <Card className={StyleContentForm.card}>
                <CardHeader
                    className={StyleContentForm.cardHeader}
                    avatar={
                        avatar ? <Avatar src={avatar} /> : <Avatar className={StyleContentForm.avatarLabel}>{profileName.charAt(0)}</Avatar>
                    }
                    action={
                        <IconButton aria-label="Settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={profileName}
                    subheader={postCreateTime}
                />
                <div className={StyleContentForm.divTag}>
                    {_getTag()}
                </div>
                {postImage && <CardMedia
                    className={StyleContentForm.cardMedia}
                    image={postImage}
                />}

                <CardContent className={StyleContentForm.cardContent}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {postContent}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className={StyleContentForm.cardActions}>
                    <IconButton
                        aria-label="Add to favorites"
                        className={`${StyleContentForm.buttonActions} ${liked ? StyleContentForm.buttonActionsActv : null}`}>
                        {!liked ?
                            <svg viewBox="0 0 24 24" className={StyleContentForm.commentAction}>
                                <path fill="#000000" d="M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C22.11,8 23,8.9 23,10V12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9M9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z" />
                            </svg> :
                            <svg viewBox="0 0 24 24" className={`${StyleContentForm.commentAction} ${StyleContentForm.likedIcon}`}>
                                <path fill="#000000" d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z" />
                            </svg>
                        }
                    </IconButton>
                    <IconButton aria-label="Share" style={{ marginLeft: 5 }} className={StyleContentForm.buttonActions}>
                        <label className={StyleContentForm.commentCountLbl}>{comments}</label>
                        <svg viewBox="0 0 24 24" className={StyleContentForm.commentAction}>
                            <path fill="#000000" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10M6,7H18V9H6V7M6,11H15V13H6V11Z" />
                        </svg>
                    </IconButton>
                    <IconButton aria-label="Share" style={{ marginLeft: 5 }} className={StyleContentForm.buttonActions}>
                        <svg viewBox="0 0 24 24" className={StyleContentForm.commentAction}>
                            <path fill="#000000" d="M21,12L14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12Z" />
                        </svg>
                    </IconButton>
                    <div className={StyleContentForm.likeCountDiv}>
                        <Button >{likes} lượt thích</Button>
                    </div>
                </CardActions>
            </Card>
        </Fragment>
    )
})
export default DefaultContentItemForm;
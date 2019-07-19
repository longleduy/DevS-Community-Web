import React, { memo, Fragment, useEffect,useState } from 'react';
import Fab from '@material-ui/core/Fab';
//Todo: Styles
import StyleMain from '../../themes/StyleMain';
//Todo: Component
import DefaultContentItemForm from './DefaultContent/DefaultContentItemForm';
import CreateDefaultPostForm from './CreateDefaultPost/CreateDefaultPostForm';
//Todo: GraphQl
import {CREATE_DEFAULT_POST_SUB} from '../../graphqls/subscriptions/default_post/defaultPostSubscription';

const DefaultContentForm = memo(props => {
    const StyleContentForm = StyleMain.styleContentForm();
    const { listDefaultPost, loading, subscribeToMore } = props;
    const [openCreatePostForm, handleCreatePostForm] = useState(false);
    useEffect(() => {
        subscribeToMore({
            document: CREATE_DEFAULT_POST_SUB,
            updateQuery: (prev, result) => {
                let newDefaultPost = { ...result.subscriptionData.data.createDefaultPostSub };
                let newListDefaultPost = [...prev.getListDefaultPost];
                newListDefaultPost.unshift(newDefaultPost)
                try {
                    return { getListDefaultPost: newListDefaultPost }
                } catch (error) { }
            }
        })
    }, [])
    const _getContentItem = () => {
        return listDefaultPost.map((defaultPost, idx) => {
            return <DefaultContentItemForm defaultPost={defaultPost} key={idx} />
        })
    }
    const _openCreatePostForm = () => {
        handleCreatePostForm(true)
    }
    const closeCreatePostForm = () => {
        handleCreatePostForm(false)
    }
    if (loading) return (
        <Fragment>
            <div className={StyleContentForm.divLoading}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="white">
                    <circle transform="translate(8 0)" cx="0" cy="16" r="0">
                        <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0"
                            keyTimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
                    </circle>
                    <circle transform="translate(16 0)" cx="0" cy="16" r="0">
                        <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3"
                            keyTimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
                    </circle>
                    <circle transform="translate(24 0)" cx="0" cy="16" r="0">
                        <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6"
                            keyTimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
                    </circle>
                </svg>
            </div>
        </Fragment>
    );
    return (
        <Fragment>
            <div style={{ flex: 7 }}>
                {_getContentItem()}
                <div className={StyleContentForm.divCreatePostButton}>
                    <Fab 
                    aria-label="Share" 
                    className={StyleContentForm.createPostButton}
                    onClick={_openCreatePostForm}>
                        <svg viewBox="0 0 24 24">
                            <path fill="#000000" d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M5,3H19C20.11,3 21,3.89 21,5V12.8C20.39,12.45 19.72,12.2 19,12.08V5H5V19H12.08C12.2,19.72 12.45,20.39 12.8,21H5C3.89,21 3,20.11 3,19V5C3,3.89 3.89,3 5,3M7,7H17V9H7V7M7,11H17V12.08C16.15,12.22 15.37,12.54 14.68,13H7V11M7,15H12V17H7V15Z" />
                        </svg>
                    </Fab>
                </div>
                <CreateDefaultPostForm openCreatePostForm={openCreatePostForm} closeCreatePostForm={closeCreatePostForm}/>
            </div>
        </Fragment>
    )
})
export default DefaultContentForm;
import React, { memo } from 'react';
//Todo: Component
import DefaultContentForm from '../../components/DefaultPost/DefaultContentForm';
//Todo: GraphQl
import GraphqlQueryPropRender from '../../components/Utils/HOC_RDP/GraphqlQueryPropRender';
import {GET_LIST_DEFAULT_POST_QUERY} from '../../graphqls/querys/default_post/defaultPostQuery';
const DefaultContentContainer = memo(props => {
    return (
        <GraphqlQueryPropRender
            query={GET_LIST_DEFAULT_POST_QUERY}
            fetchPolicy={'cache-and-network'}
            queryPropRender={({ loading, data, networkStatus, refetch, subscribeToMore, fetchMore }) => {
                return <DefaultContentForm 
                listDefaultPost={data.getListDefaultPost}
                loading ={loading}
                subscribeToMore={subscribeToMore}/>
            }} />
    )

})
export default DefaultContentContainer;
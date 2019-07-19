import gql from 'graphql-tag'

export const SIGN_IN_MUTATION = gql`        
    mutation SignIn($signInData: signInData){
        signIn(signInData:$signInData){
			isSuccess
            message
            jwt
	}
}`
export const SIGN_UP_MUTATION = gql`        
mutation SignUp($signUpData: signUpData){
    signUp(signUpData:$signUpData){
        isSuccess
        message
    }
}`
export const TAO_LENH_SX_MUTATION = gql`        
mutation TaoLenhSx($lenhSxData: lenhSxData){
    taoLenhSx(lenhSxData:$lenhSxData){
        isSuccess
        message
    }
}`


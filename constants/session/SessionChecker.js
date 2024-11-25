import { store } from '../../redux/store/Store';
import {
    ApiUtils,
    hideErrorBanner,
    ApiEndpoints
} from '../ApiImportCommon'


export const SessionValidator = (response) => {

    let sessionValid = true

    let currentActiveScreen = store.getState().LiveChatReducer.currentActiveScreen

    if (response !== null) {
        if (response.status === ApiUtils.API_SUCESS_CODE) {
            if (response.data.ackStatus === ApiUtils.API_RESPONSE_FAILURE_STATUS_CODE) {

                if (response.data.error) {
                    if (response.data.error.errorCode === ApiUtils.API_RESPONSE_SESSIONEXPIRED_ERRORCODE
                        || response.data.error.errorCode === ApiUtils.API_RESPONSE_UNKNOWN_ERRORCODE1
                        || response.data.error.errorCode === ApiUtils.API_RESPONSE_UNKNOWN_ERRORCODE2
                    ) {

                        sessionValid = false

                        if (currentActiveScreen !== "LogoutFailureScreen") {

                            if (response.data.error.errorCode === ApiUtils.API_RESPONSE_UNKNOWN_ERRORCODE1
                                || response.data.error.errorCode === ApiUtils.API_RESPONSE_UNKNOWN_ERRORCODE2) {

                                // console.log('Session Expired..')

                                let sessionExpired = URLCheck(response)

                                if (sessionExpired) {
                                    store.dispatch(
                                        sessionAlertEvent(true)
                                    )

                                    setTimeout(() => {
                                        hideErrorBanner()

                                    }, 1000)
                                } else {

                                }










                            } else {
                                let errorMessage = response.data.error.errorDescription;
                                store.dispatch(setlogoutErrorScreenShown({
                                    status: true,
                                    errorMessage: errorMessage
                                }))

                                setTimeout(() => {
                                    hideErrorBanner()

                                }, 1000)
                            }

                        }

                    }

                }
            }
        }
    }


    return sessionValid
}


const URLCheck = (response) => {


    let listApi = [
        ApiEndpoints.dashboardSummary
    ]


    let allowedURL = false
    if (listApi.some((item) => response.config.url == item)) {
        allowedURL = true
    }

    return allowedURL

}



export const apiValidator = (response) => {


    let apiValidate = true

    if (response !== null) {
        if (response.status === ApiUtils.API_SUCESS_CODE) {
            if (response.data.ackStatus === ApiUtils.API_RESPONSE_FAILURE_STATUS_CODE) {

                if (response.data.error) {
                    if (response.data.error.errorCode === ApiUtils.API_RESPONSE_SESSIONEXPIRED_ERRORCODE) {

                        sessionValid = false

                    }

                }
            }
        }
    }


    return apiValidate

}
eden.factory('socialServices',
function(){
    // http://localhost/www/EDEN/home/list_home/,
    var service={};
    service.socialLogin=socialLogin;
    service.inicialiceWebAuth=inicialiceWebAuth;
    service.handleAuthentication=handleAuthentication;
     service.socialLoginPopup=socialLoginPopup;
    service.socialLogout=socialLogout;
    return service;

    var webAuth;
function inicialiceWebAuth() {
    webAuth = new auth0.WebAuth({
        domain: authdomain,
        clientID: authclientID,
        responseType: 'token id_token',
        redirectUri: 'http://localhost/www/EDEN_ANGULARJS/social/'
    });
}

function socialLogin() {
    webAuth.popup.authorize({}, function() {});
}

function handleAuthentication(err, authResult) {
    // console.log(authResult);

    // if (authResult && authResult.accessToken && authResult.idToken) {
    //     //sendSocialLoginUser(authResult);
    //     console.log(authResult);
    // }
}

function socialLoginPopup(err, authResult) {
    if (authResult && authResult.accessToken && authResult.idToken) {
        //sendSocialLoginUser(authResult);
        console.log(authResult);
    }
}

function socialLogout() {
    localStorage.removeItem('socialLogin');
    webAuth.logout({
        returnTo: window.location.href,
        client_id: authclientID,
    });
}


//     function inicialiceWebAuth() {
//         WebAuth = new auth0.WebAuth({
//             domain: authdomain,
//                 clientID: authclientID,
//                 redirectUri: authredirect,
//                 audience: authaudience,
//                 responseType: 'token id_token',
//                 scope: 'openid profile',
//                 leeway: 60
//         });
//     }

//     function socialLogin() {
//         //webAuth.popup.authorize({}, function() {});
//         WebAuth.authorize();
//     }

//     function handleAuthentication(err, authResult) {
//         console.log(authResult);
//         WebAuth.parseHash(function(err, authResult) {
//             if (authResult && authResult.accessToken && authResult.idToken) {
//                 window.location.hash = '';
//                 setSession(authResult);
//             } else if (err) {
//                 console.log(err);
//                 //alert('Error: ' + err.error + '. Check the console for further details.');
//             }
            
//         });
//     }

//     function setSession(authResult) {
//         // Set the time that the access token will expire at
//     	console.log(authResult);
//         var expiresAt = JSON.stringify(
//             authResult.expiresIn * 1000 + new Date().getTime()
//         );
//         localStorage.setItem('au_token', authResult.accessToken);
//         localStorage.setItem('id_token', authResult.idToken);
//         localStorage.setItem('expires_at', expiresAt);
//     }
//     //https://dev-joamahi.eu.auth0.com/v2/logout

//     handleAuthentication();
// 	setTimeout(function(){ getProfile(); }, 1000);
    
//     function getProfile() {
//         WebAuth.client.userInfo(accessToken, function(err, profile) {
//             console.log(profile);
//         })
//     }
    
    
//     // function socialLoginPopup(err, authResult) {
//     //     if (authResult && authResult.accessToken && authResult.idToken) {
//     //         //sendSocialLoginUser(authResult);
//     //         console.log(authResult);
//     //     }
//     // }
    
//     function socialLogout() {
//         localStorage.removeItem('socialLogin');
//         webAuth.logout({
//             returnTo: window.location.href,
//             client_id: authclientID,
//         });
//     }
    
 })
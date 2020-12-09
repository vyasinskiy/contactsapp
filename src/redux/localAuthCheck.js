const authData = {
    email: 'example@example.com',
    password: 'qwerty'
}

export function checkData(values) {
    return new Promise(resolve => {
        setTimeout(() => {
            let authResult = {};
            for (let elem in values) {
                if (values[elem] === authData[elem]) {
                    authResult.resultCode = 0;
                }
                else {
                    authResult.message = 'wrong auth data';
                    authResult.resultCode = 1;
                    break;
                }
            }
            resolve(authResult);
        }, 2000);
    })
}
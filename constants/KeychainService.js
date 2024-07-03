import * as Keychain from 'react-native-keychain';

export const getSupported = async () => {
    return new Promise(async (resolve) => {
        // Store the credentials
        let biotype
        await Keychain.getSupportedBiometryType()
            .then(biometryType => {
                if (biometryType === "FaceID") {
                    biotype = "FID";
                }
                else if (biometryType === "TouchID") {
                    biotype = "TID";
                }
                else {
                    biotype = ""
                }
                resolve(biotype);
            })
            .catch(err => {
                resolve("")
            });
    });
}

export const setCredentials = async (username) => {
    return new Promise(async (resolve, reject) => {
        // Store the credentials
        await Keychain.setGenericPassword(
            username,
            "null",
            {
              accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET,
              securityLevel: null,
              storage: null,
            })
            .then(resp => {
                resolve(true)
            })
            .catch(err => {
                reject(err);
            });
            
    });
}

export const getCredentials = async () => {
    const options = {
        authenticationPrompt: {
            title: 'Authentication needed',
            subtitle: 'Subtitle',
            description: 'Some descriptive text',
            cancel: 'Cancel',
        },
    };
    return new Promise(async (resolve, reject) => {
        try {
            let credentials = await Keychain.getGenericPassword(options)
            if (credentials && credentials.username) {
                resolve(credentials);
            } else {
                resolve(null)
            }
        }
        catch (err) {
            reject(err);
        };
    });
}

export const resetCredentials = async () => {
    return new Promise(async (resolve, reject) => {
        await Keychain.resetGenericPassword()
            .then((response) => {
                resolve(response);
            })
            .catch(err => {
                reject(err);
            });
    });
}
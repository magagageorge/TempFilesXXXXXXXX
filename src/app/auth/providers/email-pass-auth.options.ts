/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export interface EmailPassModuleConfig {
    alwaysFail?: boolean;
    rememberMe?: boolean;
    endpoint?: string;
    method?: string;
    redirect?: {
        success?: string | null;
        failure?: string | null;
    };
    defaultErrors?: string[];
    defaultMessages?: string[];
}
export interface EmailPassResetModuleConfig extends EmailPassModuleConfig {
    resetPasswordTokenKey?: string;
}

export interface EmailPassAuthProviderConfig {
    baseEndpoint?: string;
    login?: boolean | EmailPassModuleConfig;
    register?: boolean | EmailPassModuleConfig;
    requestPass?: boolean | EmailPassModuleConfig;
    verifyCode?: boolean | EmailPassModuleConfig;
    resetPass?: boolean | EmailPassResetModuleConfig;
    logout?: boolean | EmailPassResetModuleConfig;
    token?: {
        key?: string;
        getter?: Function;
    };
    errors?: {
        key?: string;
        getter?: Function;
    };
    messages?: {
        key?: string;
        getter?: Function;
    };
    validation?: {
        password?: {
            required?: boolean;
            minLength?: number | null;
            maxLength?: number | null;
            regexp?: string | null;
        };
        email?: {
            required?: boolean;
            regexp?: string | null;
        };
        fullName?: {
            required?: boolean;
            minLength?: number | null;
            maxLength?: number | null;
            regexp?: string | null;
        };
    };
}

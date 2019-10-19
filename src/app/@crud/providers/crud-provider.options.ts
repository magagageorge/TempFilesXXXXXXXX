/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export interface CrudConfig {
    alwaysFail?: boolean;
    endpoint?: string;
    method?: string;
    redirect?: {
        success?: string | null;
        failure?: string | null;
    };
    defaultErrors?: string[];
    defaultMessages?: string[];
}

export interface CrudProviderConfig {
    baseEndpoint?: string;
	route_url?: string;
    create?: boolean | CrudConfig;
    udpate?: boolean | CrudConfig;
    getall?: boolean | CrudConfig;
    getone?: boolean | CrudConfig;
    delete?: boolean | CrudConfig;
    errors?: {
        key?: string;
        getter?: Function;
    };
    messages?: {
        key?: string;
        getter?: Function;
    };
    validation?: {
    };
}

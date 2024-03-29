import { useState, useMemo, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { useRouter } from 'next/router'
import NProgress from 'nprogress';

import { Obj } from 'types/basic.type';

interface Options {
    url: string;
    config?: AxiosRequestConfig;
    initialData?: Obj;
    manual?: boolean;
    parallel?: boolean;
    defaultResponse?: Obj;
    respectRouter?: boolean;
}

export const useAPI = ({
    url, config,
    initialData = {}, manual = false, parallel = false,
    defaultResponse = null, respectRouter = false
}: Options) => {
    const router = useRouter();
    const [{ loading, error, errorResponse, response, }, setState] = useState({
        loading: !manual,
        error: false,
        errorResponse: null,
        response: null,
    });

    const source = useMemo(() => axios.CancelToken.source(), []);
    const cancel = useMemo(() => {
        source.cancel();
        NProgress.done();
    }, []);

    const execute = async (instantData: Obj = {}) => {
        NProgress.start();
        if (!parallel) source.cancel('Execute recall');
        setState({ loading: true, error: false, errorResponse: null, response: null, });

        try {
            const response = await axios.post(url, { ...initialData, ...instantData }, config);
            setState({ loading: false, error: false, errorResponse: null, response, });
        } catch (e) {
            if (axios.isCancel(e)) console.log('Request has been cancel.', url);
            else setState({ loading: false, error: true, errorResponse: e, response: null, });
        }

        NProgress.done();
    }

    useEffect(() => {
        if (!manual && !respectRouter) execute();
        if (!manual) {
            if (respectRouter) {
                if (router.asPath !== router.route) execute();
            } else execute();
        }
    }, []);

    useEffect(() => {
        if (respectRouter && !manual) {
            if (router.asPath !== router.route) execute();
        }
    }, [router, respectRouter]);

    return {
        loading,
        data: response?.data || defaultResponse,
        response, error, errorResponse,
        execute, cancel
    };
};

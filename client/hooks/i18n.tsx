import useQuery from '@/hooks/useQuery';

import { useRouterState } from '@tanstack/react-router';
import React, { createContext, useContext } from 'react';

import type { UseQueryResult } from '@tanstack/react-query';

type I18nContextType = UseQueryResult<{ [key: string]: any }> | undefined;

const I18nContext = createContext<I18nContextType>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const location = useRouterState({
		select: state => state.location,
	});

	const queryResult = useQuery({
		keys: [`i18n-${location.pathname}`],
		endpoint: `/i18n${location.pathname}`,
	});

	return <I18nContext.Provider value={queryResult}>{children}</I18nContext.Provider>;
};

// return without undefined I18nContextType
export const useI18n = (key?: string | ((ctx: NonNullable<I18nContextType>) => any), defaultVal: any = {}) => {
	const context = useContext(I18nContext);
	if (!context) throw new Error('useI18n must be used within an I18nProvider');

	if (typeof key === 'function') return context.data[key(context)];
	if (!key) return context;

	if (context.data && key in context.data) return context.data[key];
	return defaultVal;
};

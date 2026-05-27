'use client';




import React, { createContext, useContext, useState } from 'react';
import { H2, P } from '@/components/elements';

// --- Context per materia selezionata ---
const HyperMacroContext = createContext({
	selected: 'matematica',
	setSelected: (_: string) => {},
});

export function useHyperMacro() {
	return useContext(HyperMacroContext);
}

const SUBJECTS = [
			 { key: 'matematica', label: 'Matematica' },
			 { key: 'fisica', label: 'Fisica' },
			 { key: 'informatica', label: 'Informatica' },
];

export default function HomeIsland1({ children }: { children?: React.ReactNode }) {
			 

			 return null;
}



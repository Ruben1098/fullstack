/**
 * MathLive React - Main Entry Point
 *
 * Re-exports all components, hooks, and types from the main library file
 */

export {
	// Components
	Math,
	MathBlock,
	MathContainer,

	// Hooks
	useMath,
	useKaTeX,

	// Types
	type MathOptions,
	type MathProps,
	type MathBlockProps,
	type MathContainerProps,
	type UseMathOptions,

	// Error handling
} from './lib/math-react';

// Default export
export { default } from './lib/math-react';

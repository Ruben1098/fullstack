// === Spacing knobs for trig/log functions ===
const FUNC_NO_SCRIPT_GAP = '0.10em';   // ← MANOPOLA A
const FUNC_SUB_GAP       = '0.18em';   // ← MANOPOLA B
const FUNC_SUP_GAP       = '0.22em';   // ← MANOPOLA C

/**
 * MathLive React - A lightweight, zero-dependency math renderer
 *
 * This is a completely self-contained implementation for rendering LaTeX math in React.
 * No external dependencies - pure TypeScript with MathML rendering.
 *
 * Uses native MathML for semantic, accessible mathematical rendering.
 * Includes custom math fonts for optimal typography.
 *
 * @version 3.0.0
 * @license MIT
 */

import React, { useEffect, useRef, useCallback, useMemo } from 'react';

const GREEK_LETTERS: Record<string, string> = {
	alpha: 'α',
	beta: 'β',
	gamma: 'γ',
	Gamma: 'Γ',
	delta: 'δ',
	Delta: 'Δ',
	epsilon: 'ε',
	varepsilon: 'ε',
	zeta: 'ζ',
	eta: 'η',
	theta: 'θ',
	Theta: 'Θ',
	iota: 'ι',
	kappa: 'κ',
	lambda: 'λ',
	Lambda: 'Λ',
	mu: 'μ',
	nu: 'ν',
	xi: 'ξ',
	Xi: 'Ξ',
	pi: 'π',
	Pi: 'Π',
	rho: 'ρ',
	sigma: 'σ',
	Sigma: 'Σ',
	tau: 'τ',
	upsilon: 'υ',
	Upsilon: 'Υ',
	phi: 'φ',
	Phi: 'Φ',
	varphi: 'φ',
	chi: 'χ',
	psi: 'ψ',
	Psi: 'Ψ',
	omega: 'ω',
	Omega: 'Ω',
};

const MATH_SYMBOLS: Record<string, string> = {
	alpha: 'α',
beta: 'β',
gamma: 'γ',
delta: 'δ',
epsilon: 'ϵ',
varepsilon: 'ε',
eta: 'η',
theta: 'θ',
vartheta: 'ϑ',
iota: 'ι',
kappa: 'κ',
lambda: 'λ',
mu: 'μ',
nu: 'ν',
xi: 'ξ',
pi: 'π',
varpi: 'ϖ',
rho: 'ρ',
varrho: 'ϱ',
sigma: 'σ',
varsigma: 'ς',
tau: 'τ',
upsilon: 'υ',
phi: 'ϕ',
varphi: 'φ',
chi: 'χ',
psi: 'ψ',
omega: 'ω',
Gamma: 'Γ',
Delta: 'Δ',
Theta: 'Θ',
Lambda: 'Λ',
Xi: 'Ξ',
Pi: 'Π',
Sigma: 'Σ',
Upsilon: 'Υ',
Phi: 'Φ',
Psi: 'Ψ',
Omega: 'Ω',
aleph: 'ℵ',
beth: 'ℶ',
gimel: 'ℷ',
daleth: 'ℸ',
plus: '+',
minus: '−',
pm: '±',
mp: '∓',
times: '×',
div: '÷',
cdot: '⋅',
ast: '∗',
star: '⋆',
circ: '∘',
bullet: '∙',
centerdot: '⋅',
boxminus: '⊟',
boxplus: '⊞',
boxtimes: '⊠',
boxdot: '⊡',
ominus: '⊖',
oplus: '⊕',
otimes: '⊗',
odot: '⊙',
circleddash: '⊝',
circledast: '⊛',
circledcirc: '⊚',
oslash: '⊘',
dagger: '†',
ddagger: '‡',
amalg: '⨿',
uplus: '⊎',
sqcap: '⊓',
sqcup: '⊔',
leq: '≤',
geq: '≥',
equiv: '≡',
models: '⊨',
prec: '≺',
succ: '≻',
preceq: '⪯',
succeq: '⪰',
sim: '∼',
simeq: '≃',
asymp: '≍',
approx: '≈',
cong: '≅',
neq: '≠',
propto: '∝',
in: '∈',
notin: '∉',
ni: '∋',
subset: '⊂',
supset: '⊃',
subseteq: '⊆',
supseteq: '⊇',
cup: '∪',
cap: '∩',
setminus: '∖',
mid: '∣',
parallel: '∥',
perp: '⊥',
forall: '∀',
exists: '∃',
nexists: '∄',
neg: '¬',
lnot: '¬',
lor: '∨',
vee: '∨',
land: '∧',
wedge: '∧',
top: '⊤',
bot: '⊥',
vdash: '⊢',
dashv: '⊣',
leftarrow: '←',
rightarrow: '→',
to: '→',
leftrightarrow: '↔',
Leftarrow: '⇐',
Rightarrow: '⇒',
Leftrightarrow: '⇔',
mapsto: '↦',
hookleftarrow: '↩',
hookrightarrow: '↪',
leftharpoonup: '↼',
rightharpoonup: '⇀',
leftharpoondown: '↽',
rightharpoondown: '⇁',
rightleftharpoons: '⇌',
uparrow: '↑',
downarrow: '↓',
updownarrow: '↕',
Uparrow: '⇑',
Downarrow: '⇓',
Updownarrow: '⇕',
nearrow: '↗',
searrow: '↘',
swarrow: '↙',
nwarrow: '↖',
infty: '∞',
nabla: '∇',
partial: '∂',
emptyset: '∅',
varnothing: '∅',
Re: 'ℜ',
Im: 'ℑ',
wp: '℘',
ell: 'ℓ',
hbar: 'ℏ',
hslash: 'ℏ',
angle: '∠',
measuredangle: '∡',
sphericalangle: '∢',
triangle: '△',
surd: '√',
square: '□',
blacksquare: '■',
lozenge: '◊',
blacklozenge: '⧫',
diamondsuit: '♢',
heartsuit: '♡',
clubsuit: '♣',
spadesuit: '♠',
checkmark: '✓',
pounds: '£',
euro: '€',
yen: '¥',
sum: '∑',
prod: '∏',
coprod: '∐',
int: '∫',
iint: '∬',
iiint: '∭',
oint: '∮',
oiint: '∯',
oiiint: '∰',
bigcup: '⋃',
bigcap: '⋂',
bigvee: '⋁',
bigwedge: '⋀',
biguplus: '⨄',
bigotimes: '⨂',
bigoplus: '⨁',
bigsqcup: '⨆',
lbrace: '{',
rbrace: '}',
degree: '°',
ang: '°',
arccos: 'arccos',
arcsin: 'arcsin',
arctan: 'arctan',
cos: 'cos',
cosh: 'cosh',
cot: 'cot',
coth: 'coth',
csc: 'csc',
sec: 'sec',
sin: 'sin',
sinh: 'sinh',
tan: 'tan',
tanh: 'tanh',
arctg: 'arctg',
arcctg: 'arcctg',
ch: 'ch',
ctg: 'ctg',
cth: 'cth',
cotg: 'cotg',
cosec: 'cosec',
sh: 'sh',
tg: 'tg',
th: 'th',
exp: 'exp',
ln: 'ln',
log: 'log',
lg: 'lg',
lb: 'lb',
ker: 'ker',
det: 'det',
arg: 'arg',
dim: 'dim',
gcd: 'gcd',
argmin: 'argmin',
argmax: 'argmax',
plim: 'plim',
max: 'max',
min: 'min',
sup: 'sup',
inf: 'inf',
lim: 'lim',
liminf: 'liminf',
limsup: 'limsup',
injlim: 'injlim',
varlimsup: 'lim',
varliminf: 'lim',
varinjlim: 'lim',
Pr: 'Pr',
hom: 'hom',
varprojlim: 'lim',
projlim: 'projlim',
bmod: 'mod',
pmod: '(mod)',
quad: ' ',
langle: '⟨',
rangle: '⟩',
lfloor: '⌊',
rfloor: '⌋',
lceil: '⌈',
rceil: '⌉',
vert: '|',
Vert: '∥',
isin: '∈',
infin: '∞',
alef: 'ℵ',
alefsym: 'ℵ',
bull: '∙',
empty: '∅',
exist: '∃',
harr: '↔',
hArr: '⇔',
Harr: '⇔',
image: 'ℑ',
lrarr: '↔',
lrArr: '⇔',
dotplus: '∔',
doublebarwedge: '⩞',
divideontimes: '⋇',
ltimes: '⋉',
rtimes: '⋊',
leftthreetimes: '⋋',
rightthreetimes: '⋌',
intercal: '⊺',
Cap: '⋒',
Cup: '⋓',
doublecap: '⋒',
doublecup: '⋓',
wr: '≀',
barwedge: '⊼',
veebar: '⊻',
nor: '⊻',
curlywedge: '⋏',
curlyvee: '⋎',
gets: '←',
implies: '⟹',
impliedby: '⟸',
biconditional: '⟷',
therefore: '∴',
because: '∵',
roundimplies: '⥰',
twoheadrightarrow: '↠',
twoheadleftarrow: '↞',
rightarrowtail: '↣',
leftarrowtail: '↢',
dashrightarrow: '⇢',
dashleftarrow: '⇠',
Lleftarrow: '⇚',
Rrightarrow: '⇛',
leftrightarrows: '⇆',
rightleftarrows: '⇄',
curvearrowright: '↷',
curvearrowleft: '↶',
looparrowright: '↬',
looparrowleft: '↫',
circlearrowright: '↻',
circlearrowleft: '↺',
rightrightarrows: '⇉',
leftleftarrows: '⇇',
upuparrows: '⇈',
downdownarrows: '⇊',
Rsh: '↱',
Lsh: '↰',
upharpoonright: '↾',
upharpoonleft: '↿',
downharpoonright: '⇂',
downharpoonleft: '⇃',
restriction: '↾',
rightsquigarrow: '⇝',
leftrightsquigarrow: '↭',
leadsto: '⇝',
nrightarrow: '↛',
nleftarrow: '↚',
nleftrightarrow: '↮',
nRightarrow: '⇏',
nLeftarrow: '⇍',
nLeftrightarrow: '⇎',
mho: '℧',
Bbbk: 'k',
Finv: 'Ⅎ',
Game: '⅁',
eth: 'ð',
differencedelta: '∆',
Colon: '∷',
colon: ':',
cdotp: '⋅',
ldotp: '.',
vdots: '⋮',
cdots: '⋯',
ddots: '⋱',
ldots: '…',
mathellipsis: '…',
circledS: 'Ⓢ',
circledR: '®',
triangleleft: '◃',
triangleright: '▹',
triangledown: '▽',
blacktriangleleft: '◀',
blacktriangleright: '▶',
blacktriangle: '▲',
blacktriangledown: '▼',
vartriangle: '△',
vartriangleleft: '⊲',
vartriangleright: '⊳',
triangleq: '≜',
trianglelefteq: '⊴',
trianglerighteq: '⊵',
ntriangleleft: '⋪',
ntriangleright: '⋫',
ntrianglelefteq: '⋬',
ntrianglerighteq: '⋭',
bigtriangleup: '△',
bigtriangledown: '▽',
maltese: '✠',
mapsfrom: '↤',
Mapsfrom: '⤆',
MapsTo: '⤇',
Yup: '⅄',
lightning: '↯',
leftarrowtriangle: '⇽',
rightarrowtriangle: '⇾',
leftrightarrowtriangle: '⇿',
boxbar: '◫',
Lbag: '⟅',
Rbag: '⟆',
llbracket: '⟦',
rrbracket: '⟧',
longmapsfrom: '⟻',
Longmapsfrom: '⟽',
Longmapsto: '⟾',
boxslash: '⧄',
boxbslash: '⧅',
boxast: '⧆',
boxcircle: '⧇',
boxbox: '⧈',
fatsemi: '⨟',
leftslice: '⪦',
rightslice: '⪧',
interleave: '⫴',
biginterleave: '⫼',
sslash: '⫽',
talloblong: '⫾',
};

type TokenType = 'text' | 'command' | 'group' | 'superscript' | 'subscript' | 'number' | 'operator';



interface Token {
	type: TokenType;
	value: string;
	args?: Token[][];
}

class LaTeXParser {
	private input: string;
	private pos: number;

	constructor(input: string) {
		this.input = input;
		this.pos = 0;
	}

	private peek(): string {
		return this.input[this.pos] || '';
	}

	private advance(): string {
		return this.input[this.pos++] || '';
	}

	private skipWhitespace(): void {
		while (this.pos < this.input.length && /\s/.test(this.peek())) {
			this.advance();
		}
	}

	private parseGroup(): Token[] {
		const tokens: Token[] = [];
		this.advance(); 

		while (this.pos < this.input.length && this.peek() !== '}') {
			tokens.push(...this.parseTokens());
		}

		this.advance(); 
		return tokens;
	}

	private parseBracketGroup(): Token[] {
		const tokens: Token[] = [];
		this.advance();

		while (this.pos < this.input.length && this.peek() !== ']') {
			tokens.push(...this.parseTokens());
		}

		this.advance();
		return tokens;
	}

	private parseScriptArgument(): Token[] {
		if (this.peek() === '{') {
			return this.parseGroup();
		}

		if (this.peek() === '\\') {
			return [this.parseCommand()];
		}

		return [{ type: 'text', value: this.advance() }];
	}

	private parseCommand(): Token {
		this.advance(); 
		let command = '';

		while (this.pos < this.input.length && /[a-zA-Z]/.test(this.peek())) {
			command += this.advance();
		}

		const token: Token = {
			type: 'command',
			value: command,
			args: [],
		};

		if (command === 'root') {
			this.skipWhitespace();
			if (this.peek() === '[') {
				token.args!.push(this.parseBracketGroup());
			} else if (this.peek() === '{') {
				token.args!.push(this.parseGroup());
			}

			this.skipWhitespace();
			if (this.peek() === '{') {
				token.args!.push(this.parseGroup());
			}

			return token;
		}

		this.skipWhitespace();

        if (command === 'left' || command === 'right') {
            this.skipWhitespace();
            if (this.peek() === '\\') {
                const delimToken = this.parseCommand();
                token.args!.push([delimToken]);
            } else {
                const char = this.advance();
                token.args!.push([{ type: 'text', value: char }]);
            }
            return token;
        }

        const argsCount = this.getCommandArgsCount(command);
        for (let i = 0; i < argsCount; i++) {
            this.skipWhitespace();
            if (this.peek() === '{') {
                token.args!.push(this.parseGroup());
            } else {
                const char = this.advance();
                token.args!.push([{ type: 'text', value: char }]);
            }
        }

        return token;
	}

	private getCommandArgsCount(command: string): number {
		const multiArgCommands: Record<string, number> = {
			frac: 2,
			binom: 2,
			sqrt: 1,
			root: 2,
			sum: 0,
			int: 0,
			prod: 0,
			lim: 0,
			sin: 0,
			cos: 0,
			tan: 0,
			log: 0,
			ln: 0,
			exp: 0,
			overline: 1,
			underline: 1,
			mathbb: 1,
			mathbf: 1,
			mathrm: 1,
			mathit: 1,
			text: 1,
		};

		return multiArgCommands[command] || 0;
	}

	parseTokens(): Token[] {
		const tokens: Token[] = [];

		while (this.pos < this.input.length) {
			const char = this.peek();

			if (char === '\\') {
				tokens.push(this.parseCommand());
			} else if (char === '{') {
				const group = this.parseGroup();
				tokens.push({ type: 'group', value: '', args: [group] });
			} else if (char === '}') {
				break;
			} else if (char === '^') {
				this.advance();
				const sup = this.parseScriptArgument();
				tokens.push({ type: 'superscript', value: '', args: [sup] });
			} else if (char === '_') {
				this.advance();
				const sub = this.parseScriptArgument();
				tokens.push({ type: 'subscript', value: '', args: [sub] });
			} else if (/[0-9]/.test(char)) {
				let num = '';
				while (this.pos < this.input.length && /[0-9.]/.test(this.peek())) {
					num += this.advance();
				}
				tokens.push({ type: 'number', value: num });
			} else if (/[+\-*/=()<>|,;!?]/.test(char)) {
				tokens.push({ type: 'operator', value: this.advance() });
			} else if (/\s/.test(char)) {
				this.advance();
			} else {
				tokens.push({ type: 'text', value: this.advance() });
			}
		}

		return tokens;
	}
}


class LaTeXRenderer {
    private renderToken(token: Token): Element[] {
    // RIMOSSO il blocco allParens — le parentesi vengono gestite
    // dal case 'operator' qui sotto, senza forzare attributi extra

    switch (token.type) {
        case 'text': {
            const mi = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mi');
            mi.textContent = token.value;
            return [mi];
        }
        case 'number': {
            const mn = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mn');
            mn.textContent = token.value;
            return [mn];
        }
        case 'operator': {
            const mo = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mo');
            mo.textContent = token.value === '-' ? '\u2212' : token.value;
            // Nessun attributo stretchy o lspace forzato qui
            return [mo];
        }
        case 'group':
            return this.renderTokens(token.args![0]);
        case 'superscript':
            return this.renderTokens(token.args![0]);
        case 'subscript':
            return this.renderTokens(token.args![0]);
        case 'command':
            return this.renderCommand(token);
        default:
            return [];
    }
}

	private renderCommand(token: Token): Element[] {
		const cmd = token.value;

		if (cmd === 'binom' || cmd === 'dbinom' || cmd === 'tbinom') {
			const mrow = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mrow');
			const moL = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mo');
			moL.textContent = '(';
            moL.setAttribute('style', 'margin-right:0.22em;');
			const mfrac = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mfrac');
			mfrac.setAttribute('mathsize', '2em');
			const numRow = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mrow');
			this.renderTokens(token.args![0]).forEach(el => numRow.appendChild(el));
			const denRow = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mrow');
			this.renderTokens(token.args![1]).forEach(el => denRow.appendChild(el));
			mfrac.appendChild(numRow);
			mfrac.appendChild(denRow);
			const moR = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mo');
			moR.textContent = ')';
            moR.setAttribute('style', 'margin-right:0.22em;');
			mrow.appendChild(moL);
			mrow.appendChild(mfrac);
			mrow.appendChild(moR);
			return [mrow];
		}

		if (GREEK_LETTERS[cmd]) {
			const mi = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mi');
			mi.textContent = GREEK_LETTERS[cmd];
			return [mi];
		}

        if (MATH_SYMBOLS[cmd]) {
            const mo = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mo');
            mo.textContent = MATH_SYMBOLS[cmd];
            
            if ([
                'sin', 'cos', 'tan', 'log', 'ln', 'exp', 'arcsin', 'arccos', 'arctan', 'cot', 'csc', 'sec', 'sinh', 'cosh', 'tanh', 'det', 'dim', 'ker', 'arg',
                'max', 'min', 'sup', 'inf', 'lim', 'liminf', 'limsup', 'injlim', 'varlimsup', 'varliminf', 'varinjlim', 'Pr', 'hom', 'varprojlim', 'projlim', 'bmod', 'pmod'
            ].includes(cmd)) {
                
                mo.setAttribute('style', 'margin-left: -0.15em; ');
            } else {
                mo.setAttribute('style', 'margin-right: 0.1em;');
            }
            return [mo];
        }

		switch (cmd) {
			case 'displaystyle':
				return [];

			case 'frac':
				return [this.renderFraction(token.args![0], token.args![1])];

			case 'sqrt':
				return [this.renderSqrt(token.args![0])];

			case 'root':
				if (token.args && token.args.length >= 2) {
					return [this.renderRoot(token.args[1], token.args[0])];
				}
				if (token.args && token.args.length === 1) {
					return [this.renderSqrt(token.args[0])];
				}
				return [];

			case 'sum':
				const moSum = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mo');
				moSum.textContent = '∑';
				return [moSum];

			case 'int':
				const moInt = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mo');
				moInt.textContent = '∫';
				return [moInt];

			case 'prod':
				const moProd = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mo');
				moProd.textContent = '∏';
				return [moProd];

			case 'lim':
    const moLim = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mo');
    moLim.textContent = 'lim';
    moLim.setAttribute('movablelimits', 'false');
    return [moLim];

            // All trig/log/lim functions are handled by renderTokens for spacing

			case 'overline':
				return [this.renderOverline(token.args![0])];

			case 'underline':
				return [this.renderUnderline(token.args![0])];

			case 'mathbb':
				return this.renderBlackboardBold(token.args![0]);

			case 'mathbf':
				return this.renderStyled(token.args![0], 'bold');

			case 'mathrm':
				return this.renderStyled(token.args![0], 'normal');

			case 'mathit':
				return this.renderStyled(token.args![0], 'italic');

			case 'text':
				const mtext = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mtext');
				const textContent = token.args![0].map(t => t.value).join('');
				mtext.textContent = textContent;
				return [mtext];

            case 'left': {
                const delim = token.args && token.args[0] && token.args[0][0]?.value;
                const mo = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mo');
                // Se il delimitatore è . non mostrare nulla (comportamento LaTeX)
                if (delim === '.') {
                    mo.textContent = '';
                } else {
                    // Parentesi e simboli verticali: sempre font MathML, visibili, stretchy solo qui
                    mo.textContent = delim || '';
                    mo.setAttribute('stretchy', 'true');
                    mo.setAttribute('style', 'margin-right: 0.22em;');
                }
                return [mo];
            }
            case 'right': {
                const delim = token.args && token.args[0] && token.args[0][0]?.value;
                const mo = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mo');
                if (delim === '.') {
                    mo.textContent = '';
                } else {
                    mo.textContent = delim || '';
                    mo.setAttribute('stretchy', 'true');
                    mo.setAttribute('style', 'margin-right: 0.22em;');
                }
                return [mo];
            }

			default:

				const mi = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mi');
				mi.textContent = '\\' + cmd;
				return [mi];
		}
	}

    private renderFraction(numerator: Token[], denominator: Token[]): Element {
        const mfrac = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mfrac');
        // Aggiungi margin solo alle frazioni normali (non a esponente)
        mfrac.setAttribute('style', 'margin-right: 0.22em;');

        const numRow = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mrow');
        this.renderTokens(numerator).forEach(el => numRow.appendChild(el));

        const denRow = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mrow');
        this.renderTokens(denominator).forEach(el => denRow.appendChild(el));

        mfrac.appendChild(numRow);
        mfrac.appendChild(denRow);

        return mfrac;
    }

	private renderSqrt(content: Token[]): Element {
    const mrow_outer = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mrow');
    const mtext = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mtext');

    const wrapper = document.createElement('span');
    wrapper.setAttribute('style', `
        display: inline-flex;
        align-items: stretch;
        vertical-align: middle;
        line-height: 1;
    `);

    const contentSpan = document.createElement('span');
    contentSpan.setAttribute('style', `
        display: inline-block;
        border-top: 0.07em solid currentColor;
        padding: 0.1em 0.15em 0.05em 0.05em;
    `);
    const math = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'math');
    const mrow = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mrow');
    this.renderTokens(content).forEach(el => mrow.appendChild(el));
    math.appendChild(mrow);
    contentSpan.appendChild(math);

    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', '0 0 18 100');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('style', 'display: block; overflow: visible; width: 0.9em;');

    const foot = document.createElementNS(svgNS, 'line');
    foot.setAttribute('x1', '1');   foot.setAttribute('y1', '60');
    foot.setAttribute('x2', '3');   foot.setAttribute('y2', '55');
    foot.setAttribute('stroke', 'currentColor');
    foot.setAttribute('stroke-width', '1');
    foot.setAttribute('stroke-linecap', 'square');
    foot.setAttribute('vector-effect', 'non-scaling-stroke');

    const legLeft = document.createElementNS(svgNS, 'line');
    legLeft.setAttribute('x1', '3');  legLeft.setAttribute('y1', '55');
    legLeft.setAttribute('x2', '7');  legLeft.setAttribute('y2', '100');
    legLeft.setAttribute('stroke', 'currentColor');
    legLeft.setAttribute('stroke-width', '1');
    legLeft.setAttribute('stroke-linecap', 'square');
    legLeft.setAttribute('vector-effect', 'non-scaling-stroke');

    const legRight = document.createElementNS(svgNS, 'line');
    legRight.setAttribute('x1', '7.3');  legRight.setAttribute('y1', '100');
    legRight.setAttribute('x2', '17'); legRight.setAttribute('y2', '3.7');
    legRight.setAttribute('stroke', 'currentColor');
    legRight.setAttribute('stroke-width', '1');
    legRight.setAttribute('stroke-linecap', 'square');
    legRight.setAttribute('vector-effect', 'non-scaling-stroke');

    svg.appendChild(foot);
    svg.appendChild(legLeft);
    svg.appendChild(legRight);

    const vContainer = document.createElement('span');
    vContainer.setAttribute('style', `
        display: inline-flex;
        align-items: stretch;
        margin-right: -1px;
    `);
    vContainer.appendChild(svg);

    wrapper.appendChild(vContainer);
    wrapper.appendChild(contentSpan);
    mtext.appendChild(wrapper);
    mrow_outer.appendChild(mtext);

    const waitForDOM = () => {
        const updateHeight = () => {
            const mathEl = contentSpan.querySelector('math');
            const rectContent = (mathEl || contentSpan).getBoundingClientRect();
            const rectWrapper = wrapper.getBoundingClientRect();
            if (rectContent.height > 0) {
                const totalHeight = rectContent.bottom - rectWrapper.top;
                svg.setAttribute('height', `${totalHeight}px`);
                return true;
            }
            return false;
        };

        if (updateHeight()) return;

        const mo = new MutationObserver(() => {
            if (updateHeight()) mo.disconnect();
        });
        mo.observe(document.body, { childList: true, subtree: true });

        let attempts = 0;
        const poll = setInterval(() => {
            attempts++;
            if (updateHeight() || attempts > 20) clearInterval(poll);
        }, 16);
    };

    requestAnimationFrame(waitForDOM);

    return mrow_outer;
}

	private renderRoot(content: Token[], index: Token[]): Element {
    const mrow_outer = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mrow');
    const mtext = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mtext');

    const wrapper = document.createElement('span');
    wrapper.setAttribute('style', `
        display: inline-flex;
        align-items: stretch;
        vertical-align: middle;
        line-height: 1;
        position: relative;
    `);

    const contentSpan = document.createElement('span');
    contentSpan.setAttribute('style', `
        display: inline-block;
        border-top: 0.07em solid currentColor;
        padding: 0.1em 0.15em 0.05em 0.05em;
    `);
    const math = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'math');
    const mrow = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mrow');
    this.renderTokens(content).forEach(el => mrow.appendChild(el));
    math.appendChild(mrow);
    contentSpan.appendChild(math);

    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', '0 0 18 100');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('style', 'display: block; overflow: visible; width: 0.9em;');

    const foot = document.createElementNS(svgNS, 'line');
    foot.setAttribute('x1', '1');   foot.setAttribute('y1', '60');
    foot.setAttribute('x2', '3');   foot.setAttribute('y2', '55');
    foot.setAttribute('stroke', 'currentColor');
    foot.setAttribute('stroke-width', '1');
    foot.setAttribute('stroke-linecap', 'square');
    foot.setAttribute('vector-effect', 'non-scaling-stroke');

    const legLeft = document.createElementNS(svgNS, 'line');
    legLeft.setAttribute('x1', '3');  legLeft.setAttribute('y1', '55');
    legLeft.setAttribute('x2', '7');  legLeft.setAttribute('y2', '100');
    legLeft.setAttribute('stroke', 'currentColor');
    legLeft.setAttribute('stroke-width', '1');
    legLeft.setAttribute('stroke-linecap', 'square');
    legLeft.setAttribute('vector-effect', 'non-scaling-stroke');

    const legRight = document.createElementNS(svgNS, 'line');
    legRight.setAttribute('x1', '7.3');  legRight.setAttribute('y1', '100');
    legRight.setAttribute('x2', '17');   legRight.setAttribute('y2', '3.7');
    legRight.setAttribute('stroke', 'currentColor');
    legRight.setAttribute('stroke-width', '1');
    legRight.setAttribute('stroke-linecap', 'square');
    legRight.setAttribute('vector-effect', 'non-scaling-stroke');

    svg.appendChild(foot);
    svg.appendChild(legLeft);
    svg.appendChild(legRight);

    const indexSpan = document.createElement('span');
    indexSpan.setAttribute('style', `
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        font-size: 0.6em;
        line-height: 1;
        transform: translate(40%, -10%);
    `);
    const indexMath = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'math');
    const indexMrow = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mrow');
    this.renderTokens(index).forEach(el => indexMrow.appendChild(el));
    indexMath.appendChild(indexMrow);
    indexSpan.appendChild(indexMath);

    const vContainer = document.createElement('span');
    vContainer.setAttribute('style', `
        display: inline-flex;
        align-items: stretch;
        margin-right: -1px;
        position: relative;
    `);
    vContainer.appendChild(svg);
    vContainer.appendChild(indexSpan);

    wrapper.appendChild(vContainer);
    wrapper.appendChild(contentSpan);
    mtext.appendChild(wrapper);
    mrow_outer.appendChild(mtext);

    const waitForDOM = () => {
        const updateHeight = () => {
            const mathEl = contentSpan.querySelector('math');
            const rectContent = (mathEl || contentSpan).getBoundingClientRect();
            const rectWrapper = wrapper.getBoundingClientRect();
            if (rectContent.height > 0) {
                const totalHeight = rectContent.bottom - rectWrapper.top;
                svg.setAttribute('height', `${totalHeight}px`);
                return true;
            }
            return false;
        };

        if (updateHeight()) return;

        const mo = new MutationObserver(() => {
            if (updateHeight()) mo.disconnect();
        });
        mo.observe(document.body, { childList: true, subtree: true });

        let attempts = 0;
        const poll = setInterval(() => {
            attempts++;
            if (updateHeight() || attempts > 20) clearInterval(poll);
        }, 16);
    };

    requestAnimationFrame(waitForDOM);

    return mrow_outer;
}

    private renderOverline(content: Token[]): Element {
        const mrow = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mrow');
        
        mrow.setAttribute('style', 'border-top: 0.07em solid currentColor; padding-top: 0.1em;');
        
        this.renderTokens(content).forEach(el => mrow.appendChild(el));

        return mrow;
    }

    private renderUnderline(content: Token[]): Element {
        const mrow = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mrow');
        
        mrow.setAttribute('style', 'border-bottom: 0.07em solid currentColor; padding-bottom: 0.05em;');
        
        this.renderTokens(content).forEach(el => mrow.appendChild(el));

        return mrow;
    }

	private renderBlackboardBold(tokens: Token[]): Element[] {
		const text = tokens.map(t => t.value).join('');
		const symbol = MATH_SYMBOLS[text];

		if (symbol) {
			const mo = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mo');
			mo.textContent = symbol;
			return [mo];
		}

		return this.renderStyled(tokens, 'double-struck');
	}

	private renderStyled(tokens: Token[], variant: string): Element[] {
		const mstyle = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mstyle');
		mstyle.setAttribute('mathvariant', variant);

		const mrow = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mrow');
		this.renderTokens(tokens).forEach(el => mrow.appendChild(el));

		mstyle.appendChild(mrow);
		return [mstyle];
	}

	private handleScripts(tokens: Token[]): Element[] {
        const result: Element[] = [];
        let i = 0;

        while (i < tokens.length) {
            const token = tokens[i];

            if (token.type === 'superscript' || token.type === 'subscript') {
                i++;
                continue;
            }

            const baseElements = this.renderToken(token);
            let baseEl: Element;
            
            if (baseElements.length === 1) {
                baseEl = baseElements[0];
            } else {
                baseEl = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mrow');
                baseElements.forEach(el => baseEl.appendChild(el));
            }

            let subToken: Token | null = null;
            let supToken: Token | null = null;
            let j = i + 1;

            while (j < tokens.length && (tokens[j].type === 'superscript' || tokens[j].type === 'subscript')) {
                if (tokens[j].type === 'subscript' && !subToken) {
                    subToken = tokens[j];
                } else if (tokens[j].type === 'superscript' && !supToken) {
                    supToken = tokens[j];
                }
                j++;
            }

            if (!subToken && !supToken) {
                result.push(baseEl);
                i = j;
                continue;
            }

            const opText = baseEl.textContent || '';
            const isIntegral = ['∫', '∬', '∭', '∮'].includes(opText);
            const isLimitOp = ['lim', 'max', 'min', 'sup', 'inf', 'liminf', 'limsup', '∑', '∏', '∐', '⋃', '⋂', '⋁', '⋀'].includes(opText);

            const useUnderOver = isLimitOp;

            let containerTag = '';
            if (subToken && supToken) {
                containerTag = useUnderOver ? 'munderover' : 'msubsup';
            } else if (subToken) {
                containerTag = useUnderOver ? 'munder' : 'msub';
            } else {
                containerTag = useUnderOver ? 'mover' : 'msup';
            }

            const container = document.createElementNS('http://www.w3.org/1998/Math/MathML', containerTag);
            
            if (useUnderOver) {
                baseEl.setAttribute('movablelimits', 'false');
            }

            container.appendChild(baseEl);

            const createScriptRow = (scriptToken: Token, type: 'sub' | 'sup') => {
                const row = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mrow');
                this.renderTokens(scriptToken.args![0]).forEach(el => row.appendChild(el));

                if (isIntegral) {
                    const mpadded = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mpadded');
                    if (type === 'sup') {
                        mpadded.setAttribute('voffset', '0.2em'); 
                        mpadded.setAttribute('lspace', '-0.1em'); 
                    } else if (type === 'sub') {
                        mpadded.setAttribute('voffset', '-0.1em');
                        mpadded.setAttribute('lspace', '-0.3em'); 
                    }
                    mpadded.appendChild(row);
                    return mpadded;
                }

                return row;
            };

            if (containerTag === 'munderover' || containerTag === 'msubsup') {
                container.appendChild(createScriptRow(subToken!, 'sub'));
                container.appendChild(createScriptRow(supToken!, 'sup'));
            } else if (containerTag === 'munder' || containerTag === 'msub') {
                container.appendChild(createScriptRow(subToken!, 'sub'));
            } else if (containerTag === 'mover' || containerTag === 'msup') {
                container.appendChild(createScriptRow(supToken!, 'sup'));
            }

            result.push(container);
            
            i = j;
        }

        return result;
    }

    renderTokens(tokens: Token[]): Element[] {
        const result: Element[] = [];
        let i = 0;

        // Set of function names for trig/log/lim
        const FUNC_NAMES = new Set([
            'sin', 'cos', 'tan', 'log', 'ln', 'exp', 'arcsin', 'arccos', 'arctan',
            'cot', 'csc', 'sec', 'sinh', 'cosh', 'tanh', 'det', 'dim', 'ker', 'arg',
            'max', 'min', 'sup', 'inf', 'lim', 'liminf', 'limsup', 'injlim', 'varlimsup',
            'varliminf', 'varinjlim', 'Pr', 'hom', 'varprojlim', 'projlim', 'bmod', 'pmod'
        ]);

        while (i < tokens.length) {
            const token = tokens[i];

            // Skip orphan scripts
            if (token.type === 'superscript' || token.type === 'subscript') {
                i++;
                continue;
            }

            // \displaystyle
            if (token.type === 'command' && token.value === 'displaystyle') {
                const mstyle = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mstyle');
                mstyle.setAttribute('displaystyle', 'true');
                const rest = this.renderTokens(tokens.slice(i + 1));
                rest.forEach(el => mstyle.appendChild(el));
                result.push(mstyle);
                break;
            }

            let baseEl: Element;
            let tokensConsumed = 1;

            // Handle \left ... \right
            if (token.type === 'command' && token.value === 'left') {
                const openDelim = token.args?.[0]?.[0] ?? tokens[i + 1];
                let j = i + 1;
                let depth = 1;
                while (j < tokens.length) {
                    if (tokens[j].type === 'command' && tokens[j].value === 'left') depth++;
                    if (tokens[j].type === 'command' && tokens[j].value === 'right') {
                        depth--;
                        if (depth === 0) break;
                    }
                    j++;
                }
                if (depth === 0 && j < tokens.length) {
                    const closeDelim = tokens[j].args?.[0]?.[0] ?? tokens[j + 1];
                    const innerTokens = tokens.slice(i + 1, j);
                    const mrow = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mrow');
                    const getChar = (t: Token) => {
                        if (!t) return '';
                        if (t.type === 'command') {
                            if (t.value === 'lbrace') return '{';
                            if (t.value === 'rbrace') return '}';
                            if (t.value === 'vert') return '|';
                            if (t.value === 'Vert') return '∥';
                            if (t.value === 'langle') return '⟨';
                            if (t.value === 'rangle') return '⟩';
                            return MATH_SYMBOLS[t.value] || '';
                        }
                        return t.value;
                    };
                    const openChar = getChar(openDelim);
                    if (openChar && openChar !== '.') {
                        const moOpen = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mo');
                        moOpen.textContent = openChar;
                        moOpen.setAttribute('stretchy', 'true');
                        moOpen.setAttribute('lspace', '0');
                        moOpen.setAttribute('rspace', '0');
                        mrow.appendChild(moOpen);
                    }
                    this.renderTokens(innerTokens).forEach(el => mrow.appendChild(el));
                    const closeChar = getChar(closeDelim);
                    if (closeChar && closeChar !== '.') {
                        const moClose = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mo');
                        moClose.textContent = closeChar;
                        moClose.setAttribute('stretchy', 'true');
                        moClose.setAttribute('lspace', '0');
                        moClose.setAttribute('rspace', '0');
                        mrow.appendChild(moClose);
                    }
                    baseEl = mrow;
                    tokensConsumed = tokens[j].args?.[0]?.[0] ? j - i + 1 : (j + 1) - i + 1;
                } else {
                    i++;
                    continue;
                }
            } else if (token.type === 'command' && token.value === 'right') {
                i += 2;
                continue;
            } else {
                const elements = this.renderToken(token);
                if (elements.length === 1) {
                    baseEl = elements[0];
                } else if (elements.length > 1) {
                    baseEl = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mrow');
                    elements.forEach(el => baseEl.appendChild(el));
                } else {
                    i++;
                    continue;
                }
            }

            // Collect sub/superscripts
            let subToken: Token | null = null;
            let supToken: Token | null = null;
            let k = i + tokensConsumed;
            while (k < tokens.length && (tokens[k].type === 'superscript' || tokens[k].type === 'subscript')) {
                if (tokens[k].type === 'subscript' && !subToken) subToken = tokens[k];
                if (tokens[k].type === 'superscript' && !supToken) supToken = tokens[k];
                k++;
            }

            // Detect if base is a function
            const funcName = (baseEl.localName === 'mo') ? (baseEl.textContent || '') : '';
            const isFunc = FUNC_NAMES.has(funcName);

            // --- CASE 1: No sub/superscript ---
            if (!subToken && !supToken) {
                result.push(baseEl);
                // MANOPOLA A: function (no script) → parenthesis
                if (isFunc) {
                    const nextTok = tokens[k];
                    const nextIsOpenParen =
                        nextTok &&
                        nextTok.type === 'operator' &&
                        (nextTok.value === '(' || nextTok.value === '[');
                    if (nextIsOpenParen) {
                        const mspace = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mspace');
                        mspace.setAttribute('width', FUNC_NO_SCRIPT_GAP); // ← MANOPOLA A
                        console.log('[MATH-REACT] Inserito mspace MANOPOLA A dopo', funcName, 'con width', FUNC_NO_SCRIPT_GAP);
                        result.push(mspace);
                    }
                }
                i += tokensConsumed;
                continue;
            }

            // --- CASE 2: With sub/superscript ---
            const opText = baseEl.localName === 'mo' ? baseEl.textContent || '' : '';
            const isIntegral = ['∫', '∬', '∭', '∮'].includes(opText);
            const isLimitOp = [
                'lim', 'max', 'min', 'sup', 'inf', 'liminf', 'limsup',
                '∑', '∏', '∐', '⋃', '⋂', '⋁', '⋀',
            ].includes(opText);
            const containerTag =
                (subToken && supToken) ? (isLimitOp ? 'munderover' : 'msubsup') :
                subToken               ? (isLimitOp ? 'munder'     : 'msub')     :
                                         (isLimitOp ? 'mover'      : 'msup');
            const container = document.createElementNS('http://www.w3.org/1998/Math/MathML', containerTag);
            if (isLimitOp) baseEl.setAttribute('movablelimits', 'false');
            container.appendChild(baseEl);
            const createScript = (scriptToken: Token, type: 'sub' | 'sup') => {
                const row = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mrow');
                const mstyle = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mstyle');
                mstyle.setAttribute('mathsize', '0.75em');
                // Custom: fix minus position and add margin-left to fractions in superscript
                const scriptEls = this.renderTokens(scriptToken.args![0]);
                // Parametro facilmente modificabile per l'altezza del meno
                const SUP_MINUS_VA = '0.22em'; // Cambia qui per regolare l'altezza
                const SUP_FRAC_ML = '0.15em';  // Cambia qui per regolare il margin-left della frazione
                scriptEls.forEach(el => {
                    // Fix minus sign in superscript: raise it a bit
                    if (type === 'sup' && el.nodeName === 'mo' && el.textContent === '−') {
                        el.setAttribute('style', (el.getAttribute('style') || '') + ` vertical-align: ${SUP_MINUS_VA};`);
                    }
                    // Add margin-left to fractions in superscript
                    if (type === 'sup' && el.nodeName === 'mfrac') {
                        el.setAttribute('style', (el.getAttribute('style') || '') + ` margin-left: ${SUP_FRAC_ML};`);
                    }
                    mstyle.appendChild(el);
                });
                // Old code for fractions in script (kept for font-size)
                const fractions = mstyle.getElementsByTagNameNS('http://www.w3.org/1998/Math/MathML', 'mfrac');
                Array.from(fractions).forEach(frac => {
                    // If not already styled by above, set font-size
                    if (!frac.style.marginLeft) {
                        frac.setAttribute('style', (frac.getAttribute('style') || '') + ' font-size: 1.4em;');
                    }
                });
                row.appendChild(mstyle);
                if (isIntegral) {
                    const mpadded = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mpadded');
                    mpadded.setAttribute('voffset', type === 'sup' ? '0.2em' : '-0.1em');
                    mpadded.setAttribute('lspace', type === 'sup' ? '-0.1em' : '-0.3em');
                    mpadded.appendChild(row);
                    return mpadded;
                }
                return row;
            };
            if (containerTag === 'munderover' || containerTag === 'msubsup') {
                if (subToken) container.appendChild(createScript(subToken, 'sub'));
                if (supToken) container.appendChild(createScript(supToken, 'sup'));
            } else if (containerTag === 'munder' || containerTag === 'msub') {
                if (subToken) container.appendChild(createScript(subToken, 'sub'));
            } else {
                if (supToken) container.appendChild(createScript(supToken, 'sup'));
            }
            result.push(container);
            // MANOPOLA B/C: function+script → parenthesis
            if (isFunc) {
                const nextTok = tokens[k];
                const nextIsOpenParen =
                    nextTok &&
                    nextTok.type === 'operator' &&
                    (nextTok.value === '(' || nextTok.value === '[');
                if (nextIsOpenParen) {
                    const mspace = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mspace');
                    if (supToken) {
                        mspace.setAttribute('width', FUNC_SUP_GAP); // ← MANOPOLA C
                        console.log('[MATH-REACT] Inserito mspace MANOPOLA C dopo', funcName, 'con width', FUNC_SUP_GAP);
                    } else {
                        mspace.setAttribute('width', FUNC_SUB_GAP); // ← MANOPOLA B
                        console.log('[MATH-REACT] Inserito mspace MANOPOLA B dopo', funcName, 'con width', FUNC_SUB_GAP);
                    }
                    result.push(mspace);
                }
            }
            i = k;
        }
        return result;
    }
}



function renderLaTeX(latex: string, displayMode: boolean = false): Element {
    try {
        const parser = new LaTeXParser(latex);
        const tokens = parser.parseTokens();
        const renderer = new LaTeXRenderer();
        const elements = renderer.renderTokens(tokens);

        const hasDisplayStyle = /\\displaystyle/.test(latex) || displayMode;

        const math = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'math');
        if (hasDisplayStyle) {
            math.setAttribute('display', 'block');
            const mstyle = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mstyle');
            mstyle.setAttribute('displaystyle', 'true');
            const mrow = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mrow');
            elements.forEach(el => mrow.appendChild(el));
            mstyle.appendChild(mrow);
            math.appendChild(mstyle);
        } else {
            const mrow = document.createElementNS('http://www.w3.org/1998/Math/MathML', 'mrow');
            elements.forEach(el => mrow.appendChild(el));
            math.appendChild(mrow);
        }
        return math;
    } catch (error) {
        console.error('LaTeX rendering error:', error);
        const errorSpan = document.createElement('span');
        errorSpan.className = 'math-error';
        errorSpan.title = error instanceof Error ? error.message : 'Rendering error';
        errorSpan.textContent = latex;
        return errorSpan;
    }
}

function injectMathStyles(): void {
	const externalCssId = 'mathlive-math-fonts-css';
	if (!document.getElementById(externalCssId)) {
		const link = document.createElement('link');
		link.id = externalCssId;
		link.rel = 'stylesheet';
		link.href = './styles/math-fonts.css';
		document.head.appendChild(link);
	}
}

export interface MathProps {
	children: string;
	style?: React.CSSProperties;
	className?: string;
}

export const Math: React.FC<MathProps> = ({ children, style, className }) => {
	useEffect(() => { injectMathStyles(); }, []);
	const ref = useRef<HTMLSpanElement>(null);
	useEffect(() => {
		if (ref.current) {
			ref.current.innerHTML = '';
			const mathEl = renderLaTeX(children, false);
			ref.current.appendChild(mathEl);
		}
	}, [children]);
	return <span ref={ref} style={style} className={className ? `math-container ${className}` : 'math-container'} />;
};

export interface MathBlockProps {
	children: string;
	style?: React.CSSProperties;
	className?: string;
}

export const MathBlock: React.FC<MathBlockProps> = ({ children, style, className }) => {
	useEffect(() => { injectMathStyles(); }, []);
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (ref.current) {
            console.log("LaTeX input:", children);
			ref.current.innerHTML = '';
			const mathEl = renderLaTeX(children, true);
			ref.current.appendChild(mathEl);
		}
	}, [children]);
	return <div ref={ref} style={style} className={className ? `math-block ${className}` : 'math-block'} />;
};

export interface MathContainerProps {
	children: React.ReactNode;
	style?: React.CSSProperties;
	className?: string;
}

export const MathContainer: React.FC<MathContainerProps> = ({ children, style, className }) => {
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => { injectMathStyles(); }, []);
	useEffect(() => {
		if (!ref.current) return;
		const el = ref.current;
		let html = '';
		const text = typeof children === 'string' ? children : (React.Children.map(children, c => (typeof c === 'string' ? c : ''))?.join('') || '');
		if (!text) { el.innerHTML = ''; return; }
		html = text.replace(/\$\$(.+?)\$\$/gs, (_m, expr) => {
			const node = renderLaTeX(expr, true);
			const div = document.createElement('div');
			div.appendChild(node);
			return div.outerHTML;
		});
		html = html.replace(/\$(.+?)\$/gs, (_m, expr) => {
			const node = renderLaTeX(expr, false);
			const span = document.createElement('span');
			span.appendChild(node);
			return span.outerHTML;
		});
		el.innerHTML = html;
	}, [children]);
	return <div ref={ref} style={style} className={className ? `math-auto ${className}` : 'math-auto'} />;
};

export interface UseMathOptions {
	displayMode?: boolean;
}

export function useMath(options?: UseMathOptions) {
	useEffect(() => { injectMathStyles(); }, []);
	return useCallback((latex: string) => {
		const el = renderLaTeX(latex, options?.displayMode);
		const container = document.createElement('span');
		container.appendChild(el);
		return container.innerHTML;
	}, [options?.displayMode]);
}

export function useKaTeX(initial: string = '') {
	useEffect(() => { injectMathStyles(); }, []);
	const ref = useRef<HTMLDivElement>(null);
	const [expr, setExpr] = React.useState(initial);
	useEffect(() => {
		if (ref.current) {
			ref.current.innerHTML = '';
			const mathEl = renderLaTeX(expr, false);
			ref.current.appendChild(mathEl);
		}
	}, [expr]);
	return { ref, setExpression: setExpr };
}

export default {
	Math,
	MathBlock,
	MathContainer,
	useMath,
	useKaTeX,
};

export class ParseError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'ParseError';
	}
}

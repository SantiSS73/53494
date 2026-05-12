grammar Calculator;

// --- Reglas Sintácticas ---
program: simpleStatement* EOF;

simpleStatement:
	switchStatement
	| assignmentStatement
	| outputStatement;
switchStatement:
	'switch' '(' IDENTIFIER ')' '{' caseSection* defaultSection? '}';
caseSection: 'case' constant ':' simpleStatement*;

defaultSection: 'default' ':' simpleStatement*;

assignmentStatement: IDENTIFIER '=' constant ';';

outputStatement: 'output' '(' TEXT_LITERAL ')' ';';

constant: NUMBER | TEXT_LITERAL;

// --- Reglas Léxicas ---
SWITCH: 'switch';
CASE: 'case';
DEFAULT: 'default';
OUTPUT: 'output';

IDENTIFIER: [a-zA-Z] [a-zA-Z0-9_]*;
NUMBER: [0-9]+;
TEXT_LITERAL: '"' (~["])* '"';

WS: [ \t\r\n]+ -> skip;

LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
COLON: ':';
ASSIGN: '=';
SEMI: ';';
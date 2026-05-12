import fs from 'fs';
import antlr4 from 'antlr4';
import CalculatorLexer from './generated/CalculatorLexer.js';
import CalculatorParser from './generated/CalculatorParser.js';
import CustomCalculatorVisitor from './CustomCalculatorVisitor.js';
import CustomCalculatorTranslator from './CustomCalculatorTranslator.js';

// Manejador de errores para reportar línea y causa
class CalculatorErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.hasErrors = false;
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.hasErrors = true;
        console.error(`Error de sintaxis en línea ${line}:${column} - Causa: ${msg}`);
    }
}

function run() {
    const input = fs.readFileSync('input.txt', 'utf8');
    const chars = new antlr4.InputStream(input);
    const lexer = new CalculatorLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new CalculatorParser(tokens);

    const errorListener = new CalculatorErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    // Analisis Léxico y Sintactico
    console.log("1. ANÁLISIS LÉXICO Y SINTÁCTICO - ");
    const tree = parser.program();

    if (errorListener.hasErrors) {
        console.error("\nEl análisis finalizó con errores.");
        process.exit(1);
    } else {
        console.log("El análisis finalizó correctamente. La entrada es válida.");
    }

    // 2. Tabla de Lexemas-Tokens
    console.log("\n2. TABLA DE LEXEMAS-TOKENS -");
    tokens.fill();
    tokens.tokens.forEach(t => {
        if (t.type !== -1) {
            const name = CalculatorLexer.symbolicNames[t.type] || `T__${t.type}`;
            console.log(`Lexema: [${t.text.padEnd(12)}] | Token: ${name}`);
        }
    });

    // 3. Árbol de Análisis Sintáctico
    console.log("\n 3. ÁRBOL DE ANÁLISIS SINTÁCTICO -");
    console.log(tree.toStringTree(parser.ruleNames));

    // 4a. Traducción a JavaScript
    console.log("\n4a. CÓDIGO FUENTE TRADUCIDO A JAVASCRIPT -");
    const translator = new CustomCalculatorTranslator();
    const jsCode = translator.visit(tree);
    console.log(jsCode);

    // 4b. Interpretación
    console.log("4b. EJECUCIÓN DEL CÓDIGO (Intérprete)-");
    const visitor = new CustomCalculatorVisitor();
    visitor.visit(tree);
}

run();

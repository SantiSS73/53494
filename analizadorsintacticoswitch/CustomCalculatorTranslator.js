import CalculatorVisitor from './generated/CalculatorVisitor.js';

export default class CustomCalculatorTranslator extends CalculatorVisitor {
    constructor() {
        super();
        this.jsCode = "";
    }

    visitProgram(ctx) {
        ctx.simpleStatement().forEach(stmt => this.visit(stmt));
        return this.jsCode;
    }

    visitAssignmentStatement(ctx) {
        const id = ctx.IDENTIFIER().getText();
        const value = ctx.constant().getText();
        this.jsCode += `let ${id} = ${value};\n`;
        return null;
    }

    visitOutputStatement(ctx) {
        const text = ctx.TEXT_LITERAL().getText();
        this.jsCode += `console.log(${text});\n`;
        return null;
    }

    visitSwitchStatement(ctx) {
        const id = ctx.IDENTIFIER().getText();
        this.jsCode += `switch(${id}) {\n`;
        
        ctx.caseSection().forEach(caseCtx => {
            const caseValue = caseCtx.constant().getText();
            this.jsCode += `    case ${caseValue}:\n`;
            
            // Collect the statements inside the case
            const prevCode = this.jsCode;
            this.jsCode = "";
            caseCtx.simpleStatement().forEach(stmt => this.visit(stmt));
            const caseStmts = this.jsCode;
            this.jsCode = prevCode + caseStmts.split('\n').map(l => l ? `        ${l}` : '').join('\n') + "\n        break;\n";
        });

        if (ctx.defaultSection()) {
            this.jsCode += `    default:\n`;
            const prevCode = this.jsCode;
            this.jsCode = "";
            ctx.defaultSection().simpleStatement().forEach(stmt => this.visit(stmt));
            const defaultStmts = this.jsCode;
            this.jsCode = prevCode + defaultStmts.split('\n').map(l => l ? `        ${l}` : '').join('\n') + "\n";
        }
        
        this.jsCode += `}\n`;
        return null;
    }
}

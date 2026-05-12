import CalculatorVisitor from './generated/CalculatorVisitor.js';

export default class CustomCalculatorVisitor extends CalculatorVisitor {
    constructor() {
        super();
        this.variables = new Map();
    }

    visitAssignmentStatement(ctx) {
        const id = ctx.IDENTIFIER().getText();
        const value = ctx.constant().getText().replace(/"/g, ''); 
        this.variables.set(id, value);
        return null;
    }

    visitOutputStatement(ctx) {
        const text = ctx.TEXT_LITERAL().getText().replace(/"/g, '');
        console.log(`[SALIDA]: ${text}`);
        return null;
    }

    visitSwitchStatement(ctx) {
        const id = ctx.IDENTIFIER().getText();
        const value = this.variables.get(id);
        let matched = false;

        for (const caseCtx of ctx.caseSection()) {
            const caseValue = caseCtx.constant().getText().replace(/"/g, '');
            if (value == caseValue) {
                caseCtx.simpleStatement().forEach(stmt => this.visit(stmt));
                matched = true;
                break;
            }
        }

        if (!matched && ctx.defaultSection()) {
            ctx.defaultSection().simpleStatement().forEach(stmt => this.visit(stmt));
        }
        return null;
    }
}
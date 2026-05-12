// Generated from c:\Users\santi\OneDrive\Documentos\SIntaxis\analizadorsintactico\Calculator.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculatorListener from './CalculatorListener.js';
import CalculatorVisitor from './CalculatorVisitor.js';

const serializedATN = [4,1,15,76,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,5,0,18,8,0,10,0,12,0,21,9,0,1,0,1,0,1,1,1,1,
1,1,3,1,28,8,1,1,2,1,2,1,2,1,2,1,2,1,2,5,2,36,8,2,10,2,12,2,39,9,2,1,2,3,
2,42,8,2,1,2,1,2,1,3,1,3,1,3,1,3,5,3,50,8,3,10,3,12,3,53,9,3,1,4,1,4,1,4,
5,4,58,8,4,10,4,12,4,61,9,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,
1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,1,1,0,6,7,74,0,19,1,0,0,0,2,27,1,
0,0,0,4,29,1,0,0,0,6,45,1,0,0,0,8,54,1,0,0,0,10,62,1,0,0,0,12,67,1,0,0,0,
14,73,1,0,0,0,16,18,3,2,1,0,17,16,1,0,0,0,18,21,1,0,0,0,19,17,1,0,0,0,19,
20,1,0,0,0,20,22,1,0,0,0,21,19,1,0,0,0,22,23,5,0,0,1,23,1,1,0,0,0,24,28,
3,4,2,0,25,28,3,10,5,0,26,28,3,12,6,0,27,24,1,0,0,0,27,25,1,0,0,0,27,26,
1,0,0,0,28,3,1,0,0,0,29,30,5,1,0,0,30,31,5,9,0,0,31,32,5,5,0,0,32,33,5,10,
0,0,33,37,5,11,0,0,34,36,3,6,3,0,35,34,1,0,0,0,36,39,1,0,0,0,37,35,1,0,0,
0,37,38,1,0,0,0,38,41,1,0,0,0,39,37,1,0,0,0,40,42,3,8,4,0,41,40,1,0,0,0,
41,42,1,0,0,0,42,43,1,0,0,0,43,44,5,12,0,0,44,5,1,0,0,0,45,46,5,2,0,0,46,
47,3,14,7,0,47,51,5,13,0,0,48,50,3,2,1,0,49,48,1,0,0,0,50,53,1,0,0,0,51,
49,1,0,0,0,51,52,1,0,0,0,52,7,1,0,0,0,53,51,1,0,0,0,54,55,5,3,0,0,55,59,
5,13,0,0,56,58,3,2,1,0,57,56,1,0,0,0,58,61,1,0,0,0,59,57,1,0,0,0,59,60,1,
0,0,0,60,9,1,0,0,0,61,59,1,0,0,0,62,63,5,5,0,0,63,64,5,14,0,0,64,65,3,14,
7,0,65,66,5,15,0,0,66,11,1,0,0,0,67,68,5,4,0,0,68,69,5,9,0,0,69,70,5,7,0,
0,70,71,5,10,0,0,71,72,5,15,0,0,72,13,1,0,0,0,73,74,7,0,0,0,74,15,1,0,0,
0,6,19,27,37,41,51,59];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalculatorParser extends antlr4.Parser {

    static grammarFileName = "Calculator.g4";
    static literalNames = [ null, "'switch'", "'case'", "'default'", "'output'", 
                            null, null, null, null, "'('", "')'", "'{'", 
                            "'}'", "':'", "'='", "';'" ];
    static symbolicNames = [ null, "SWITCH", "CASE", "DEFAULT", "OUTPUT", 
                             "IDENTIFIER", "NUMBER", "TEXT_LITERAL", "WS", 
                             "LPAREN", "RPAREN", "LBRACE", "RBRACE", "COLON", 
                             "ASSIGN", "SEMI" ];
    static ruleNames = [ "program", "simpleStatement", "switchStatement", 
                         "caseSection", "defaultSection", "assignmentStatement", 
                         "outputStatement", "constant" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculatorParser.ruleNames;
        this.literalNames = CalculatorParser.literalNames;
        this.symbolicNames = CalculatorParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculatorParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 50) !== 0)) {
	            this.state = 16;
	            this.simpleStatement();
	            this.state = 21;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 22;
	        this.match(CalculatorParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simpleStatement() {
	    let localctx = new SimpleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalculatorParser.RULE_simpleStatement);
	    try {
	        this.state = 27;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 24;
	            this.switchStatement();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 25;
	            this.assignmentStatement();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 26;
	            this.outputStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	switchStatement() {
	    let localctx = new SwitchStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CalculatorParser.RULE_switchStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(CalculatorParser.SWITCH);
	        this.state = 30;
	        this.match(CalculatorParser.LPAREN);
	        this.state = 31;
	        this.match(CalculatorParser.IDENTIFIER);
	        this.state = 32;
	        this.match(CalculatorParser.RPAREN);
	        this.state = 33;
	        this.match(CalculatorParser.LBRACE);
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 34;
	            this.caseSection();
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 40;
	            this.defaultSection();
	        }

	        this.state = 43;
	        this.match(CalculatorParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caseSection() {
	    let localctx = new CaseSectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CalculatorParser.RULE_caseSection);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(CalculatorParser.CASE);
	        this.state = 46;
	        this.constant();
	        this.state = 47;
	        this.match(CalculatorParser.COLON);
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 50) !== 0)) {
	            this.state = 48;
	            this.simpleStatement();
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	defaultSection() {
	    let localctx = new DefaultSectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CalculatorParser.RULE_defaultSection);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(CalculatorParser.DEFAULT);
	        this.state = 55;
	        this.match(CalculatorParser.COLON);
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 50) !== 0)) {
	            this.state = 56;
	            this.simpleStatement();
	            this.state = 61;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentStatement() {
	    let localctx = new AssignmentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CalculatorParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(CalculatorParser.IDENTIFIER);
	        this.state = 63;
	        this.match(CalculatorParser.ASSIGN);
	        this.state = 64;
	        this.constant();
	        this.state = 65;
	        this.match(CalculatorParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	outputStatement() {
	    let localctx = new OutputStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CalculatorParser.RULE_outputStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(CalculatorParser.OUTPUT);
	        this.state = 68;
	        this.match(CalculatorParser.LPAREN);
	        this.state = 69;
	        this.match(CalculatorParser.TEXT_LITERAL);
	        this.state = 70;
	        this.match(CalculatorParser.RPAREN);
	        this.state = 71;
	        this.match(CalculatorParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CalculatorParser.RULE_constant);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        _la = this._input.LA(1);
	        if(!(_la===6 || _la===7)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.SWITCH = 1;
CalculatorParser.CASE = 2;
CalculatorParser.DEFAULT = 3;
CalculatorParser.OUTPUT = 4;
CalculatorParser.IDENTIFIER = 5;
CalculatorParser.NUMBER = 6;
CalculatorParser.TEXT_LITERAL = 7;
CalculatorParser.WS = 8;
CalculatorParser.LPAREN = 9;
CalculatorParser.RPAREN = 10;
CalculatorParser.LBRACE = 11;
CalculatorParser.RBRACE = 12;
CalculatorParser.COLON = 13;
CalculatorParser.ASSIGN = 14;
CalculatorParser.SEMI = 15;

CalculatorParser.RULE_program = 0;
CalculatorParser.RULE_simpleStatement = 1;
CalculatorParser.RULE_switchStatement = 2;
CalculatorParser.RULE_caseSection = 3;
CalculatorParser.RULE_defaultSection = 4;
CalculatorParser.RULE_assignmentStatement = 5;
CalculatorParser.RULE_outputStatement = 6;
CalculatorParser.RULE_constant = 7;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_program;
    }

	EOF() {
	    return this.getToken(CalculatorParser.EOF, 0);
	};

	simpleStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SimpleStatementContext);
	    } else {
	        return this.getTypedRuleContext(SimpleStatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SimpleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_simpleStatement;
    }

	switchStatement() {
	    return this.getTypedRuleContext(SwitchStatementContext,0);
	};

	assignmentStatement() {
	    return this.getTypedRuleContext(AssignmentStatementContext,0);
	};

	outputStatement() {
	    return this.getTypedRuleContext(OutputStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterSimpleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitSimpleStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitSimpleStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SwitchStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_switchStatement;
    }

	SWITCH() {
	    return this.getToken(CalculatorParser.SWITCH, 0);
	};

	LPAREN() {
	    return this.getToken(CalculatorParser.LPAREN, 0);
	};

	IDENTIFIER() {
	    return this.getToken(CalculatorParser.IDENTIFIER, 0);
	};

	RPAREN() {
	    return this.getToken(CalculatorParser.RPAREN, 0);
	};

	LBRACE() {
	    return this.getToken(CalculatorParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(CalculatorParser.RBRACE, 0);
	};

	caseSection = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaseSectionContext);
	    } else {
	        return this.getTypedRuleContext(CaseSectionContext,i);
	    }
	};

	defaultSection() {
	    return this.getTypedRuleContext(DefaultSectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterSwitchStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitSwitchStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitSwitchStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaseSectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_caseSection;
    }

	CASE() {
	    return this.getToken(CalculatorParser.CASE, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	COLON() {
	    return this.getToken(CalculatorParser.COLON, 0);
	};

	simpleStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SimpleStatementContext);
	    } else {
	        return this.getTypedRuleContext(SimpleStatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterCaseSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitCaseSection(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitCaseSection(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DefaultSectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_defaultSection;
    }

	DEFAULT() {
	    return this.getToken(CalculatorParser.DEFAULT, 0);
	};

	COLON() {
	    return this.getToken(CalculatorParser.COLON, 0);
	};

	simpleStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SimpleStatementContext);
	    } else {
	        return this.getTypedRuleContext(SimpleStatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterDefaultSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitDefaultSection(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitDefaultSection(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_assignmentStatement;
    }

	IDENTIFIER() {
	    return this.getToken(CalculatorParser.IDENTIFIER, 0);
	};

	ASSIGN() {
	    return this.getToken(CalculatorParser.ASSIGN, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	SEMI() {
	    return this.getToken(CalculatorParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitAssignmentStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitAssignmentStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OutputStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_outputStatement;
    }

	OUTPUT() {
	    return this.getToken(CalculatorParser.OUTPUT, 0);
	};

	LPAREN() {
	    return this.getToken(CalculatorParser.LPAREN, 0);
	};

	TEXT_LITERAL() {
	    return this.getToken(CalculatorParser.TEXT_LITERAL, 0);
	};

	RPAREN() {
	    return this.getToken(CalculatorParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(CalculatorParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterOutputStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitOutputStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitOutputStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_constant;
    }

	NUMBER() {
	    return this.getToken(CalculatorParser.NUMBER, 0);
	};

	TEXT_LITERAL() {
	    return this.getToken(CalculatorParser.TEXT_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitConstant(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitConstant(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CalculatorParser.ProgramContext = ProgramContext; 
CalculatorParser.SimpleStatementContext = SimpleStatementContext; 
CalculatorParser.SwitchStatementContext = SwitchStatementContext; 
CalculatorParser.CaseSectionContext = CaseSectionContext; 
CalculatorParser.DefaultSectionContext = DefaultSectionContext; 
CalculatorParser.AssignmentStatementContext = AssignmentStatementContext; 
CalculatorParser.OutputStatementContext = OutputStatementContext; 
CalculatorParser.ConstantContext = ConstantContext; 

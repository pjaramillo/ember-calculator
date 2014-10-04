import Ember from 'ember';

var CalculatorController = Ember.ObjectController.extend({
  operation: '',
  operand1: '0',
  operand2: '',
  result: '0',
  operationActive: false,
  shouldReset: true,

  actions: {
    operandClicked: function(operand) {
      var operand1 = this.get('operand1');
      var operand2 = this.get('operand2');
      var value;
      if(this.get('shouldReset')) {
        this.set('shouldReset', false);
        value = operand;
        this.set('operand1', value);
        this.set('operand2', '');
        this.set('result', value);
      } else {
        if(this.get('operationActive')) {
          // Don't allow user to input multiple decimal points
          if(operand2.indexOf('.') !== -1 && operand === '.') {
            return;
          }
          // Don't allow user to input multiple leading 0's
          if(operand2 === '0') {
            value = operand;
          } else {
            value = operand2 + operand;
          }
          this.set('operand2', value);
          this.set('result', value);
        } else {
          // Don't allow user to input multiple decimal points
          if(operand1.indexOf('.') !== -1 && operand === '.') {
            return;
          }
          // Don't allow user to input multiple leading 0's
          if(operand1 === '0') {
            value = operand;
          } else {
            value = operand1 + operand;
          }
          this.set('operand1', value);
          this.set('result', value);
        }
      }
    },

    operationClicked: function(op) {
      var value;
      this.set('shouldReset', false);
      switch(op) {
        case '/':
        case '*':
        case '-':
        case '+':
          this.calculate(this.get('operation'));
          this.set('operation', op);
          this.set('operationActive', true);
          break;
        case '+/-':
          this.set('operationActive', false);
          value = this.get('operand1') * -1;
          this.set('operand1', value);
          this.set('result', value);
          break;
        case '%':
          this.set('operationActive', false);
          value = this.get('operand1') / 100;
          this.set('operand1', value);
          this.set('result', value);
          break;
        case '=':
          this.set('operationActive', false);
          this.set('shouldReset', true);
          this.calculate(this.get('operation'));
          this.set('operation', '');
          break;
        case 'C':
          this.set('operationActive', false);
          this.set('shouldReset', true);
          this.set('operation', '');
          this.set('operand1', '0');
          this.set('operand2', '');
          this.set('result', '0');
          break;
      }
    }
  },

  calculate: function(op) {
    var operand1 = this.get('operand1');
    var operand2 = this.get('operand2');
    var value;
    if(operand2) {
      switch(op) {
        case '+':
          value = (parseFloat(operand1) + parseFloat(operand2)).toString();
          break;
        case '-':
          value = (parseFloat(operand1) - parseFloat(operand2)).toString();
          break;
        case '*':
          value = (parseFloat(operand1) * parseFloat(operand2)).toString();
          break;
        case '/':
          value = (parseFloat(operand1) / parseFloat(operand2)).toString();
          break;
      }

    } else {
      value = parseFloat(operand1).toString();
    }

    this.set('operand1', value);
    this.set('operand2', '');
    this.set('result', value);
  }

});

export default CalculatorController;

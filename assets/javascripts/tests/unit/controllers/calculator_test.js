moduleFor('controller:calculator', "Unit - CalculatorController");

test('init', function() {
  expect(5);

  var controller = this.subject();
  equal(controller.get('operation'), '', "`operation` is '' by default");
  equal(controller.get('operand1'), '0', "`operand1` is '0' by default");
  equal(controller.get('operand2'), '', "`operand2` is '' by default");
  equal(controller.get('result'), '0', "`result` is '0' by default");
  equal(controller.get('shouldReset'), true, "`shouldReset` is true by default");
});


/*
*********************************
* operandClicked ation tests
*********************************
*/

test('operandClicked action when calculator first opens', function() {
  expect(28);

  var controller = this.subject();

  controller.send('operandClicked', '0');
  equal(controller.get('operation'), '', "`operation` is ''");
  equal(controller.get('operand1'), '0', "`operand1` is '0'")
  equal(controller.get('operand2'), '', "`operand2` is ''");
  equal(controller.get('result'), '0', "`result` is '0'");

  controller.send('operandClicked', '0');
  equal(controller.get('operation'), '', "`operation` is ''");
  equal(controller.get('operand1'), '0', "`operand1` is '0'")
  equal(controller.get('operand2'), '', "`operand2` is ''");
  equal(controller.get('result'), '0', "`result` is '0'");

  controller.send('operandClicked', '3');
  equal(controller.get('operation'), '', "`operation` is ''");
  equal(controller.get('operand1'), '3', "`operand1` is '3'")
  equal(controller.get('operand2'), '', "`operand2` is ''");
  equal(controller.get('result'), '3', "`result` is '3'");

  controller.send('operandClicked', '5');
  equal(controller.get('operation'), '', "`operation` is ''");
  equal(controller.get('operand1'), '35', "`operand1` is '35'")
  equal(controller.get('operand2'), '', "`operand2` is ''");
  equal(controller.get('result'), '35', "`result` is '35'");

  controller.send('operandClicked', '.');
  equal(controller.get('operation'), '', "`operation` is ''");
  equal(controller.get('operand1'), '35.', "`operand1` is '35.'")
  equal(controller.get('operand2'), '', "`operand2` is ''");
  equal(controller.get('result'), '35.', "`result` is '35.'");

  controller.send('operandClicked', '5');
  equal(controller.get('operation'), '', "`operation` is ''");
  equal(controller.get('operand1'), '35.5', "`operand1` is '35.5'")
  equal(controller.get('operand2'), '', "`operand2` is ''");
  equal(controller.get('result'), '35.5', "`result` is '35.5'");

  controller.send('operandClicked', '.');
  equal(controller.get('operation'), '', "`operation` is ''");
  equal(controller.get('operand1'), '35.5', "`operand1` is '35.5'")
  equal(controller.get('operand2'), '', "`operand2` is ''");
  equal(controller.get('result'), '35.5', "`result` is '35.5'");
});

test('operandClicked action after operation is applied', function() {
  expect(12);

  var controller = this.subject();
  controller.send('operandClicked', '3');
  controller.send('operationClicked', '+');

  controller.send('operandClicked', '0');
  equal(controller.get('operation'), '+', "`operation` is '+'");
  equal(controller.get('operand1'), '3', "`operand1` is '3'")
  equal(controller.get('operand2'), '0', "`operand2` is '0'");
  equal(controller.get('result'), '0', "`result` is '0'");

  controller.send('operandClicked', '5');
  equal(controller.get('operation'), '+', "`operation` is '+'");
  equal(controller.get('operand1'), '3', "`operand1` is '3'")
  equal(controller.get('operand2'), '5', "`operand2` is '5'");
  equal(controller.get('result'), '5', "`result` is '5'");

  controller.send('operandClicked', '1');
  equal(controller.get('operation'), '+', "`operation` is '+'");
  equal(controller.get('operand1'), '3', "`operand1` is '3'")
  equal(controller.get('operand2'), '51', "`operand2` is '51'");
  equal(controller.get('result'), '51', "`result` is '51'");

});

test('operandClicked action after equals is applied', function() {
  expect(4);

  var controller = this.subject();
  controller.send('operandClicked', '3');
  controller.send('operationClicked', '*');
  controller.send('operandClicked', '5');
  controller.send('operationClicked', '=');

  controller.send('operandClicked', '2');
  equal(controller.get('operation'), '', "`operation` is ''");
  equal(controller.get('operand1'), '2', "`operand1` is '2'")
  equal(controller.get('operand2'), '', "`operand2` is ''");
  equal(controller.get('result'), '2', "`result` is '2'");

});

/*
*********************************
* operationClicked ation tests
*********************************
*/

test('operationClicked action when + is applied', function() {
  expect(4);

  var controller = this.subject();

  controller.send('operandClicked', '9');

  controller.send('operationClicked', '+');
  equal(controller.get('operation'), '+', "`operation` is '+'");
  equal(controller.get('operand1'), '9', "`operand1` is '9'")
  equal(controller.get('operand2'), '', "`operand2` is ''");
  equal(controller.get('result'), '9', "`result` is '9'");
});

test('operationClicked action when - is applied', function() {
  expect(4);

  var controller = this.subject();

  controller.send('operandClicked', '9');

  controller.send('operationClicked', '-');
  equal(controller.get('operation'), '-', "`operation` is '-'");
  equal(controller.get('operand1'), '9', "`operand1` is '9'")
  equal(controller.get('operand2'), '', "`operand2` is ''");
  equal(controller.get('result'), '9', "`result` is '9'");
});

test('operationClicked action when * is applied', function() {
  expect(4);

  var controller = this.subject();

  controller.send('operandClicked', '9');

  controller.send('operationClicked', '*');
  equal(controller.get('operation'), '*', "`operation` is '*'");
  equal(controller.get('operand1'), '9', "`operand1` is '9'")
  equal(controller.get('operand2'), '', "`operand2` is ''");
  equal(controller.get('result'), '9', "`result` is '9'");
});

test('operationClicked action when / is applied', function() {
  expect(4);

  var controller = this.subject();

  controller.send('operandClicked', '9');

  controller.send('operationClicked', '/');
  equal(controller.get('operation'), '/', "`operation` is '/'");
  equal(controller.get('operand1'), '9', "`operand1` is '9'")
  equal(controller.get('operand2'), '', "`operand2` is ''");
  equal(controller.get('result'), '9', "`result` is '9'");
});

test('operationClicked action when repeated +, -, *, / calculations are applied', function() {
  expect(16);

  var controller = this.subject();

  controller.send('operandClicked', '9');
  controller.send('operationClicked', '+');
  controller.send('operandClicked', '8');

  controller.send('operationClicked', '+');
  equal(controller.get('operation'), '+', "`operation` is '+'");
  equal(controller.get('operand1'), '17', "`operand1` is '17'")
  equal(controller.get('operand2'), '', "`operand2` is ''");
  equal(controller.get('result'), '17', "`result` is '17'");

  controller.send('operationClicked', '-');
  controller.send('operandClicked', '12');
  controller.send('operationClicked', '-');
  equal(controller.get('operation'), '-', "`operation` is '-'");
  equal(controller.get('operand1'), '5', "`operand1` is '5'")
  equal(controller.get('operand2'), '', "`operand2` is ''");
  equal(controller.get('result'), '5', "`result` is '5'");

  controller.send('operationClicked', '*');
  controller.send('operandClicked', '2');
  controller.send('operationClicked', '*');
  equal(controller.get('operation'), '*', "`operation` is '*'");
  equal(controller.get('operand1'), '10', "`operand1` is '10'")
  equal(controller.get('operand2'), '', "`operand2` is ''");
  equal(controller.get('result'), '10', "`result` is '10'");

  controller.send('operationClicked', '/');
  controller.send('operandClicked', '5');
  controller.send('operationClicked', '/');
  equal(controller.get('operation'), '/', "`operation` is '/'");
  equal(controller.get('operand1'), '2', "`operand1` is '2'")
  equal(controller.get('operand2'), '', "`operand2` is ''");
  equal(controller.get('result'), '2', "`result` is '2'");
});

test('operationClicked action when +/- is applied', function() {
  expect(8);

  var controller = this.subject();

  controller.send('operandClicked', '9');

  controller.send('operationClicked', '+/-');
  equal(controller.get('operation'), '', "`operation` is ''");
  equal(controller.get('operand1'), '-9', "`operand1` is '-9'")
  equal(controller.get('operand2'), '', "`operand2` is ''");
  equal(controller.get('result'), '-9', "`result` is '-9'");

  controller.send('operationClicked', '+/-');
  equal(controller.get('operation'), '', "`operation` is ''");
  equal(controller.get('operand1'), '9', "`operand1` is '9'")
  equal(controller.get('operand2'), '', "`operand2` is ''");
  equal(controller.get('result'), '9', "`result` is '9'");
});

test('operationClicked action when % is applied', function() {
  expect(4);

  var controller = this.subject();

  controller.send('operandClicked', '9');

  controller.send('operationClicked', '%');
  equal(controller.get('operation'), '', "`operation` is ''");
  equal(controller.get('operand1'), '0.09', "`operand1` is '0.09'")
  equal(controller.get('operand2'), '', "`operand2` is ''");
  equal(controller.get('result'), '0.09', "`result` is '0.09'");

});

test('operationClicked action when = is applied', function() {
  expect(4);

  var controller = this.subject();

  controller.send('operandClicked', '9');
  controller.send('operationClicked', '+');
  controller.send('operandClicked', '9');

  controller.send('operationClicked', '=');
  equal(controller.get('operation'), '', "`operation` is ''");
  equal(controller.get('operand1'), '18', "`operand1` is '18'")
  equal(controller.get('operand2'), '', "`operand2` is ''");
  equal(controller.get('result'), '18', "`result` is '18'");

});

test('operationClicked action when C is applied', function() {
  expect(4);
  
  var controller = this.subject();

  controller.send('operandClicked', '9');
  controller.send('operationClicked', '+');
  controller.send('operandClicked', '9');

  controller.send('operationClicked', 'C');
  equal(controller.get('operation'), '', "`operation` is ''");
  equal(controller.get('operand1'), '0', "`operand1` is '0'")
  equal(controller.get('operand2'), '', "`operand2` is ''");
  equal(controller.get('result'), '0', "`result` is '0'");

});

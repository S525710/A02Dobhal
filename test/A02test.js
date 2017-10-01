QUnit.test("Here's a test that should always pass", function(assert) {
    assert.ok(1 == "1", "1=1 success!");
});

QUnit.test('Testing to check if the calculated cost is a number', function(assert) {
    assert.throws(function() { calculateCost([]) }, 'Array is not allowed');
    assert.throws(function() { calculateCost(null) }, 'Null is restricted');
    assert.throws(function() { calculateCost(NaN) }, 'NaN is restricted');
    assert.throws(function() { calculateCost(undefined) }, 'Undefined values are restricted');
    assert.throws(function() { calculateCost("test") }, 'String is restricted');
});
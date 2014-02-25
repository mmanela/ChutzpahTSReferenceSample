test("this should work", function() {
  var service = new MyService();
  
  var res = service.GetValue();
  
  
  equal(10,res);
});
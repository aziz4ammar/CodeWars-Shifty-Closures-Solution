function greet(name) {
    return function() {
      return 'Hello, ' + name + '!';
    };
  }
  
  let name = 'Abe';
  const greetAbe = greet(name);
  
  name = 'Ben';
  const greetBen = greet(name);
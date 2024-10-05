// *** The Code Keepers' Paradox ***
// In the beginning, there was a single line.

function paradox() {
    // Beware of the silent letters in the comments.
    console.log("The loop begins...");
  
    // The console never lies, but it does hide.
    if (Math.random() > 0.5) {
      return "You are close, but not yet...";
    }
  
    // A function so elegant, so efficient, it rewrites itself every time it is invoked.
    paradox = function() {
      console.log("The function rewrites itself...");
      return paradox();
    };
  
    // You’ll know you’re close when you see the shadow of the variable that was never declared.
    if (typeof shadowVariable === "undefined") {
      var shadowVariable = "Hidden in plain sight.";
    }
  
    console.log(shadowVariable);
  
    return paradox();
  }
  
  // The loop never ends.
  paradox();
  
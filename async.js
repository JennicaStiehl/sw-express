function waitTwoSeconds() {
  console.log("I am starting to wait...");
  setTimeout(function() {
    console.log("I've waited two seconds");
  }, 2000);
  console.log("Done waiting.")
}

waitTwoSeconds();

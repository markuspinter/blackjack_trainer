function openNav() {
    document.getElementById("chat").style.right = "0";
  }
  
  function closeNav() {
    document.getElementById("chat").style.right = "-" + getComputedStyle(document.documentElement).getPropertyValue('--chatWidth').trim();
  }
function lightThemeHandler() {
  document.getElementById("theme").href = "assets/css/lightTheme.css";
}

function darkThemeHandler() {
  document.getElementById("theme").href = "assets/css/darkTheme.css";
}

function foucsHandler() {
  console.log("entered");
  //saves all children of JOHN
  let childrenClasses = document.getElementById("john").children;

  //checks all children of JOHN
  for(i=0; i<childrenClasses.length; i++) {

    //saves list of all classes of a child[i]
    let child = document.getElementById(childrenClasses[i].id).classList;
   
    //cheks if "important" is present in class list of child[i]
    if(child.contains("important")) {
      child.add("shape");
    }

  }
}
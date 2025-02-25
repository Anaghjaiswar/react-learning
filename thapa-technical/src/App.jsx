import NetflixSeries from "./components/NetflixSeries";

export const App = () => {
  return(
  <>
    <NetflixSeries/>
  </> 
  );


};
// 1.variables
// you can embed any js variable within JSX by enclosing it in curly braces. the value of the
// variable will be inserted into the DOM at the respective location.

// 2. Expressions
// JSX alows you to write JS expressions inside curly braces.this include operations, functiona calls,
// that return a value and so on.

// 3. Function Calls
// functions, especially those that return JSX,can be invoked directly within your JSX.



// this is a component written in PascalCase -- it ia a function which returns your jsx code


import React from 'react';

let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";

if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning";
}else if (curDate >= 12 && curDate < 19){
  greeting = "Good Afternoon";
}else {
  greeting= "Good Night";
}
function App() {
  return (
    <div className="Container my-5">
        <h1>Hello Sir, { greeting }  </h1>      
    </div>
  );
}

export default App;

import React, {Component} from "react";
import ReactDOM from "react-dom";
import FormComp from "./comps/FormComp";
import FunctionComp from "./comps/FunctionComp";

class App extends Component{
  render() {

    const setVisib = false;


  return ( 
// bir tane parent element doner, div sadece dönecek. Ama icine istediğin kadar div yazabilirsin
    
    <div>
       <FormComp 
            formCompTitle = "New Title"
            formCompDesc = "New Description"
        />
       
       <FunctionComp setVisibProp = {setVisib} />

       <br/><hr/>
       <FormComp/>
    </div>
    
  );

}
}

// yukarida olusturulan component asagidaki ifade ile baska class larda kullanilmak uzere donduruluyor
export default App;

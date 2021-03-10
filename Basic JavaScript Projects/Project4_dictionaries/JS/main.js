function GraphicsCards() {          //Defining a function and its name
    var Cards = {               //Defining a variable as a dictionary that will contain different KVPs!
        Name:"RTX 3090",            //First KVP
        Clock_Speed:"1695 MHz",     //Second KVP
        GPU:"Ampere (GA102)",       //Third KVP
        GPU_Cores:10496,            //Fourth KVP
        Video_RAM:"24GB GDDR6X",    //Fifth KVP
    };
    delete Cards.GPU_Cores;         //This will delete a KVP 
    document.getElementById("Dictionary").innerHTML = Cards.GPU_Cores;      //Changes the HTML element Dictionary with the value from variable Cards, KVP GPU_Cores
}
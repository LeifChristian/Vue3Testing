export default () => {
    const accessGranted = ``
        console.log("access granted.")
        const node = document.createElement("div");
        // Create a text node:
        const textnode = document.createTextNode("Created element");
        // Append the text node to the "li" node:
        node.appendChild(textnode);
        // Append the "li" node to the list:
        document.getElementById("gallery").appendChild(node);
        // document.getElementById('gallery').innerHTML =  'hoot'
        document.getElementById('gallery').innerHTML = document.getElementById('gallery').innerHTML + ' hoot'   
        
        const myStyles = `
        // display: block;
        // width: 80%;
        // background-color: red;
        // border: 2px;
        // font-size: 5em;
        // color: white;
        // margin: 20px;
        // padding-left: 10px;
        // padding-bottom: 10px;
        // border: 2px solid black;
        color: green;
    `;
    const element = document.getElementById('gallery');
    element.style.cssText = myStyles;
      };

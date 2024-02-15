const nameElement = document.getElementById("nameTyping");
    const nameText = nameElement.innerText;
    let index = 0;
  
    function typeName() {
      if (index < nameText.length) {
        nameElement.innerText = nameText.slice(0, index + 1);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }
  
    const intervalId = setInterval(typeName, 100);
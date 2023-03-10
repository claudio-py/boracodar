

function loading(event){
    const button = event.currentTarget
    button.classList.add('loading')
    const text = button.textContent
    button.innerHTML = `<i class="ph ph-circle-notch"></i>
    ${text}
    `

}

document.addEventListener("DOMContentLoaded", function() {
    const myButton = document.getElementById("myButton");
  
    myButton.addEventListener("click", function() {
      this.disabled = !this.disabled;
      if (this.disabled) {
        this.textContent = "disabled";
        this.classList.remove("primary");
        this.classList.add("secondary");
      } 
    });
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    const move = document.getElementById("move");
  
    move.addEventListener("click", function() {
      
        if (this.classList.contains("movable")) {
          this.classList.remove("movable");
          this.textContent = "click to move";
          this.classList.remove("tertiary");
          this.classList.add("primary");
          const icon = this.querySelector("i");
          if (icon) {
            icon.remove();
          }
        } else {
          this.classList.add("movable");
          this.textContent = "give up";
          this.classList.remove("primary");
          this.classList.add("tertiary");
          const icon = document.createElement("i");
          icon.classList.add("ph", "ph-list");
          this.insertBefore(icon, this.firstChild);
        }
    });
  });
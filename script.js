document.addEventListener("DOMContentLoaded", function(){
    let pButton = document.getElementById("p-button");
    let imgButton = document.getElementById("img-button");
    let pDiv = document.getElementById("p-div");
    let imgDiv = document.getElementById("img-div");

    pButton.addEventListener("click", function(){
        imgDiv.style.display = "none";
        pDiv.style.display = "block";

        let newParagraph = document.createElement('p');
        newParagraph.textContent = "Do You Like Jazz";
        pDiv.appendChild(newParagraph);
    });

    imgButton.addEventListener("click", function(){
        pDiv.style.display = "none";
        imgDiv.style.display = "block";

        let newImage = document.createElement('img');
        newImage.src = "images/Funny.png";
        newImage.alt = "Not Jazz !!";
        imgDiv.appendChild(newImage);
    });
});

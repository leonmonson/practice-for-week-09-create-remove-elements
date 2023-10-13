/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
         constaddelement = () => {
             constnewelement = document.createelement;
             document.body.appendchild(new dog);
          

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        constaddelementalt = () => {
            document.body.innerhtml =src=
                }
             window.onload = addelementalt;

        /* Add the new dog card as a child to the ul in the .gallery element */
        constaddelememt

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
const add dog alt = () => first dog;
    document.body.innerhtml=firstdog;
}
window.onload = firstdog;

});

    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
const last dogg = () => {   
    last dog = last

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
});









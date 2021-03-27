//Changes text and functionality of the button; Creates new element.
function HidePictures()
{
    var button1 = document.getElementById("Picture");
    button1.innerText = "No, show the pictures!";
    button1.setAttribute("onClick", "javascript: ShowPictures();");

    var par = document.createElement("p");
    var text = document.createTextNode("I see you have hidden the pictures. That's right - do not judge book by it's cover!");
    par.appendChild(text);
    document.body.appendChild(par);
    par.setAttribute("id", "par1");
    par.style.fontSize = "18px";
    par.style.fontWeight = "bold";
    par.style.cssFloat = "right";
}
//Changes the text and functionality of the button.
function ShowPictures()
{
    var button2 = document.getElementById("Picture");
    button2.innerText = "Yes, please!";
    button2.setAttribute("onClick", "javascript: HidePictures();");
}
//Shows the form
function ShowForm() 
{
    var x = document.getElementById("forma");
    var y = document.getElementById("thanks");
    x.style.display = "block";
    y.style.display = "none";

}
//Varies with the visibility of the text and form.
function ShowText() 
{
    var x = document.getElementById("forma");
    var y = document.getElementById("thanks");
    if(x.style.display == "none")
    {
    y.style.display = "block";
    }
    else
    {
    x.style.display = "none";
    y.style.display = "block";
    }
}
//Form validation and show sthe appropriate message about the errors; Shows which inputs are required.
function ValidateForm() 
{
    var mark;
    var fav;

    mark = document.getElementById("form1").value;
    fav = document.getElementById("form3").value;
    if (isNaN(mark))
    {
        alert("Mark should be a NUMBER between 1 and 10. Please fill the form correctly. Thank you!");
        return false;
    }

    if (mark > 10 || mark < 1) 
    {
        alert("Number should be between 1 and 10. Please fill the form correctly. Thank you!");
        return false;
    }

    if (fav.length < 0 || fav.length > 20) 
    {
        alert("The name of the Book should not exeed 20 symbols. Sorry, if your book's name is longer. Try another book. Thank you!");
        return false;
    }
}
var open=false;
function nav() 
{
    if (open == true) 
    {   
        document.getElementById("Text").style.left = "";
        document.getElementById("nav").style.display = "";
        document.getElementById("lines").classList.add("rotate2");
        document.getElementById("lines").classList.remove("rotate");
        open = false;
        localStorage.setItem("Open", open);
    }
    else 
    {
        document.getElementById("Text").style.left = "30%";
        document.getElementById("nav").style.display = "block";
        document.getElementById("lines").classList.add("rotate");
        document.getElementById("lines").classList.remove("rotate2");
        open = true;
        localStorage.setItem("Open", open);
    }
}
window.onload = function(){
    const storedLight = localStorage.getItem("light");
    if (storedLight === "true") {
        light = false;
        ChangeLight();
    } else if (storedLight === "false") {
        light = true;
        ChangeLight();
    }
    const storedOpen = localStorage.getItem("Open");
    if (storedOpen === "true") {
        open = false;
        nav();
    } else if (storedOpen === "false") {
        open = true;
        nav();
    }
};
var light = false;
function ChangeLight() 
{
    if (light == true) 
    {
        document.body.style.color = "";
        document.body.style.backgroundColor = "";
        let h1s = document.getElementsByTagName("h1");
        for (let i = 0; i < h1s.length; i++) {
            h1s[i].style.textDecoration = "";
        }
        let h2s = document.getElementsByTagName("h2");
        for (let i = 0; i < h2s.length; i++) {
            h2s[i].style.color = "";
        }
        let ps = document.getElementsByTagName("p");
        for (let i = 0; i < ps.length; i++) {
            ps[i].style.color = "";
        }
        let subheadings = document.getElementsByClassName("subheadingflex");
        for (let i = 0; i < subheadings.length; i++) {
            subheadings[i].style.backgroundColor = "";
        }
        let headings = document.getElementsByClassName("headingflex");
        for (let i = 0; i < headings.length; i++) {
            headings[i].style.backgroundColor = "";
        }
        document.getElementById("nav").style.borderRight = "";
        let navLinks = document.querySelectorAll("#nav a");
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = "";
        }
        let Ds = document.getElementsByClassName("navD");
        for (let i = 0; i < Ds.length; i++) {
            Ds[i].style.borderTop = "";
        }

        document.getElementById("nav").style.backgroundColor = "";
        document.getElementById("lines").outerHTML = '<img src="lines.png" class="lines" id="lines" onclick="nav()">'
        light = false;
        localStorage.setItem("light", "false");
    }
    else 
    { 
        document.body.style.color = "#222";
        document.body.style.backgroundColor = "#daa520";
        let subheadings = document.getElementsByClassName("subheadingflex");
        for (let i = 0; i < subheadings.length; i++) {
            subheadings[i].style.backgroundColor = "#ffd24b";
        }
        let headings = document.getElementsByClassName("headingflex");
        for (let i = 0; i < headings.length; i++) {
            headings[i].style.backgroundColor = "#ffd24b";
        }
        let h1s = document.getElementsByTagName("h1");
        for (let i = 0; i < h1s.length; i++) {
            h1s[i].style.textDecoration = "underline #222";
        }
        let h2s = document.getElementsByTagName("h2");
        for (let i = 0; i < h2s.length; i++) {
            h2s[i].style.color = "#222";
        }
        let ps = document.getElementsByTagName("p");
        for (let i = 0; i < ps.length; i++) {
            ps[i].style.color = "#222";
        }
        let Ds = document.getElementsByClassName("navD");
        for (let i = 0; i < Ds.length; i++) {
            Ds[i].style.borderTop = "1px solid #222";
        }
        document.getElementById("nav").style.backgroundColor = "#daa520";
        document.getElementById("nav").style.borderRight = "1px solid #222";
        let navLinks = document.querySelectorAll("#nav a");
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = "#222";
        }
        let active = document.querySelectorAll(".active");
        for (let i = 0; i < active.length; i++) {
            active[i].style.color = "white !important";
        }
        document.getElementById("lines").outerHTML = '<img src="LinesB.png" class="lines" id="lines" onclick="nav()">';
        light = true;
        localStorage.setItem("light", "true");
    }
}
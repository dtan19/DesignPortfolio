
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var instructions = document.getElementById('myInst');
var modalInst = document.getElementById("myInstPdf");
var packaging = document.getElementById('myPkg');
var modalPkg = document.getElementById("myPkgPdf");
var instPdf = '/img/Travler-Hero-5-Instructions.pdf';
var pkgPdf = '/img/TravlerHerosPackage4.pdf';
var captionText = document.getElementById("caption");
instructions.onclick = function(){
    modal.style.display = "block";
    window.open(instPdf);
}
packaging.onclick = function(){
    modal.style.display = "block";
    window.open(pkgPdf);
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
        modal.style.display = "none";
    }
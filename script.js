let featureBlock = document.getElementById('feature')
let resultBlock = document.getElementById('result')
let resultTxtBlock = document.getElementById('result-txt')


function toggleResult(textRead){
    feature.style.display = "none";
    resultBlock.style.display = "block";
    resultTxtBlock.textContent = textRead;
    console.log(textRead);
    console.log(resultTxtBlock.textContent);
}
let form = document.forms['file-form']
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let inputFile = event.target.file.files[0];
    if(inputFile && inputFile.type==="text/plain"){
        console.log(inputFile);

        let textRead = '';

        let fReader= new FileReader()
        fReader.readAsText(inputFile);

        fReader.onload = function() {
            textRead=fReader.result;
            toggleResult(textRead)
        };
        
        fReader.onerror = function() {
            textRead=fReader.error;
            toggleResult(textRead)
          };




    }
})
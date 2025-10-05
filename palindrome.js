let result = document.getElementById("result")
let userinput = document.getElementById("userinput")

function checkpalindrome(){
    let input = userinput.value.trim()
    if (input === ""){
    result.textContent ="Please Enter a String";
    return;
}

    
    let cleaned_Version = input.toLowerCase().replace(/\s+/g, '');
    let reversed = cleaned_Version.split('').reverse().join('');
    if (cleaned_Version === reversed){
        result.textContent ="Palindrome"
    }
    else{
        result.textContent="Not Palindrome"
    }

}
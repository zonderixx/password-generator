const random = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
'!', '@', '#', '$', '_'];

function generatePasswords() {
    const input = document.querySelector(".input-num").value;
    const pass1 = createRandom(input)
    const pass2 = createRandom(input)
    const pass3 = createRandom(input)
    const pass4 = createRandom(input)
 
    document.querySelector("#firstInput").value = pass1;
    document.querySelector("#secondInput").value = pass2;
    document.querySelector("#thirdInput").value = pass3;
    document.querySelector("#fourthInput").value = pass4;
}

function createRandom(length) {

    const value = [];

    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * random.length);
        value.push(random[index])
    }

    return value.join('');
}

function copyToClipBoard(id) {
    const copyText = document.querySelector(`#${id}`);
    copyText.select();
    navigator.clipboard.writeText(copyText.value);  
}

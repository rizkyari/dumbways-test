function drawImage(number) {
    if (number % 2 == 0) {
        console.log("Angka harus ganjil!");
    } else {

        for (let i = 1; i <= number; i ++) {
            for (let i = 0; i < number; i++) {
                document.write('*');
            }
            for (let j = 0; j < number; j++) {
                document.write('=  ');
            }
            document.write('<br/>');
        }

        
    }
}

drawImage(7);
drawImage(5);
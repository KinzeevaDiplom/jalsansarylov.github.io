$(function(){

    $('.start').click(()=>{
        $('.result').text('');
        Decoder();
    })

    function Decoder() {
        let alp = new Map([
            ["а", 0 ],
            ["б", 1 ],
            ["в", 2 ],
            ["г", 3 ],
            ["д", 4 ],
            ["е", 5 ],
            ["ж", 6 ],
            ["з", 7 ],
            ["и", 8 ],
            ["й", 9 ],
            ["к", 10 ],
            ["л", 11 ],
            ["м", 12 ],
            ["н", 13 ],
            ["о", 14 ],
            ["п", 15 ],
            ["р", 16 ],
            ["с", 17 ],
            ["т", 18 ],
            ["у", 19 ],
            ["ф", 20 ],
            ["х", 21 ],
            ["ц", 22 ],
            ["ч", 23 ],
            ["ш", 24 ],
            ["щ", 25 ],
            ["ъ", 26 ],
            ["ы", 27 ],
            ["ь", 28 ],
            ["э", 29 ],
            ["ю", 30 ],
            ["я", 31 ],
            [" ", 32 ],
          
                  
         
        ]);

        let code = [
            "а","б","в","г","д","е","ж","з",
            "и","й","к","л","м","н","о","п","р",
            "с","т","у","ф","х","ц","ч","ш","щ",
            "ъ","ы","ь","э","ю","я"," "
        ]

        let keyWord = document.querySelector('.kay-word').value;
        let lenKey = keyWord.length;

        let textCode = document.querySelector('.text-code').value;
        let lenCode = textCode.length;


        let result = '';
        // let result;

        let colWord = Math.ceil( lenCode / lenKey );

        for (let i = 0; i < lenCode; i=i+lenKey) {
            for (let x = 0; x < lenKey; x++) {
                if (textCode[i+x]){
                    let minus = alp.get(textCode[i+x]) - alp.get(keyWord[x]);
                    if (minus < 0){
                        minus = minus*(-1);
                        minus = (alp.get(textCode[i+x]) + 33) - alp.get(keyWord[x]);                                  
                    }                    
                    result += code[minus];    
                }
            }            
        }

        $('.result').text(result);
    }

});
$(document).ready(function(){
    $(".words").submit(function(event){

        event.preventDefault();
    
        let wordInput = $("#word").val();
        // console.log(wordInput)


        let emptyarr= []
        // let sentence = [wordInputnput] 
        // console.log(sentence)

        let splitArr = wordInput.split([""]);
        // console.log(splitArr);

        splitArr.forEach( function(sentence) {
            emptyarr.push(sentence)
            // if (sentence.length >= 3 ) {
            //    emptyarr.push(sentence);

            // }


             console.log(emptyarr);

          
            
        });

        // splitArray.forEach(function(word) {
            
        //     if ( word.length >=  3 ) {
        //     emptyarr.push(word);
        // }
            
        // });

        // console.log(emptyarr);

        emptyarr = emptyarr.reverse();
        emptyarr = emptyarr.join("");


        console.log(emptyarr);

        $(".purpose").show();

        $("#output").text(emptyarr);

        
        
       

        
    

    });

});
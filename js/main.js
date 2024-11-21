var usedQuotes = [];
function arr(){
    var quotes =[{
        quote:"You only live once, but if you do it right, once is enough.",
        author:"-Mae West"

    },{
        quote:"In three words I can sum up everything I've learned about life: it goes on.",
        author:"-Robert Frost"
    },{
        quote:"Be the change that you wish to see in the world.",
        author:"-Mahatma Gandhi"
    },{
        quote:"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        author:"-J.K. Rowling"
    },{
        quote:"If you tell the truth, you don't have to remember anything..",
        author:"-Mark Twain"
    }];



    var random;
    do {
        random = Math.floor(Math.random() * quotes.length);
        } while (usedQuotes.includes(random));

        usedQuotes.push(random);

        if (usedQuotes.length === quotes.length) {
            usedQuotes = [];
        }

    document.getElementById("quoteOutput").innerHTML = quotes[random].quote;
    document.getElementById("authorOutput").innerHTML =quotes[random].author;

} 




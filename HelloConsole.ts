class HelloConsole
{
    constructor(public displayText : string)
    {}

    greet()
    {
        return this.displayText;
    }
}

var hello = new HelloConsole("Hello World !!");
console.log(hello.greet());
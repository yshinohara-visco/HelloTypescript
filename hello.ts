class HelloWorld
{
    constructor(public displayText : string)
    {}

    greet()
    {
        return this.displayText;
    }
}

var hello = new HelloWorld("Hello World !!!");
document.body.innerHTML = hello.greet();
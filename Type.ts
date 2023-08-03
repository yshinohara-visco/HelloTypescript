
console.log("Type.ts")
// : 型名　で型を指定する

// : string で指定
{
    let str: string = "A";
    str = "10"; //OK
    //str = 10; //NG
}

// : numer で指定
{
    let num: number = 0;
    num = 10; //OK
    //num = "10"; //NG
}

// : boolean で指定
{
    let bool: boolean = true;
    bool = false; //OK
    //bool = 10; //NG この変換はされないのか
}

// : Array<型名> または : 型名[] で指定
// 数値を格納する配列の場合
{
    const arr1: Array<number> = [0, 1, 2];
    let arr2: number[] = [0, 1, 2];
    arr1.push(10); //OK
    arr2.push(10); //OK
    //arr1.push("10"); //NG
    //arr2 = 10; //NG
}
//Array<>のように<>で型を指定する方法をGenericsと呼ぶ

// : null で指定
{
    let null1: null = null;
    null1 = null; //OK
    //null1 = 10; //NG
}
//「文字列又はnullの判定」等で使う


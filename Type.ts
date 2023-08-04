
console.log("Type.ts")

// 変数の型指定
// : 型名　で型を指定する

// : string で指定
{
    let str: string = "A";
    str = "10"; //OK
    //str = 10; //NG 逆にJavaScriptでは出来てしまう
    //str = null;
    //str = undefined;
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

// : undefined で指定
{
    let undefined1: undefined = undefined;
    undefined1 = undefined; //OK
    //undefined1 = 10; //NG
}
//nullと同様の使い方

// : any で指定
{
    let any1: any;
    any1 = false; //OK
    any1 = 10; //OK
    any1 = undefined; //OK
}
//なんでも入る 入ってしまう TypeScriptの意味が薄れるので非推奨
//JavaScriptからの以降や開発中の仮置きとして使用

//---------------------------
// 関数の型指定
// 関数の型は (引数: 引数の型名): 返却値の型名 => {}
{
    //返り値voidを明示することでreturn ~;を書いた時にエラーにできる
    const funcA = (num: number): void => {
        console.log(num);
        //return; //OK
        //return 1; //NG
    };
    funcA(10); //OK
    //funcA("10"); //NG
    //funcA(); //NG
}

//---------------------------
// オブジェクトの型指定
{
    const obj: {str: string, num: number} = {
        str: "A",
        num: 10,
    };
    obj.str = "B"; //OK
    obj.num = 20; //OK
    //obj.str = 10; //NG
    //obj.num = null; //NG
    //obj = 10; //NG
}

//---------------------------
// 複合的な型
// 型 & 型 で指定
{
    const obj: {str: string} & {num: number} = {
        str: "A",
        num: 10,
    };
    obj.str = "20"; //OK
    //obj.run = "10"; //NG
}
// intersection(交差)型 &で複数の型を指定し、新たな型定義を作成する

// 同じ型定義のプロパティ(str: string)が存在する場合
{
    //typeで型を定義することができる
    type TypeA = {
        str: string,
        num: number,
    };
    type TypeB = {
        str: string,
        bool: boolean,
    };
    //TypeAとTypeBから新しいTypeCを作成
    type TypeC = TypeA & TypeB;

    const obj: TypeC = {
        str: "A",
        num: 10,
        bool: false,
    };
    const hoge: TypeC = {
        num: 10,
        str: "A",
        //str2: "B", //2つ目はNG
        bool: false,
    };
}
// 上の例において、オブジェクトの型で指定したobjと交差型で指定したobjに使用上の違いはない
// 交差型はオブジェクトの型に比べ、既存の型を組み合わせて新しい型を作成したりできる

// union(合併、共用体)型
{
    //型 | 型 で指定
    let vall: string | number = "";
    vall = "A"; //OK
    vall = 10; //OK
    //vall = []; //NG
}

//---------------------------
// Generics(ジェネリクス) C++でのテンプレート
// 型の定義例
{
    type CustomType<T> = {
        val: T;
    };

    //stringとして使用した場合
    const strObj: CustomType<string> = {val: "A"};
    strObj.val = "B"; //OK
    //strObj.val = 10; //NG
    //const hoge: CustomType<string> = {val: 1}; //NG

    //useStateではこのように使う
    //const [str, setStr] = useState<string>("");
}
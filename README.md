# HelloTypescript

1. 空フォルダを作成
2. ターミナルで「tsc --init」を実行→tsconfig.jsonが生成される

HelloConsole:  HelloWorldコンソールアプリ
1. HelloConsole.tsを作成
2. 「tsc」を実行→HelloConsole.jsが生成される
3. 「node HelloConsole.js」で実行→コンソールにHelloWorldが出力

HelloWeb: HelloWorldウェブアプリ
1. HelloWeb.ts, hello.htmlを作成
2. 「tsc」を実行→HelloWeb.jsが生成される
3. hello.htmlをブラウザで開く→HelloWorldが表示される

Type: 型周りの仕様確認コンソールアプリ
* .vscode/launch.jsonとtsconfig.jsonへの変更でデバッグ実行できるように
# competitive_programming

typescript で競技プログラミングをするための環境

## 使い方

1. 課題ディレクトリの作成

```sh
node create.js <課題名>
```

2. テストケースの作成

main.test.ts に jest でテストコードを書く

3. main.ts の作成

実際に課題を解くコードを書く

4. テストの実行

```sh
npm run testFile <課題名>/main.test.ts
```

5. 本番用にデータ準備

```sh
vi input.dat
```

5. 本番実行

input.dat を標準入力として与える

main.js の場合

```
node main.js < input.dat
```

main.ts の場合

```
ts-node main.ts < input.dat
```

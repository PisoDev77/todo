# TS 로 ToDo 만들기

- 변덕스러움
- 건망증
- 메모와 비슷한 투두

1. tsconfig.json 이 없을 때
```
Uncaught ReferenceError: exports is not defined
에러를 만났다.

해결 방안으로
1.
tsconfig.json파일이 없을 때 브라우저가 가진 CommonJS로
컴파일되면서, 사용되지 않는 exports가 있다.

2.
webpack rollup  번들러로 해결 할 수 있다.

처음에는 tsconfig.json 파일로 해결했다.
module 속성에 ESNext를 지정
```

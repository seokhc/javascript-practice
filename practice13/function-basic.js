// 기본적인 함수와 함수를 JS에서 전달하는 기본개념 복습.

/*
    함수는 어떤 프로그래밍 언어를 배우던 딱 2가지만 
    기억하면 된다. 그 후 줄기를 쳐나가자!

    그 두 가지는
    1. 함수 선언
    2. 함수 호출  이다.
*/

/*
    함수를 선언
    할때는 JS에선 function이란 키워드를 이용하고
    원하는 함수의 이름을 적어준다. 
    function doSomething() 이렇게 함수를 정의.
   
    그리고 함수에 어떤값을 전달받아 올건지
    전달받는 인자를 정의하는 부분인 () 와,

    실제로 함수 안에서 어떤 코드가 동작하는지
    코드를 작성하는 부분인{} 로 나눠져 있다.

    doSomething이라는 함수는 
    아무런 값도 받아오지 않고, 코드블럭 안에선
    간단하게 console.log를 hello로 출력해보자.

    function doSomething(){
        console.log('hello');
    }
    이렇게만 해놓으면 아무런것도 나오지 않겠지? 왜냐?

    우리는 지금 함수를 선언만 해놨으니까!!
    야 여기 doSomething이라는 함수가 있어~
    얘는 중괄호 {}안에 있는 코드를 수행하게 될거야.

    함수 호출
    할때는 함수의 이름 doSomething을 적고,
    ()를 이용해서 호출을 하게돼. 헬로우가 나와.

    이런식으로 선언과 호출 이 두가지를 조금
    정확하게 이해하고 있어야 나중에 인자로 전달할때도
    흔들리지 않아.


*/
function doSomething() {
    console.log('hello');
}
doSomething();
 
/*
    그리고 함수는 2가지 기능이 있는데 
    위 console.log처럼 어떤 기능을 수행하고
    그냥 끝나는 아이들이 있고,

    또는 어떠한 값을 계산을 한다음에 
    특정한 값을 전달하는 아이가 있다.

    doSomthing
    얘는 아무런값도 리턴하지않는 
    전달하지 않는 함수다.

    add라는 펑션은 a, b 라는 어떤 특정한 인자값
    값들을 받아와서 코드를 수행하는데 
    const sum 이라는 변수에 a와 b값을 더한다음에
    sum이라는 변수에 할당하게 된다.
    function add(a, b) {
        const sum = a + b;
    } 이렇게.

    여기서 다른 언어같은 경우면 a와 b가 어떤 타입인지
    add(a: number, b: number) 타입을 명시 해줘서
    아 내가 add라는 함수를 호출할때는 숫자.. 두가지
    숫자값을 전달하면 되는구나~  그리고 전달한 이 값을
    각각 a랑 b라는 이름으로 각각의 값에 
    접근할수 있겠구나 라고 생각할수있는데

    JS는 타입이 없는 언어라 a, b 어떠한 값을 받아오고
    그 값은 a와 b라는 변수를 이용해서 접근할수있다.

    여기서 저렇게 a + b; 만하고 
    add(); 이렇게 함수를 호출하게 되면 그리고 여기서
    add라는 함수는 a와 b라는 것을 받아오니까
    원하는 숫자가 1,2 일때 이렇게
    add(1, 2); 1과 2를 전달하게 되면 a와 b에는 각각
    1과 2라는 값이 들어와.
    sum 이라는 변수엔 1+2인 3이라는 값잏 할당돼있겠지?

    그런데 이 add라는 함수는 코드블럭을 실행한 다음에
    아무것도 retrun 해주지 않았다..
    아무런 값도 전달되지 않은거다.

    그래서 우리가 더한 값을 전달해주고 싶다면
    retrun sum; 해주면 돼.
    이렇게하면 add라는 함수는 1과 2라는 값을 전달하면
    1과 2가 더해져서 이제 더해진값이 리턴이 되는것!

    그런데 add(1, 2); 에선 그냥 호출만 했으니까
    아무런것도 일어나지 않아.

    이렇게 함수가 전달한 값을 
    const result = add(1, 2); 이렇게 여기서
    변수에다 저장할수가 있다.

    그래서 저 result라는 값을 
    console.log(result); 로 출력하게 되면
    3이 나온다.

    이것은 JS에서 const result = add(1, 2);코드를
    실행하게 되면 result라는 변수를 정의하면서
    정의함과 동시에 어떠한 값을 할당할건데
    그 값은 어이구 add(1, 2); 라는 함수가 있네?
    함수를 일단 먼저 호출해보자~하고 1과 2라는 값을
    function add(a, b)부분에 전달해서
    add라는 함수를 호출하면
    함수에 정의된 코드블럭이 실행이 되고 순서대로
    const sum = a + b; 가 실행이되고 
    어? 여기에도 변수가 할당이 되어지네?
    a와 b가 더해진 값이 sum에 할당이 되면서
    이 할당된 sum이라는 변수 즉, 3이 retrun이 된다.

    즉 add에서 3이라는 값이 전달이 되어지니까
    add(1, 2)이 함수 호출이 끝나자마자 전달된 3이
    result에 할당이 되고
    그래서 이 result를 출력하면 3이 나오는거다.

    js는 html과 달리 ui적인 요소가 없기 때문에 
    console.log를 이용하여 조금씩 log를 넣어서
    눈으로 값을 넣으며 확인하며 공부하자..
*/

function add(a, b) {
    const sum = a + b;
    return sum;
}

const result = add(1, 2);
console.log(result);

//이제 함수를 인자로 전달하는 것에 대해 알아보자.
/*
    domsomething2 라는 함수는 add라는 함수를 받아올거다.
    function doSomething(add) 이렇게 해주고 일단 
    받아온 add를 출력해보면
    function doSomething(add) {
        console.log(add);
    } 이다.

    그리고 저 doSomething2을 호출할땐 인자로 add라는 함수를 전달!
    doSomething2(add);  이렇게 add라는 함수의 이름만 전달해.
    그럼 이 add(a, b) 이 함수 자체가 전달이돼.
    이것을 실행하게 되면
    f add(a, b) {
        const sum = a + b;
        return sum;
    }
    이렇게 자체가 실행이돼.

    그런데 많은 사람들이 함수를 전달할때 하는 실수가
    함수를 doSomething2(add()); 이렇게 바로 호출해버리는거야.
    이렇게하면 doSomething2을 호출하기전에
    add()라는 함수가 먼저 호출이 되어지면서
    함수가 호출 되어지고 add의 sum들어간 코드블럭이 실행된 다음에
    리턴에의해 값이 전달된 sum이라는 값이 
    doSomething2으로 돼. 그런데 add()의 ()안에 아무것도
    해주지 않았기 때문에 a와 b에는 아무런값이 
    들어가있지 않아서 숫자가 아닌값을 더하니까 
    Not a Number 인 NaN이 나온다.

    즉, 함수가 수행이 되어지고 더해진값이 전달되면서
    아무런값을 전달하지 않았으니 a와 b는 숫자가 아니라서
    숫자가아닌 값이 전달이 되는거야. 그래서
    add()처럼 괄호 ()를 이용해서 함수를 전달하게 되면
    add(1, 2)로 해주면 이것을 호출한뒤에 호출되어지고나서
    나온 마지막으로 전달된 값이 전달되니까 
    함수를 전달하는것이 아니다!

    호출하고 나서 부르는게 아니라 함수를 전달할때는
    doSomething(add); 이렇게 함수의 이름만
    이용해서 전달해야 된다. 
    
    function doSomething(add) {
        console.log(add);
        const result = add(2, 3); //여기서도 똑같이 괄호 이용해서 호출
        console.log(result);
    }

    여기까지 해주면 5가 나올거야.
*/
function doSomething2(add) {
    console.log(add);
    const result = add(2, 3);
    console.log(result);
}

doSomething2(add);

/*
    선언을 할때는 어떤 값을 전달받아 올건지
    인자들을 정의하고 나서 {}에 코드블럭을 
    작성하게 되는데 선언만 해놓으면 
    우리가 작성한 코드블럭은 수행되지 않아

    우리가 정의한 선언한 함수를 수행하기 위해서는 
    doSomething2(add);처럼 함수를 호출해야한다.

    함수를 호출하기 위해서는 함수 이름 옆에 괄호()를
    이용해서 함수에서 원하는 정의된 인자값들을 
    전달하면서 호출해야한다.

    함수의 이름자체는 함수를 가리키는 함수 자체가 된다.
    그래서 ()를 쓰지않고 함수 이름만 다른함수의
    인자로 전달하던지 다른변수에 할당하게 되면
    함수 자체를 가리키게 되는것이다!

    그래서 여기서 const addFun = add; 이렇게
    addFun이라는 상수변수에다가 add라는 함수이름만
    할당하게 되면 addFun은 함수 자체만 가리키고 있다.
    console.log(addFun); 하면 
    f add(a, b) {
        const sum = a + b;
        return sum;
    }
    이렇게 함수 자체가 나온다. 함수 이름만 썼기 때문이다.
    
    그래서 얘를 호출하고 싶다면 다시
    addFun(1, 2); //add라는 함수는 a,b두가지 인자를 받아오니까 1,2라는 값을이용해 호출했음.

    즉, 호출할땐 항상 괄호를 써야한다.
    괄호를 쓰지않고 함수이름만 어디에 할당하거나 전달하면
    함수 자체를 전달하는거다.

    그리고 함수를 호출할때는 함수마다 정의된 인자값들을
    정확하게 전달해 줘야한다. 




*/


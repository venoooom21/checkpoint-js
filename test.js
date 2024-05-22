function rev (a){
    let result=a.split("");
    let result2=result.reverse();
    let result3=result2.join();
    return result3;
}
console.log(rev("hello"));

function count(b){
    let c=b.length;
    return c;
}
console.log(count("nour"));

function cap(d){
    let first=d.charAt(0);
    let second =first.toUpperCase();
    let third= d.slice(1);
    let fourth=second+third;
    return fourth;
}
console.log(cap("hello"));

function max(x) {
    let l=x.length;
    let m=x[0];
    for (let i=1 ; i<l ; i++){
        if (x[i]>m){
            m=x[i];
        }
    }
    return m;
}
console.log(max([1,2,6,4]));

function min(z){
    let o=z.length;
    let n=z[0];
    for (let j=1; j<o ;j++){
        if (z[j]<n){
            n=z[j];
        }
    }
    return n;
}
console.log(min([1,2,7,3,0]));


function sum(e){
    let x=0;
    let l=e.length;
    for(i=0;i<l;i++){
        x=x+e[i];
    }
    return x;
}
console.log(sum([1,2,3,4,5]));

function filter(f){
    let l=f.length;
    let g=[];
    for(let i=0;i<l;i++){
        if (f[i]%2==0){
            g.push(f[i]);
        }
    }
    return g;
}
console.log(filter([1,2,3,4,5,6]));

function factorial(g){
    let x=1;
    for(let i=1;i<=g;i++){
        x=i*x;
    }
    return x;
}
console.log(factorial(6));

function Fibonacci (n){
    let x=[0,1];
    for (let i=2;i<n;i++){
        x.push(x[i-1]+x[i-2]);
    }
    return x;
}
console.log(Fibonacci(5));
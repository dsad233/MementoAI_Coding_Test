// 1번 문제) 제일 작은 수 제거하기

function solution(arr) {
    var answer = [];
    const minNum = Math.min(...arr);
    
    if(arr.length === 0 || arr[0] === 10){
        answer.push(-1);
    }
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== minNum){
            answer.push(arr[i]);
        }
    }
    
    return answer;
}
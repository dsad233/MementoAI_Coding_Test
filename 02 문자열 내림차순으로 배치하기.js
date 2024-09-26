// 2번 문제) 문자열 내림차순으로 배치하기

function solution(s) {
    var answer = '';
    let upString = '';
    const split = s.split('').sort((a, b) => b.localeCompare(a));
    
    for(let i = 0; i < split.length; i++){
        if(split[i].toUpperCase() !== split[i]){
            answer += split[i];
        } else {
            upString += split[i];
        }
    }
    
    answer += upString;
    
    return answer;
}
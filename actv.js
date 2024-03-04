function nextPage(){
    window.location.href = "ques.html";
}

function resultPage(){
    window.location.href = "result.html";
}


function questionList(){

    var ynHTML = document.getElementById("question");
    ynHTML.innerHTML = "";

    var q1HTML = '<div class="qAns">';
    for (var i = 0; i < 10; i ++){
        q1HTML += 'Câu ' + ( i + 1) + ':<br><input type="radio" name="ynAns" value = "Yes">Yes<input type="radio" name="ynAns" value = "No">No<br>';
    }
    q1HTML += '</div>';
    ynHTML.innerHTML += q1HTML;

    var q2HTML = '<div class="qAns">';
    for (var i = 10; i < 20; i ++){
        q2HTML += 'Câu ' + ( i + 1) + ':<br><select name = "options"><option value = "1">Đáp án 1</option><option value = "2">Đáp án 2</option><option value = "3">Đáp án 3</option><option value = "4">Đáp án 4</option></select><br>';
    }
    q2HTML += '</div>';
    ynHTML.innerHTML += q2HTML;

    var q3HTML = '<div class="qAns">';
    for (var i = 20; i < 30; i ++){
        q3HTML += 'Câu ' + ( i + 1) + ':<br><input type="checkbox" name="mulas">Đáp án 1<input type="checkbox" name="mulas">Đáp án 2<input type="checkbox" name="mulas">Đáp án 3<input type="checkbox" name="mulas">Đáp án 4<br>';
    }
    q3HTML += '</div>';
    ynHTML.innerHTML += q3HTML;

    var q4HTML = '<div class="qAns">';
    for (var i = 30; i < 40; i++){
        q4HTML += 'Câu ' + (i + 1) + ': <br><textarea></textarea><br>';
    }
    q4HTML += '</div>';
    ynHTML.innerHTML += q4HTML;
    
}

let cnt = 0;

function resultMark(){
    const ans = document.querySelectorAll('input type="radio"]');
    ans.forEach(an => {
        an.addEventListener('change', function(){
            let cc = 0;
            ans.forEach(a => {
                if (a.checked) cc ++;
            });
            cnt ++;
        });
    });
    const rs = document.getElementById("result-mark");
    rs.textContent = "Số câu đã trả lời: " + cnt;
}

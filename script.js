console.log("Скрипт запущен.");

let INTERVAL;

function random(m, n){
    return Math.floor(Math.random() * (n - m + 1)) + m;
}

function createArray(length, m, n){
    let arr = [];
    for(let i=0; i<=length; i++){
        arr.push(random(m, n));
    }
    return arr;
}

function createElementsFromArr(cont, arr){
    const container = document.querySelector(cont);
    let posX = 0;
    arr.forEach(el => {
        //debugger;
        let div = document.createElement('div');
        div.classList.add('sort_el');
        div.style.height = `${el}px`;
        div.style.width = '30px';
        div.style.left = `${posX}px`;
        div.style.border = '1px solid black';
        posX += 33;
        container.append(div);
    });
}

function sortBooble(){
         let elements = document.querySelectorAll('.sort_el');
         console.log("Сортировка начата");
        
                let j=0,
                    length = elements.length;
                    l=0;

                iteration();

                   
                function iteration(){
                    try{
                        let el1 = elements[j],
                            el2 = elements[j+1];
                        el1.style.backgroundColor = 'red';
                        let el1StartPos = el1.offsetLeft,
                            el2StartPos = el2.offsetLeft;
                        if(el1.offsetHeight > el2.offsetHeight){
                            el2.after(el1);
                            INTERVAL = setInterval(() => {
                                if(el1.offsetLeft < el2StartPos) el1.style.left = `${el1.offsetLeft + 1}px`;
                                if(el2.offsetLeft >= el1StartPos) el2.style.left = `${el2.offsetLeft - 5}px`;
                                if(el1.offsetLeft == el2StartPos && el2.offsetLeft == el1StartPos){
                                    clearInterval(INTERVAL);
                                    elements = document.querySelectorAll('.sort_el');
                                    j++;
                                    l++;
                                    if(j+1 < elements.length){
                                        iteration();
                                    }else{
                                        el1.style.backgroundColor = 'green';
                                        j = 0;
                                        iteration();
                                    }
                                }
                            }, 20);
                        }else{
                            el1.style.backgroundColor = 'green';
                            j++;
                            if(j+1 < elements.length){
                                iteration();
                            }else{
                                j = 0;
                                iteration();
                            }
                        }
                    }catch(err){
                        console.log("Сортировка завершена.");
                    }
                    
                }
}

let sortArr = createArray(50, 0, 500);

document.querySelector('#click').addEventListener('click', sortBooble);

createElementsFromArr('.container', sortArr);




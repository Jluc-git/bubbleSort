console.log("Скрипт запущен.");

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
        posX += 32;
        container.append(div);
    });
}

function sortBooble(){
    let elements = document.querySelectorAll('.sort_el');
    //debugger;
    for(let i=0; i<elements.length; i++){
        for(let j=0; j<elements.length-1; j++){
            
                elements[j].style.backgroundColor = 'red';
                if(elements[j].offsetHeight>elements[j+1].offsetHeight){
                    elements[j+1].after(elements[j]);
                    elements[j+1].style.left = elements[j+1].offsetLeft - 34 + "px";
                    elements[j].style.left = elements[j].offsetLeft + 30 + "px";
                    //j++;
                }else{
                    elements[j].style.backgroundColor = 'green';
                    //j++;
                }
                elements = document.querySelectorAll('.sort_el');
           
        }
    
    }
}



let sortArr = createArray(50, 0, 500);

document.querySelector('#click').addEventListener('click', sortBooble);

createElementsFromArr('.container', sortArr);




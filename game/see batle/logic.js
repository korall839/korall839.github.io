const all_3d= document.querySelector('.in-3d');

if (all_3d) {
let i=0

    all_3d.addEventListener('click',() => {
        if (i == 0) {
            all_3d.style.transform='rotateX(-3deg) rotateY(3deg)';
            i=1
        }
        else {
            if (i == 1){
                all_3d.style.transform='rotateX(-3deg) rotateY(0deg)';
                i=2
            }
            else {
                if (i == 2){
                    all_3d.style.transform='rotateX(3deg) rotateY(3deg)';
                    i=3
                }
                else {
                    all_3d.style.transform='';
                    i=0
                }
            }
        }
    });
}

function a() {
    const pp1=document.getElementById("player-1");
    const p1=pp1.getContext('2d');

    p1.strokeStyle="#a0a0a0";
    p1.lineWidth = 2;

    p1.beginPath();

    p1.moveTo(0,300);
    p1.lineTo(300,300);

    p1.stroke();

    p1.moveTo(0,0);
    p1.lineTo(300,0);

    p1.stroke();

    p1.moveTo(0,300);
    p1.lineTo(0,0);

    p1.stroke();

    p1.moveTo(300,300);
    p1.lineTo(300,0);

    p1.stroke();
    /* */
    p1.beginPath();

    p1.moveTo(0,270);
    p1.lineTo(300,270);

    p1.stroke();

    p1.moveTo(0,30);
    p1.lineTo(300,30);

    p1.stroke();

    p1.moveTo(30,300);
    p1.lineTo(30,0);

    p1.stroke();

    p1.moveTo(270,300);
    p1.lineTo(270,0);

    p1.stroke();
    /* */
    p1.beginPath();

    p1.moveTo(0,240);
    p1.lineTo(300,240);

    p1.stroke();

    p1.moveTo(0,60);
    p1.lineTo(300,60);

    p1.stroke();

    p1.moveTo(60,300);
    p1.lineTo(60,0);

    p1.stroke();

    p1.moveTo(240,300);
    p1.lineTo(240,0);

    p1.stroke();
    /* */
    p1.beginPath();

    p1.moveTo(0,210);
    p1.lineTo(300,210);

    p1.stroke();

    p1.moveTo(0,90);
    p1.lineTo(300,90);

    p1.stroke();

    p1.moveTo(90,300);
    p1.lineTo(90,0);

    p1.stroke();

    p1.moveTo(210,300);
    p1.lineTo(210,0);

    p1.stroke();
    /* */
    p1.beginPath();

    p1.moveTo(0,180);
    p1.lineTo(300,180);

    p1.stroke();

    p1.moveTo(0,120);
    p1.lineTo(300,120);

    p1.stroke();

    p1.moveTo(120,300);
    p1.lineTo(120,0);

    p1.stroke();

    p1.moveTo(180,300);
    p1.lineTo(180,0);

    p1.stroke();
    /* */
    p1.beginPath();

    p1.moveTo(0,150);
    p1.lineTo(300,150);

    p1.stroke();

    p1.moveTo(150,0);
    p1.lineTo(150,300);

    p1.stroke();

    const pp2=document.getElementById("player-2");
    const p2=pp2.getContext("2d");


    p2.strokeStyle="#a0a0a0";
    p2.lineWidth = 2;

    p2.beginPath();

    p2.moveTo(0,300);
    p2.lineTo(300,300);

    p2.stroke();

    p2.moveTo(0,0);
    p2.lineTo(300,0);

    p2.stroke();

    p2.moveTo(0,300);
    p2.lineTo(0,0);

    p2.stroke();

    p2.moveTo(300,300);
    p2.lineTo(300,0);

    p2.stroke();
    /* */
    p2.beginPath();

    p2.moveTo(0,270);
    p2.lineTo(300,270);

    p2.stroke();

    p2.moveTo(0,30);
    p2.lineTo(300,30);

    p2.stroke();

    p2.moveTo(30,300);
    p2.lineTo(30,0);

    p2.stroke();

    p2.moveTo(270,300);
    p2.lineTo(270,0);

    p2.stroke();
    /* */
    p2.beginPath();

    p2.moveTo(0,240);
    p2.lineTo(300,240);

    p2.stroke();

    p2.moveTo(0,60);
    p2.lineTo(300,60);

    p2.stroke();

    p2.moveTo(60,300);
    p2.lineTo(60,0);

    p2.stroke();

    p2.moveTo(240,300);
    p2.lineTo(240,0);

    p2.stroke();
    /* */
    p2.beginPath();

    p2.moveTo(0,210);
    p2.lineTo(300,210);

    p2.stroke();

    p2.moveTo(0,90);
    p2.lineTo(300,90);

    p2.stroke();

    p2.moveTo(90,300);
    p2.lineTo(90,0);

    p2.stroke();

    p2.moveTo(210,300);
    p2.lineTo(210,0);

    p2.stroke();
    /* */
    p2.beginPath();

    p2.moveTo(0,180);
    p2.lineTo(300,180);

    p2.stroke();

    p2.moveTo(0,120);
    p2.lineTo(300,120);

    p2.stroke();

    p2.moveTo(120,300);
    p2.lineTo(120,0);

    p2.stroke();

    p2.moveTo(180,300);
    p2.lineTo(180,0);

    p2.stroke();
    /* */
    p2.beginPath();

    p2.moveTo(0,150);
    p2.lineTo(300,150);

    p2.stroke();

    p2.moveTo(150,0);
    p2.lineTo(150,300);

    p2.stroke();
};

a();

const k = document.querySelectorAll(".k");
let ky=null;
let x_k=0;
let y_k=0;

k.forEach(k1 => {
    k1.addEventListener('pointerdown', (e) =>{
        ky=k1;
        x_k=e.clientX;
        y_k=e.clientY;
    });
    k1.addEventListener('pointermove',(e) =>{
        if (ky!=k1) {
            return
        }

        k1.style.left=(k1.offsetLeft + (e.clientX-x_k))+"px";
        k1.style.top=(k1.offsetTop + (e.clientY-y_k))+"px";

        x_k=e.clientX;
        y_k=e.clientY;
    });

    k1.addEventListener('pointerup',(e) => {
        ky=null;
    });
});

const p1r=document.getElementById("p1r");

p1r.addEventListener('click',() =>{
    k.forEach(k1 => {
        if (k1.classList.contains("player-1")){
            k1.style.opacity = "0";
            k1.addEventListener('pointerdown', () =>{  
                k1.style.opacity = "1";
            });
        };
    });
});

const p2r=document.getElementById("p2r");

p2r.addEventListener('click',() =>{
    k.forEach(k1 => {
        if (k1.classList.contains("player-2")){
            k1.style.opacity = "0";
            k1.addEventListener('pointerdown', () =>{  
                k1.style.opacity = "1";
            });
        };
    });
});

document.addEventListener('click',(e) =>{
    const p=document.createElement('div');
    p.classList.add("click");
    p.style.left=e.pageX + "px";
    p.style.top=e.pageY + "px";

    document.body.appendChild(p);

    setTimeout(() => p.remove(), 1000)
});
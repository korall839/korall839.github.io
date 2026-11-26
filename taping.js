const text1 = document.querySelectorAll('.tp');

text1.forEach((w) => {
    const element = w.textContent.trim();

    w.textContent = '';

    let i = 0;

    function a() {
        if (i < element.length){
            w.textContent+=element.charAt(i);
            i++;
            setTimeout(a,300);
        }
    }

    a();
});

const text2 = document.querySelectorAll('.ftp');

text2.forEach((w) => {
    const element = w.textContent.trim();

    w.textContent = '';

    let i = 0;

    function a() {
        if (i < element.length){
            w.textContent+=element.charAt(i);
            i++;
            setTimeout(a,40);
        }
    }

    a();
});

const text3 = document.querySelectorAll('.vftp');

text3.forEach((w) => {
    const element = w.textContent.trim();

    w.textContent = '';

    let i = 0;

    function a() {
        if (i < element.length){
            w.textContent+=element.charAt(i);
            i++;
            setTimeout(a,10);
        }
    }

    a();
});


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

document.querySelectorAll("spawn").forEach( (spawn) => {
    setInterval(() => {
        const sn = document.createElement("div");

        sn.textContent=spawn.dataset.text || "";
        sn.className="spawn";

        sn.style.position="fixed";
        sn.style.pointerEvents="none";
        sn.style.left=Math.random() *90 +"vw";
        sn.style.top=Math.random() *90 +"vh";

        document.body.appendChild(sn);
        setTimeout( () => sn.remove(),5000);
    },2000 + (Math.random()*750));
});


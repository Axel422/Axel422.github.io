function entrar(){

    const nombre =
    document.getElementById("nombre")
    .value
    .toLowerCase();

    if(nombre === "Ingrid Mi Amor Hermoso" || nombre === "ingrid mi amor hermoso"){

        gsap.to("#login-screen",{

            opacity:0,

            duration:1,

            onComplete:()=>{

                document
                .getElementById("login-screen")
                .style.display="none";

            }

        });

    }else{

        alert(
            "Mmm... creo que no eres la persona que estoy esperando ❤️"
        );

    }
}
/* CONTADOR AUTOMÁTICO */

const fechaInicio =
new Date("2026-02-14");

const hoy =
new Date();

const diferencia =
hoy - fechaInicio;

const dias =
Math.floor(
diferencia /
(1000 * 60 * 60 * 24)
);

document
.getElementById("dias")
.innerText = dias;


gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-text",{

    y:100,

    opacity:0,

    duration:2

});

gsap.from(".card",{

    scrollTrigger:".gallery",

    y:100,

    opacity:0,

    stagger:0.3

});


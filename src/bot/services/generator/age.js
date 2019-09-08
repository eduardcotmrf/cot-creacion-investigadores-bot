import { rollDice } from '../dices';

function mejorarEDU(investigador) {
    const tirada = rollDice("1D100");
    if (tirada > investigador.caracteristicas.edu) {
        investigador.caracteristicas.edu += rollDice("1D10");
    }
}
export function adaptarEdad(investigador) {
    switch(true) {
        case(investigador.edad < 20):
            investigador.caracteristicas.fue -= 5;
            investigador.caracteristicas.tam -= 5;
            investigador.caracteristicas.edu -= 5;
            break;
        case(investigador.edad < 40):
            mejorarEDU(investigador);
            break;
        case(investigador.edad < 60):
            investigador.caracteristicas.fue -= 3;
            investigador.caracteristicas.con -= 3;
            investigador.caracteristicas.des -= 3;
            investigador.caracteristicas.apa -= 10;
            mejorarEDU(investigador);
            mejorarEDU(investigador);
            mejorarEDU(investigador);
            break;
        case(investigador.edad < 70):
            investigador.caracteristicas.fue -= 6;
            investigador.caracteristicas.con -= 6;
            investigador.caracteristicas.des -= 6;
            investigador.caracteristicas.apa -= 15;
            mejorarEDU(investigador);
            mejorarEDU(investigador);
            mejorarEDU(investigador);
            mejorarEDU(investigador);
            break;
        case(investigador.edad < 80):
            investigador.caracteristicas.fue -= 12;
            investigador.caracteristicas.con -= 12;
            investigador.caracteristicas.des -= 12;
            investigador.caracteristicas.apa -= 20;
            mejorarEDU(investigador);
            mejorarEDU(investigador);
            mejorarEDU(investigador);
            mejorarEDU(investigador);
            break;
        case(investigador.edad < 90):
            investigador.caracteristicas.fue -= 25;
            investigador.caracteristicas.con -= 25;
            investigador.caracteristicas.des -= 25;
            investigador.caracteristicas.apa -= 20;
            mejorarEDU(investigador);
            mejorarEDU(investigador);
            mejorarEDU(investigador);
            mejorarEDU(investigador);
            break;
    }
}
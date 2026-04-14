//Coche
class Coche {
    marca;
    modelo;
    velocidad;
    encendido;
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
        this.encendido = false;
    }
    encender() {
        this.encendido = true;
        console.log("Coche Encendido");
    }
    apagar() {
        this.encendido = false;
        this.velocidad = 0;
        console.log("Coche apagado");
    }
    acelerar(cantidad) {
        if (this.encendido && cantidad > 0) {
            this.velocidad += cantidad
        } else {
            console.log("Coche no puede hacelerar si esta apagado o velocidad inferior a 0")
        }
    }
    frenar(cantidad) {
        if (cantidad < 0) cantidad = 0
        if (cantidad < this.velocidad && this.encendido) {
            this.velocidad -= cantidad
        } else {
            this.velocidad = 0
        }
        console.log(`velocidad actual es = ${this.velocidad} `)
    }
    estado() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Velocidad: ${this.velocidad} km/h, Motor: ${this.encendido}`;
    }
}
const coche1 = new Coche("Toyota", "Corolla")

//Tarjeta de Crédito

class TarjetaCredito {
    #titular
    #saldo
    #limite
    #activa
    constructor(titular, limite) {
        this.#titular = titular;
        this.#saldo = 0;
        this.#limite = limite;
        this.#activa = false;
    }
    activar() {
        this.#activa = true
    }
    desactivar() {
        this.#activa = false
    }
    comprar(cantidad) {
        if (this.#activa && this.#limite >= cantidad + this.#saldo) {
            this.#saldo += cantidad
        }
    }
    pagar(cantidad) {
        if (cantidad >= this.#saldo) this.saldo = 0
        else this.#saldo -= cantidad
    }
    disponible() {
        return this.#limite - this.#saldo
    }
    estado() {
        return `titular: ${this.#titular}, saldo: ${this.#saldo}, limite: ${this.#limite} , activa: ${this.#activa ? 'Sí' : 'No'}`
    }
}

class Poligono {
    #lados;
    #longitudLado;
    #apotema;
    #altura
    constructor(lados, longitudLado, apotema = null, altura = null) {
        if (lados < 3) {
            throw new Error(`¡Imposible! Un polígono necesita al menos 3 lados. Recibí: ${lados}`);
        }

        if (longitudLado <= 0) {
            throw new Error("La longitud del lado debe ser un número positivo");
        }
        if (apotema !== null && apotema <= 0 || altura !== null && altura <= 0) {
            throw new Error("La apotema y altura son opcionales pero si las pones an ser un número positivo");
        }
        this.#lados = lados;
        this.#longitudLado = longitudLado;
        this.#apotema = apotema;
        this.#altura = altura;
    }
    perimetro() {
        return this.#lados * this.#longitudLado
    }
    area() {
        if (this.#apotema !== null) {
            perimetro() * this.#apotema
        } else {
            console.log("no hay apotema")
        }
    }
    tipo() {
        const nombres = {
            3: "Triángulo",
            4: "Cuadrado",
            5: "Pentágono",
            6: "Hexágono",
            7: "Heptágono",
            8: "Octágono",
            9: "Eneágono",
            10: "Decágono",
            11: "Endecágono",
            12: "Dodecágono"
        };

        return nombres[this.lados] || `Polígono de ${this.lados} lados`;
    }


    volumen() {
        if (this.#apotema !== null && this.#altura !== null) {
            area() * this.#altura
        } else {
            console.log("no hay apotema y/o altura")
        }
    }
    resumen() {
        return {
            tipo: this.tipo(),
            lados: this.#lados,
            longitudLado: this.#longitudLado,
            perimetro: this.perimetro(),
            area: this.area(),
            apotema: this.#apotema,
            volumen: this.volumen(),
            altura: this.#altura
        };
    }

}

class Estudiante {
    #nombre
    #notas
    #asistencia
    constructor(nombre, asistencia) {
        if (asistencia < 0 || asistencia > 100) {
            throw new Error(`¡Imposible! asistencia no puede ser inferior a 0% o superior a 100%`);
        }
        this.#nombre = nombre;
        this.#notas = [];
        this.#asistencia = asistencia;
    }
    agregarNota(nota) { 
        if (nota >= 0 && nota <= 10){
            this.#notas.push(nota)
        }
    }
    promedio() {
        let prom = 0
        if(this.#notas.length > 0){
            for(x = 0; x < this.#notas.length; x++){
                prom += x
            }
        }
        return prom
     }
    aprobo() {
        if(this.promedio() >= 5 && this.#asistencia >= 75){
            return true
        } else return false
     }
    mejorNota() {
        for()
     }
    resumen() { }
}
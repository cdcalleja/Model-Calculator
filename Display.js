class Display {
    constructor(DisplayValorAnterior, DisplayValorActual) {
        this.DisplayValorAnterior = DisplayValorAnterior;
        this.DisplayValorActual = DisplayValorActual;
        this.calculadora = new Calculadora();
        this.operador = undefined;
        this.ValorActual = "";
        this.ValorAnterior = "";
        this.signos = {
            sumar: "+",
            restar: "-",
            dividir: "/",
            multiplicar: "*",
            potenciar: "**",
        }
        this.advancedSign = {
            raiz: "√"
        }
    }

    addNumber(numero) {
        if (numero === "." & this.ValorActual.includes(".")) return
        this.ValorActual = this.ValorActual.toString() + numero.toString();
        // si el numero es igual a un punto y ya nuestro valor actual incluye un punto
        // entonces que retorne al valor anterior
        this.printValues();
    }

    printValues() {
        this.DisplayValorActual.textContent = this.ValorActual;
        this.DisplayValorAnterior.textContent = `${this.ValorAnterior} ${this.signos[this.operador] || this.advancedSign[this.operador] || ""}`;
    }

    deleteValue() {
        this.ValorActual = this.ValorActual.toString().slice(0, -1);
        this.printValues();
    }

    deleteAll() {
        this.ValorActual = "";
        this.ValorAnterior = "";
        this.operador = undefined;
        this.printValues();
    }

    computar(tipo) {
        this.operador !== "igual" && this.calcular(this.verificador);
        this.operador = tipo;
        if (this.operador in this.signos) {
            this.operacion = this.signos[this.operador];
            this.verificador = "basic_operar";
        }
        if (this.operador in this.advancedSign) {
            this.operacion = this.operador;
            this.verificador = "advanced_operar";
        }
        this.ValorAnterior = this.ValorActual || this.ValorAnterior;
        this.ValorActual = "";
        this.printValues();
    }

    calcular(valor) {
        this.funcion = valor;
        if ((this.ValorAnterior !== "") && (this.ValorActual !== "")) {
            this.ValorActual = this.calculadora[this.funcion](this.ValorAnterior, this.ValorActual, this.operacion);
        }
    }
}
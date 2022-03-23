class Calculadora {
    basic_operar(num1, num2, operador) {
        this.solucion = (num1 + operador + num2);
        this.numPantalla = eval(this.solucion);
        return this.numPantalla;
    }
    advanced_operar(num1, num2, operador) {
        this.num1 = parseFloat(num1);
        this.num2 = parseFloat(num2);

        switch (operador) {
            // case "raiz":
            //     this.numPantalla = Math.pow(this.num2, 1 / this.num1);
            //     return this.numPantalla;
            //     break;
            case "raiz":
                this.numPantalla = Math.pow(this.num1, 1/this.num2);
                return this.numPantalla;
                break;
        }
    }
}
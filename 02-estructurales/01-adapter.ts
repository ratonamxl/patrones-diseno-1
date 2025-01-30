/**
 * ! Patrón Adapter
 *  Permite que objetos con interfaces incompatibles trabajen juntos, también es muy
 *  util para utilizar librerías de terceros en nuestra aplicación sin depender
 *  directamente de ellas.
 *
 * * Es útil cuando se quiere reutilizar una clase que no tiene la interfaz que
 * * necesitamos o cuando queremos crear una capa de abstracción para una librería
 * * de terceros.
 *
 * https://refactoring.guru/es/design-patterns/adapter
 */

import { COLORS } from "../helpers/colors.ts"
export class LocalLogger {
 constructor (
    private file : string 
    ) {}
        
   writeLog( msg: string ) : void {
    console.log(`[${this.file} Log] %c${msg}`);
   }

   writeError( msg: string ) : void {
    console.log(`[${this.file} error] %c${msg}`,COLORS.red);
   }

   writeWarning( msg: string ) : void {
    console.log(`[${this.file} warning] %c${msg}`,COLORS.yellow);
   }

}
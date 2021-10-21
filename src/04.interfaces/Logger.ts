export class Logger{
    private log(level:string, messaage:unknown){

    }
    info(message: unknown){
        this.log('info',message)
    }
    debug(message: unknown){
        this.log('debug',message)
    }
    error(message: unknown){
        this.log('error',message)
    }
}
/// <reference path="../../typings/q/q.d.ts" />


declare namespace DataBase {

  
    interface Data {
        valid: boolean;
        data?: any;
        list?:Array<any>
    }
    interface Get<T1,T2> extends Function {
        (params:T1):Q.Promise<any>;
    }

    

    interface Auth {    
        login: Get<{ user: string, password:string},any>;
    }
 
    var auth: Auth;
}
declare module "db" {
    export =DataBase;
}

/// <reference path="../../typings/q/q.d.ts" />


declare namespace DataBase {

  
    interface Data {
        valid: boolean;
        data?: any;
        list:Array<any>
    }
    interface Get<T1,T2> extends Function {
        (params:T1):Q.IPromise<T2>;
    }

    

    interface Auth {    
        login: Get<{uname:string,pwd:string},Data>;
    }
 
    var auth: Auth;
}
declare module "db" {
    export =DataBase;
}

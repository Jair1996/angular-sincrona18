"use strict";(self.webpackChunksincrona18=self.webpackChunksincrona18||[]).push([[342],{342:(f,p,o)=>{o.r(p),o.d(p,{UsersModule:()=>u});var l=o(895),i=o(237),e=o(256),m=o(247);const d=function(t){return["/todos",t]};function U(t,s){if(1&t&&(e.TgZ(0,"tr")(1,"th",3),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td")(10,"button",4)(11,"a"),e._uU(12," Ver Todos "),e.qZA()()()()),2&t){const n=s.$implicit,g=s.index;e.xp6(2),e.Oqu(g+1),e.xp6(2),e.Oqu(n.name),e.xp6(2),e.Oqu(n.username),e.xp6(2),e.Oqu(n.email),e.xp6(2),e.Q6J("routerLink",e.VKq(5,d,n.id))}}class c{constructor(s){this.userService=s,this.users=[]}ngOnInit(){this.userService.getUsers().subscribe(s=>{this.users=s})}}c.\u0275fac=function(s){return new(s||c)(e.Y36(m.K))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-users-table"]],decls:15,vars:1,consts:[[1,"table","table-hover"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[1,"btn","btn-warning",3,"routerLink"]],template:function(s,n){1&s&&(e.TgZ(0,"table",0)(1,"thead")(2,"tr")(3,"th",1),e._uU(4,"#"),e.qZA(),e.TgZ(5,"th",1),e._uU(6,"Nombre"),e.qZA(),e.TgZ(7,"th",1),e._uU(8,"Username"),e.qZA(),e.TgZ(9,"th",1),e._uU(10,"Email"),e.qZA(),e.TgZ(11,"th",1),e._uU(12,"Acciones"),e.qZA()()(),e.TgZ(13,"tbody"),e.YNc(14,U,13,7,"tr",2),e.qZA()()),2&s&&(e.xp6(14),e.Q6J("ngForOf",n.users))},dependencies:[l.sg,i.rH],encapsulation:2});class a{}a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-users-list"]],decls:3,vars:0,consts:[[1,"text-center","mb-5"]],template:function(s,n){1&s&&(e.TgZ(0,"h1",0),e._uU(1,"Lista de usuarios"),e.qZA(),e._UZ(2,"app-users-table"))},dependencies:[c],encapsulation:2});const Z=[{path:"",children:[{path:"",component:a}]}];class r{}r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[i.Bz.forChild(Z),i.Bz]});class u{}u.\u0275fac=function(s){return new(s||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[l.ez,r]})}}]);
"use strict";(self.webpackChunksincrona18=self.webpackChunksincrona18||[]).push([[698],{312:(g,l,o)=>{o.r(l),o.d(l,{UsersModule:()=>u});var d=o(895),p=o(237),e=o(256),m=o(529);class r{constructor(t){this.http=t,this.url="https://jsonplaceholder.typicode.com/users"}getUsers(){return this.http.get(this.url)}}r.\u0275fac=function(t){return new(t||r)(e.LFG(m.eN))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"});const h=function(s){return["/todos",s]};function U(s,t){if(1&s&&(e.TgZ(0,"tr")(1,"th",3),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td")(10,"button",4)(11,"a"),e._uU(12," Ver Todos "),e.qZA()()()()),2&s){const n=t.$implicit,f=t.index;e.xp6(2),e.Oqu(f+1),e.xp6(2),e.Oqu(n.name),e.xp6(2),e.Oqu(n.username),e.xp6(2),e.Oqu(n.email),e.xp6(2),e.Q6J("routerLink",e.VKq(5,h,n.id))}}class i{constructor(t){this.userService=t,this.users=[]}ngOnInit(){this.userService.getUsers().subscribe(t=>{this.users=t})}}i.\u0275fac=function(t){return new(t||i)(e.Y36(r))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-users-table"]],decls:15,vars:1,consts:[[1,"table","table-hover"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[1,"btn","btn-warning",3,"routerLink"]],template:function(t,n){1&t&&(e.TgZ(0,"table",0)(1,"thead")(2,"tr")(3,"th",1),e._uU(4,"#"),e.qZA(),e.TgZ(5,"th",1),e._uU(6,"Nombre"),e.qZA(),e.TgZ(7,"th",1),e._uU(8,"Username"),e.qZA(),e.TgZ(9,"th",1),e._uU(10,"Email"),e.qZA(),e.TgZ(11,"th",1),e._uU(12,"Acciones"),e.qZA()()(),e.TgZ(13,"tbody"),e.YNc(14,U,13,7,"tr",2),e.qZA()()),2&t&&(e.xp6(14),e.Q6J("ngForOf",n.users))},dependencies:[d.sg,p.rH],encapsulation:2});class a{}a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-users-list"]],decls:3,vars:0,consts:[[1,"text-center","mb-5"]],template:function(t,n){1&t&&(e.TgZ(0,"h1",0),e._uU(1,"Lista de usuarios"),e.qZA(),e._UZ(2,"app-users-table"))},dependencies:[i],encapsulation:2});const Z=[{path:"",children:[{path:"",component:a}]}];class c{}c.\u0275fac=function(t){return new(t||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[p.Bz.forChild(Z),p.Bz]});class u{}u.\u0275fac=function(t){return new(t||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[d.ez,c]})}}]);
import { Component, OnInit } from '@angular/core';
import { HttpclientService } from 'src/app/service/httpclient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { RouterConfigLoader } from '@angular/router/src/router_config_loader';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
id:any;
  constructor(
    private httpclientService: HttpclientService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  delete(){
    this.httpclientService.deleteEmpById(this.id)
    .subscribe(()=>console.log(this.id));
    alert("delete is succesful: "+this.id);
    this.router.navigate(['',]);

  }
}

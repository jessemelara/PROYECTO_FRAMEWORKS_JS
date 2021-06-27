import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  @Input() article!: Article;
  public url!: string;

  constructor(
    private articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this.articleService.getArticle(id).subscribe(
        response => {
          if(response.article){
            this.article = response.article;
          }else {
            this._router.navigate(['/home']);
          };
          console.log(response);
        },
        error => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      );
    });
  }

  delete(id:string){
    //Alerta
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-accept',
        cancelButton: 'btn btn-warning'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro que quieres eliminar este artículo?',
      text: "¡No podrás revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Sí, elimínalo!',
      cancelButtonText: '¡No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.articleService.delete(id).subscribe(
          response => {
            this._router.navigate(['/blog']);
            swalWithBootstrapButtons.fire(
              '¡Eliminado!',
              'El artículo ha sido eliminado.',
              'success'
            );
          },
          error => {
            this._router.navigate(['/blog']);
            console.log(error);
          }
        );
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        this._router.navigate(['/blog/article', this.article._id]);
        swalWithBootstrapButtons.fire(
          'Acción cancelada',
          '¡El artículo está a salvo!',
          'info'
        );
      }
    });
  }

}

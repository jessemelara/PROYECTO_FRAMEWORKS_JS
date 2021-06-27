import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-create/article-create.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {
  public pageTitle!: string;
  public article!: Article;
  public status!: string;
  public is_edit!: boolean;
  public url!: string;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg, .png, .gif, .jpeg",
    maxSize: 100,
    uploadAPI: {
      url: Global.url + 'upload-image'
    },
    theme: "attachPin",
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube una imagen para el artículo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };

  constructor(
    private articleService: ArticleService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.pageTitle = "Editar artículo";
    this.article = new Article('', '', '', '', null);
    this.is_edit = true;
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getArticle();
  }

  onArticle(articleForm: any) {
    if (articleForm.form.valid) {
      console.log(this.article);
      //Alerta
      Swal.fire({
        title: '¿Desea guardar los cambios realizados?',
        showDenyButton: true,
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: `Guardar`,
        denyButtonText: `No Guardar`,
      }).then((result) => {
        if (result.isConfirmed) {
          this.articleService.update(this.article._id, this.article).subscribe(
            response => {
              if (response.status == 'success') {
                this.status = 'success';
                this.article = response.article;
                console.log(response);
                this._router.navigate(['/blog/article', this.article._id]);
                Swal.fire('Los cambios se han realizado satisfactoriamente', '', 'success');
              } else {
                this.status = 'error';
              }
            },
            error => {
              console.log(error);
              this.status = 'error'
            }
          )
        } else if (result.isDenied) {
          this._router.navigate(['/blog/edit', this.article._id]);
          Swal.fire('Los cambios en el artículo aún no han sido guardados', '', 'info');
        }
      });
    }else{
      articleForm.form.markAllAsTouched();
    }

  }

  imageUpload(data:any) {
    this.article.image = data.body.image;
    console.log(this.article.image);
  }

  getArticle(){
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
}

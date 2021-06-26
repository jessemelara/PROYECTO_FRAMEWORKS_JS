import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css'],
  providers: [ArticleService]
})
export class ArticleCreateComponent implements OnInit {
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
    this.pageTitle = "Crear artículo";
    this.article = new Article('', '', '', '', null);
    this.is_edit = false;
    this.url = Global.url;
  }

  ngOnInit(): void {
  }

  onArticle(articleForm: any) {
    if (articleForm.form.valid) {
      console.log(this.article);

      this.articleService.createArticle(this.article).subscribe(
        response => {
          if (response.status == 'success') {
            //Alerta
            Swal.fire({
              title: '¿Desea guardar el nuevo artículo creado?',
              showDenyButton: true,
              showCancelButton: true,
              cancelButtonText: `Cancelar`,
              confirmButtonText: `Guardar`,
              denyButtonText: `No Guardar`,
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                Swal.fire('Artículo creado satisfactoriamente', '', 'success');
                this.status = 'success';
                this.article = response.article;
                console.log(response);
                this._router.navigate(['/blog']);
              } else if (result.isDenied) {
                Swal.fire('El artículo aún no ha sido creado', '', 'error');
                this.status = 'error';
                this._router.navigate(['/blog/create']);
              }
            });
          } else {
            this.status = 'error';
          }
        },
        error => {
          console.log(error);
          this.status = 'error'
        }
      )
    }else{
      articleForm.form.markAllAsTouched();
    }

  }

  imageUpload(data:any) {
    this.article.image = data.body.image;
    console.log(this.article.image);
  }

}

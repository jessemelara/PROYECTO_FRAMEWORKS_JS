//Importar los modulos del router de Angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Importar componentes que seran parte de la pagina web
import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { Pagina1Component } from "./components/pagina1/pagina1.component";
import { Pagina2Component } from "./components/pagina2/pagina2.component";
import { ErrorComponent } from "./components/error/error.component";
import { ArticleComponent } from "./components/article/article.component";
import { SearchComponent } from "./components/search/search.component";
import { ArticleCreateComponent } from "./components/article-create/article-create.component";
import { ArticleEditComponent } from "./components/article-edit/article-edit.component";

//Array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/article/:id', component: ArticleComponent},
    {path: 'blog/create', component: ArticleCreateComponent},
    {path: 'blog/edit/:id', component: ArticleEditComponent},
    {path: 'search/:search', component: SearchComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'pagina1', component: Pagina1Component},
    {path: 'pagina1/:nombre/:apellidos', component: Pagina1Component},
    {path: 'pagina2', component: Pagina2Component},
    {path: '**', component: ErrorComponent}
];

//Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);
<template>
    <header id="header">
            <div class="center">    
                <!--Logo-->
                <div id="logo">
                    <img src="../assets/images/vue.svg" class="app-logo" alt="Logotipo">
                    <span id="brand">
                        <strong>Master</strong> VueJS
                    </span>
                </div>
                <!--Menu-->
                <nav id="menu">
                    <ul>
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="formulario.html">Formulario</a></li>
                        <li><a href="#">Pagina 1</a></li>
                        <li><a href="#">Pagina 2</a></li>
                    </ul>
                </nav>

                <!--Limpiar flotados-->
                <div class="clearfix"></div>
            </div>
        </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>
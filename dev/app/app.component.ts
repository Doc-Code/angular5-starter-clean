import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <header class="app-header navbar">
            <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler sidebar-toggler d-md-down-none h-100 b-r-1 px-3" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            <ul class="nav navbar-nav d-md-down-none mr-auto">

            </ul>
        </header>
        <div class="app-body">
            <div class="sidebar">
                <nav class="sidebar-nav">
                    <ul class="nav">
                        <li class="nav-title text-center">
                            <span>Dashboard</span>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="index.html"><i class="icon-speedometer"></i> Dashboard <span class="badge badge-info">NEW</span></a>
                        </li>

                    </ul>
                </nav>
                <button class="sidebar-minimizer brand-minimizer" type="button"></button>
            </div>
            <!-- Main content -->
            <main class="main">

                <div class="container-fluid">
<ul>
<li>asdasdas</li>
<li>asdasdas</li>
<li>asdasdas</li>
<li>asdasdas</li>
<li>asdasdas</li>
<li>asdasdas</li>
<li>asdasdas</li>
<li>asdasdas</li>
<li>asdasdas</li>
<li>asdasdas</li>
</ul>
                </div>
                <!-- /.conainer-fluid -->
            </main>

        </div>
     
    `
})
export class AppComponent {
    name= '';
}
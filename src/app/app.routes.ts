import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { AboutPage } from './pages/about/about.page';
import { ProductPage } from './pages/product/product.page';
import { ServicePage } from './pages/service/service.page';
import { PortfolioPage } from './pages/portfolio/portfolio.page';
import { BlogPage } from './pages/blog/blog.page';
import { PostPage } from './pages/post/post.page';
import { ContactPage } from './pages/contact/contact.page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'about',
        component: AboutPage
    },
    {
        path: 'product',
        component: ProductPage
    },
    {
        path: 'service',
        component: ServicePage
    },
    {
        path: 'portfolio',
        component: PortfolioPage
    },
    {
        path: 'blog',
        component: BlogPage
    },
    {
        path: 'post/:id',
        component: PostPage
    },
    {
        path: 'contact',
        component: ContactPage
    }
];

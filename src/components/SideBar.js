import React from 'react';
import image from '../assets/images/LogoCafe.png';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GrindingsInDb';
import LastMovieInDb from './LastProductInDb';
import ContentRowMovies from './ContentRowMovies';
import SearchMovies from './SearchProducts';
import NotFound from './NotFound';
import { Link, Route, Switch } from 'react-router-dom';

function SideBar() {
    return (
        <React.Fragment>

            <ul className="navbar-nav bg-gradient-warning sidebar sidebar-dark accordion" id="accordionSidebar">
                <br></br>
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-50" src={image} alt="Digital House" />
                    </div>
                </a>
                <br></br>
                <hr className="sidebar-divider my-0" />

                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt text-dark"></i>
                        <span className='text-dark'>Dashboard - Blended Cafe</span></Link>
                </li>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading text-dark">Actions</div>

                <li className="nav-item">
                    <Link className="nav-link" to="/GenresInDb">
                        <i className="fas fa-fw fa-folder text-dark"></i>
                        <span className='text-dark'>Pages</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area text-dark"></i>
                        <span className='text-dark'>Charts</span></Link>
                </li>

                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/ContentRowMovies">
                        <i className="fas fa-fw fa-table text-dark"></i>
                        <span className='text-dark'>Tables</span></Link>
                </li>

                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/SearchMovies">
                        <i className="fas fa-search text-dark"></i>
                        <span className='text-dark'>Search a product</span>
                    </Link>
                </li>

                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/GenresInDb">
                    <GenresInDb />
                </Route>
                <Route path="/LastMovieInDb">
                    <LastMovieInDb />
                </Route>
                <Route path="/ContentRowMovies">
                    <ContentRowMovies />
                </Route>
                <Route path="/SearchMovies">
                    <SearchMovies />
                </Route>
                <Route component={NotFound} />
            </Switch>
        </React.Fragment>
    )
}
export default SideBar;
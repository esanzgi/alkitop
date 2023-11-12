import ALKITOP_LOGO from '../assets/images/alkitop_logo.png';

export function Header() {
  return (
    <nav className="navbar">

      <a className="navbar-brand me-0 d-flex align-items-center" href="#">
        <img src={ALKITOP_LOGO} alt="alkitop-logo" style={{ width: "80px" }} />
        <span className="d-none d-md-inline text-success fs-4">Alkitop</span>
      </a>

      <form className="col d-flex mx-3">
        <div className='input-group'>
          <input className="form-control rounded-end rounded-pill" type="search" placeholder="Buscar" aria-label="Search" />
          <button className="btn btn-outline-success px-4 rounded-start rounded-pill" type="submit">
            <i className='fa fa-search'></i>
          </button>
        </div>
      </form>
      <button className="btn btn-success rounded-pill" type="button">Sign in</button>
      <a className='d-none d-md-block btn btn-outline-success ms-2 rounded-pill' href="#">
        <i className='fa fa-plus me-2'></i>
        Subir producto
      </a>
    </nav>
  );
}

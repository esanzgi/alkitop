export function Footer () {
  return (
    <>
      <footer className='py-4 '>
        <div className='row'>
          <div className='col-6 col-md-2 mb-3 justify-content-center'>
            <h5>Section</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Home</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Features</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Pricing</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>FAQs</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>About</a></li>
            </ul>
          </div>

          <div className='col-6 col-md-2 mb-3'>
            <h5>Section</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Home</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Features</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Pricing</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>FAQs</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>About</a></li>
            </ul>
          </div>

          <div className='col-6 col-md-2 mb-3'>
            <h5>Section</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Home</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Features</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>Pricing</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>FAQs</a></li>
              <li className='nav-item mb-2'><a href='#' className='nav-link p-0 text-muted'>About</a></li>
            </ul>
          </div>

          <div className='col-md-5 offset-md-1 mb-3 '>
            <form>
              <h5>Contacta con nosotros!</h5>
              <p>Cualquier duda que tenga, no dude en contactarnos.</p>
              <div className='d-flex flex-column flex-sm-row w-100 gap-2'>
                <label htmlFor='newsletter1' className='visually-hidden'>Correo electrónico</label>
                <input id='newsletter1' type='email' className='form-control' placeholder='Correo electrónico' />
                <label htmlFor='newsletter2' className='visually-hidden'>Email address</label>
                <input id='newsletter2' type='text' className='form-control' placeholder='Nombre y Apellidos' />
              </div>
              <div className='form-floating my-2'>
                <textarea className='form-control' id='floatingTextarea2' placeholder='Comentario' />
                <label htmlFor='floatingTextarea2'>Comentario</label>
              </div>
              <button className='btn btn-success px-4' type='submit'>Enviar</button>
            </form>
          </div>
        </div>

        <div className='d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top'>
          <p>© 2023 Alkitop, Inc. All rights reserved.</p>
          <ul className='list-unstyled d-flex '>
            <li className='ms-3'><a className='link-dark' href='#'><i className='fs-4 fa fa-github'> </i></a></li>
            <li className='ms-3'><a className='link-dark' href='#'><i className='fs-4 fa fa-twitter' /></a></li>
            <li className='ms-3'><a className='link-dark' href='#'><i className='fs-4 fa fa-facebook' /></a></li>
            <li className='ms-3'><a className='link-dark' href='#'><i className='fs-4 fa fa-linkedin' /></a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}
